import { EffectClipName } from '../../effect'
import { ParticleEffectName } from '../../particle'
import { SkinSpriteName } from '../../skin'
import { InstructionText } from '../../texts/instruction'
import { EngineDataNode } from '../node'

export type EngineTutorialData = {
    skin: {
        sprites: {
            name: SkinSpriteName | (string & {})
            id: number
        }[]
    }
    effect: {
        clips: {
            name: EffectClipName | (string & {})
            id: number
        }[]
    }
    particle: {
        effects: {
            name: ParticleEffectName | (string & {})
            id: number
        }[]
    }
    instruction: {
        texts: {
            name: InstructionText | (string & {})
            id: number
        }[]
    }
    preprocess?: number
    navigate?: number
    update?: number
    nodes: EngineDataNode[]
}
