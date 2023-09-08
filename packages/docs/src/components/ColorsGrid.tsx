// import { colors } from '@ignite-ui/tokens'
import { getContrast } from 'polished'

import { figma } from '@ignite-ui/tokens';

export function ColorsGrid() {
    return Object.entries(figma).map(([key, color]) => {
        return (
            <div key={key} style={{ backgroundColor: color, padding: '2rem' }}>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontFamily: 'monospace',
                        color: getContrast(color, '#FFF') < 3.5 ? '#000' : '#FFF',
                    }}
                >
                    <strong>${key}</strong>
                    <span>{color}</span>
                </div>
            </div>
        )
    })
}
