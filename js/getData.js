// fetch the json from file/endpoint
const fetchFaqData = async () => {
    const response = await fetch("./js/data.json");
    const data = await response.json();
    //
    return data;
};

limt = 4
const more = () => {
    console.log('more')
    limt = limt + 2
    // data();
    // console.log(limt);
}
async function faq() {
    const faqDom = document.querySelector("#showFaq");
    const { faq } = await fetchFaqData();
    // console.log(faq[0]);
    faq.forEach((obj, index) => {
        const { id, question, answer } = obj;
        // console.log(obj);
        // console.log(index);
        if (index <= limt) {
            const tmp = `
                    <p>
                        <div
                         class="btn bg-theme-colored text-white w-100 wow fadeInLeft"
                         type="button"
                         data-bs-toggle="collapse"
                         data-bs-target="#collapse${id}" 
                         aria-expanded="false"
                        aria-controls="collapse${id}"
                        >
                      ${question}  <i class="fa fa-question-circle" aria-hidden="true"></i> 
                        </div>
                    </p>
                    <div class="collapse  " id="collapse${id}">
                        <div class="card card-body">
                          <i class="fas fa-rss-square"></i>  ${answer}
                        </div>
                    </div>
                 `;
                 
                 faqDom.innerHTML += tmp;
                }
            });
        }

async function courses() {
    const { courses } = await fetchFaqData();
    // loop thought all courses and list them out 
    
    courses.forEach((obj, index) => {
        const { id, title, subTitle, discribsion } = obj;
        const coursesDom = document.querySelector("#showCourses");
        const tmp = `
        <div class="item">
 <div class="project mb-30 border-2px">
    <div class="thumb">
     <img class="img-fullwidth" alt="" src="images/project/p${id}.jpg"> 
     <div class="hover-link">
       <a class="btn btn-flat btn-dark btn-theme-colored btn-md pull-left font-20"
         href="#"><span>$500</span> </a>
     </div>
    </div>
    <div class="project-details p-15 pt-10 pb-10">
     <h5 class="font-14 font-weight-500 mb-5">${subTitle}</h5>
     <h4 class="font-weight-700 text-uppercase mt-0"><a
         href="page-courses-accounting-technologies.html">${title}</a></h4>
     <p>${discribsion}. </p>
     <ul class="list-inline project-conditions text-center m-0 p-10">
       <li class="current-fund"><strong>Time</strong> June 26</li>
       <li class="target-fund"><strong>Discount</strong>15%</li>
       <li class="remaining-days"><strong>Duration</strong>6 Months</li>
     </ul>
    </div>
    </div>
    </div>
    `;
        console.log(obj);
        coursesDom.innerHTML += tmp;
    })
}
// courses()
faq();




// <div class="item">
//           <div class="team-members border-bottom-theme-color-2px text-center maxwidth400">
//             <div class="team-thumb">
//               <img class="img-fullwidth" alt="" src="images/team/lg1.jpg">
//               <div class="team-overlay"></div>
//             </div>
//             <div class="team-details bg-silver-light pt-10 pb-10">
//               <h4 class="text-uppercase font-weight-600 m-5"><a href="page-teachers-details.html">Jhon Smith</a>
//               </h4>
//               <h6 class="text-theme-colored font-15 font-weight-400 mt-0">Teacher Designation</h6>
//               <ul class="styled-icons icon-theme-colored icon-dark icon-circled icon-sm">
//                 <li><a href="#"><i class="fa fa-facebook"></i></a></li>
//                 <li><a href="#"><i class="fa fa-twitter"></i></a></li>
//                 <li><a href="#"><i class="fa fa-instagram"></i></a></li>
//                 <li><a href="#"><i class="fa fa-skype"></i></a></li>
//               </ul>
//             </div>
//           </div>
//         </div>