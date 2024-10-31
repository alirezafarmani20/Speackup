export default function Container({ children }) {
    return (
        <>
            <div className="mx-3 sm:mx-5 md:mx-7">
                {children}
            </div>
        </>
    )
}