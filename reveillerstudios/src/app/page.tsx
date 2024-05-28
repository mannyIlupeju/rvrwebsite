'use client'


import React, {useEffect, ReactNode} from 'react'
import Loading from '@/components/Loading/Loading'
import { useLoading} from '@/Context/context/LoadingContext'
import Cursor from '@/components/Cursor/cursor'
import Sketch from '@/components/Canvas/canvas'




export default function Home() {
  const {loading, setIsLoading} = useLoading();


    return (
      <>
        { loading ? 
          (<Loading/>)
        :
          ( 
          <section className="bg-gray-200 ">
            <main className="flex items-center flex-col overflow-x-hidden overflow-y-hidden">
            <Sketch/>
        
            </main>   
            </section>
          )}
      </>   
   )

}
