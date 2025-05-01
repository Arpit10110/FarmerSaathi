import { NextResponse } from 'next/server';

export const GET = async()=>{

    try {

        return NextResponse.json({
            success:true,
            message:"Welcome to the backend part "
        })
        
    } catch (error) {
        return NextResponse.json({
            success:false,
            error:error
        })
    }
 
} 