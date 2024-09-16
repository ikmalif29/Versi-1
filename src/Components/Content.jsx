/* eslint-disable react/prop-types */
export default function Content(props) {
    return (
        <main>

            {/* Memanggil funtion yang dikirim melalui props */}

            {props.dataDiri()}

            {/* 
            
                kurang lebih seperti diatas cara pemanggilan props yang berupa funtion
                // di belakang nya ada tanda funtion karena dia sebuah funtion
                // jadi isi di dalam fungtion nya itu berpa data yang berada di App.jsx
                // dan di tampilkan di dalam funtion Content
            
            */}
            <Ant />
    
        </main>
    )
}

function Ant(){
    return <h2>Mungkin Segitu Dulu Untuk Versi 1</h2>;
};