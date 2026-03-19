/**
 * Ejecutar crearTodosLosFormularios() desde Apps Script (script.google.com).
 * Crea dos Google Forms de encuesta de calidad para la Sociedad de Desarrollo.
 * Los enlaces aparecen en Ver > Registros (Ctrl+Enter).
 */

function crearTodosLosFormularios() {
  var form1 = crearFormularioEncuesta(
    'Tu opinión sobre el curso de Gemini y NotebookLM',
    'Has completado el curso "Fundamentos de Gemini y NotebookLM en entornos Google Workspace" y tu opinión es lo que nos permite mejorar de verdad. Este formulario te llevará menos de 4 minutos. No hay respuestas buenas ni malas — solo tu experiencia real.'
  );
  var form2 = crearFormularioEncuesta(
    'Tu opinión sobre el curso de IA y Contratación Pública',
    'Has completado el curso "IA aplicada a la contratación pública en entornos Google Workspace" y tu opinión es lo que nos permite mejorar de verdad. Este formulario te llevará menos de 4 minutos. No hay respuestas buenas ni malas — solo tu experiencia real.'
  );

  Logger.log('=== FORMULARIOS CREADOS ===');
  Logger.log('');
  Logger.log('FORM 1 — Gemini y NotebookLM');
  Logger.log('Editar:    ' + form1.getEditUrl());
  Logger.log('Publicado: ' + form1.getPublishedUrl());
  Logger.log('');
  Logger.log('FORM 2 — IA y Contratación Pública');
  Logger.log('Editar:    ' + form2.getEditUrl());
  Logger.log('Publicado: ' + form2.getPublishedUrl());
}

function crearFormularioEncuesta(titulo, descripcion) {
  var form = FormApp.create(titulo);
  form.setDescription(descripcion);
  form.setIsQuiz(false);
  form.setAllowResponseEdits(false);
  form.setLimitOneResponsePerUser(false);
  form.setCollectEmail(false);

  var escalaSatisfaccion = [
    'Nada satisfecho/a',
    'Poco satisfecho/a',
    'Normal',
    'Satisfecho/a',
    'Muy satisfecho/a',
    'NC (No puedo valorarlo)'
  ];

  var escalaAcuerdo = [
    'Nada de acuerdo',
    'Poco de acuerdo',
    'Ni acuerdo ni desacuerdo',
    'De acuerdo',
    'Muy de acuerdo',
    'NC (No puedo valorarlo)'
  ];

  var escalaAcuerdoSinNC = [
    'Nada de acuerdo',
    'Poco de acuerdo',
    'Ni acuerdo ni desacuerdo',
    'De acuerdo',
    'Muy de acuerdo'
  ];

  // ── SECCION 1: Sobre ti ──
  form.addSectionHeaderItem()
    .setTitle('Sobre ti');

  form.addTextItem()
    .setTitle('¿Cómo te llamas?')
    .setRequired(true);

  form.addTextItem()
    .setTitle('¿Cuál es tu email?')
    .setRequired(true);

  form.addTextItem()
    .setTitle('¿En qué área trabajas dentro de la Sociedad de Desarrollo?')
    .setRequired(true);

  // ── SECCION 2: Organización y logística ──
  form.addSectionHeaderItem()
    .setTitle('Organización y logística')
    .setHelpText('Empecemos por lo básico: cómo estuvo organizado todo.');

  form.addMultipleChoiceItem()
    .setTitle('La organización general del curso (información, fechas, horarios, materiales) ha sido...')
    .setChoiceValues(escalaSatisfaccion)
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('El número de participantes del grupo fue adecuado para el desarrollo del curso')
    .setChoiceValues(escalaAcuerdo)
    .setRequired(true);

  // ── SECCION 3: Contenidos y metodología ──
  form.addSectionHeaderItem()
    .setTitle('Contenidos y metodología')
    .setHelpText('Vamos al grano: ¿el contenido te sirvió?');

  form.addMultipleChoiceItem()
    .setTitle('Los contenidos del curso respondieron a lo que necesitabas aprender')
    .setChoiceValues(escalaAcuerdo)
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('Hubo una buena combinación de teoría y práctica')
    .setChoiceValues(escalaAcuerdo)
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('La duración del curso fue suficiente para los objetivos planteados')
    .setChoiceValues(escalaAcuerdo)
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('El horario facilitó tu asistencia al curso')
    .setChoiceValues(escalaAcuerdo)
    .setRequired(true);

  // ── SECCION 4: Formadores y tutores ──
  form.addSectionHeaderItem()
    .setTitle('Formadores y tutores')
    .setHelpText('Las personas que te acompañaron en el curso.');

  form.addGridItem()
    .setTitle('La forma de impartir o tutorizar el curso facilitó tu aprendizaje')
    .setRows(['Formadores', 'Tutores'])
    .setColumns(escalaAcuerdoSinNC)
    .setRequired(true);

  form.addGridItem()
    .setTitle('Dominan en profundidad los temas que imparten')
    .setRows(['Formadores', 'Tutores'])
    .setColumns(escalaAcuerdoSinNC)
    .setRequired(true);

  // ── SECCION 5: Materiales y plataforma ──
  form.addSectionHeaderItem()
    .setTitle('Materiales y plataforma')
    .setHelpText('Sobre los materiales, la plataforma y los recursos que usaste.');

  form.addMultipleChoiceItem()
    .setTitle('La documentación y materiales entregados son comprensibles y adecuados')
    .setChoiceValues(escalaAcuerdo)
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('Los materiales didácticos están actualizados')
    .setChoiceValues(escalaAcuerdo)
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('Las guías, materiales y la plataforma online permitieron seguir el curso sin dificultad')
    .setChoiceValues(escalaAcuerdo)
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('Se contó con medios de apoyo suficientes (tutorías, correo, sesiones en directo, materiales descargables...)')
    .setChoiceValues(escalaAcuerdo)
    .setRequired(true);

  // ── SECCION 6: Evaluación del aprendizaje ──
  form.addSectionHeaderItem()
    .setTitle('Evaluación del aprendizaje')
    .setHelpText('Sobre cómo se midió tu progreso.');

  form.addMultipleChoiceItem()
    .setTitle('Las pruebas de evaluación te permitieron conocer tu nivel de aprendizaje')
    .setChoiceValues(escalaAcuerdo)
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('El curso te permite obtener una acreditación que reconoce tu cualificación')
    .setChoiceValues(escalaAcuerdo)
    .setRequired(true);

  // ── SECCION 7: Impacto profesional ──
  form.addSectionHeaderItem()
    .setTitle('Impacto profesional')
    .setHelpText('Lo que más nos importa: ¿te ha servido para tu trabajo?');

  form.addMultipleChoiceItem()
    .setTitle('Me ha permitido adquirir nuevas habilidades que puedo aplicar en mi puesto de trabajo')
    .setChoiceValues(escalaAcuerdo)
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('Me ha ampliado conocimientos para progresar profesionalmente')
    .setChoiceValues(escalaAcuerdo)
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('Ha favorecido mi desarrollo personal')
    .setChoiceValues(escalaAcuerdo)
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('Puede contribuir a mejorar mis oportunidades laborales')
    .setChoiceValues(escalaAcuerdo)
    .setRequired(true);

  // ── SECCION 8: Valoración global ──
  form.addSectionHeaderItem()
    .setTitle('Valoración global')
    .setHelpText('Ya casi. Tu valoración general.');

  form.addMultipleChoiceItem()
    .setTitle('En general, ¿cómo valorarías este curso?')
    .setChoiceValues(escalaSatisfaccion)
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('¿Recomendarías este curso a un compañero/a?')
    .setChoiceValues(['Sí', 'No', 'Quizás'])
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('¿Hay algo que quieras contarnos? Sugerencias, lo que más te gustó, lo que mejorarías...')
    .setRequired(false);

  return form;
}
