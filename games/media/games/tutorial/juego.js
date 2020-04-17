// ---------------------------------------------------------------------------
// Edit this file to define your game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init.
// ---------------------------------------------------------------------------

/* A unique id for your game. This is never displayed. I use a UUID,
 * but you can use anything that is guaranteed unique (a URL you own,
 * or a variation on your email address, for example). */
undum.game.id = "be1c95b9-cbc7-48c6-8e6a-89837aa9113e";

/* A string indicating what version of the game this is. Versions are
 * used to control saved-games. If you change the content of a game,
 * the saved games are unlikely to work. Changing this version number
 * prevents Undum from trying to load the saved-game and crashing. */
undum.game.version = "1.0";

/* A variable that changes the fade out speed of the option text on
 * a mobile. */
undum.game.mobileHide = 2000

/* A variable that changes the options fade out speed. */
undum.game.fadeSpeed = 1500

/* A variable that changes the slide up speed after clicking on an
 * option. */
undum.game.slideUpSpeed = 500

/* The situations that the game can be in. Each has a unique ID. */
undum.game.situations = {
    start: new undum.SimpleSituation(
        "<h1>Un día cualquiera en la Universidad de Jaén</h1>\
        <img src='media/games/tutorial/woodcut1.png' class='float_right'>\
        <p>Buenos días, exitoso estudiante de ingeniería informática.</p>\
        \
        <p> Esperamos que estés preparado para un largo y rutinario (o no) día en la universidad de jaén</p>\
        \
		 <p> Lo primero es lo primero... sal de la cama y vístete que vamos a la aventura</p>\
		 \
		 <p> A continuación elige el método de transporte para ir a la universidad</p> \
        <p class='transient'>Click <a href='hub'>aquí\
        para continuar...</a></p>"
    ),

    // NB: The 'hub' situation which is the main list of topics, is
    // defined wholly in the HTML file, and doesn't have an entry in
    // the game.situations dictionary in this file.

    // For variety, here we define a situation using the top-level
    // Situation type. This is a neat approach to generate text by
    // looking it up in the HTML document. For static text that makes
    // more sense than writing it longhand.
    situations: new undum.Situation({
        enter: function (character, system, from) {
            system.write($("#s_situations").html());
        },
        tags: ["opción"],
        optionText: "",
        displayOrder: 1
    }),

    llegaraclase1: new undum.SimpleSituation(
        "<p>Aunque es un poco tarde tu barriga está empezando a hacer ruidos raros, tienes mucha hambre y decides ir a echarte una buena tostada en la Colombia50.</p>\
        <p>La tostada te ha sabido a poco así que decides pedirte un sandwich Francés con extra de nutella, te encantan</p>\
        <p>A pesar de haber comido bastante sigues con un intenso dolor de barriga; a lo mejor no ha sido buena idea comer tanto, sientes retortijones, empiezas a sentirte cada vez peor, (la camarera debe haber puesto nutella caducada) por lo que no tienes otra que <a href='llegaraclase2'>ir al baño</a>.</p>"
        ,
        {
            heading: "Ir a desayunar",
            tags: ["topic"],
             exit: function (character, system, to) {
                system.setQuality("puntuacion", character.qualities.puntuacion + 25);
            }
        }
    ),
    llegaraclase2: new undum.SimpleSituation(
        "<p>Sales corriendo de la cafetería, es muy importante llegar al cuarto de baño, no sería la primera vez que te lo haces encima...</p>\
        <p>¿Dónde ir en una situación así? De pronto recuerdas el dicho que todo estudiante de informática de la universidad de Jaén conoce (Entregar una práctica de FAC) </p>\
        <p><b>¿En qué consiste esto?</b> Es sencillo, debes <a href='llegaraclase3'>ir al edificio A3</a>, subir a la 3 o a la cuarta planta  y conseguir un puesto en uno de los mejores tronos de la UJA <i>(todo estudiante de ingeniería conoce este truco...)</i>.</p>",
        {
            heading: "Ir a desayunar",
            tags: ["topic"],
             exit: function (character, system, to) {
                system.setQuality("puntuacion", character.qualities.puntuacion + 25);
            }
        }
    ),
	llegaraclase3: new undum.SimpleSituation(
        "<p>Atraviesas la mitad de la universidad corriendo, deseando que se te pasen esos fuertes dolores de estómago, pero no cesan.</p>\
        <p>Llegas corriendo a la puerta del edificio A3, subes las escaleras y...¡SORPRESA! Te has encontrado con el profesor más enrollado del grado de informática (Víctor), que nada más verte te saluda y comienza a contarte una de sus grandes anécdotas.</p>\
        <p> En ese momento,tú, preso de esos dolores fuertes de estómago no sabes cómo reaccionar al profesor, al fin y al cabo es un gran profesor pero <b>aún</b> no regala aprobados y no puedes permitirte el lujo de ser descortés con él.</p>\
		<p>Por tanto, aguantas lo máximo posible cuando se te ocurre una gran idea, ¿Por qué no decirle que llegas tarde a una tutoría? En ese momento, no tienes ninguna excusa mejor y optas por esa opción. Así que, con las piernas temblorosas te despides y te diriges a la <a href='llegaraclase4'>tercera planta.</a></p>",
        {
            heading: "Ir al edificio A3",
            tags: ["topic"],
             exit: function (character, system, to) {
                system.setQuality("puntuacion", character.qualities.puntuacion + 25);
            }
        }
	),
	llegaraclase4: new undum.SimpleSituation(
        "<p>Una vez subes en el ascenso más lento del mundo, vas desesperado hacia los baños como si no hubiera mañana.</p>\
        <p>Entras en el primer baño que pillas pero no te das cuenta de una cosa importantísima...<b> ¡No hay papel!</b>... pero primero a lo importante.</p>\
        <p>Una vez que te has quedado más a gusto que un arbusto, piensas como limpiarte y no ir a clase oliendo fatal. Por casualidad tienes en la mochila unas practicas de Matemáticas Discreta que aprobaste el año pasado con sudor y lágrimas por lo que decides darle otro uso.</p>\
		<p>Ya has acabado miras el reloj y te acuerdas que tenias que ir a clase y sales corriendo (como de costumbre). Llegas a clase unos minutillos tarde pero te dejan pasar por pena. Entregas las practicas de Desarrollo Ágil, Victor las ve...las corrige...y te dice que has sacado un...<b>¡¡¡¡10!!!! Te da la enhorabuena porque es una de las mejores practicas que ha visto de lo que lleva dando clase.</b></p>\
		<p>Una vez acabada la clase decidís iros al Malavida para celebrar la nota de las practicas y os bebeis una coca cola zero zero por lo bien hecho.</p>",
        {
            heading: "No hay papel y llegada a clase",
            tags: ["topic"],
             exit: function (character, system, to) {
                system.setQuality("puntuacion", character.qualities.velocidad + 25);
            }
        }
	),
    links: new undum.SimpleSituation(

        "<p>Al ver que son las 10.30 de la mañana y que es demasiado pronto para despertarte, quitas la alarma de tu xiaomi, te das la vuelta y te vuelves a dormir.</p>\
        \
        <p>Cuando te despiertas <a href='./movil' class='once'> coges el movil</a> y te das cuenta que eres el tío con más mala suerte del mundo, resulta que ese día en la universidad ha estado repartiendo redbulls en la puerta de la biblioteca y además Victor, el profesor de Desarroll Ágil, ha dado un aprobado general con un 9.5 a todos los que han asistido hoy a clase y los que no han ido tienen un -7 al comenzar el examen de Mayo, por lo tanto, tienes Ágil suspenso. </p>\
        \
        <p>Ante semejante decepción al no recibir los redbulls (porque suspender a estas altura de la vida te da ya un poco igual) decides no seguir estudiando nunca más por lo que te metes en Magisterio</p>\
        \
        <p class='transient'>Aún estas a tiempo de no entrar en magisterio pincha <a href='hub'>aquí</a> y vuelve a la elección de vehículo..</p>",
        // <!--Enlace a otra situacion creado -->
        
        {
        	tags: ["topic"],
            diplayOrder: 2,
            heading: "Pasas de todo y te quedas durmiendo",
            actions: {
                'movil': function (character, system, action) {
                    system.setQuality("movil", true);
                    system.setCharacterText("<p>Ya puedes mirar Whatsapp</p>");
                }
            },
             exit: function (character, system, to) {
                system.setQuality("puntuacion", character.qualities.puntuacion - 100);
            }
        }
        
    ),
    sticky: new undum.SimpleSituation(
        "\ <img src='media/games/tutorial/woodcut2.png' class='float_left'>\
		<p>Sales de casa decidido a coger el autobús. No sin antes haber <a href='./tarjeta' class='once'> cogido la tarjeta</a>. Llegas a la parada y esperas...</p>\
        \
       \
        <p>5 minutos...</p>\
        \
		\
        <p>Sigues esperando... 10 minutos...</p>\
        \
		\
        <p>Esperas... 15 minutos...</p>\
        \
		\
        <p>30 minutos...</p>\
        \
		\
        <p>Cuando llevas media hora en la parada recuerdas que vives en Jaén, la ciudad sin ley, y que el sistema de autobuses no funciona lo bien que debería. Puedes tomar dos opciones:</p>\
        \
        <p>Al ver que el autobús no viene decides\
        <a href='oneshot'>volverte a casa</a> ya que piensas que podrías estar echandote un Fortnite en vez de estar ahí plantado.</p>\
		<p>Confías en tu asombrosa forma física y decides \
        <a href='oneshot1'>ir a la universidad andando</a> porque en tus tiempos mozos ibas al colegío a patita y piensas que puedes volver a hacerlo.</p>",
        {
            tags: ["topic"],
            displayOrder: 3,
            heading: "Decides bajar en autobús",
            actions: {
                'tarjeta': function (character, system, action) {
                    system.setQuality("tarjeta", true);
                    system.setCharacterText("<p>Estupendo, ahora podrás coger el autobús sin problema</p>");
                }
            },
            exit: function (character, system, to) {
                system.setQuality("puntuacion", character.qualities.puntuacion - 25);
            }
        }
    ),
    oneshot: new undum.SimpleSituation(
        "<p>Llegas a casa pensando en las partidas que te vas a echar pero al entrar a casa tienes un problema:</p>\
        <p>Tu madre. Esa señora que no se fue de tu casa cuando le dijiste que querías vivir de forma independiente.</p>\
		<p> Con sus habilidades de ninja te lanza la zapatilla nada m.as escuchar la puerta a la vez que te grita NIÑO QUE HACES AQUÍ YA?!?!\
		<p> Te das cuenta de que la has cagado. Aún estás a tiempo de no recibir el zapatillazo. Pulsa \
        <a href='hub'>aquí</a> para volver a la elección de vehículo.</p>",
        // <!--Enlace a otra situacion creado -->
        {
            actions: {
                "one-time-action": "<p>	</p>"
            }
        }
    ),
    oneshot1: new undum.SimpleSituation(
        "<p>Pero vamos a ver, ¿tú que te creías? ¿pensabas que los chupitos de jagger del sábado no te iban a pasar factura?</p>\
        <p>Pues ahí lo tienes, no llevas ni 2 minutos andando y te da un pinchazo en el costado que no te deja ni respirar.</p>\
		<p>Ante semejante tesitura decides <a href='oneshot'>volverte a casa</a> ya que en el fondo sabías que nunca llegarías a tiempo. Y además tienes una partida de la play pendiente. </p>",
        // <!--Enlace a otra situacion creado -->
        {
            actions: {
                "one-time-action": "<p>	</p>"
            }
        }
    ),
    qualities: new undum.SimpleSituation(
        "<p>Te preparas para ir andando a la universidad, es aquello para lo que has entrenado tanto durante toda tu vida. Crees que lo puedes conseguir, ya has hecho fechorías peores (recuerda aquella vez que subiste desde Kharma a las 5 de la mañana un poco mareaillo)</p>\
        \
		<p> Si pudiste hacerlo ese día, hoy puedes, sin embargo para no fallar en tu misión de llegar a la universidad decides <a href='quality-types'>tomarte un redbull</a>, que por todo el mundo es conocido que te da alas.</p> ",
        {
            heading: "Ir andando",
            tags: ["topic"],
            displayOrder: 4,
            actions: {

            },
            exit: function (character, system, to) {
                system.setQuality("velocidad", character.qualities.velocidad + 100);
                system.setQuality("puntuacion", character.qualities.puntuacion + 30);
            }
        }
    ),
    "quality-types": new undum.SimpleSituation(
        "<p>------------------------------------------------------------------ </p>\
		<p>El redbull no solo te ha dado alas, también te ha subido la velocidad 100 puntos!!</p>\
        \
        <p> Te sientes eufórico, ¡¡podrás llegar a tiempo a clase!!</p>\
        \
        <p>Inicias tu caminata a toda velocidad, pero de pronto comienzas a sudar y a sentirte bastante mal. Notas que tu corazón va a mil por hora y te das cuenta que no fue muy buena idea tomar redbull por la mañana.\
		<p>Empiezas a ir muy lento, ¡hasta las abuelillas te adelantan!. De un momento a otro se te nubla la vista y caes redondo al suelo</p>\
		<p>Te despiertas en el hospital después de haber estado inconsciente durante unas horas, piensas ¡bien, ya no tendré que ir esta semana a clase!</p>\
		<p> De repente llaman a tu puerta y aparece Victor, el profesor de Desarrollo Ágil, pero no trae buenas noticias... Resulta que no has estado unas horas inconsciente, has estado tres meses en coma y viene a decirte que has suspendido la asignatura...</p>\
		<p> Aún estás a tiempo de no pasar por el hospital y suspender Desarrollo Ágil, pulsa \
        <a href='hub'>aquí</a> para volver a la elección de vehículo.</p>",
        // <!--Enlace a otra situacion creado -->

    ),
    // Again, we'll retrieve the text we want from the HTML file.
    "saving": new undum.Situation({
        enter: function (character, system, from) {
            system.write($("#s_saving").html());
            system.setQuality("puntuacion", character.qualities.puntuacion -35);
        },

        tags: ["topic"],
        displayOrder: 6,
        optionText: "Coger 'prestado' el coche a tu madre"
    }),

    "colacao": new undum.SimpleSituation(
        "<p>Tu sueño ha aumentado<span class='transient'>, fíjate en\
        la lista de opciones de tu personaje.</span>.</p>",
        {
            tags: ["example"],
            enter: function (character, system, from) {
                system.animateQuality("sueño", character.qualities.sueño + 1)
                system.doLink('example-choices');
            },
            optionText: "Cola-Cao calentito",
            displayOrder: 1,
            canView: function (character, system, host) {
                return character.qualities.sueño < 4;
            }
        }
    ),
    "greencola": new undum.SimpleSituation(
        "<p>Tu sueño ha disminuido<span class='transient'>, fíjate en\
        la lista de opciones de tu personaje</span>.</p>",
        {
            tags: ["example"],
            enter: function (character, system, from) {
                system.animateQuality("sueño", character.qualities.sueño - 1)
                system.doLink('example-choices');
            },
            optionText: "GreenCola fresquita",
            displayOrder: 2,
            canView: function (character, system, host) {
                return character.qualities.sueño > -2;
            }
        }
    ),
    "cafe": new undum.SimpleSituation(
        "<p>Tu sueño ha disminuido<span class='transient'>, fíjate en\
        la lista de opciones de tu personaje</span>.</p>",
        {
            tags: ["example"],
            enter: function (character, system, from) {
                system.animateQuality("sueño", character.qualities.sueño - 1)
                system.doLink('example-choices');
            },
            optionText: "Café con leche",
            displayOrder: 3,
            canView: function (character, system, host) {
                return character.qualities.sueño > -4;
            }
        }
    ),

    "last": new undum.SimpleSituation(
        "<h1>¡Enhorabuena!</h1>\
        <p>Has decidido bajar en tu SUPER patinete Xiaomi to tuneado, tiene leds por partes y es capaz de alcanzar los 80kmh; antes pillaba 120kmh pero desde que te comiste aquella traicionera farola decidiste bajarle un poco la potencia.\
			Pero esta vez decides <a href='./patinete' class='once'> coger el patinete</a> convencido de que ninguna farola/obstáculo se interpondrá en tu camino.</p>\
		\
		<img src='media/img/scooter.png' class='float_right'>\
			<p>Has llegado sin problema a la universidad, sin embargo, tu profesor de Desarrollo Ágil está muy enfadado contigo porque todavía no has llegado a clase.<br/> Ahora debes elegir alguna de las siguientes opciones para llegar a clase de forma correcta, sano y salvo:<br/></p>\
        <p>Estás bastante hambriento y así nadie puede desarrollar sus prácticas, por lo tanto, puedes <a href='llegaraclase1'>ir a desayunar</a>.</p>",
        {
            tags: ["topic"],
            optionText: "Patinete Xiaomi Pro",
            displayOrder: 4,
			enter: function (character, system, from) {
                system.setQuality("notaDesarrolloAgil", 10);
                system.setCharacterText(
                    "<p>¡Bien! Serás capaz de llegar a tiempo con tu super patinete Xiaomi.</p>"
                )
				
            },
			actions: {
                'patinete': function (character, system, action) {
                    system.setQuality("patinete", true);
                    system.setCharacterText("<p>Estupendo, ahora podrás coger el patinete sin problema</p>");
                    system.setQuality("puntuacion", character.qualities.puntuacion + 40);
                }
			},
             exit: function (character, system, to) {
                system.setQuality("puntuacion", character.qualities.puntuacion + 25);
            }

        }

    )
	
};

// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = "start";

// ---------------------------------------------------------------------------
/* Here we define all the qualities that our characters could
 * possess. We don't have to be exhaustive, but if we miss one out then
 * that quality will never show up in the character bar in the UI. */
undum.game.qualities = {
    puntuacion: new undum.IntegerQuality(
        "Puntuación", { priority: "0001", group: 'stats' }
    ),
    velocidad: new undum.IntegerQuality(
        "Velocidad", { priority: "0001", group: 'stats' }
    ),
    sueño: new undum.FudgeAdjectivesQuality(
        "Sueño", { priority: "0002", group: 'stats' }
    ),
    movil: new undum.OnOffQuality(
        "Movíl", { priority: "0003", group: 'stats', onDisplay: "&#10003;" }
    ),
    tarjeta: new undum.OnOffQuality(
        "Tarjeta del autobús", { priority: "0003", group: 'stats', onDisplay: "&#10003;" }
    ),

    notaDesarrolloAgil: new undum.NonZeroIntegerQuality(
        "Nota en Desarrollo Ágil", { priority: "0001", group: 'progress' }
    ),
	patinete: new undum.OnOffQuality(
		"Patinete Xiaomi Pro", { priority: "0003", group: 'stats', onDisplay: "&#10003;" }
	)
};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {
    stats: new undum.QualityGroup(null, { priority: "0001" }),
    progress: new undum.QualityGroup('Progreso', { priority: "0002" })
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function (character, system) {
    character.qualities.puntuacion = 0;
    character.qualities.velocidad = 5;
    character.qualities.sueño = 0;
    character.qualities.notaDesarrolloAgil = 0;
    system.setQuality( "tarjeta" , false );
	system.setQuality( "patinete" , false );
	system.setQuality( "movil" , false );
    system.setCharacterText("<p>¡Empieza tu increible aventura!</p>");
};
