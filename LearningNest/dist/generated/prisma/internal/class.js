"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrismaClientClass = getPrismaClientClass;
const runtime = __importStar(require("@prisma/client/runtime/client"));
const config = {
    "previewFeatures": [],
    "clientVersion": "7.10.0",
    "engineVersion": "0edf323efd1d98336f3f0a68684b56f689b900d3",
    "activeProvider": "postgresql",
    "inlineSchema": "// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Get a free hosted Postgres database in seconds: `npx create-db`\n\ngenerator client {\n  provider = \"prisma-client\"\n  output   = \"../generated/prisma\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n}\n\nmodel Profile {\n  id          String @id @default(uuid())\n  name        String\n  description String\n  posts       Post[]\n}\n\nmodel Post {\n  id        String  @id @default(uuid())\n  title     String\n  content   String\n  profileId String\n  profile   Profile @relation(fields: [profileId], references: [id])\n}\n",
    "runtimeDataModel": {
        "models": {},
        "enums": {},
        "types": {}
    },
    "parameterizationSchema": {
        "strings": [],
        "graph": ""
    }
};
config.runtimeDataModel = JSON.parse("{\"models\":{\"Profile\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"posts\",\"kind\":\"object\",\"type\":\"Post\",\"relationName\":\"PostToProfile\"}],\"dbName\":null,\"schema\":null},\"Post\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"title\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"content\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"profileId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"profile\",\"kind\":\"object\",\"type\":\"Profile\",\"relationName\":\"PostToProfile\"}],\"dbName\":null,\"schema\":null}},\"enums\":{},\"types\":{}}");
config.parameterizationSchema = {
    strings: JSON.parse("[\"where\",\"orderBy\",\"cursor\",\"profile\",\"posts\",\"_count\",\"Profile.findUnique\",\"Profile.findUniqueOrThrow\",\"Profile.findFirst\",\"Profile.findFirstOrThrow\",\"Profile.findMany\",\"data\",\"Profile.createOne\",\"Profile.createMany\",\"Profile.createManyAndReturn\",\"Profile.updateOne\",\"Profile.updateMany\",\"Profile.updateManyAndReturn\",\"create\",\"update\",\"Profile.upsertOne\",\"Profile.deleteOne\",\"Profile.deleteMany\",\"having\",\"_min\",\"_max\",\"Profile.groupBy\",\"Profile.aggregate\",\"Post.findUnique\",\"Post.findUniqueOrThrow\",\"Post.findFirst\",\"Post.findFirstOrThrow\",\"Post.findMany\",\"Post.createOne\",\"Post.createMany\",\"Post.createManyAndReturn\",\"Post.updateOne\",\"Post.updateMany\",\"Post.updateManyAndReturn\",\"Post.upsertOne\",\"Post.deleteOne\",\"Post.deleteMany\",\"Post.groupBy\",\"Post.aggregate\",\"AND\",\"OR\",\"NOT\",\"id\",\"title\",\"content\",\"profileId\",\"equals\",\"in\",\"notIn\",\"lt\",\"lte\",\"gt\",\"gte\",\"contains\",\"startsWith\",\"endsWith\",\"not\",\"name\",\"description\",\"every\",\"some\",\"none\",\"is\",\"isNot\",\"connectOrCreate\",\"upsert\",\"createMany\",\"set\",\"disconnect\",\"delete\",\"connect\",\"updateMany\",\"deleteMany\"]"),
    graph: "XhIgBwQAAD0AICwAADsAMC0AAAkAEC4AADsAMC8BAAAAAT4BADwAIT8BADwAIQEAAAABACAIAwAAPwAgLAAAPgAwLQAAAwAQLgAAPgAwLwEAPAAhMAEAPAAhMQEAPAAhMgEAPAAhAQMAAFgAIAgDAAA_ACAsAAA-ADAtAAADABAuAAA-ADAvAQAAAAEwAQA8ACExAQA8ACEyAQA8ACEDAAAAAwAgAQAABAAwAgAABQAgAQAAAAMAIAEAAAABACAHBAAAPQAgLAAAOwAwLQAACQAQLgAAOwAwLwEAPAAhPgEAPAAhPwEAPAAhAQQAAFcAIAMAAAAJACABAAAKADACAAABACADAAAACQAgAQAACgAwAgAAAQAgAwAAAAkAIAEAAAoAMAIAAAEAIAQEAABWACAvAQAAAAE-AQAAAAE_AQAAAAEBCwAADgAgAy8BAAAAAT4BAAAAAT8BAAAAAQELAAAQADABCwAAEAAwBAQAAEkAIC8BAEMAIT4BAEMAIT8BAEMAIQIAAAABACALAAATACADLwEAQwAhPgEAQwAhPwEAQwAhAgAAAAkAIAsAABUAIAIAAAAJACALAAAVACADAAAAAQAgEgAADgAgEwAAEwAgAQAAAAEAIAEAAAAJACADBQAARgAgGAAASAAgGQAARwAgBiwAADoAMC0AABwAEC4AADoAMC8BADYAIT4BADYAIT8BADYAIQMAAAAJACABAAAbADAXAAAcACADAAAACQAgAQAACgAwAgAAAQAgAQAAAAUAIAEAAAAFACADAAAAAwAgAQAABAAwAgAABQAgAwAAAAMAIAEAAAQAMAIAAAUAIAMAAAADACABAAAEADACAAAFACAFAwAARQAgLwEAAAABMAEAAAABMQEAAAABMgEAAAABAQsAACQAIAQvAQAAAAEwAQAAAAExAQAAAAEyAQAAAAEBCwAAJgAwAQsAACYAMAUDAABEACAvAQBDACEwAQBDACExAQBDACEyAQBDACECAAAABQAgCwAAKQAgBC8BAEMAITABAEMAITEBAEMAITIBAEMAIQIAAAADACALAAArACACAAAAAwAgCwAAKwAgAwAAAAUAIBIAACQAIBMAACkAIAEAAAAFACABAAAAAwAgAwUAAEAAIBgAAEIAIBkAAEEAIAcsAAA1ADAtAAAyABAuAAA1ADAvAQA2ACEwAQA2ACExAQA2ACEyAQA2ACEDAAAAAwAgAQAAMQAwFwAAMgAgAwAAAAMAIAEAAAQAMAIAAAUAIAcsAAA1ADAtAAAyABAuAAA1ADAvAQA2ACEwAQA2ACExAQA2ACEyAQA2ACEOBQAAOAAgGAAAOQAgGQAAOQAgMwEAAAABNAEAAAAENQEAAAAENgEAAAABNwEAAAABOAEAAAABOQEAAAABOgEAAAABOwEAAAABPAEAAAABPQEANwAhDgUAADgAIBgAADkAIBkAADkAIDMBAAAAATQBAAAABDUBAAAABDYBAAAAATcBAAAAATgBAAAAATkBAAAAAToBAAAAATsBAAAAATwBAAAAAT0BADcAIQgzAgAAAAE0AgAAAAQ1AgAAAAQ2AgAAAAE3AgAAAAE4AgAAAAE5AgAAAAE9AgA4ACELMwEAAAABNAEAAAAENQEAAAAENgEAAAABNwEAAAABOAEAAAABOQEAAAABOgEAAAABOwEAAAABPAEAAAABPQEAOQAhBiwAADoAMC0AABwAEC4AADoAMC8BADYAIT4BADYAIT8BADYAIQcEAAA9ACAsAAA7ADAtAAAJABAuAAA7ADAvAQA8ACE-AQA8ACE_AQA8ACELMwEAAAABNAEAAAAENQEAAAAENgEAAAABNwEAAAABOAEAAAABOQEAAAABOgEAAAABOwEAAAABPAEAAAABPQEAOQAhA0AAAAMAIEEAAAMAIEIAAAMAIAgDAAA_ACAsAAA-ADAtAAADABAuAAA-ADAvAQA8ACEwAQA8ACExAQA8ACEyAQA8ACEJBAAAPQAgLAAAOwAwLQAACQAQLgAAOwAwLwEAPAAhPgEAPAAhPwEAPAAhQwAACQAgRAAACQAgAAAAAUgBAAAAAQUSAABaACATAABdACBFAABbACBGAABcACBLAAABACADEgAAWgAgRQAAWwAgSwAAAQAgAAAACxIAAEoAMBMAAE8AMEUAAEsAMEYAAEwAMEcAAE0AIEgAAE4AMEkAAE4AMEoAAE4AMEsAAE4AMEwAAFAAME0AAFEAMAMvAQAAAAEwAQAAAAExAQAAAAECAAAABQAgEgAAVQAgAwAAAAUAIBIAAFUAIBMAAFQAIAELAABZADAIAwAAPwAgLAAAPgAwLQAAAwAQLgAAPgAwLwEAAAABMAEAPAAhMQEAPAAhMgEAPAAhAgAAAAUAIAsAAFQAIAIAAABSACALAABTACAHLAAAUQAwLQAAUgAQLgAAUQAwLwEAPAAhMAEAPAAhMQEAPAAhMgEAPAAhBywAAFEAMC0AAFIAEC4AAFEAMC8BADwAITABADwAITEBADwAITIBADwAIQMvAQBDACEwAQBDACExAQBDACEDLwEAQwAhMAEAQwAhMQEAQwAhAy8BAAAAATABAAAAATEBAAAAAQQSAABKADBFAABLADBHAABNACBLAABOADAAAQQAAFcAIAMvAQAAAAEwAQAAAAExAQAAAAEDLwEAAAABPgEAAAABPwEAAAABAgAAAAEAIBIAAFoAIAMAAAAJACASAABaACATAABeACAFAAAACQAgCwAAXgAgLwEAQwAhPgEAQwAhPwEAQwAhAy8BAEMAIT4BAEMAIT8BAEMAIQIEBgIFAAMBAwABAQQHAAAAAAMFAAgYAAkZAAoAAAADBQAIGAAJGQAKAQMAAQEDAAEDBQAPGAAQGQARAAAAAwUADxgAEBkAEQYCAQcIAQgLAQkMAQoNAQwPAQ0RBA4SBQ8UARAWBBEXBhQYARUZARYaBBodBxseCxwfAh0gAh4hAh8iAiAjAiElAiInBCMoDCQqAiUsBCYtDScuAigvAikwBCozDis0Eg"
};
async function decodeBase64AsWasm(wasmBase64) {
    const { Buffer } = await import('node:buffer');
    const wasmArray = Buffer.from(wasmBase64, 'base64');
    return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
    getRuntime: async () => await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.js"),
    getQueryCompilerWasmModule: async () => {
        const { wasm } = await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.wasm-base64.js");
        return await decodeBase64AsWasm(wasm);
    },
    importName: "./query_compiler_fast_bg.js"
};
function getPrismaClientClass() {
    return runtime.getPrismaClient(config);
}
//# sourceMappingURL=class.js.map