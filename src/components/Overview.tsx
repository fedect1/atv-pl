'use client'

// Define the type for a machine
interface Machine {
    name: string;
    status: string;
    flow: string;
    id: string;
    remaining1: string;
    remaining2: string;
    alarm: string;
    color: string;
}

export const Overview = () => {
    const labels = [
        "Extruder",
        "Stato",
        "Portata Attuale [kg/h]",
        "ID webMIP",
        "Rimanente Avv.1 Fine [h:min]",
        "Rimanente Avv.2 Fine [h:min]",
        "Alarm"
    ];

    const machines: Machine[] = [
        {
            name: "M21",
            status: "Good",
            flow: "581,1",
            id: "57272",
            remaining1: "00:11",
            remaining2: "01:00",
            alarm: "No alarm",
            color: "#ffff00"
        },
        {
            name: "M22",
            status: "Scarto",
            flow: "370,9",
            id: "56513",
            remaining1: "05:20",
            remaining2: "03:21",
            alarm: "Lack of raw material",
            color: "#008000"
        },
        {
            name: "M23",
            status: "Good",
            flow: "432,5",
            id: "57232",
            remaining1: "03:00",
            remaining2: "2:00",
            alarm: "No alarm",
            color: "#ff0000"
        },
        {
            name: "M24",
            status: "Good",
            flow: "432,5",
            id: "57232",
            remaining1: "03:00",
            remaining2: "05:00",
            alarm: "No alarm",
            color: "#ffffff"
        },
        {
            name: "M25",
            status: "Good",
            flow: "432,5",
            id: "57232",
            remaining1: "10:00",
            remaining2: "09:00",
            alarm: "No alarm",
            color: "#d2691e"
        },
        {
            name: "M26",
            status: "Good",
            flow: "432,5",
            id: "57232",
            remaining1: "02:00",
            remaining2: "01:00",
            alarm: "No alarm",
            color: "#0000cd"
        }
    ];

    const renderRow = (machine: Machine) => {
        const isAlarmRow = machine.alarm === "Lack of raw material";
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
                <td className="px-6 py-3">{machine.status}</td>
                <td className="px-6 py-3">{machine.flow}</td>
                <td className="px-6 py-3">{machine.id}</td>
                <td className="px-6 py-3">{machine.remaining1}</td>
                <td className="px-6 py-3">{machine.remaining2}</td>
                <td className="px-6 py-3">
                    {machine.alarm === "Lack of raw material" ? (
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
            <table className="w-full text-sm text-left text-gray-500">
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