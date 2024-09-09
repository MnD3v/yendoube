import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const { auth_token, tx_reference } = await request.json();

    try {
        const response = await fetch('https://paygateglobal.com/api/v1/status', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                auth_token,
                tx_reference
            }),
        });

        console.log(tx_reference)
        const data = await response.json();
        console.log(data)
        console.log("Si tu ne vois jamais mes larmes, c'est parcequ'elle coulent a l'interieur")
        // Vérifie si la transaction a été enregistrée avec succès
        if (data.status === 0) {
            return NextResponse.json({ success: true, status: data.status });
        } else {
     
            return NextResponse.json({ success: false, error: data });
        }
    } catch (error) {
        return NextResponse.json({ success: false, error: 'Une erreur est survenue' });
    }
}
