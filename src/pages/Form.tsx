import React from 'react'
import emailjs from '@emailjs/browser'
import {useForm, SubmitHandler} from 'react-hook-form'

type FormInputs = {
  message: string,
  email: string,
  nom: string
}

export default function Form() {

    const {register, handleSubmit, formState : {errors}} = useForm<FormInputs>()

    const onSubmit : SubmitHandler<FormInputs> = data => {
      emailjs.send(
        'service_ttgpdkj',
        'template_qgs6rln',
        {
          nom: data.nom,
          email: data.email,
          message: data.message
        },
        'F21y1n43wEAgByBPi'
      )
     
    }
  




  return (
    <main>
         <h3 className='font-extrabold mb-4 text-3xl text-center mt-12'>Formulaire de contact </h3>

         <form onSubmit={handleSubmit(onSubmit)} className=' w-full h-screen flex items-center justify-center flex-col gap-2'>



                 <div className='mb-3'> 
                 <label className='block text-2xl' htmlFor="nom"> votre nom : </label>
                 <input {...register('nom', {required : true})}className='border' type="text" placeholder='votre nom ' name='nom' id='nom' />
                 {errors.nom && <p className='text-[red]'> nom requis</p>}
                 </div>

                 <div className='mb-3'> 
                 <label className='block text-2xl' htmlFor="email"> votre email : </label>
                  <input {...register('email', {required: true})}className='border' type="email" placeholder='votre email  ' name='email' id='email' />
                  {errors.email && <p className='text-[red]'> Email requis</p>}
                 </div>

                <div className='mb-3'> 
                 <label className='block text-2xl' htmlFor="message"> votre message : </label>
                 <textarea {...register('message',{required: true})}rows={5} className='border resize-none' placeholder='votre message  ' name='message' id='message' />
                 {errors.message && <p className='text-[red]'> Message requis</p>}
                </div>
                
                 <input type="submit" className='block bg-[black] text-white py-3 px-3 hover:bg-[yellow]' />

                 


         </form>
      
    </main>
  )
}
