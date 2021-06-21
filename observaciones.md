Lau, 

Felicitaciones por la entrega de tu TP, y por haber concluido tu camino en Ada como desarrolladora front end. Estoy muy, muy orgullosa de todo lo que creciste a lo largo de este curso, y agradecida por tu entusiasmo, curiosidad y ganas de aprender que mantuviste desde el primer dia hasta el ultimo. 

Tu TP esta muy bien: como siempre, le das tu toque personal sin dejar de cumplir las consignas y tratas de que cada diseño te refleje. Me gusta mucho como se ve la pagina y lo amigable que es para usar. Las animaciones, los mensajes cuando no se encuentra algo, los titulos agregados, son todos muy lindos y ayudan a tener una excelente experiencia como usuario. 

Obviamente se que falto tiempo para este TP y que lo hayas podido hacer en tan poquitos dias, luego de un challenge complicado y entrando a tu trabajo es un enorme merito. Se que muchas de las cosas que te voy a comentar, ya las sabes: consideralas una guia para saber que cosas es prioritario ir mejorando si en algun momento tenes ganas de revisitar este trabajo y dejarlo aun mejor. La nota refleja esta falta de tiempo, y no tu talento ni compromiso: en eso siempre tuviste un 10. 

A nivel comportamiento, obviamente lo mas saliente es que no tenemos responsive, y esa deberia ser tu primera prioridad. Luego de eso, avanzaria con los componentes que te faltan - trailers, temporadas, etc. 
Luego de eso, me enfocaria en mejorar algunas cositas que quedaron sin resolver: en el detalle se ve el genero como "object object", las fotos en el carrusel del home no se ven bien (pensa en centrarlas con object-fit y cover). Un error que tiene un impacto grande y que es facil de arreglar es que no cambia el detalle cuando, dentro de un detalle, hacemos click en similares: eso es porque tu useEffect tiene un array de dependencias vacio. Te lo deje comentado en el componente. 

Una vez terminado eso, enfocate en solucionar los muchiiiiiiisimos console log que tenes sueltos por ahi los muuuuchos warnings que tenes en la consola. La mayoria son variables que dejaste indefinidas: no deberia ser muy dificil arreglarlo, y va a mejorar mucho la impresion que causa tu pagina. Te habras dado cuenta ya de que no es buena idea dejar que este tipo de warnings se acumulen, porque son mucho mas dificiles de solucionar cuando son un monton. Mejor arreglarlos apenas aparezcan. 

Mas alla de eso, lo cierto es que el comportamiento esta perfecto, cumplis bien los requisitos y tu web se ve profesional y es facil de recorrer. 

Con respecto al codigo, creo que lo primero a repensar es la arquitectura, la manera en que estan organizados tus archivos. Es dificil recorrer tu codigo porque no tenemos separadas las vistas, Views, de los componentes reutilizables. Esto te ocasiona dificultades a vos tambien: ocasionalmente algo que deberia ser un View espera props, aunque no le estes pasando ninguna, o un componente reutilizbale se usa como View y tenes mucha logica que podria estar resuelta mas sencilla (GridContainerCategoria). Hacete dos carpetas, una de View y otra de Componentes, separa bien tus archivos ahi y segui las reglas que vimos en clase. 
- Los componentes Views son los que se llaman en las rutas. No reciben props: si necesitan encargarse de la logica, lo hacen mediante la ruta. Suelen ser quienes se encargan de los fetch. 
- Los componentes reutilizables son llamados por las Views. Reciben props. Minimizan la logica necesaria.  

No tenes ni un solo hook custom, ni funciones reutilizables, ni variables reutilizables a lo largo de distintos componentes, a pesar de que tu codigo realmente lo necesita. Hay funciones que se repiten, ni hablar de variables como base_url y api-key. Le haria muy bien a tu codigo tener esto en un solo lugar. De todos modos tengo que comentar lo solido de tu codigo a pesar de estas faltas: tu codigo es comprensible, las variables estan re correctas, todo esta muy bien. Demasiado bien para la falta de tiempo!

Misma situacion tenemos con los componentes: hay componentes que son practicamente iguales. TV y Series estan correctamente identificados como Views, pero si comparten la logica y la parte visual, podrian llamar ambos al mismo componente reutilizable. De la misma manera, muchos pedacitos de tu JSX podrian componentizarse para no tener componentes repetitivos y dificiles de leer. Te los marque ocasionalmente en tu codigo, pero hay muchos mas de los que te anoté. 

Observaciones mas generales respecto a tu codigo:
- Sobreabundan los `let`. Idealmente solo usamos let cuando estamos seguros de que una variable va a cambiar: no tiene sentido, ni es correcto, definir let para useLocation, por ejemplo. 
- A veces declaras variables globales como undefined para luego cambiarles el valor: esto se usa en javascript vanilla, pero en React siempre preferimos usar Estado. Con respecto a esta y la anterior observacion, te diria que no tengo un solo proyecto de React de mis codigos laborales que usen una sola vez `let` o una variable global. Siempre usamos estado. Si necesitamos variables que utilizaremos a lo largo de todo el codigo uy que no van a cambiar, son `const`. 
- Un detalle, pero que mejora mucho la impresion del codigo, es que no usamos llaves para pasar props si la prop es un string, y no usamos backticks (`) si no interpolaremos una variable. 
- Tu tabulado a veces es inconsistente y confuso: instalate un linter como prettier y acostumbrate a usarlo. 

Tu repo de github esta bien, pero necesita urgentemente un README! 

Nota final: 7
