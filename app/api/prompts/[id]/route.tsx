import { prisma } from "@/lib/prisma";

export async function GET(request: Request, { params }: { params: { id: number } }): Promise<Response> {
    try {
        const prompt = await prisma.prompt.findUnique({
            where: {  id: Number(params.id) },
            include: {
                posts: true,
            }
        });
        return Response.json({data: prompt, message: 'Success'}, {status: 200});
    } catch (error: any) {
        return Response.json({message: `Une erreur s'est produite: ${error.message}`}, { status: 500 });
    }
}

export async function PUT(request: Request, { params }: { params: { id: number } }): Promise<Response> {
    const body = request.json();
    try {
        const prompt = await prisma.prompt.update({
            where: {  id: Number(params.id) },
            data: {...body}
        });
        return Response.json({data: prompt, message: 'Success'}, {status: 200});
    } catch (error: any) {
        return Response.json({message: `Une erreur s'est produite: ${error.message}`}, { status: 500 });
    }
}

export async function DELETE(request: Request, { params }: { params: { id: number } }): Promise<Response> {
    try {
        const prompt = await prisma.prompt.delete({
            where: {  id: Number(params.id) },
            include: {
                posts: true,
            }
        });
        return Response.json({data: prompt, message: 'Success'}, {status: 200});
    } catch (error: any) {
        return Response.json({message: `Une erreur s'est produite: ${error.message}`}, { status: 500 });
    }
}