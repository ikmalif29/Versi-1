/* eslint-disable react/prop-types */
function Header(props) {
    return (
        <>
            <header>
                <h1>{props.headingText}</h1>

                {/*

                    pemanggilan props disini harus sesuai dengan penamaan variabel
                    tampungan yang berada di komponents induk

                */}

                <p>{props.textValue}</p>

                {/* 

                    seperti pemanggilan sebelum nya , pemanggilan variabel nya
                    harus sesuai dengan nama variabel yang di kirim
                
                */}
            </header>
        </>
    )
}

export default Header;