
export default function CardProduct({ title, image, desc, price }) {
    return (
        <div>
            <div className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                <img src={image} alt="jordans" height="400" width="400" className="object-contain" />
                <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{title}</p>

                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {desc}
                </p>
                <button className="rounded-full px-6 py-3 text-white flex items-center justify-center space-x-2 bg-black mt-4 text-sm font-semibold hover:bg-zinc-700 transition-all duration-300 dark:bg-zinc-800 dark:hover:bg-zinc-600">
                    <span>Buy now</span>
                    <span className="bg-zinc-700 rounded-full text-[0.75rem] px-3 py-1 text-white">EG{price}</span>
                </button>

            </div>
        </div>
    )
}
