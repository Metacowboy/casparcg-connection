"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var typedjson_npm_1 = require("typedjson-npm");
var _ = require("highland");
var AMCPConnectionOptions_1 = require("./AMCPConnectionOptions");
// Options NS
var ServerVersion = AMCPConnectionOptions_1.Options.ServerVersion;
// config NS
var Config_1 = require("./Config");
var Config207VO = Config_1.Config.Config207VO;
var Config210VO = Config_1.Config.Config210VO;
var Response;
(function (Response) {
    /**
     *
     */
    var AbstractParser = (function () {
        function AbstractParser() {
        }
        return AbstractParser;
    }());
    Response.AbstractParser = AbstractParser;
    /**
     *
     */
    var ChannelParser = (function (_super) {
        __extends(ChannelParser, _super);
        function ChannelParser() {
            _super.apply(this, arguments);
        }
        /**
         *
         */
        ChannelParser.prototype.parse = function (data) {
            var result = [];
            var components = data.toString().split(/\s|,/);
            while (components.length > 0) {
                result.push({ channel: components.shift(), format: components.shift(), status: components.shift() });
            }
            if (result.length > 0) {
                return result;
            }
            return {};
        };
        return ChannelParser;
    }(AbstractParser));
    Response.ChannelParser = ChannelParser;
    /**
     *
     */
    var ConfigParser = (function (_super) {
        __extends(ConfigParser, _super);
        function ConfigParser() {
            _super.apply(this, arguments);
        }
        /**
         *
         */
        ConfigParser.prototype.childrenToArray = function (root, childIndices) {
            _.pairs(root).map(function (i) {
                var outerKey = i[0].toString();
                var outerValue = i[1];
                // filter top-level possible arrays
                if (childIndices.indexOf(outerKey) > -1) {
                    var flatArray_1 = [];
                    var _loop_1 = function(innerKey) {
                        var innerValue = outerValue[innerKey];
                        if (typeof innerValue === "object") {
                            if (Array.isArray(innerValue)) {
                                innerValue.forEach(function (o) {
                                    if (typeof o !== "object") {
                                        o = {};
                                    }
                                    o["_type"] = innerKey;
                                    flatArray_1.push(o);
                                });
                            }
                            else {
                                innerValue["_type"] = innerKey;
                                flatArray_1.push(innerValue);
                            }
                        }
                        else {
                            flatArray_1.push({ _type: innerKey });
                        }
                    };
                    for (var innerKey in outerValue) {
                        _loop_1(innerKey);
                    }
                    i[1] = flatArray_1;
                }
                return i;
            }).toArray(function (i) {
                root = {};
                i.forEach(function (o) {
                    root[o[0]] = o[1];
                });
            });
            return root;
        };
        /**
         *
         */
        ConfigParser.prototype.parse = function (data) {
            data = this.childrenToArray(data, ["channels", "controllers", "template-hosts"]);
            if (data.hasOwnProperty("channels")) {
                for (var i in data["channels"]) {
                    data["channels"][i] = this.childrenToArray(data["channels"][i], ["consumers"]);
                }
            }
            if (data.hasOwnProperty("osc")) {
                data["osc"] = this.childrenToArray(data["osc"], ["predefined-clients"]);
            }
            if (data.hasOwnProperty("audio")) {
                data["audio"] = this.childrenToArray(data["audio"], ["channel-layouts", "mix-configs"]);
                if (data["audio"].hasOwnProperty("channel-layouts")) {
                    var o = void 0;
                    for (var i in data["audio"]["channel-layouts"]) {
                        if (data["audio"]["channel-layouts"][i]["type"]) {
                            o = (data["audio"]["channel-layouts"][i]["type"]).toString();
                            o += o.indexOf(".") === -1 ? ".0" : "";
                            data["audio"]["channel-layouts"][i]["type"] = o;
                        }
                    }
                }
                if (data["audio"].hasOwnProperty("mix-configs")) {
                    var o = void 0;
                    for (var i in data["audio"]["mix-configs"]) {
                        if (data["audio"]["mix-configs"][i]["to"]) {
                            o = (data["audio"]["mix-configs"][i]["to"]).toString();
                            o += o.indexOf(".") === -1 ? ".0" : "";
                            data["audio"]["mix-configs"][i]["to"] = o;
                        }
                        if (data["audio"]["mix-configs"][i]["from"]) {
                            o = (data["audio"]["mix-configs"][i]["from"]).toString();
                            o += o.indexOf(".") === -1 ? ".0" : "";
                            data["audio"]["mix-configs"][i]["from"] = o;
                        }
                        if (data["audio"]["mix-configs"][i]["to-types"]) {
                            o = (data["audio"]["mix-configs"][i]["to-types"]).toString();
                            o += o.indexOf(".") === -1 ? ".0" : "";
                            data["audio"]["mix-configs"][i]["to-types"] = o;
                        }
                        if (data["audio"]["mix-configs"][i]["from-type"]) {
                            o = (data["audio"]["mix-configs"][i]["from-type"]).toString();
                            o += o.indexOf(".") === -1 ? ".0" : "";
                            data["audio"]["mix-configs"][i]["from-type"] = o;
                        }
                        data["audio"]["mix-configs"][i] = this.childrenToArray(data["audio"]["mix-configs"][i], ["mappings"]);
                    }
                }
                if (data["flash"] && data["flash"]["buffer-depth"]) {
                    data["flash"]["buffer-depth"] = (data["flash"]["buffer-depth"]).toString();
                }
            }
            var dataString = JSON.stringify(data).toLowerCase();
            var configVOClass = null;
            if (this.context && this.context.hasOwnProperty("serverVersion") && this.context["serverVersion"] > ServerVersion.V21x) {
                configVOClass = Config210VO;
            }
            else {
                configVOClass = Config207VO;
            }
            // console.log("FØØØRRRRR:::::", dataString);
            var result = {};
            try {
                result = typedjson_npm_1.TypedJSON.parse(dataString, configVOClass);
            }
            catch (e) {
                // @todo: version fallback
                // @todo: handle
                console.log("CONFIG PARSE ERROR: ", e);
            }
            // console.log("PARSED JSON:::::", JSON.stringify(result));
            // console.log("PARSED TJSON:::::", TypedJSON.stringify(result));
            return result;
        };
        return ConfigParser;
    }(AbstractParser));
    Response.ConfigParser = ConfigParser;
    /**
     *
     */
    var DataParser = (function (_super) {
        __extends(DataParser, _super);
        function DataParser() {
            _super.apply(this, arguments);
        }
        /**
         *
         */
        DataParser.prototype.parse = function (data) {
            return data;
        };
        return DataParser;
    }(AbstractParser));
    Response.DataParser = DataParser;
    /**
     *
     */
    var DataListParser = (function (_super) {
        __extends(DataListParser, _super);
        function DataListParser() {
            _super.apply(this, arguments);
        }
        /**
         *
         */
        DataListParser.prototype.parse = function (data) {
            return data;
        };
        return DataListParser;
    }(AbstractParser));
    Response.DataListParser = DataListParser;
    /**
     *
     */
    var InfoTemplateParser = (function (_super) {
        __extends(InfoTemplateParser, _super);
        function InfoTemplateParser() {
            _super.apply(this, arguments);
        }
        /**
         *
         */
        InfoTemplateParser.prototype.parse = function (data) {
            return data;
        };
        return InfoTemplateParser;
    }(AbstractParser));
    Response.InfoTemplateParser = InfoTemplateParser;
    /**
     *
     */
    var HelpParser = (function (_super) {
        __extends(HelpParser, _super);
        function HelpParser() {
            _super.apply(this, arguments);
        }
        /**
         *
         */
        HelpParser.prototype.parse = function (data) {
            return data;
        };
        return HelpParser;
    }(AbstractParser));
    Response.HelpParser = HelpParser;
    /**
     *
     */
    var GLParser = (function (_super) {
        __extends(GLParser, _super);
        function GLParser() {
            _super.apply(this, arguments);
        }
        /**
         *
         */
        GLParser.prototype.parse = function (data) {
            return data;
        };
        return GLParser;
    }(AbstractParser));
    Response.GLParser = GLParser;
    /**
     *
     */
    var InfoDelayParser = (function (_super) {
        __extends(InfoDelayParser, _super);
        function InfoDelayParser() {
            _super.apply(this, arguments);
        }
        /**
         *
         */
        InfoDelayParser.prototype.parse = function (data) {
            return data;
        };
        return InfoDelayParser;
    }(AbstractParser));
    Response.InfoDelayParser = InfoDelayParser;
    /**
     *
     */
    var InfoParser = (function (_super) {
        __extends(InfoParser, _super);
        function InfoParser() {
            _super.apply(this, arguments);
        }
        /**
         *
         */
        InfoParser.prototype.parse = function (data) {
            return data;
        };
        return InfoParser;
    }(AbstractParser));
    Response.InfoParser = InfoParser;
    /**
     *
     */
    var InfoThreadsParser = (function (_super) {
        __extends(InfoThreadsParser, _super);
        function InfoThreadsParser() {
            _super.apply(this, arguments);
        }
        /**
         *
         */
        InfoThreadsParser.prototype.parse = function (data) {
            return data;
        };
        return InfoThreadsParser;
    }(AbstractParser));
    Response.InfoThreadsParser = InfoThreadsParser;
    /**
     *
     */
    var ThumbnailParser = (function (_super) {
        __extends(ThumbnailParser, _super);
        function ThumbnailParser() {
            _super.apply(this, arguments);
        }
        /**
         *
         */
        ThumbnailParser.prototype.parse = function (data) {
            return "data:image/png;base64," + data;
        };
        return ThumbnailParser;
    }(AbstractParser));
    Response.ThumbnailParser = ThumbnailParser;
    /**
     *
     */
    var VersionParser = (function (_super) {
        __extends(VersionParser, _super);
        function VersionParser() {
            _super.apply(this, arguments);
        }
        /**
         *
         */
        VersionParser.prototype.parse = function (data) {
            return data;
        };
        return VersionParser;
    }(AbstractParser));
    Response.VersionParser = VersionParser;
    /**
     *
     */
    var PathParser = (function (_super) {
        __extends(PathParser, _super);
        function PathParser() {
            _super.apply(this, arguments);
        }
        /**
         *
         */
        PathParser.prototype.parse = function (data) {
            return data.map(function (i) {
                var components = i.split(" ");
                // is font
                if (components.length === 2) {
                    return { name: components[1].replace(/\"/g, ""), type: "font" };
                }
                // is template
                if (components.length === 4) {
                    return { name: components[0].replace(/\"/g, ""), type: "template" };
                }
                // is media
                return { name: components[0].replace(/\"/g, ""), type: components[1].toLowerCase() === "movie" ? "video" : components[1].toLowerCase() === "still" ? "image" : components[1].toLowerCase() };
            });
        };
        return PathParser;
    }(AbstractParser));
    Response.PathParser = PathParser;
    /**
     *
     */
    var CinfParser = (function (_super) {
        __extends(CinfParser, _super);
        function CinfParser() {
            _super.apply(this, arguments);
        }
        /**
         *
         */
        CinfParser.prototype.parse = function (data) {
            return data;
        };
        return CinfParser;
    }(AbstractParser));
    Response.CinfParser = CinfParser;
    /**
     *
     */
    var InfoQueuesParser = (function (_super) {
        __extends(InfoQueuesParser, _super);
        function InfoQueuesParser() {
            _super.apply(this, arguments);
        }
        /**
         *
         */
        InfoQueuesParser.prototype.parse = function (data) {
            return data;
        };
        return InfoQueuesParser;
    }(AbstractParser));
    Response.InfoQueuesParser = InfoQueuesParser;
    /**
     *
     */
    var InfoServerParser = (function (_super) {
        __extends(InfoServerParser, _super);
        function InfoServerParser() {
            _super.apply(this, arguments);
        }
        /**
         *
         */
        InfoServerParser.prototype.parse = function (data) {
            return data;
        };
        return InfoServerParser;
    }(AbstractParser));
    Response.InfoServerParser = InfoServerParser;
    /**
     *
     */
    var InfoPathsParser = (function (_super) {
        __extends(InfoPathsParser, _super);
        function InfoPathsParser() {
            _super.apply(this, arguments);
        }
        /**
         *
         */
        InfoPathsParser.prototype.parse = function (data) {
            return data;
        };
        return InfoPathsParser;
    }(AbstractParser));
    Response.InfoPathsParser = InfoPathsParser;
    /**
     *
     */
    var InfoSystemParser = (function (_super) {
        __extends(InfoSystemParser, _super);
        function InfoSystemParser() {
            _super.apply(this, arguments);
        }
        /**
         *
         */
        InfoSystemParser.prototype.parse = function (data) {
            return data;
        };
        return InfoSystemParser;
    }(AbstractParser));
    Response.InfoSystemParser = InfoSystemParser;
})(Response = exports.Response || (exports.Response = {}));
