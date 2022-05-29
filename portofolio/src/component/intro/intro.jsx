import "./intro.css";
import profile2 from "../../img/my pic2.png";


const intro = () => {
    return (
        <div className="i">
            <p className="i-desc">
                    <br></br>
                PORTOFOLIO <br></br>
                </p>
            <div className="i-left-wrapper">
                <h2 className="i-intro">Hai, my name is</h2>
                <h1 className="i-name">Stephanie Napitupulu</h1>
                <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item">Teknik Informatika</div>
                        <div className="i-title-item">119140070</div>
                        <div className="i-title-item">Praktikum PWL</div>
                        <div className="i-title-item">Portofolio</div>
                        <div className="i-title-item">React JS</div>
                    </div>
                </div>
                
            </div>
            <svg
                width = "75"
                height = "75"
                viewBox = "0 0 75 75"
                fill = "none"
                stroke = "black"
                className="i-scroll"
                xmlns = "http://www.w3.org/2000/svg"
            >
                <g id="scroll">
                    <path
                    id="Vector"
                    d="M40.5 15L34.5 9L28.5 15"
                    stroke-width="3"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    />
                    <path
                    id="Vector_2"
                    d="M28.5 24L34.5 30L40.5 24"
                    stroke-width="3"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    />
                    <g id="Group">
                    <path
                    id="Vektor_3"
                    d="M9 37 .5H60"
                    stroke-width="3"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    />                 
                    </g>
                    <path
                        id="Vektor_4"
                        d="M34.5 27V9"
                        stroke-width="2.9895"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        />
                    <g id="Group_2">
                        <path
                        id="Vektor_5"
                        d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5"
                        stroke-width="3"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        />
                    </g>
                </g>
            </svg>
            <div className="i-left">
                <img src={profile2} alt="" className="i-img" />
            </div>
        </div>
    );
}

export default intro;
