import BaseComponent from './common/base';
import { InputProps } from './common/entity';
export default class ComponentDemo extends BaseComponent {
    constructor(props: any);
    /**
     * 部署
     * @param inputs
     * @returns
     */
    deploy(inputs: InputProps): Promise<any>;
    /**
     * 移除
     * @param inputs
     * @returns
     */
    remove(inputs: InputProps): Promise<any>;
    /**
     * 测试
     */
    test(inputs: InputProps): Promise<any>;
    /**
     * 帮助
     * @returns
     */
    help(): Promise<void>;
    /**
     * 解析入参
     */
    private: any;
}
