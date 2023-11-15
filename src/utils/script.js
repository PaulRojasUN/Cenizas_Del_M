const ScriptScene1 = (decisions, nameScript) => {
  const { examinoPeriodicoDigital, tieneMochila } = decisions

  const scriptFirstDialog = [
    {
      author: '<strong>Alex</strong>',
      text: 'Hace mucho que no llamo a mi madre. Aunque primero debería revisar un poco'
    }
  ]

  const scriptConversation = [
    {
      author: '<strong>Alex</strong>',
      text: '¡Hola, mamá! ¿Cómo estás?'
    },
    {
      author: '<strong>Madre</strong>',
      text: '¡Alex, cariño! Estoy bien. Pero he estado viendo las noticias, y estoy preocupada. ¿Todo está bien allí en <strong>Nueva Éireann?</strong>'
    },
    {
      author: '<strong>Alex</strong>',
      text: '(intentando sonar tranquilo) Sí, mamá, todo está... un poco agitado. ¿Has estado viendo las noticias otra vez?'
    },
    {
      author: '<strong>Madre</strong>',
      text: '(preocupada) Sí, las he estado siguiendo. Parece que el mundo entero está al borde de algo grande. ¿Estás seguro, hijo?'
    },
    {
      author: '<strong>Alex</strong>',
      text: '(suspira) No estoy tan seguro de nada en este momento. Las tensiones entre la CAN y la UEA han llegado a un punto crítico. Estamos justo en medio de todo esto.'
    },
    {
      author: '<strong>Madre</strong>',
      text: '(preocupada) ¡Oh, mi Dios! ¿Y tú estás a salvo?'
    },
    {
      author: '<strong>Alex</strong>',
      text: 'Por ahora sí, pero... (dudando) Mamá, estoy preocupado. No sé qué hacer.'
    },
    {
      author: '<strong>Madre</strong>',
      text: '(comprensiva) Cuéntame, hijo. Siempre encuentras una solución.'
    },
    {
      author: '<strong>Alex</strong>',
      text: '(tratando de explicar) Hay algo sobre un recurso, el COV49, esencial para combatir patógenos. La competencia por su control ha desencadenado un conflicto global. La ciudad está en estado de emergencia.'
    },
    {
      author: '<strong>Madre</strong>',
      text: '(pensativa) Entiendo. ¿Y qué estás pensando hacer?'
    },
    !examinoPeriodicoDigital &&
      {
        author: '<strong>Alex</strong>',
        text: '(indeciso) No lo sé. Parece que las cosas se están poniendo feas. No tengo idea de qué va a pasar.'
      },
    examinoPeriodicoDigital &&
      {
        author: '<strong>Alex</strong>',
        text: '(decidido) Estoy considerando buscar refugio en otro lugar junto a Sofia. Hay áreas marcadas en el mapa con mayor conflicto. Necesitamos estar a salvo.'
      },
    tieneMochila &&
      {
        author: '<strong>ALex</strong>',
        text: 'Por cierto, mamá, he preparado una mochila con algunas cosas útiles. Solo quiero estar listo por si acaso.'
      },
    tieneMochila &&
      {
        author: '<strong>Madre</strong>',
        text: 'Eso está bien, cariño. Prioriza tu seguridad. Te llamaremos pronto.'
      },
    !tieneMochila &&
      {
        author: '<strong>Madre</strong>',
        text: ' Asegúrate de estar preparado, hijo. Mira a tu  alrededor y reúne algunas cosas esenciales.La familia estará rezando  por ti. ¡Llámame cuando puedas!'
      }
  ].filter(Boolean)

  const scriptNews = [
    {
      author: '<strong>Noticiero</strong>',
      text: 'La tensión entre la CAN y la UEA ha llegado a su punto álgido. Las negociaciones han fracasado, y la guerra se ha desencadenado.'
    },
    {
      author: '<strong>Noticiero</strong>',
      text: 'Ambas partes están decididas a pelear hasta el final. Los combates recientes han dejado a Nueva Éireann en un estado de emergencia.'
    },
    {
      author: '<strong>Noticiero</strong>',
      text: 'Los recientes combates han dejado estragos en Nueva Éireann. Los hospitales están abrumados, la economía local está colapsando. Si está escuchando esto, busque refugio y prepárese para...'
    },
    {
      author: '<strong>Noticiero</strong>',
      text: '(Conexión interrumpida)'
    }
  ].filter(Boolean)

  if (nameScript === 'scriptFirstDialog') {
    return scriptFirstDialog
  } else if (nameScript === 'scriptConversation') {
    return scriptConversation
  } else if (nameScript === 'scriptNews') {
    return scriptNews
  }
}

const ScriptScene2 = (decisions, nameScript) => {
  const { hasFlashlight, hasKey, wantToShare } = decisions

  const stringSharingResources = hasFlashlight && hasKey ? 'linterna y una llave' : hasFlashlight ? 'linterna' : 'llave'

  const scripMeetingSurvivors = [
    {
      author: '<strong>Alex</strong>',
      text: '(se acerca a un grupo de supervivientes que parecen solidarios. Se presenta y comparte información sobre su situación.) Hola, soy Alex. ¿Cómo están todos aquí? ¿Cómo han estado lidiando con toda esta situación?'
    },
    {
      author: '<strong>Superviviente A</strong>',
      text: '(sonriendo) ¡Hola, Alex! Bienvenido al búnker. Estamos todos pasando por lo mismo, ¿verdad chicos?'
    },
    {
      author: '<strong>Superviviente B</strong>',
      text: '(asiente) Sí, es un desastre afuera. Pero al menos aquí abajo, tenemos una oportunidad.'
    },
    {
      author: '<strong>Superviviente C</strong>',
      text: 'Perdí contacto con mi familia en los primeros días. No sé si están bien.'
    },
    {
      author: '<strong>Superviviente D</strong>',
      text: '(serio) Todos hemos perdido algo. Pero ahora estamos aquí, y tenemos que cuidarnos mutuamente.'
    },
    {
      author: '<strong>Superviviente A</strong>',
      text: 'Eso es cierto, lo mejor que podemos hacer ahora es reunir las cosas que tenemos y mantener una gestión equitativa de todo.'
    },
    {
      author: '<strong>Superviviente A</strong>',
      text: 'Veo que tienes una mochila, ¿hay algo útil que nos pueda servir a todos?'
    }
  ]

  // Se cierra al dialogo para presentar el selector de decisión al jugador

  const scriptAnsweringSurvivorsResources = [
    !hasFlashlight && !hasKey &&
    {
      author: '<strong>Alex</strong>',
      text: 'No, no tengo nada en mi mochila'
    },
    (hasFlashlight || hasKey) && !wantToShare &&
    {
      author: '<strong>Alex</strong>',
      text: '(mintiendo) No, no tengo nada en mi mochila'
    },
    (hasFlashlight || hasKey) && wantToShare &&
    {
      author: '<strong>Alex</strong>',
      text: 'Sí, tengo una ' + stringSharingResources
    },
    ((!hasFlashlight && !hasKey) || !wantToShare) &&
    {
      author: '<strong>Superviviente A</strong>',
      text: '(desconfiado) Mmm, ya veo'
    },
    ((hasFlashlight || hasKey) || wantToShare) &&
    {
      author: '<strong>Superviviente A</strong>',
      text: 'Bien, nos será de ayuda'
    }
  ]
}


const ScriptIntroduction = () => {
  const script = [
    {
      text: 'Bienvenido a Nueva Éireann, año 2045. La tecnología ha catapultado la civilización a nuevas alturas, pero no todo es lo que parece.'
    },
    {
      text: 'El mundo está al borde. Dos gigantes, la Coalición de América del Norte y la Unión Euroasiática, se enfrentan en un juego peligroso de poder. Las ganas de poseer algo que se encontro en el Artico'
    },
    {
      text: 'Un recurso vital, el COV49, esencial para combatir patógenos mortales. La competencia por su control ha desencadenado un conflicto global.'
    },
    {
      text: 'Lo que inició como una disputa territorial ha evolucionado hacia una inminente guerra a gran escala. La tensión es palpable, y cada decisión puede llevar al mundo al abismo.'
    }
  ]

  return script
}

export const getSceneScript = (scene, decisions, nameScript) => {
  switch (scene) {
    case 0:
      return ScriptIntroduction()
    case 1:
      return ScriptScene1(decisions, nameScript)
    default:
      return {}
  }
}

// const decisions = {
//   examinoPeriodicoDigital: true,
//   tieneMochila: false
// }
//
// const guion = getSceneScript(1, decisions)
// console.log(guion)
