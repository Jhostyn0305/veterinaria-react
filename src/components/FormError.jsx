function FormError({messageError}) {
    return (
        <div className="bg-red-600 font-bold p-3 text-center rounded-md text-white uppercase">
            <p >{messageError}</p>
        </div>
    )
}

export default FormError