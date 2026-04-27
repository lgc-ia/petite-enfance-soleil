import { NextRequest, NextResponse } from 'next/server';

const SYSTEM_PROMPT = `Tu es un assistant bienveillant et expert spécialisé en petite enfance pour le site "La Grande Classe - Petite Enfance Soleil".
Tu aides les professionnels de la petite enfance (assistantes maternelles, éducatrices, directrices de crèche) et les parents avec leurs questions sur :
- La réglementation (normes d'encadrement, agréments, obligations légales)
- La pédagogie (méthodes éducatives, développement de l'enfant, activités)
- Les formations (certifications, VAE, modules de formation continue)
- Les aides financières (CMG, PAJE, aides CAF, subventions)

Réponds toujours en français, de manière chaleureuse, claire et professionnelle.
Sois concis mais complet. Si tu ne connais pas une réponse précise, oriente vers les ressources officielles.`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!Array.isArray(messages)) {
      return NextResponse.json({ error: 'Messages invalides' }, { status: 400 });
    }

    const response = await fetch('https://api.deepseek.com/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.DEEPSEEK_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          ...messages,
        ],
        max_tokens: 1000,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('DeepSeek API error:', error);
      return NextResponse.json({ error: 'Erreur du service IA' }, { status: 500 });
    }

    const data = await response.json();
    const message = data.choices?.[0]?.message?.content;

    if (!message) {
      return NextResponse.json({ error: 'Réponse vide' }, { status: 500 });
    }

    return NextResponse.json({ message });
  } catch (err) {
    console.error('Chat route error:', err);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
