/**  */
export declare namespace Config {
    /** */
    namespace v2xx {
        /** */
        enum VideoModeEnum {
            _PAL = 0,
            _NTSC = 1,
            _576p2500 = 2,
            _720p2398 = 3,
            _720p2400 = 4,
            _720p2500 = 5,
            _720p5000 = 6,
            _720p2997 = 7,
            _720p5994 = 8,
            _720p3000 = 9,
            _720p6000 = 10,
            _1080p2398 = 11,
            _1080p2400 = 12,
            _1080i5000 = 13,
            _1080i5994 = 14,
            _1080i6000 = 15,
            _1080p2500 = 16,
            _1080p2997 = 17,
            _1080p3000 = 18,
            _1080p5000 = 19,
            _1080p5994 = 20,
            _1080p6000 = 21,
            _1556p2398 = 22,
            _1556p2400 = 23,
            _1556p2500 = 24,
            _dci1080p2398 = 25,
            _dci1080p2400 = 26,
            _dci1080p2500 = 27,
            _2160p2398 = 28,
            _2160p2400 = 29,
            _2160p2500 = 30,
            _2160p2997 = 31,
            _2160p3000 = 32,
            _dci2160p2398 = 33,
            _dci2160p2400 = 34,
            _dci2160p2500 = 35,
        }
        /** */
        enum ChannelLayoutEnum {
            _mono = 0,
            _stereo = 1,
            _dts = 2,
            _dolbye = 3,
            _dolbydigital = 4,
            _smpte = 5,
            _passthru = 6,
        }
        /** */
        class Consumer {
            _type: String;
        }
        /** */
        class DecklinkConsumer extends Consumer {
            type: string;
            device: number;
            keyDevice: Number;
            embeddedAudio: string;
            channelLayout: string;
            latency: string;
            keyer: string;
            keyOnly: string;
            bufferDepth: number;
            customAllocator: string;
        }
        /** */
        class BluefishConsumer extends Consumer {
            type: string;
            device: number;
            embeddedAudio: string;
            channelLayout: string;
            keyOnly: string;
        }
        /** */
        class SystemAudioConsumer extends Consumer {
            type: string;
            channelLayout: string;
            latency: number;
        }
        /** */
        class ScreenConsumer extends Consumer {
            type: string;
            device: number;
            aspectRatio: string;
            stretch: string;
            windowed: string;
            keyOnly: string;
            autoDeinterlace: string;
            vsync: string;
            borderless: string;
            interactive: string;
            name: string;
        }
        /** */
        class NewtekIvgaConsumer extends Consumer {
            type: string;
            channelLayout: string;
            provideSync: string;
        }
        /** */
        class FfmpegConsumer extends Consumer {
            type: string;
            path: String;
            args: String;
            separateKey: string;
            monoStreams: string;
        }
        /** */
        class FileConsumer extends Consumer {
            type: string;
            path: String;
            vcodec: string;
            separateKey: string;
        }
        /** */
        class StreamConsumer extends Consumer {
            type: string;
            path: String;
            args: String;
        }
        /** */
        class SynctoConsumer extends Consumer {
            type: string;
            channelId: Number;
        }
        /** */
        class Channel {
            consumers?: Array<Consumer>;
            videoMode: string;
            straightAlphaOutput?: string;
            channelLayout?: string;
            /** */
            _consumers: Array<Object>;
        }
        /** */
        class Mixer {
            blendModes: string;
            straightAlpha: string;
            mipmappingDefaultOn: string;
        }
        /** */
        class Controller {
            _type: String;
            port: number;
            protocol: String;
        }
        /** */
        class PredefinedClient {
            address: String;
            port: number;
        }
        /** */
        class OscClient {
            address: String;
            port: number;
        }
        /** */
        class Thumbnails {
            generateThumbnails: string;
            width: number;
            height: number;
            videoGrid: number;
            scanIntervalMillis: number;
            generateDelayMillis: number;
            videoMode: string;
        }
        /** */
        class Flash {
            bufferDepth: string;
        }
        /** */
        class TemplateHost {
            videoMode: string;
            filename: string;
            width: number;
            height: number;
        }
        /**  */
        class Osc {
            defaultPort: number;
            predefinedClients: Array<OscClient>;
        }
        /**  */
        class ChannelLayout {
            name: string;
            type: string;
            numChannels: number;
            channels: string;
        }
        /**  */
        class MixConfig {
            from: string;
            to: string;
            mix: string;
            mappings: Array<string>;
        }
        /**  */
        class Audio {
            channelLayouts: Array<v2xx.ChannelLayout>;
            mixConfigs: Array<v2xx.MixConfig>;
        }
    }
    /** */
    namespace v207 {
        /** */
        class Paths {
            mediaPath: string;
            logPath: string;
            dataPath: string;
            templatePath: string;
            thumbnailsPath: string;
        }
        /** */
        class Mixer extends v2xx.Mixer {
            chromaKey: string;
        }
        /**  */
        class Thumbnails extends v2xx.Thumbnails {
            mipmap: string;
        }
    }
    /** */
    namespace v21x {
        /** */
        class Paths {
            mediaPath: string;
            logPath: string;
            dataPath: string;
            templatePath: string;
            thumbnailPath: string;
            fontPath: string;
        }
        /**  */
        class Mixer extends v2xx.Mixer {
        }
        /**  */
        class Thumbnails extends v2xx.Thumbnails {
            mipMap: string;
        }
        /** */
        class Html {
            remoteDebuggingPort: number;
        }
        /**  */
        class Osc extends v2xx.Osc {
            disableSendToAmcpClient: string;
        }
        /**  */
        class ChannelLayout {
            name: string;
            _type: string;
            numChannels: number;
            channelOrder: string;
        }
        /**  */
        class MixConfig {
            fromType: string;
            toTypes: string;
            mix: string;
            _type: string;
        }
        /**  */
        class Audio {
            channelLayouts: Array<v21x.ChannelLayout>;
            mixConfigs: Array<v21x.MixConfig>;
        }
        /** */
        enum ChannelLayoutEnum {
            _mono = 0,
            _stereo = 1,
            _matrix = 2,
            _film = 3,
            _smpte = 4,
            _ebu_r123_8a = 5,
            _ebu_r123_8b = 6,
            _8ch = 7,
            _16ch = 8,
        }
    }
    /** */
    namespace v21x {
    }
    /** */
    class Config207VO {
        paths: v207.Paths;
        channels: Array<v2xx.Channel>;
        mixer: v207.Mixer;
        controllers: Array<v2xx.Controller>;
        logLevel: string;
        channelGrid: string;
        autoDeinterlace: string;
        autoTranscode: string;
        pipelineTokens: number;
        thumbnails: v207.Thumbnails;
        flash: v2xx.Flash;
        templateHosts: Array<v2xx.TemplateHost>;
        osc: v2xx.Osc;
        audio: v2xx.Audio;
    }
    /**  */
    class Config210VO {
        paths: v21x.Paths;
        channels: Array<v2xx.Channel>;
        lockClearPhrase: string;
        mixer: v21x.Mixer;
        controllers: Array<v2xx.Controller>;
        logLevel: string;
        logCategories: string;
        channelGrid: string;
        forceDeinterlace: string;
        accellerator: string;
        thumbnails: v21x.Thumbnails;
        flash: v2xx.Flash;
        html: v21x.Html;
        templateHosts: Array<v2xx.TemplateHost>;
        osc: v21x.Osc;
        audio: v21x.Audio;
    }
    /** */
    class CasparCGConfig {
        /** */
        constructor();
        /** */
        fromV207ConfigVO(): void;
        /** */
        fromV210ConfigVO(): void;
        /** */
        toV207ConfigVO(): Config207VO;
        /** */
        toV210ConfigVO(): Config210VO;
        /** */
        toV207ConfigXML(): XMLDocument;
        /** */
        toV210ConfigXML(): XMLDocument;
    }
}
