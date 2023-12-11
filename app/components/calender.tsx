
const Calender = () => {
    const numbers = Array.from({length: 32}, (value, index)=> index)
  return (
    <section className="w-full rounded-xl bg-csecondary py-4">
        <div className="flex flex-col items-center justify-center w-full px-6 bg-gray-900">
            <div className="grid w-full max-w-xl grid-cols-7 gap-6 mx-auto mb-2">
            <p className="flex items-center justify-center h-8 text-neutral-400">Sa</p>
            <p className="flex items-center justify-center h-8 text-neutral-400">Fr</p>
            <p className="flex items-center justify-center h-8 text-neutral-400">Th</p>
            <p className="flex items-center justify-center h-8 text-neutral-400">We</p>
            <p className="flex items-center justify-center h-8 text-neutral-400">Tu</p>
            <p className="flex items-center justify-center h-8 text-neutral-400">Mo</p>
            <p className="flex items-center justify-center h-8 text-neutral-400">Su</p>
            </div>

            <div className="grid w-full max-w-xl grid-cols-7 gap-6 mx-auto">
                {numbers.map((num) => {
                    return (
                        <div className="relative w-full h-4 cursor-pointer" key={num}>
                            <div className="absolute inset-[3px] flex items-center justify-center bg-gray-900 text-white">{num}</div>
                        </div>
                    )
                })}
            </div>
        </div>

    </section>
  )
}

export default Calender