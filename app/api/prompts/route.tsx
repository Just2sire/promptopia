import { prisma } from "@/lib/prisma";

export async function GET(request: Request): Promise<Response> {
    try {
        const promts = await prisma.prompt.findMany();

        return Response.json({data: promts, message: 'Success'}, {status: 200});
    } catch (error: any) {
        return Response.json({message: `Une erreur s'est produite: ${error.message}`}, { status: 500 });
    }
}


export async function POST(request: Request): Promise<Response> {
    const body = await request.json();
    try {
        const promt = await prisma.promt.create({
            data: body,
        });

        return Response.json({ data: promt, message: 'Success' }, { status: 200 });
    } catch (error: any) {
        return Response.json({ message: `Une erreur s'est produite: ${error.message}` }, { status: 500 });
    }
}