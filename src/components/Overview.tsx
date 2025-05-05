'use client'

// Define the type for a machine
interface Machine {
    name: string;
    status: string;
    flow: string;
    id: string;
    remaining1: string;
    remaining2: string;
    standardOutput: string;
    alarm: string;
    color: string;
}

export const Overview = () => {
    const labels = [
        "Extr.",
        "Stan produkcji",
        "wydajność zad. [kg/h]",
        "zlecenie",
        "wydajność zlecenia planu (DS) [kg/h]",
        "wydajność akt.[kg/h]",
        "Alarm"
    ];

    const machines: Machine[] = [
        {
            name: "M1",
            status: "dobra",
            flow: "393,8",
            id: "160572/1",
            remaining1: "392,4",
            remaining2: "436,0",
            standardOutput: "436,0",
            alarm: "Brak alarmu",
            color: "#ffff00"
        },
        {
            name: "M2",
            status: "dobra",
            flow: "430,6",
            id: "160818/1-E",
            remaining1: "129,6",
            remaining2: "144,0",
            standardOutput: "144,0",
            alarm: "Brak alarmu",
            color: "#008000"
        },
        {
            name: "M3",
            status: "odpady",
            flow: "352,9",
            id: "160617/1",
            remaining1: "351,9",
            remaining2: "391,0",
            standardOutput: "391,0",
            alarm: "Brak surowca",
            color: "#ff0000"
        },
        {
            name: "M4",
            status: "dobra",
            flow: "432,2",
            id: "160653/3",
            remaining1: "432,0",
            remaining2: "480,0",
            standardOutput: "480,0",
            alarm: "Brak alarmu",
            color: "#800080"
        },
        {
            name: "M5",
            status: "odpady",
            flow: "110,2",
            id: "160660/2",
            remaining1: "108,0",
            remaining2: "120,0",
            standardOutput: "120,0",
            alarm: "Brak alarmu",
            color: "#008000"
        },
        {
            name: "M6",
            status: "dobra",
            flow: "162,0",
            id: "160693/2",
            remaining1: "162,0",
            remaining2: "180,0",
            standardOutput: "180,0",
            alarm: "Brak alarmu",
            color: "#ff8c00"
        }
    ];

    const renderRow = (machine: Machine) => {
        const isAlarmRow = machine.alarm === "Brak surowca";
        return (
            <tr
                key={machine.name}
                className={`${isAlarmRow ? "bg-red-300" : "bg-white"} border-b`}
            >
                <td className="px-6 py-3 rounded-sm" style={{ display: 'flex', alignItems: 'center' }}>
                    <span  
                        style={{ 
                        backgroundColor: machine.color, 
                        display: 'inline-block', 
                        width: '1.5rem', 
                        height: '1.5rem', 
                        borderRadius: '10%',
                        marginRight: '0.5rem',
                        border: '1px solid black'
                        }}
                    ></span>
                {machine.name}
                </td>
                <td className="px-6 py-3"><span className={`px-2 py-1 rounded-md ${machine.status === "dobra" ? "bg-green-100" : machine.status === "odpady" ? "bg-yellow-100" : ""}`}>{machine.status}</span></td>
                <td className="px-6 py-3">{machine.flow}</td>
                <td className="px-6 py-3">{machine.id}</td>
                <td className="px-6 py-3">{machine.remaining1}</td>
                <td className="px-6 py-3">{machine.standardOutput}</td>
                <td className="px-6 py-3">
                    {machine.alarm === "Brak surowca" ? (
                        <strong>{machine.alarm}</strong>
                    ) : (
                        machine.alarm
                    )}
                </td>
            </tr>
        );
    };

    return (
        <div className="relative overflow-hidden p-7">
            <table className="w-full text-left text-gray-700 text-base font-semibold">
                <thead className="text-xs text-gray-700 uppercase bg-gray-300">
                    <tr>
                        {labels.map(label => (
                            <th scope="col" key={label} className="px-6 py-3">
                                {label}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {machines.map(machine => renderRow(machine))}
                </tbody>
            </table>
        </div>
    );
};