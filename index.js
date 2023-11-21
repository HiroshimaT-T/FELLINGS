let body = document.querySelector("body")
let valorHeigth = body.offsetHeight
let valorWidth = body.offsetWidth
let cantidadCircle = (Math.trunc(valorHeigth / 150) * Math.trunc(valorWidth / 150))


const main = document.querySelector(".main")
function add(){
    let i = 0;
    while (i < cantidadCircle) {
      let boxCarita = document.createElement("label")
      let carita = document.createElement("div")
      carita.classList.add("normal")
        main.appendChild(boxCarita);
        boxCarita.appendChild(carita);
        i++
    }
    let caritas = document.querySelectorAll(".normal")
    //caritas.forEach(element =>{
    //  element.addEventListener("click", ()=>{ 
    //    element.classList.toggle("colorido"); 
    //    element.classList.toggle("alegre")
    //  })
    //})       
}
add();
let cantidadCaritas = document.querySelector(".main").childElementCount
let numeberRandom = Math.floor(Math.random()*cantidadCaritas)
let caritas = document.querySelectorAll(".normal")


setInterval( ()=> {
    // if(typeof(caritas) == `object`) {
      caritas[numeberRandom].classList.toggle("alegre"); 
      caritas[numeberRandom].classList.toggle("colorido"); 
      // console.log(numeberRandom)
      const potito2 = numeberRandom
      // console.log(potito2)
  
      setTimeout(()=>{
        caritas[potito2].classList.toggle("alegre"); 
        caritas[potito2].classList.toggle("colorido"); 
      },700)
      setTimeout(()=>{
          numeberRandom = Math.floor(Math.random()*cantidadCaritas);
      },800)
  
},1000);





window.addEventListener("resize", () => {
  main.innerHTML = ""
  body = document.querySelector("body")
  valorHeigth = body.offsetHeight
  valorWidth = body.offsetWidth
  cantidadCircle = (Math.trunc(valorHeigth / 150) * Math.trunc(valorWidth / 150))
  add();
  cantidadCaritas = cantidadCircle
  caritas = document.querySelectorAll(".normal")
});

// ------------------------------------------------------------------------------------------------------------------------------
const music = document.getElementById("music")
const played = document.getElementById("buttonPlay")
const volume = document.getElementById("buttonVolumen")
const playIcon = document.getElementById("iconPlay")
const volumenIcon = document.getElementById("iconVolumen")
const pauseIcon = document.getElementById("iconPause")
const muteIcon = document.getElementById("iconMute")

played.addEventListener(`click`, (e)=>{
  if(music.paused){
    music.play();
    playIcon.style.display = "none"
    pauseIcon.style.display = "flex"
  }else {
    music.pause()
    playIcon.style.display = "flex"
    pauseIcon.style.display = "none"
  }
})
volume.addEventListener(`click`, (e)=>{
  if(music.volume==1){
    music.volume = 0
    volumenIcon.style.display = "none"
    muteIcon.style.display = "flex"
  }else {
    music.volume = 1
    volumenIcon.style.display = "flex"
    muteIcon.style.display = "none"

  }
})
//  -------------------------------------------------------------------------------------
const ButtonPresentacion = document.getElementById("buttonPresentacion")
const boxPresentacion = document.getElementById("boxPresentacion")
const boxControlesVolunen = document.querySelector(".container_box-music")

ButtonPresentacion.addEventListener("click", ()=> {
  setTimeout(()=>{boxPresentacion.style.transform = "translateX(200%)"} , 1700) 
  setTimeout(()=>{ body.removeChild(boxPresentacion)} , 3000)
  let x = "60%"
  let c = "calc(100% + 1px)"
  let v = "-2px"
  let b = "5px 0px 0 var(--clr1) , 5px 0px 0 var(--clr1)"
  let y = "-5px 0px 0 var(--clr1) , -5px 0px 0 var(--clr1)"
  let n = "0s,0.25s,0.5s,0.5s,0.5s" 
  let e = "-1px"

  
  setTimeout(()=> {
    ButtonPresentacion.style.boxShadow = "0 0 10px var(--clr1), 0 0 20px var(--clr1), 0 0 30px var(--clr1), 0 0 40px var(--clr1)"
    ButtonPresentacion.style.color = "#222"
  },750)

  document.styleSheets[0].addRule("#buttonPresentacion::before", "transition-delay: " + n + ";");
  document.styleSheets[0].addRule("#buttonPresentacion::before", "width: " + x + ";");
  document.styleSheets[0].addRule("#buttonPresentacion::before", "height: " + c + ";");
  document.styleSheets[0].addRule("#buttonPresentacion::before", "left: " + v + ";");
  document.styleSheets[0].addRule("#buttonPresentacion::before", "box-shadow: " + b + ";");
  
  document.styleSheets[0].addRule("#buttonPresentacion::after", "transition-delay: " + n + ";");
  document.styleSheets[0].addRule("#buttonPresentacion::after", "width: " + x + ";");
  document.styleSheets[0].addRule("#buttonPresentacion::after", "height: " + c + ";");
  document.styleSheets[0].addRule("#buttonPresentacion::after", "right: " + e + ";");
  document.styleSheets[0].addRule("#buttonPresentacion::after", "box-shadow: " + y + ";");
  
  setTimeout(()=>{ boxControlesVolunen.style.flexDirection = "column";} , 2200) 

})

//  -------------------------------------------------------------------------------------
const buttonBlog1 = document.getElementById("buttonBlog1")
const buttonBlog2 = document.getElementById("buttonBlog2")
const buttonBlog3 = document.getElementById("buttonBlog3")

buttonBlog1.addEventListener("click", ()=>{
  if(body.children.blog2){
  }else{
    const blog = document.createElement("section")
    body.appendChild(blog)
    blog.outerHTML = `<section class="container_blog" id="blog1">
                          <div  class="blog">
                            <figure class="blog-box_img" >
                                <img class="blog-img" src="./img/092ab8552a44213003e9938cc59375ec.jpg" alt="">
                            </figure>
                            <h3 class="blog-tittle">Cap1: <span>Pensares</span></h3>
                            <h2 class="blog-subtittle"><span>Ideales &</span> Comprensión</h2>
                            <p class="blog-paragraph">
                                  Lo recuerdo.. como si fuese ayer, yo en mi inmadurez tuve  un sueño imposible, ilógico, ya que se salía de la realidad, aunque era algo tan lindo soñarlo..... pero tan triste despertar y saber que jamás se cumpliría, y lo sé... comprendo bien que eso está mal, salirse de la realidad por un sueño irracional es algo de tontos, pero fue gracias a eso que pude mantenerme vivo,  gracias a eso pude conocer a una persona que se asemejaba a ese sueño.... , quiero que sepas que no me arrepiento de nada, el pasado que viví me volvió lo que soy ahora, mis ideales sobre una persona que tengo ahora son tan diferente en comparación de hace 4 años, es por ello que con el pasar del tiempo empiezo a olvidar esos sentimientos que me afligían como; el odio, la tristeza, la decepción, la indignación, etc. Y más ahora que te conocí, ya no siento arrepentimiento o el deseo de cambiar las cosas del pasado, todas esas experiencias están dejando de afligirme... y poco a poco estoy recuperándome. Y tú lo sabes..., sabes que me odio a mismo, es por eso que me cuesta mostrarte mi rostro.. no porque te piense que te parezca feo.. si no por el temor a que veas lo demacrado que estoy.... siento que si me ves, podrás ver mi interior y que te decepciones... sé que tú me dirás que no va a ser así... pero no puedo de dejar de pensar en ello..., baja autoestima?... talvez, pero lo dudo.. me llevo bien con mis amistades del instituto, con las personas que rodean, no siento temor a que me vean... ese temor no existe ahí, porque que sé que no me importa, no me importa lo que piensen ellos de mí, no son personas muy importantes en mi vida...., pero, en cambio, tú sí, sé lo importante y esencial que eres para mí, por eso cada pequeña cosa que haces me pongo a pensar el porqué... la confianza que te estoy dando, sé que no es toda.. todavía falta..  pero no te preocupes.... y tú más que cualquier persona lo sabes... "El tiempo", soy consciente que en estos días en comparación al primer día que te conocí.. mi confianza hacia vos creció mucho.. sé que poco a poco agarraré aún más confianza.. me aceptaré como soy y aunque me siga sintiendo inconforme conmigo mismo.. sé que tú me aceptaras, así que solo te pido que me des tiempo... y  llegara el dia en que podrás entender lo valioso que fue esperarme. Cambiaré y seguiré cambiando para darte a conocer mi mejor versión… pero lo que no cambiaré y lo que me distingue de los demás… será mi personalidad y los ideales que tengo. Sé que sin ello jamás te hubieras enamorado de mí.... muy curiosos no?, que no fue un amor salido por mi imagen o por mi personalidad, aunque sé que esta última si tuvo que ver... pero la gran parte fue mostrarte mi verdadera forma de pensar, mis ideales sobre el verdadero amor, hacerte ver que lo único que deseaba de alguien era su 100% de confianza, que con solo saber que me esté entregando eso, sería capaz de dar mi vida por aquella persona, te diste cuenta de que ambos pasamos por problemas… pero aunque decaímos, no nos quedamos ahí.. seguimos avanzando.. las decepciones de nuestras relaciones nos hizo entender que encontrar a una persona que realmente nos ame, sería casi imposible... pero seguíamos avanzando, y que bonito que fue que gracias a eso nos encontremos de la forma más inesperada. Dos almas al borde de la decepción por culpa de esta era moderna.... pero ya estamos... estamos juntos en nuestro corazón y distanciado en la realidad, duele... pero me calma saber que seas tú, mi amor eterno. Con todo esto te hago saber que haré todo lo posible para que esta relación funcione, no pienso en desperdiciar esta vida sin antes de intentar hacer todo lo posible para que tú y yo.... seamos felices.
                            </p>
                            <div class="blog-box_button">
                                <label for="leidoBlog1">
                                    <input type="checkbox" name="" id="leidoBlog1">
                                    <div><ion-icon name="checkmark-sharp"></ion-icon></div>
                                    <span>Marcar Leido</span>
                                </label>
                                <button class="blog-button" id="blog1ButtonReady">All ready</button>
                            </div>
                          </div>
                      </section>`
  }
  blog1 = document.getElementById("blog1")
  leidoBlog1 = document.getElementById("leidoBlog1");
  setTimeout(()=>{
    const blog1exe = document.getElementById("blog1") 
    blog1ButtonReady = document.getElementById("blog1ButtonReady")

    blog1exe.style.animationName = "translateOpen"
    blog1exe.style.animationDuration = "2s"
    blog1exe.style.animationTimingFunction = "ease-in-out"
    blog1exe.style.transform = "translateY(0)"

    blog1ButtonReady.addEventListener("click" , ()=> {
      blog1exe.style.animationName = "translateClose"
      blog1exe.style.animationDuration = "1s"
      blog1exe.style.animationTimingFunction = "ease-in-out"
      blog1exe.style.transform = "translateY(-120%)"
      subidaBlog();
    })

  }, 100)
})
buttonBlog2.addEventListener("click", ()=>{
  if(body.children.blog2){
  }else{
    const blog = document.createElement("section")
    body.appendChild(blog)
  
    blog.outerHTML = `<section class="container_blog" id="blog2">
                          <div  class="blog">
                              <figure class="blog-box_img" >
                                  <img class="blog-img" src="./img/a0a732483d2a62f53e1e67a695a1924a.jpg" alt="">
                              </figure>
                              <h3 class="blog-tittle">Cap1: <span>Amors</span></h3>
                              <h2 class="blog-subtittle"><span>Sentimiento &</span> Verdades</h2>
                              <p class="blog-paragraph">
                                Te amo… unas palabras que al leerlo cualquier persona, no sentiría ningún sentimiento... , no se equivoca ... por eso cualquiera no le puede decir "Te amo" a un desconocido.... y si lo hace, es porque solo juega contigo, es por ello que se necesita una conexión fuerte entre ambos para que se sienta ese sentimiento transmitido. Un "Te amo" se vea muy simple no?... pero si es dicho por alguien a quien conozcas de verdad y sabes que él es sincero y honesto.... esas palabras se vuelven un mar de emociones... comprendes que en verdad te ama, que te valora, que solo tú eres su persona favorita... sabes que a nadie más se lo ha dicho desde que comenzaron a entablar esa relación, y si ya son pareja, que él te lo diga a cada rato... no es porque sea cursi o inseguro, que puede que él piense que ya no le quieres y siente la necesidad de decírtelo porque también desea que tú le digas que lo amas... para que esa inseguridad se vaya… no!, no es así... y la verdad es que él siente la necesidad de siempre hacerte recordar porque quiere que sepas que aquí siempre hay alguien que te valora, te respeta, te comprende y te ama tanto... yo cuando te digo que te amo es porque: ... en el momento que hablamos.. mi corazón se acelera, ahí me doy cuenta de que eres la única que me lo pone así... tú me  tienes hipnotizado cuando me cuentas sobre tu vida… los chismes que te cuentan, las cosas que te gustan... cuando me haces saber lo mucho que me valoras y amas..., todos esos sentimientos que me generan… lo transmito al decirte que "Te amo"... y me pongo a contarte lo mucho que me haces feliz... sé que mis palabras te llegan a tu corazón, deseo lo mejor para ti como tú lo haces para mí. 
                                <br>
                                Te diré esto… y dudo que alguien te lo haya dicho… yo no creo que haya intensidad de amor que no involucre salir lastimado…, si amas, pero no te entregas y no funciona... duele el saber el "hubiera". Por eso creo que conviene amar con todo el corazón, porque si te retienes... quizás eso que reservaste fue lo que falto… y no creo que importe haber dado todo o un poco de ti…  porque si de verdad lo amaste va a doler .... pero al menos sabrás que diste todo de ti para hacerlo funcionar... por ello es que cuando me di cuenta sobre mis sentimientos hacia vos. Tuve que pensarlo... sé que tengo muchas responsabilidades… pero tampoco iba a pensar en perderte...me tome unos días para encontrar una respuesta... también fue gracias a una abuelita que me hablo de su vida y me dio a entender sobre lo importante que es la responsabilidad… ser responsable a lo que deseo... y lo entendí.. que si no lo intentaba no lo conseguiría... pero si lo intentara tal ves lo conseguiría. Así que fui responsable con mis sentimientos... planee un día para decírtelo... y como no habíamos hablado por unos días... sentí la necesidad querer recuperarlo… pasando tiempo contigo… haciéndote saber lo mucho que me importas... lo mucho que me preocupo por usted... su alimentación, su estado de humor... y su salud... pero no me iba a esperar que usted diera el primer paso,... eso fue un golpe bajo para mí.. no sabía que decir al momento… estaba feliz, por mi mente paso de todo… vi un lindo futuro contigo... y bueno, yo acepte tus sentimientos. 
                                <br>
                                No puedo expresarte con palabras lo mucho que te amo… así que, hago esta página para que el mundo sepa que yo te amo de verdad... y sigo pensando que no es suficiente... sé que la distancia nos limita ... pero desde aquí hago todo lo posible para hacerte sentir amada. Tu amabilidad me enamoro... esa vez que me donaste Roblox... enserio me hizo sentir muy especial porque fuiste la única en hacerlo, tu honestidad me enamoro... esa vez que nos la pasamos toda la noche conversando... siendo vos la que empezó a contarme de su pasado… siempre honesta con tu forma de pensar... de como mirabas el mundo... pero lo que pensabas de mí... fue tan lindo que hiciste que yo también lo hiciera, tu empatía hacia mí hizo que me latiera el corazón por 1000, el hecho que me comprendieras y que intentaras hacerme sentir mejor ...  me dio unas ganas de querer abrazarte tan fuerte hasta que se te salga un riñón y después venderlo, ksksks... realmente me gusto al igual que tu sinceridad, tu lealtad que me lo demostraste hace poco... tu forma de amar es tan lindo que si todas las personas fueran así... seguro que el mundo fuera alegre, tú madures es un ejemplo a seguir... sinceramente espero que nuestros hijos tengan esa parte de ti... que se vuelvan bien maduros como para pensar que con el amor no se juega, tu valentía es admirable... sé que caíste varias veces, pero no te quedaste ahí.. tu seguías levantándote y levantándote ... en serio ... usted mi amor... frente a mí eres tan perfecta... tus defectos me parecen tierno... todo de ti me gusta... y más si es algo hecho por tus propias manos. Expresar lo que siento por ti... es como tratar de contar todas las estrellas del universo. Desde el momento en que entraste en mi vida, todo cambió, quiero que sepas ... que tu presencia y tu amor es lo que hace seguir de pie.
                                <br>
                                Cada día me doy cuenta de que contigo es una aventura llena de risas y cariño. Así que con estas palabras...  quiero que sepas que mi amor por ti es más grande de lo que las palabras pueden expresar. Eres mi inspiración, mi motivación y mi razón para creer en un mañana lleno de amor y felicidad. Eres mi amor eterno.... y estoy agradecido cada día por tenerte a mi lado.
                                <br>
                                TE AMO, CRISTHEL DE LOS ANGELES AGUERO GUARDADO RODAS❤
                              </p>
                              <div class="blog-box_button">
                                  <label for="leidoBlog2">
                                      <input type="checkbox" name="" id="leidoBlog2">
                                      <div><ion-icon name="checkmark-sharp"></ion-icon></div>
                                      <span>Marcar Leido</span>
                                  </label>
                                  <button class="blog-button" id="blog2ButtonReady">All ready</button>
                              </div>
                          </div>
                      </section>`
  }
  blog2 = document.getElementById("blog2")
  leidoBlog2 = document.getElementById("leidoBlog2");
  setTimeout(()=>{
    const blog2exe = document.getElementById("blog2") 
    blog2ButtonReady = document.getElementById("blog2ButtonReady")

    blog2exe.style.animationName = "translateOpen"
    blog2exe.style.animationDuration = "2s"
    blog2exe.style.animationTimingFunction = "ease-in-out"
    blog2exe.style.transform = "translateY(0)"

    blog2ButtonReady.addEventListener("click" , ()=> {
      blog2exe.style.animationName = "translateClose"
      blog2exe.style.animationDuration = "1s"
      blog2exe.style.animationTimingFunction = "ease-in-out"
      blog2exe.style.transform = "translateY(-120%)"
      subidaBlog()
    })

  }, 100)
})
buttonBlog3.addEventListener("click", ()=>{
  
  if(body.children.blog3){
  }else{
    const blog = document.createElement("section")
    body.appendChild(blog)
    blog.outerHTML = `<section class="container_blog" id="blog3">
                          <div  class="blog">
                              <figure class="blog-box_img" >
                                  <img class="blog-img" src="./img/6d00015ad4dbe16cf96759a180221c3a.jpg" alt="">
                              </figure>
                              <h3 class="blog-tittle">Cap3: <span>Metas</span></h3>
                              <h2 class="blog-subtittle"><span>Presente &</span> Futuro</h2>
                              <p class="blog-paragraph">
                              Tengo muchos planes, la verdad… pero quiero decirte uno en específico. Yo estudio en el instituto para una carrera secundaria... muy aparte estaba estudiando otra carrera... bueno no recibiré un cartón por eso… pero me hará ganar mucho dinero… lo suficiente como para poder depender de ello. Te dije que por lo mínimo en un año podre cumplir todas mis metas… realmente eso espero, pero para ello tengo que concentrarme al 100% en mis objetivos… y lo que te pediré es muy egoísta de mi parte, realmente me hubiera gustado estar en buena posición, pero quiero ante todo recuerda que yo siempre esperaré.
                              Me esforzaré al 120% por nuestro futuro
                              <br>
                              Eso lo hablaremos por llamada.
                              <br>
                              Pero este casillero estaré integrando todas las cosas que haremos juntos en un futuro.
                              Metas y deseos cumplidos: 
                              <br>
                              1.-<br>
                              2.-<br>
                              3.-<br>
                              4.-<br>
                              5.-<br>
                              6.-<br>
                              7.-<br>
                              8.-<br>
                              9.-<br>
                              10.-<br>
                              11.-<br>
                              12.-<br>
                              13.-<br>
                              14.-<br>
                              15.-<br>
                              16.-<br>
                              </p>
                              <div class="blog-box_button">
                                  <label for="leidoBlog3">
                                      <input type="checkbox" name="" id="leidoBlog3">
                                      <div><ion-icon name="checkmark-sharp"></ion-icon></div>
                                      <span>Marcar Leido</span>
                                  </label>
                                  <button class="blog-button" id="blog3ButtonReady">All ready</button>
                              </div>
                          </div>
                      </section>>`
  }
  blog3 = document.getElementById("blog3")
  leidoBlog3 = document.getElementById("leidoBlog3");
  setTimeout(()=>{
    const blog3exe = document.getElementById("blog3") 
    blog3ButtonReady = document.getElementById("blog3ButtonReady")

    blog3exe.style.animationName = "translateOpen"
    blog3exe.style.animationDuration = "2s"
    blog3exe.style.animationTimingFunction = "ease-in-out"
    blog3exe.style.transform = "translateY(0)"

    blog3ButtonReady.addEventListener("click" , ()=> {
      blog3exe.style.animationName = "translateClose"
      blog3exe.style.animationDuration = "1s"
      blog3exe.style.animationTimingFunction = "ease-in-out"
      blog3exe.style.transform = "translateY(-120%)"
      subidaBlog()
    })

  }, 100)
})
//  -------------------------------------------------------------------------------------
let leidoBlog1 
let leidoBlog2 
let leidoBlog3 
let blog1 
let blog2 
let blog3 
let booleanButtonDeclaration = false

function subidaBlog(){
  setTimeout(()=>{
    if((blog1.style.transform == "translateY(-120%)") && (blog2.style.transform == "translateY(-120%)") && (blog3.style.transform == "translateY(-120%)") ){
      booleanButtonDeclaration = true
    }
  },1500)
  setTimeout(buttonFinalDeclarationAparecer,1600)
} 
function buttonFinalDeclarationAparecer(){
  if(leidoBlog1.checked && leidoBlog2.checked && leidoBlog3.checked) {
    buttonPresentacionFinalBoxexe.style.opacity = "1"
    buttonPresentacionFinalexe.style.opacity = "1"
    buttonPresentacionFinalBoxexe.style.pointerEvents = "auto"
  }else {
    buttonPresentacionFinalBoxexe.style.opacity = "0"
    buttonPresentacionFinalexe.style.opacity = "0"
    buttonPresentacionFinalBoxexe.style.pointerEvents = "none"
  }
}

//  -------------------------------------------------------------------------------------
const buttonPresentacionFinalexe = document.getElementById("buttonPresentacionFinalexe");
const buttonPresentacionFinalBoxexe = document.getElementById("buttonPresentacionFinalBoxexe");
const presentacionFinalexeET = document.createElement("section");
buttonPresentacionFinalexe.addEventListener("click", ()=> {
  body.removeChild(blog1)
  body.removeChild(blog2)
  body.removeChild(blog3)

  body.appendChild(presentacionFinalexeET)
  presentacionFinalexeET.outerHTML = `<section class="section_declaration"> 
                                      <div class="section_box-container_declaration">

                                          <h3 class="blog-tittle" id="reparet">CapFinal: <span>Confesión</span></h3>
                                          <h2 class="blog-subtittle"><span>Sentimientos &</span> Finish</h2>       
                                          <!-- <ion-icon name="heart"></ion-icon> -->
                                          <p class="blog-paragraph">"Te quiero desde que te conocí, desde que te metiste dentro de mi corazón, desde que te convertiste en mi ilusión." 
                                          </br>
                                          </br> ESTE ES UN RECORDATORIO DE LO MUCHO QUE TE AMO Y PORSUPESTO SIEMPRE ESTARA AHI
                                          </br>
                                          </br> Te amo demasiado: mi polola, mi chikita, mi princesa, mi chula, mi kokoro, mi musa, mi wawi, mi colita, mi amorcito, mi tesoro, mi vida, mi osita, mi tesoro, mi chukuruku... mi pequeña chika♥.
                                          </p>
                                          <!-- <ion-icon name="heart"></ion-icon> -->
                                          
                                      
                                          <div class="container_box_declaration-icon">
                                              <div class="box_declaration-icon">
                                                  <div class="declaration-icon">
                                                      <span style="--i:1;"></span>
                                                      <span style="--i:2;"></span>
                                                      <span style="--i:3;"></span>
                                                      <span style="--i:4;"></span>
                                                      <span style="--i:5;"></span>
                                                      <span style="--i:6;"></span>
                                                      <span style="--i:7;"></span>
                                                      <span style="--i:8;"></span>
                                                      <span style="--i:9;"></span>
                                                      <span style="--i:10;"></span>
                                                      <span style="--i:11;"></span>
                                                      <span style="--i:12;"></span>
                                                  </div>
                                                  <h3>I LOVE <b>YOU</b><br><i class="fa-solid fa-heart"></i></h3>
                                              </div>
                                          </div>
                                          <div class="container_box_declaration-continue">
                                              <label for="declarationCheck">
                                                  <input type="checkbox" name="" id="declarationCheck">
                                                  <div><i class="fa-solid fa-check"></i></div>
                                                  <span>Marcar Leido</span>
                                              </label>
                                              <button class="blog-button" id="declarationCheckContinue">Continue</button>
                                          </div> 
                                      </section>`
                                  
  let x = "60%"
  let c = "calc(100% + 1px)"
  let v = "-2px"
  let b = "5px 0px 0 var(--clr1) , 5px 0px 0 var(--clr1)"
  let y = "-5px 0px 0 var(--clr1) , -5px 0px 0 var(--clr1)"
  let n = "0s,0.25s,0.5s,0.5s,0.5s" 
  let e = "-1px"
  
  document.styleSheets[0].addRule("#buttonPresentacionFinalexe::before", "transition-delay: " + n + ";");
  document.styleSheets[0].addRule("#buttonPresentacionFinalexe::before", "width: " + x + ";");
  document.styleSheets[0].addRule("#buttonPresentacionFinalexe::before", "height: " + c + ";");
  document.styleSheets[0].addRule("#buttonPresentacionFinalexe::before", "left: " + v + ";");
  document.styleSheets[0].addRule("#buttonPresentacionFinalexe::before", "box-shadow: " + b + ";");
  
  document.styleSheets[0].addRule("#buttonPresentacionFinalexe::after", "transition-delay: " + n + ";");
  document.styleSheets[0].addRule("#buttonPresentacionFinalexe::after", "width: " + x + ";");
  document.styleSheets[0].addRule("#buttonPresentacionFinalexe::after", "height: " + c + ";");
  document.styleSheets[0].addRule("#buttonPresentacionFinalexe::after", "right: " + e + ";");
  document.styleSheets[0].addRule("#buttonPresentacionFinalexe::after", "box-shadow: " + y + ";");
  
  
  let declarationCheckContinue = document.getElementById("declarationCheckContinue");
  declarationCheckContinue.addEventListener("click", ()=>{
  const declarationCheck = document.getElementById("declarationCheck")
  if(declarationCheck.checked){
    // const svg = document.querySelector(".svg")  
    // svg.style.opacity = "0"

    // setTimeout(()=>{
      // const containerboxdeclarationAskAnswer = document.querySelector(".container_box_declaration-ask-answer");
      // containerboxdeclarationAskAnswer.removeChild(svg)
      // const declarationDF1 = document.querySelector(".container_button-declarationFN")  
      // const declarationDF2 = document.querySelector(".container_box_declaration-ask")  
      // const declarationDF3 = document.querySelector(".container_box_declaration-ask-answer figure")  
    
      // declarationDF1.style.opacity = "1" 
      // declarationDF2.style.opacity = "1" 
      // declarationDF3.style.opacity = "1" 
    // },800)
    body.style.transform = "scale(0)"
        setTimeout(()=>{
          body.innerHTML = ""
          const boxMyLove = document.createElement("section")
          body.appendChild(boxMyLove)
          boxMyLove.outerHTML = `   
          <div class="respuesta">
            <h2>
              Oshe amor, si quieres volver a leer nuevamente solo tienes que recargar la pagina. TE AMO
            </h2>
             </div>`
          body.style.transform = "scale(1)"

        },1000)
  }  

  })
  setTimeout(()=> {
    buttonPresentacionFinalexe.style.boxShadow = "0 0 10px var(--clr1), 0 0 20px var(--clr1), 0 0 30px var(--clr1), 0 0 40px var(--clr1)"
    buttonPresentacionFinalexe.style.color = "#222"
  },750)

  setTimeout(()=>{
    const presentacionFinalexe = document.querySelector(".section_declaration")
    presentacionFinalexe.style.transform = "translateY(0)"
    setTimeout(()=>{
      body.removeChild(buttonPresentacionFinalBoxexe)
    },1000)
  },1000)

})

const carousel = document.querySelector(".box_container"),
firstImg = carousel.querySelectorAll(".caja_protectora")[0];
const arrowIcons = document.querySelectorAll(".section_box-slider i");

let firstImgWidth = firstImg.clientWidth; 
console.log("sdasdsad " + firstImgWidth)
arrowIcons.forEach(icon => {
  icon.addEventListener("click", () => {
    console.log("xaxa")
    //carousel.scrollLeft += icon.id == "left"? -firstImgWidth : firstImgWidth;
    if(icon.id == "left") {
      carousel.scrollLeft -= firstImgWidth;
      } else {
      carousel.scrollLeft += firstImgWidth;
      }
  });
});