export default async function handler(req, res) {
    if (req.method !== "POST") {
        res.status(500).end(`Method ${req.method} Not Allowed`)
    }
    const drink = req.body
    try {
        const response = await fetch('http://localhost:3001/drinks', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(drink)
        })
        const data = await response.json()
        res.status(200).json(data)
    }
    catch(e) {
        res.status(400).json({message: e || "Caught Error"})
    }
}