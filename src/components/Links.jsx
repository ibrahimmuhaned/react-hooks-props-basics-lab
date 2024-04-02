// import React from "react";

// function Links({ github, linkedin }) {
//   return (
//     <div>
//       <h3>Links</h3>
//       <a href={github}>{github}</a>
//       <br />
//       <a href={linkedin}>{linkedin}</a>
//     </div>
//   );
// }

// export default Links;


function Links(props){
    return (
        <div>
            <h3>Links</h3>
            <a href={props.github}>{props.github}</a>
            <a href={props.linkedin}>{props.linkedin}</a>

        </div>
    )
}

export default Links;
