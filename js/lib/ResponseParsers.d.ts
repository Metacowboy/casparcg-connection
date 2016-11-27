export declare namespace Response {
    /**
     *
     */
    interface IResponseParser {
        context?: Object;
        parse(data: Object): Object;
    }
    /**
     *
     */
    abstract class AbstractParser {
        context?: Object;
    }
    /**
     *
     */
    class ChannelParser extends AbstractParser implements IResponseParser {
        /**
         *
         */
        parse(data: Object): Object;
    }
    /**
     *
     */
    class ConfigParser extends AbstractParser implements IResponseParser {
        /**
         *
         */
        private childrenToArray(root, childIndices);
        /**
         *
         */
        parse(data: Object): Object;
    }
    /**
     *
     */
    class DataParser extends AbstractParser implements IResponseParser {
        /**
         *
         */
        parse(data: Object): Object;
    }
    /**
     *
     */
    class DataListParser extends AbstractParser implements IResponseParser {
        /**
         *
         */
        parse(data: Object): Object;
    }
    /**
     *
     */
    class InfoTemplateParser extends AbstractParser implements IResponseParser {
        /**
         *
         */
        parse(data: Object): Object;
    }
    /**
     *
     */
    class HelpParser extends AbstractParser implements IResponseParser {
        /**
         *
         */
        parse(data: Object): Object;
    }
    /**
     *
     */
    class GLParser extends AbstractParser implements IResponseParser {
        /**
         *
         */
        parse(data: Object): Object;
    }
    /**
     *
     */
    class InfoDelayParser extends AbstractParser implements IResponseParser {
        /**
         *
         */
        parse(data: Object): Object;
    }
    /**
     *
     */
    class InfoParser extends AbstractParser implements IResponseParser {
        /**
         *
         */
        parse(data: Object): Object;
    }
    /**
     *
     */
    class InfoThreadsParser extends AbstractParser implements IResponseParser {
        /**
         *
         */
        parse(data: Object): Object;
    }
    /**
     *
     */
    class ThumbnailParser extends AbstractParser implements IResponseParser {
        /**
         *
         */
        parse(data: Object): Object;
    }
    /**
     *
     */
    class VersionParser extends AbstractParser implements IResponseParser {
        /**
         *
         */
        parse(data: Object): Object;
    }
    /**
     *
     */
    class PathParser extends AbstractParser implements IResponseParser {
        /**
         *
         */
        parse(data: Array<any>): Object;
    }
    /**
     *
     */
    class CinfParser extends AbstractParser implements IResponseParser {
        /**
         *
         */
        parse(data: Object): Object;
    }
    /**
     *
     */
    class InfoQueuesParser extends AbstractParser implements IResponseParser {
        /**
         *
         */
        parse(data: Object): Object;
    }
    /**
     *
     */
    class InfoServerParser extends AbstractParser implements IResponseParser {
        /**
         *
         */
        parse(data: Object): Object;
    }
    /**
     *
     */
    class InfoPathsParser extends AbstractParser implements IResponseParser {
        /**
         *
         */
        parse(data: Object): Object;
    }
    /**
     *
     */
    class InfoSystemParser extends AbstractParser implements IResponseParser {
        /**
         *
         */
        parse(data: Object): Object;
    }
}
