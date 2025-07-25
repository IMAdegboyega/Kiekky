import Image from 'next/image'
import React from 'react'

const layout = ({ children }) => {
  return (
    <div className='flex min-h-screen'>
        <section>
            <div>
                <Image
                    src="/img/AuthBackground.png"
                    alt="Background Image"
                    width={800}
                    height={800}
                />
            </div>
        </section>

        <section>
            {children}
        </section>
    </div>
  )
}

export default layout