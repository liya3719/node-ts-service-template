import { Container, Service, Inject } from 'typedi';
import { IDataAccess } from '../interface/dataAccess/IDataAccess';
// 引入接口
import { IIndexInterface } from '../interface/services/IindexInterface';
// 引入service

// 引入数据实体

// 引入执行SQL
import { IndexSql } from '../sqlManage/IndexUploadSql';

@Service('IndexService')
/**
 * 首页service
 * @class
 * @implements IIndexUploadService
 */
export class IndexService implements IIndexInterface {
  /**
   * 数据库操作实例
   */
  @Inject('dataAccess')
  dataAccessInstance: IDataAccess;
  index(example: any): Promise<any> {
    throw new Error("Method not implemented.");
  }
}