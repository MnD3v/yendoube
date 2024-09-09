import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const { auth_token, phone_number, amount, description, identifier, network } = await request.json();

    try {
        const response = await fetch('https://paygateglobal.com/api/v1/pay', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                auth_token,
                phone_number,
                amount,
                description,
                identifier,
                network,
            }),
        });

        const data = await response.json();
        console.log(data)
        // Vérifie si la transaction a été enregistrée avec succès
        if (data.status === 0) {
            return NextResponse.json({ success: true, tx_reference: data.tx_reference });
        } else {
            return NextResponse.json({ success: false, error: data });
        }
    } catch (error) {
        return NextResponse.json({ success: false, error: 'Une erreur est survenue' });
    }
}
