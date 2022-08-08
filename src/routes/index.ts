export function GET() {
  return {
    body: {
      title: 'Title from endpoint'
    }
  }
}

export async function POST({ request }) {
  const requestData = await request.json();

  const oldA = requestData.a;

  return {
    body: {
      data: { a: oldA + 1, b: 2 }
    }
  }
}