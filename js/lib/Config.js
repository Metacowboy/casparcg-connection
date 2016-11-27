"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var typedjson_npm_1 = require("typedjson-npm");
/**  */
var Config;
(function (Config) {
    /** */
    var v2xx;
    (function (v2xx) {
        /** */
        (function (VideoModeEnum) {
            VideoModeEnum[VideoModeEnum["_PAL"] = 0] = "_PAL";
            VideoModeEnum[VideoModeEnum["_NTSC"] = 1] = "_NTSC";
            VideoModeEnum[VideoModeEnum["_576p2500"] = 2] = "_576p2500";
            VideoModeEnum[VideoModeEnum["_720p2398"] = 3] = "_720p2398";
            VideoModeEnum[VideoModeEnum["_720p2400"] = 4] = "_720p2400";
            VideoModeEnum[VideoModeEnum["_720p2500"] = 5] = "_720p2500";
            VideoModeEnum[VideoModeEnum["_720p5000"] = 6] = "_720p5000";
            VideoModeEnum[VideoModeEnum["_720p2997"] = 7] = "_720p2997";
            VideoModeEnum[VideoModeEnum["_720p5994"] = 8] = "_720p5994";
            VideoModeEnum[VideoModeEnum["_720p3000"] = 9] = "_720p3000";
            VideoModeEnum[VideoModeEnum["_720p6000"] = 10] = "_720p6000";
            VideoModeEnum[VideoModeEnum["_1080p2398"] = 11] = "_1080p2398";
            VideoModeEnum[VideoModeEnum["_1080p2400"] = 12] = "_1080p2400";
            VideoModeEnum[VideoModeEnum["_1080i5000"] = 13] = "_1080i5000";
            VideoModeEnum[VideoModeEnum["_1080i5994"] = 14] = "_1080i5994";
            VideoModeEnum[VideoModeEnum["_1080i6000"] = 15] = "_1080i6000";
            VideoModeEnum[VideoModeEnum["_1080p2500"] = 16] = "_1080p2500";
            VideoModeEnum[VideoModeEnum["_1080p2997"] = 17] = "_1080p2997";
            VideoModeEnum[VideoModeEnum["_1080p3000"] = 18] = "_1080p3000";
            VideoModeEnum[VideoModeEnum["_1080p5000"] = 19] = "_1080p5000";
            VideoModeEnum[VideoModeEnum["_1080p5994"] = 20] = "_1080p5994";
            VideoModeEnum[VideoModeEnum["_1080p6000"] = 21] = "_1080p6000";
            VideoModeEnum[VideoModeEnum["_1556p2398"] = 22] = "_1556p2398";
            VideoModeEnum[VideoModeEnum["_1556p2400"] = 23] = "_1556p2400";
            VideoModeEnum[VideoModeEnum["_1556p2500"] = 24] = "_1556p2500";
            VideoModeEnum[VideoModeEnum["_dci1080p2398"] = 25] = "_dci1080p2398";
            VideoModeEnum[VideoModeEnum["_dci1080p2400"] = 26] = "_dci1080p2400";
            VideoModeEnum[VideoModeEnum["_dci1080p2500"] = 27] = "_dci1080p2500";
            VideoModeEnum[VideoModeEnum["_2160p2398"] = 28] = "_2160p2398";
            VideoModeEnum[VideoModeEnum["_2160p2400"] = 29] = "_2160p2400";
            VideoModeEnum[VideoModeEnum["_2160p2500"] = 30] = "_2160p2500";
            VideoModeEnum[VideoModeEnum["_2160p2997"] = 31] = "_2160p2997";
            VideoModeEnum[VideoModeEnum["_2160p3000"] = 32] = "_2160p3000";
            VideoModeEnum[VideoModeEnum["_dci2160p2398"] = 33] = "_dci2160p2398";
            VideoModeEnum[VideoModeEnum["_dci2160p2400"] = 34] = "_dci2160p2400";
            VideoModeEnum[VideoModeEnum["_dci2160p2500"] = 35] = "_dci2160p2500";
        })(v2xx.VideoModeEnum || (v2xx.VideoModeEnum = {}));
        var VideoModeEnum = v2xx.VideoModeEnum;
        /** */
        (function (ChannelLayoutEnum) {
            ChannelLayoutEnum[ChannelLayoutEnum["_mono"] = 0] = "_mono";
            ChannelLayoutEnum[ChannelLayoutEnum["_stereo"] = 1] = "_stereo";
            ChannelLayoutEnum[ChannelLayoutEnum["_dts"] = 2] = "_dts";
            ChannelLayoutEnum[ChannelLayoutEnum["_dolbye"] = 3] = "_dolbye";
            ChannelLayoutEnum[ChannelLayoutEnum["_dolbydigital"] = 4] = "_dolbydigital";
            ChannelLayoutEnum[ChannelLayoutEnum["_smpte"] = 5] = "_smpte";
            ChannelLayoutEnum[ChannelLayoutEnum["_passthru"] = 6] = "_passthru";
        })(v2xx.ChannelLayoutEnum || (v2xx.ChannelLayoutEnum = {}));
        var ChannelLayoutEnum = v2xx.ChannelLayoutEnum;
        /** */
        var Consumer = (function () {
            function Consumer() {
            }
            __decorate([
                typedjson_npm_1.JsonMember({ type: String, isRequired: true })
            ], Consumer.prototype, "_type", void 0);
            Consumer = __decorate([
                typedjson_npm_1.JsonObject
            ], Consumer);
            return Consumer;
        }());
        v2xx.Consumer = Consumer;
        /** */
        var DecklinkConsumer = (function (_super) {
            __extends(DecklinkConsumer, _super);
            function DecklinkConsumer() {
                _super.apply(this, arguments);
                this._type = "decklink";
                this.device = 1;
                this.embeddedAudio = "false";
                this.channelLayout = "stereo";
                this.latency = "normal";
                this.keyer = "external";
                this.keyOnly = "false";
                this.bufferDepth = 3;
                this.customAllocator = "true"; // @todo: ns 2.0 only
            }
            __decorate([
                typedjson_npm_1.JsonMember({ type: Number })
            ], DecklinkConsumer.prototype, "device", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: Number, name: "key-device" })
            ], DecklinkConsumer.prototype, "keyDevice", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String, name: "embedded-audio" })
            ], DecklinkConsumer.prototype, "embeddedAudio", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String, name: "channel-layout" })
            ], DecklinkConsumer.prototype, "channelLayout", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String })
            ], DecklinkConsumer.prototype, "latency", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String })
            ], DecklinkConsumer.prototype, "keyer", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String, name: "key-only" })
            ], DecklinkConsumer.prototype, "keyOnly", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: Number, name: "buffer-depth" })
            ], DecklinkConsumer.prototype, "bufferDepth", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String, name: "custom-allocator" })
            ], DecklinkConsumer.prototype, "customAllocator", void 0);
            DecklinkConsumer = __decorate([
                typedjson_npm_1.JsonObject
            ], DecklinkConsumer);
            return DecklinkConsumer;
        }(Consumer));
        v2xx.DecklinkConsumer = DecklinkConsumer;
        /** */
        var BluefishConsumer = (function (_super) {
            __extends(BluefishConsumer, _super);
            function BluefishConsumer() {
                _super.apply(this, arguments);
                this._type = "Bluefish";
                this.device = 1;
                this.embeddedAudio = "false";
                this.channelLayout = "stereo";
                this.keyOnly = "false";
            }
            __decorate([
                typedjson_npm_1.JsonMember({ type: Number })
            ], BluefishConsumer.prototype, "device", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String, name: "embedded-audio" })
            ], BluefishConsumer.prototype, "embeddedAudio", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String, name: "channel-layout" })
            ], BluefishConsumer.prototype, "channelLayout", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String, name: "key-only" })
            ], BluefishConsumer.prototype, "keyOnly", void 0);
            BluefishConsumer = __decorate([
                typedjson_npm_1.JsonObject
            ], BluefishConsumer);
            return BluefishConsumer;
        }(Consumer));
        v2xx.BluefishConsumer = BluefishConsumer;
        /** */
        var SystemAudioConsumer = (function (_super) {
            __extends(SystemAudioConsumer, _super);
            function SystemAudioConsumer() {
                _super.apply(this, arguments);
                this._type = "systemaudio";
                this.channelLayout = "stereo";
                this.latency = 200;
            }
            __decorate([
                typedjson_npm_1.JsonMember({ type: String, name: "channel-layout" })
            ], SystemAudioConsumer.prototype, "channelLayout", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: Number })
            ], SystemAudioConsumer.prototype, "latency", void 0);
            SystemAudioConsumer = __decorate([
                typedjson_npm_1.JsonObject
            ], SystemAudioConsumer);
            return SystemAudioConsumer;
        }(Consumer));
        v2xx.SystemAudioConsumer = SystemAudioConsumer;
        /** */
        var ScreenConsumer = (function (_super) {
            __extends(ScreenConsumer, _super);
            function ScreenConsumer() {
                _super.apply(this, arguments);
                this._type = "screen";
                this.device = 0;
                this.aspectRatio = "default";
                this.stretch = "fill";
                this.windowed = "true";
                this.keyOnly = "false";
                this.autoDeinterlace = "true";
                this.vsync = "false";
                this.borderless = "false";
                this.interactive = "true"; // @todo: ns 2.1 only
                this.name = "Screen Consumer"; // @todo: ns 2.0 only
            }
            __decorate([
                typedjson_npm_1.JsonMember({ type: Number })
            ], ScreenConsumer.prototype, "device", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String, name: "aspect-ratio" })
            ], ScreenConsumer.prototype, "aspectRatio", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String })
            ], ScreenConsumer.prototype, "stretch", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String })
            ], ScreenConsumer.prototype, "windowed", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String, name: "key-only" })
            ], ScreenConsumer.prototype, "keyOnly", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String, name: "auto-deinterlace" })
            ], ScreenConsumer.prototype, "autoDeinterlace", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String })
            ], ScreenConsumer.prototype, "vsync", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String })
            ], ScreenConsumer.prototype, "borderless", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String })
            ], ScreenConsumer.prototype, "interactive", void 0);
            __decorate([
                // @todo: ns 2.1 only
                typedjson_npm_1.JsonMember({ type: String })
            ], ScreenConsumer.prototype, "name", void 0);
            ScreenConsumer = __decorate([
                typedjson_npm_1.JsonObject
            ], ScreenConsumer);
            return ScreenConsumer;
        }(Consumer));
        v2xx.ScreenConsumer = ScreenConsumer;
        /** */
        var NewtekIvgaConsumer = (function (_super) {
            __extends(NewtekIvgaConsumer, _super);
            function NewtekIvgaConsumer() {
                _super.apply(this, arguments);
                this._type = "newtekivga";
                this.channelLayout = "stereo"; // @todo: ns 2.0 only
                this.provideSync = "true"; // @todo: ns 2.0 only
            }
            __decorate([
                typedjson_npm_1.JsonMember({ type: String, name: "channel-layout" })
            ], NewtekIvgaConsumer.prototype, "channelLayout", void 0);
            __decorate([
                // @todo: ns 2.0 only
                typedjson_npm_1.JsonMember({ type: String, name: "provide-sync" })
            ], NewtekIvgaConsumer.prototype, "provideSync", void 0);
            NewtekIvgaConsumer = __decorate([
                typedjson_npm_1.JsonObject
            ], NewtekIvgaConsumer);
            return NewtekIvgaConsumer;
        }(Consumer));
        v2xx.NewtekIvgaConsumer = NewtekIvgaConsumer;
        /** */
        var FfmpegConsumer = (function (_super) {
            __extends(FfmpegConsumer, _super);
            function FfmpegConsumer() {
                _super.apply(this, arguments);
                this._type = "ffmpeg";
                this.separateKey = "false";
                this.monoStreams = "false";
            }
            __decorate([
                typedjson_npm_1.JsonMember({ type: String })
            ], FfmpegConsumer.prototype, "path", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String })
            ], FfmpegConsumer.prototype, "args", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String, name: "separate-key" })
            ], FfmpegConsumer.prototype, "separateKey", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String, name: "mono-streams" })
            ], FfmpegConsumer.prototype, "monoStreams", void 0);
            FfmpegConsumer = __decorate([
                typedjson_npm_1.JsonObject
            ], FfmpegConsumer);
            return FfmpegConsumer;
        }(Consumer));
        v2xx.FfmpegConsumer = FfmpegConsumer;
        /** */
        var FileConsumer = (function (_super) {
            __extends(FileConsumer, _super);
            function FileConsumer() {
                _super.apply(this, arguments);
                this._type = "file";
                this.vcodec = "libx264";
                this.separateKey = "false";
            }
            __decorate([
                typedjson_npm_1.JsonMember({ type: String })
            ], FileConsumer.prototype, "path", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String })
            ], FileConsumer.prototype, "vcodec", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String, name: "separate-key" })
            ], FileConsumer.prototype, "separateKey", void 0);
            FileConsumer = __decorate([
                typedjson_npm_1.JsonObject
            ], FileConsumer);
            return FileConsumer;
        }(Consumer));
        v2xx.FileConsumer = FileConsumer;
        /** */
        var StreamConsumer = (function (_super) {
            __extends(StreamConsumer, _super);
            function StreamConsumer() {
                _super.apply(this, arguments);
                this._type = "stream";
            }
            __decorate([
                typedjson_npm_1.JsonMember({ type: String })
            ], StreamConsumer.prototype, "path", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String })
            ], StreamConsumer.prototype, "args", void 0);
            StreamConsumer = __decorate([
                typedjson_npm_1.JsonObject
            ], StreamConsumer);
            return StreamConsumer;
        }(Consumer));
        v2xx.StreamConsumer = StreamConsumer;
        /** */
        var SynctoConsumer = (function (_super) {
            __extends(SynctoConsumer, _super);
            function SynctoConsumer() {
                _super.apply(this, arguments);
                this._type = "syncto";
            }
            __decorate([
                typedjson_npm_1.JsonMember({ type: Number, name: "channel-id" })
            ], SynctoConsumer.prototype, "channelId", void 0);
            SynctoConsumer = __decorate([
                typedjson_npm_1.JsonObject
            ], SynctoConsumer);
            return SynctoConsumer;
        }(Consumer));
        v2xx.SynctoConsumer = SynctoConsumer;
        /** */
        var Channel = (function () {
            function Channel() {
                this.consumers = [];
                this.videoMode = "PAL";
                this.straightAlphaOutput = "false";
                this.channelLayout = "stereo";
            }
            Object.defineProperty(Channel.prototype, "_consumers", {
                get: function () {
                    return this.consumers || [];
                },
                /** */
                set: function (consumers) {
                    var _this = this;
                    consumers.forEach(function (i) {
                        if (i.hasOwnProperty("_type")) {
                            var className = i["_type"];
                            var dashBlocks = className.split(/-|_/);
                            className = dashBlocks.map(function (i) { return i.charAt(0).toUpperCase() + i.slice(1); }).join("") + "Consumer";
                            if (v2xx[className]) {
                                var consumer = new v2xx[className]();
                                var consumerKey = void 0;
                                for (var key in i) {
                                    var dashBlocks_1 = key.split(/-|_/);
                                    consumerKey = dashBlocks_1.map(function (i, o) { return o > 0 ? i.charAt(0).toUpperCase() + i.slice(1) : i; }).join("");
                                    if (!i.hasOwnProperty(key)) {
                                        continue;
                                    }
                                    if (consumer.hasOwnProperty(consumerKey)) {
                                        consumer[consumerKey] = i[key];
                                    }
                                    else {
                                    }
                                }
                                _this.consumers.push(consumer);
                            }
                        }
                    });
                },
                enumerable: true,
                configurable: true
            });
            __decorate([
                typedjson_npm_1.JsonMember({ type: String, isRequired: true })
            ], Channel.prototype, "_type", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String, isRequired: true, name: "video-mode" })
            ], Channel.prototype, "videoMode", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String, name: "straight-alpha-output" })
            ], Channel.prototype, "straightAlphaOutput", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String, name: "channel-layout" })
            ], Channel.prototype, "channelLayout", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: Array, elements: Object, isRequired: true, name: "consumers" })
            ], Channel.prototype, "_consumers", null);
            Channel = __decorate([
                typedjson_npm_1.JsonObject
            ], Channel);
            return Channel;
        }());
        v2xx.Channel = Channel;
        /** */
        var Mixer = (function () {
            function Mixer() {
                this.blendModes = "false";
                this.straightAlpha = "false";
                this.mipmappingDefaultOn = "false";
            }
            __decorate([
                typedjson_npm_1.JsonMember({ type: String, name: "blend-modes" })
            ], Mixer.prototype, "blendModes", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String, name: "straight-alpha" })
            ], Mixer.prototype, "straightAlpha", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String, name: "mipmapping_default_on" })
            ], Mixer.prototype, "mipmappingDefaultOn", void 0);
            Mixer = __decorate([
                typedjson_npm_1.JsonObject
            ], Mixer);
            return Mixer;
        }());
        v2xx.Mixer = Mixer;
        /** */
        var Controller = (function () {
            function Controller() {
            }
            __decorate([
                typedjson_npm_1.JsonMember({ type: String, isRequired: true })
            ], Controller.prototype, "_type", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: Number, isRequired: true })
            ], Controller.prototype, "port", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String, isRequired: true })
            ], Controller.prototype, "protocol", void 0);
            Controller = __decorate([
                typedjson_npm_1.JsonObject
            ], Controller);
            return Controller;
        }());
        v2xx.Controller = Controller;
        /** */
        var OscClient = (function () {
            function OscClient() {
            }
            __decorate([
                typedjson_npm_1.JsonMember({ type: String, isRequired: true })
            ], OscClient.prototype, "_type", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String, isRequired: true })
            ], OscClient.prototype, "address", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: Number, isRequired: true })
            ], OscClient.prototype, "port", void 0);
            OscClient = __decorate([
                typedjson_npm_1.JsonObject
            ], OscClient);
            return OscClient;
        }());
        v2xx.OscClient = OscClient;
        /** */
        var Thumbnails = (function () {
            function Thumbnails() {
                this.generateThumbnails = "true";
                this.width = 256;
                this.height = 144;
                this.videoGrid = 2;
                this.scanIntervalMillis = 5000;
                this.generateDelayMillis = 2000;
                this.videoMode = "720p5000";
            }
            __decorate([
                // @todo: isRequired on childs?
                typedjson_npm_1.JsonMember({ type: String, name: "generate-thumbnails", isRequired: true })
            ], Thumbnails.prototype, "generateThumbnails", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: Number, isRequired: true })
            ], Thumbnails.prototype, "width", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: Number, isRequired: true })
            ], Thumbnails.prototype, "height", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: Number, isRequired: true, name: "video-grid" })
            ], Thumbnails.prototype, "videoGrid", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: Number, isRequired: true, name: "scan-interval-millis" })
            ], Thumbnails.prototype, "scanIntervalMillis", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: Number, isRequired: true, name: "generate-delay-millis" })
            ], Thumbnails.prototype, "generateDelayMillis", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String, isRequired: true, name: "video-mode" })
            ], Thumbnails.prototype, "videoMode", void 0);
            Thumbnails = __decorate([
                typedjson_npm_1.JsonObject
            ], Thumbnails);
            return Thumbnails;
        }());
        v2xx.Thumbnails = Thumbnails;
        /** */
        var Flash = (function () {
            function Flash() {
                this.bufferDepth = "auto";
            }
            __decorate([
                typedjson_npm_1.JsonMember({ type: String, name: "buffer-depth" })
            ], Flash.prototype, "bufferDepth", void 0);
            Flash = __decorate([
                typedjson_npm_1.JsonObject
            ], Flash);
            return Flash;
        }());
        v2xx.Flash = Flash;
        /** */
        var TemplateHost = (function () {
            function TemplateHost() {
            }
            __decorate([
                typedjson_npm_1.JsonMember({ type: String, isRequired: true })
            ], TemplateHost.prototype, "_type", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String, isRequired: true, name: "video-mode" })
            ], TemplateHost.prototype, "videoMode", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String, isRequired: true })
            ], TemplateHost.prototype, "filename", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: Number, isRequired: true })
            ], TemplateHost.prototype, "width", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: Number, isRequired: true })
            ], TemplateHost.prototype, "height", void 0);
            TemplateHost = __decorate([
                typedjson_npm_1.JsonObject
            ], TemplateHost);
            return TemplateHost;
        }());
        v2xx.TemplateHost = TemplateHost;
        /**  */
        var Osc = (function () {
            function Osc() {
                this.defaultPort = 6250;
                this.predefinedClients = [new OscClient()];
            }
            __decorate([
                typedjson_npm_1.JsonMember({ type: Number, isRequired: false, name: "default-port" })
            ], Osc.prototype, "defaultPort", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: Array, elements: OscClient, isRequired: true, name: "predefined-clients" })
            ], Osc.prototype, "predefinedClients", void 0);
            Osc = __decorate([
                typedjson_npm_1.JsonObject
            ], Osc);
            return Osc;
        }());
        v2xx.Osc = Osc;
        /**  */
        var ChannelLayout = (function () {
            function ChannelLayout() {
            }
            __decorate([
                typedjson_npm_1.JsonMember({ type: String, isRequired: true })
            ], ChannelLayout.prototype, "name", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String, isRequired: true })
            ], ChannelLayout.prototype, "type", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: Number, isRequired: true, name: "num-channels" })
            ], ChannelLayout.prototype, "numChannels", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String, isRequired: true })
            ], ChannelLayout.prototype, "channels", void 0);
            ChannelLayout = __decorate([
                typedjson_npm_1.JsonObject
            ], ChannelLayout);
            return ChannelLayout;
        }());
        v2xx.ChannelLayout = ChannelLayout;
        /**  */
        var MixConfig = (function () {
            function MixConfig() {
                this.mappings = [];
            }
            __decorate([
                typedjson_npm_1.JsonMember({ type: String, isRequired: true })
            ], MixConfig.prototype, "from", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String, isRequired: true })
            ], MixConfig.prototype, "to", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String, isRequired: true })
            ], MixConfig.prototype, "mix", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: Array, elements: String, isRequired: true })
            ], MixConfig.prototype, "mappings", void 0);
            MixConfig = __decorate([
                typedjson_npm_1.JsonObject
            ], MixConfig);
            return MixConfig;
        }());
        v2xx.MixConfig = MixConfig;
        /**  */
        var Audio = (function () {
            function Audio() {
                this.channelLayouts = [];
                this.mixConfigs = [];
            }
            __decorate([
                typedjson_npm_1.JsonMember({ type: Array, elements: v2xx.ChannelLayout, isRequired: true, name: "channel-layouts" })
            ], Audio.prototype, "channelLayouts", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: Array, elements: v2xx.MixConfig, isRequired: true, name: "mix-configs" })
            ], Audio.prototype, "mixConfigs", void 0);
            Audio = __decorate([
                typedjson_npm_1.JsonObject
            ], Audio);
            return Audio;
        }());
        v2xx.Audio = Audio;
    })(v2xx = Config.v2xx || (Config.v2xx = {}));
    /** */
    var v207;
    (function (v207) {
        /** */
        var Paths = (function () {
            function Paths() {
                this.mediaPath = "media\\";
                this.logPath = "log\\";
                this.dataPath = "data\\";
                this.templatePath = "templates\\";
                this.thumbnailsPath = "thumbnails\\";
            }
            __decorate([
                typedjson_npm_1.JsonMember({ type: String, name: "media-path" })
            ], Paths.prototype, "mediaPath", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String, name: "log-path" })
            ], Paths.prototype, "logPath", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String, name: "data-path" })
            ], Paths.prototype, "dataPath", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String, name: "template-path" })
            ], Paths.prototype, "templatePath", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String, name: "thumbnails-path" })
            ], Paths.prototype, "thumbnailsPath", void 0);
            Paths = __decorate([
                typedjson_npm_1.JsonObject
            ], Paths);
            return Paths;
        }());
        v207.Paths = Paths;
        ;
        /** */
        var Mixer = (function (_super) {
            __extends(Mixer, _super);
            function Mixer() {
                _super.apply(this, arguments);
                this.chromaKey = "false";
            }
            __decorate([
                typedjson_npm_1.JsonMember({ type: String, name: "chroma-key" })
            ], Mixer.prototype, "chromaKey", void 0);
            Mixer = __decorate([
                typedjson_npm_1.JsonObject
            ], Mixer);
            return Mixer;
        }(v2xx.Mixer));
        v207.Mixer = Mixer;
        /**  */
        var Thumbnails = (function (_super) {
            __extends(Thumbnails, _super);
            function Thumbnails() {
                _super.apply(this, arguments);
                this.mipmap = "false";
            }
            __decorate([
                typedjson_npm_1.JsonMember({ type: String, isRequired: true })
            ], Thumbnails.prototype, "mipmap", void 0);
            Thumbnails = __decorate([
                typedjson_npm_1.JsonObject
            ], Thumbnails);
            return Thumbnails;
        }(v2xx.Thumbnails));
        v207.Thumbnails = Thumbnails;
    })(v207 = Config.v207 || (Config.v207 = {}));
    /** */
    var v21x;
    (function (v21x) {
        /** */
        var Paths = (function () {
            function Paths() {
                this.mediaPath = "media/";
                this.logPath = "log/";
                this.dataPath = "data/";
                this.templatePath = "template/";
                this.thumbnailPath = "thumbnail/";
                this.fontPath = "font/";
            }
            __decorate([
                typedjson_npm_1.JsonMember({ type: String, name: "media-path" })
            ], Paths.prototype, "mediaPath", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String, name: "log-path" })
            ], Paths.prototype, "logPath", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String, name: "data-path" })
            ], Paths.prototype, "dataPath", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String, name: "template-path" })
            ], Paths.prototype, "templatePath", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String, name: "thumbnail-path" })
            ], Paths.prototype, "thumbnailPath", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String, name: "font-path" })
            ], Paths.prototype, "fontPath", void 0);
            Paths = __decorate([
                typedjson_npm_1.JsonObject
            ], Paths);
            return Paths;
        }());
        v21x.Paths = Paths;
        ;
        /**  */
        var Mixer = (function (_super) {
            __extends(Mixer, _super);
            function Mixer() {
                _super.apply(this, arguments);
            }
            Mixer = __decorate([
                typedjson_npm_1.JsonObject
            ], Mixer);
            return Mixer;
        }(v2xx.Mixer));
        v21x.Mixer = Mixer;
        /**  */
        var Thumbnails = (function (_super) {
            __extends(Thumbnails, _super);
            function Thumbnails() {
                _super.apply(this, arguments);
                this.mipMap = "true";
            }
            __decorate([
                typedjson_npm_1.JsonMember({ type: String, isRequired: true })
            ], Thumbnails.prototype, "mipMap", void 0);
            Thumbnails = __decorate([
                typedjson_npm_1.JsonObject
            ], Thumbnails);
            return Thumbnails;
        }(v2xx.Thumbnails));
        v21x.Thumbnails = Thumbnails;
        /** */
        var Html = (function () {
            function Html() {
                this.remoteDebuggingPort = 0; // @todo: valid range = 0|1024-6535
            }
            __decorate([
                typedjson_npm_1.JsonMember({ type: Number, name: "remote-debugging-port" })
            ], Html.prototype, "remoteDebuggingPort", void 0);
            Html = __decorate([
                typedjson_npm_1.JsonObject
            ], Html);
            return Html;
        }());
        v21x.Html = Html;
        /**  */
        var Osc = (function (_super) {
            __extends(Osc, _super);
            function Osc() {
                _super.apply(this, arguments);
                this.disableSendToAmcpClient = "false";
            }
            __decorate([
                typedjson_npm_1.JsonMember({ type: String, isRequired: true, name: "disable-send-to-amcp-clients" })
            ], Osc.prototype, "disableSendToAmcpClient", void 0);
            Osc = __decorate([
                typedjson_npm_1.JsonObject
            ], Osc);
            return Osc;
        }(v2xx.Osc));
        v21x.Osc = Osc;
        /**  */
        var ChannelLayout = (function () {
            function ChannelLayout() {
            }
            __decorate([
                typedjson_npm_1.JsonMember({ type: String, isRequired: true })
            ], ChannelLayout.prototype, "name", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String, isRequired: true })
            ], ChannelLayout.prototype, "_type", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: Number, isRequired: true, name: "num-channels" })
            ], ChannelLayout.prototype, "numChannels", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String, isRequired: true, name: "channel-order" })
            ], ChannelLayout.prototype, "channelOrder", void 0);
            ChannelLayout = __decorate([
                typedjson_npm_1.JsonObject
            ], ChannelLayout);
            return ChannelLayout;
        }());
        v21x.ChannelLayout = ChannelLayout;
        /**  */
        var MixConfig = (function () {
            function MixConfig() {
            }
            __decorate([
                typedjson_npm_1.JsonMember({ type: String, isRequired: true, name: "from-type" })
            ], MixConfig.prototype, "fromType", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String, isRequired: true, name: "to-types" })
            ], MixConfig.prototype, "toTypes", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String, isRequired: true })
            ], MixConfig.prototype, "mix", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String, isRequired: true })
            ], MixConfig.prototype, "_type", void 0);
            MixConfig = __decorate([
                typedjson_npm_1.JsonObject
            ], MixConfig);
            return MixConfig;
        }());
        v21x.MixConfig = MixConfig;
        /**  */
        var Audio = (function () {
            function Audio() {
                this.channelLayouts = [];
                this.mixConfigs = [];
            }
            __decorate([
                typedjson_npm_1.JsonMember({ type: Array, elements: v21x.ChannelLayout, isRequired: true, name: "channel-layouts" })
            ], Audio.prototype, "channelLayouts", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: Array, elements: v21x.MixConfig, isRequired: true, name: "mix-configs" })
            ], Audio.prototype, "mixConfigs", void 0);
            Audio = __decorate([
                typedjson_npm_1.JsonObject
            ], Audio);
            return Audio;
        }());
        v21x.Audio = Audio;
        /** */
        (function (ChannelLayoutEnum) {
            ChannelLayoutEnum[ChannelLayoutEnum["_mono"] = 0] = "_mono";
            ChannelLayoutEnum[ChannelLayoutEnum["_stereo"] = 1] = "_stereo";
            ChannelLayoutEnum[ChannelLayoutEnum["_matrix"] = 2] = "_matrix";
            ChannelLayoutEnum[ChannelLayoutEnum["_film"] = 3] = "_film";
            ChannelLayoutEnum[ChannelLayoutEnum["_smpte"] = 4] = "_smpte";
            ChannelLayoutEnum[ChannelLayoutEnum["_ebu_r123_8a"] = 5] = "_ebu_r123_8a";
            ChannelLayoutEnum[ChannelLayoutEnum["_ebu_r123_8b"] = 6] = "_ebu_r123_8b";
            ChannelLayoutEnum[ChannelLayoutEnum["_8ch"] = 7] = "_8ch";
            ChannelLayoutEnum[ChannelLayoutEnum["_16ch"] = 8] = "_16ch";
        })(v21x.ChannelLayoutEnum || (v21x.ChannelLayoutEnum = {}));
        var ChannelLayoutEnum = v21x.ChannelLayoutEnum;
    })(v21x = Config.v21x || (Config.v21x = {}));
    /**  */
    var defaultChannel_2xx = { videoMode: "PAL", _consumers: [], _type: "channel" };
    var defaultAMCPController = { _type: "tcp", port: 5250, protocol: "AMCP" };
    var defaultLOGController = { _type: "tcp", port: 3250, protocol: "LOG" };
    // @todo: add interfaces
    /** */
    var Config207VO = (function () {
        function Config207VO() {
            this.paths = new v207.Paths();
            this.channels = [defaultChannel_2xx];
            this.mixer = new v207.Mixer();
            this.controllers = [defaultAMCPController];
            this.logLevel = "trace"; // @todo: differs from 2.1.0 default
            this.channelGrid = "false";
            this.autoDeinterlace = "true";
            this.autoTranscode = "true";
            this.pipelineTokens = 2;
            this.thumbnails = new v207.Thumbnails();
            this.flash = new v2xx.Flash();
            this.templateHosts = [];
            this.osc = new v2xx.Osc();
            this.audio = new v2xx.Audio();
        }
        __decorate([
            typedjson_npm_1.JsonMember({ type: v207.Paths, isRequired: true })
        ], Config207VO.prototype, "paths", void 0);
        __decorate([
            typedjson_npm_1.JsonMember({ type: Array, elements: v2xx.Channel, isRequired: true })
        ], Config207VO.prototype, "channels", void 0);
        __decorate([
            typedjson_npm_1.JsonMember({ type: v207.Mixer })
        ], Config207VO.prototype, "mixer", void 0);
        __decorate([
            typedjson_npm_1.JsonMember({ type: Array, elements: v2xx.Controller, isRequired: true })
        ], Config207VO.prototype, "controllers", void 0);
        __decorate([
            typedjson_npm_1.JsonMember({ type: String, name: "log-level" })
        ], Config207VO.prototype, "logLevel", void 0);
        __decorate([
            // @todo: differs from 2.1.0 default
            typedjson_npm_1.JsonMember({ type: String, name: "channel-grid" })
        ], Config207VO.prototype, "channelGrid", void 0);
        __decorate([
            typedjson_npm_1.JsonMember({ type: String, name: "atuo-deinterlace" })
        ], Config207VO.prototype, "autoDeinterlace", void 0);
        __decorate([
            typedjson_npm_1.JsonMember({ type: String, name: "auto-transcode" })
        ], Config207VO.prototype, "autoTranscode", void 0);
        __decorate([
            typedjson_npm_1.JsonMember({ type: Number, name: "pipeline-tokens" })
        ], Config207VO.prototype, "pipelineTokens", void 0);
        __decorate([
            typedjson_npm_1.JsonMember({ type: v207.Thumbnails })
        ], Config207VO.prototype, "thumbnails", void 0);
        __decorate([
            typedjson_npm_1.JsonMember({ type: v2xx.Flash })
        ], Config207VO.prototype, "flash", void 0);
        __decorate([
            typedjson_npm_1.JsonMember({ type: Array, elements: v2xx.TemplateHost, name: "template-hosts" })
        ], Config207VO.prototype, "templateHosts", void 0);
        __decorate([
            typedjson_npm_1.JsonMember({ type: v2xx.Osc })
        ], Config207VO.prototype, "osc", void 0);
        __decorate([
            typedjson_npm_1.JsonMember({ type: v2xx.Audio })
        ], Config207VO.prototype, "audio", void 0);
        Config207VO = __decorate([
            typedjson_npm_1.JsonObject
        ], Config207VO);
        return Config207VO;
    }());
    Config.Config207VO = Config207VO;
    /**  */
    var Config210VO = (function () {
        function Config210VO() {
            this.paths = new v21x.Paths();
            this.channels = [defaultChannel_2xx];
            this.lockClearPhrase = "secret";
            this.mixer = new v21x.Mixer();
            this.controllers = [defaultAMCPController, defaultLOGController];
            this.logLevel = "info"; // @todo: differs from 2.0.7 default
            this.logCategories = "communication"; // @todo, concated (comma-delimited) values in string
            this.channelGrid = "false";
            this.forceDeinterlace = "false";
            this.accellerator = "auto";
            this.thumbnails = new v21x.Thumbnails();
            this.flash = new v2xx.Flash();
            this.html = new v21x.Html();
            this.templateHosts = [];
            this.osc = new v21x.Osc();
            this.audio = new v21x.Audio();
        }
        __decorate([
            typedjson_npm_1.JsonMember({ type: v21x.Paths, isRequired: true })
        ], Config210VO.prototype, "paths", void 0);
        __decorate([
            typedjson_npm_1.JsonMember({ type: Array, elements: v2xx.Channel, isRequired: true })
        ], Config210VO.prototype, "channels", void 0);
        __decorate([
            typedjson_npm_1.JsonMember({ type: String, name: "lock-clear-phrase" })
        ], Config210VO.prototype, "lockClearPhrase", void 0);
        __decorate([
            typedjson_npm_1.JsonMember({ type: v21x.Mixer })
        ], Config210VO.prototype, "mixer", void 0);
        __decorate([
            typedjson_npm_1.JsonMember({ type: Array, elements: v2xx.Controller, isRequired: true })
        ], Config210VO.prototype, "controllers", void 0);
        __decorate([
            typedjson_npm_1.JsonMember({ type: String, name: "log-level" })
        ], Config210VO.prototype, "logLevel", void 0);
        __decorate([
            // @todo: differs from 2.0.7 default
            typedjson_npm_1.JsonMember({ type: String, name: "log-categories" })
        ], Config210VO.prototype, "logCategories", void 0);
        __decorate([
            // @todo, concated (comma-delimited) values in string
            typedjson_npm_1.JsonMember({ type: String, name: "channel-grid" })
        ], Config210VO.prototype, "channelGrid", void 0);
        __decorate([
            typedjson_npm_1.JsonMember({ type: String, name: "force-deinterlace" })
        ], Config210VO.prototype, "forceDeinterlace", void 0);
        __decorate([
            typedjson_npm_1.JsonMember({ type: String })
        ], Config210VO.prototype, "accellerator", void 0);
        __decorate([
            typedjson_npm_1.JsonMember({ type: v21x.Thumbnails })
        ], Config210VO.prototype, "thumbnails", void 0);
        __decorate([
            typedjson_npm_1.JsonMember({ type: v2xx.Flash })
        ], Config210VO.prototype, "flash", void 0);
        __decorate([
            typedjson_npm_1.JsonMember({ type: v21x.Html })
        ], Config210VO.prototype, "html", void 0);
        __decorate([
            typedjson_npm_1.JsonMember({ type: Array, elements: v2xx.TemplateHost, name: "template-hosts" })
        ], Config210VO.prototype, "templateHosts", void 0);
        __decorate([
            typedjson_npm_1.JsonMember({ type: v21x.Osc })
        ], Config210VO.prototype, "osc", void 0);
        __decorate([
            typedjson_npm_1.JsonMember({ type: v21x.Audio })
        ], Config210VO.prototype, "audio", void 0);
        return Config210VO;
    }());
    Config.Config210VO = Config210VO;
    /** */
    var CasparCGConfig = (function () {
        /** */
        function CasparCGConfig() {
        }
        /** */
        CasparCGConfig.prototype.fromV207ConfigVO = function () { };
        /** */
        CasparCGConfig.prototype.fromV210ConfigVO = function () { };
        /** */
        CasparCGConfig.prototype.toV207ConfigVO = function () { return new Config207VO(); };
        /** */
        CasparCGConfig.prototype.toV210ConfigVO = function () { return new Config210VO(); };
        /** */
        CasparCGConfig.prototype.toV207ConfigXML = function () { return new XMLDocument(); };
        /** */
        CasparCGConfig.prototype.toV210ConfigXML = function () { return new XMLDocument(); };
        return CasparCGConfig;
    }());
    Config.CasparCGConfig = CasparCGConfig;
})(Config = exports.Config || (exports.Config = {}));
