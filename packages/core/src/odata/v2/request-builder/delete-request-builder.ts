import { errorWithCause } from '@sap-cloud-sdk/util';
import { Constructable, EntityIdentifiable, FieldType } from '../../common';
import { MethodRequestBuilderBase } from '../../common/request-builder/request-builder-base';
import { ODataDeleteRequestConfig } from '../../common/request/odata-delete-request-config';
import { EntityV2 } from '../entity';
import { DestinationOptions } from '../../../scp-cf';
import {
  Destination,
  DestinationNameAndJwt
} from '../../../scp-cf/destination/destination-service-types';
import { oDataUriV2 } from '../uri-conversion';
/**
 * Create OData query to delete an entity.
 *
 * @typeparam EntityT - Type of the entity to be deleted
 */
export class DeleteRequestBuilderV2<EntityT extends EntityV2>
  extends MethodRequestBuilderBase<ODataDeleteRequestConfig<EntityT>>
  implements EntityIdentifiable<EntityT> {
  readonly _entityConstructor: Constructable<EntityT>;
  readonly _entity: EntityT;

  /**
   * Creates an instance of DeleteRequestBuilder. If the entity is passed, version identifier will also be added.
   *
   * @param entityConstructor - Constructor type of the entity to be deleted
   * @param keysOrEntity - Entity or Key-value pairs of key properties for the given entity
   */
  constructor(
    entityConstructor: Constructable<EntityT>,
    keysOrEntity: Record<string, FieldType> | EntityV2
  ) {
    super(new ODataDeleteRequestConfig(entityConstructor, oDataUriV2));
    this._entityConstructor = entityConstructor;

    if (keysOrEntity instanceof EntityV2) {
      this.requestConfig.keys = oDataUriV2.getEntityKeys(
        keysOrEntity,
        entityConstructor
      );
      this.setVersionIdentifier(keysOrEntity.versionIdentifier);
    } else {
      this.requestConfig.keys = keysOrEntity;
    }
  }

  /**
   * Add an eTag version identifier in the delete request header.
   *
   * @param eTag - The version identifier of the entity
   * @returns The builder itself, to facilitate method chaining
   */
  setVersionIdentifier(eTag: string): this {
    this.requestConfig.eTag = eTag;
    return this;
  }

  /**
   * Instructs the request to force an overwrite of the entity by sending an 'If-Match: *' header instead of sending the ETag version identifier.
   *
   * @returns this The request itself to ease chaining while executing the request
   */
  ignoreVersionIdentifier(): this {
    this.requestConfig.versionIdentifierIgnored = true;
    return this;
  }

  /**
   * Execute query.
   *
   * @param destination - Destination to execute the request against
   * @param options - Options to employ when fetching destinations
   * @returns A promise resolving once the entity was deleted
   */
  async execute(
    destination: Destination | DestinationNameAndJwt,
    options?: DestinationOptions
  ): Promise<void> {
    return this.build(destination, options)
      .then(request => request.execute())
      .then(() => Promise.resolve())
      .catch(error =>
        Promise.reject(errorWithCause('OData delete request failed!', error))
      );
  }
}

export { DeleteRequestBuilderV2 as DeleteRequestBuilder };
