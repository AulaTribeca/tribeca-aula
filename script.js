const SUPABASE_URL = "https://wjprzmqbsvdcpwlblupl.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_qdOyqOCZFeKqEmLXtN5Nkw_JbMmetWP";
const STORAGE_BUCKET = "tribeca-materials";
const AVATAR_BUCKET = "tribeca-avatars";

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const i18n = {
  es: {
    skipLink: "Saltar al contenido principal",
    internalEnv: "Entorno educativo interno",
    textSize: "Texto",
    darkMode: "Modo oscuro",
    reading: "Lectura",
    defaultFont: "Por defecto",
    language: "Idioma",
    profile: "Perfil",
    loginAction: "Iniciar sesión",
    logoutAction: "Cerrar sesión",
    mySubjects: "Mis materias",
    calendar: "Calendario",
    messages: "Mensajes",
    tasksAndPosts: "Tareas y publicaciones",
    communication: "Comunicación",
    accessClassroom: "Acceso al aula",
    enterTribeca: "Entrar a Tribeca Aula",
    loginIntro: "Accede a tu aula virtual para consultar materias, publicaciones, calendario, mensajes, chat e insignias.",
    username: "Nombre de usuario",
    password: "Contraseña",
    usernamePlaceholder: "Introduce tu usuario",
    passwordPlaceholder: "Introduce tu contraseña",
    changePassword: "Cambiar contraseña",
    passwordChangeHelp: "Déjalo en blanco si no quieres cambiarla ahora.",
    newPassword: "Nueva contraseña",
    repeatPassword: "Repetir nueva contraseña",
    newPasswordPlaceholder: "Nueva contraseña",
    repeatPasswordPlaceholder: "Repite la nueva contraseña",
    passwordsDoNotMatch: "Las contraseñas no coinciden.",
    passwordTooShort: "La nueva contraseña debe tener al menos 6 caracteres.",
    passwordUpdateError: "El perfil se guardó, pero no se pudo cambiar la contraseña.",
    enter: "Entrar",
    loginHelpReady: "Acceso exclusivo para alumnado y profesora de Tribeca Aula.",
    myProfile: "Mi perfil",
    userProfile: "Perfil de usuario",
    visibleNickname: "Apodo visible",
    preloadedAvatar: "Avatar precargado",
    uploadOwnAvatar: "Subir imagen de perfil propia",
    saveProfile: "Guardar perfil",
    myClassroom: "Mi aula",
    hello: "Hola",
    myCourse: "Mi curso",
    myProgress: "Mi progreso",
    myBadges: "Mis insignias",
    myWorkStyle: "Mi forma de trabajo",
    noBadges: "Aún no hay insignias conseguidas.",
    subjects: "Materias",
    monthlyView: "Vista mensual",
    previous: "Anterior",
    next: "Siguiente",
    addPersonalEvent: "Añadir evento personal",
    subject: "Asignatura",
    title: "Título",
    dateAndTime: "Fecha y hora",
    description: "Descripción",
    addToMyCalendar: "Añadir a mi calendario",
    timelineWall: "Muro cronológico",
    latestPosts: "Últimas publicaciones",
    subjectSpace: "Espacio de asignatura",
    openedPost: "Publicación abierta",
    teacherPanel: "Panel de profesora",
    tribecaManagement: "Gestión de Tribeca Aula",
    teacherIntro: "Publicaciones, calendario, imágenes de materias, mensajes, chat e insignias.",
    publish: "Publicar",
    newPost: "Nueva publicación",
    type: "Tipo",
    postTypeAnnouncement: "Publicación",
    postTypeNotes: "Apuntes",
    postTypeWorksheet: "Boletín",
    postTypeTest: "Test interactivo",
    postTypeVideoClass: "Videoclase",
    postTypeVideo: "Vídeo",
    postTypeGame: "Juego",
    postTypeChallenge: "Desafío",
    units: "Unidades",
    noUnits: "Esta materia todavía no tiene unidades didácticas.",
    withoutUnit: "Sin unidad didáctica",
    text: "Texto",
    keyIdeas: "Instrucciones o ideas clave, opcional, una por línea",
    linkMeetTest: "Enlace externo, Meet o test interactivo",
    optionalFile: "Archivo PDF, imagen o vídeo, opcional",
    assignToStudents: "Asignar a alumnado",
    publishAction: "Publicar",
    subjectImage: "Imagen de asignatura",
    uploadSubjectImage: "Subir imagen representativa",
    saveImage: "Guardar imagen",
    deleteImage: "Borrar imagen",
    newDate: "Nueva fecha",
    dateType: "Tipo de fecha",
    eventDeadline: "Fecha de entrega",
    eventExam: "Examen",
    eventReminder: "Recordatorio",
    eventClass: "Clase especial",
    eventOther: "Otra fecha",
    addDate: "Añadir fecha",
    badges: "Insignias",
    assignBadge: "Asignar insignia",
    student: "Alumno/a",
    badge: "Insignia",
    optionalNote: "Nota opcional",
    assignBadgeAction: "Asignar insignia",
    history: "Historial",
    posts: "Publicaciones",
    deleteSelected: "Borrar seleccionadas",
    to: "Para",
    subjectLabel: "Asunto",
    message: "Mensaje",
    sendMessage: "Enviar mensaje",
    markRead: "Marcar recibidos como leídos",
    quickCalendar: "Calendario",
    instantChat: "Chat instantáneo",
    contact: "Contacto", connectedPeople: "Personas conectadas",
    writeMessage: "Escribe un mensaje...",
    send: "Enviar",
    legalNotice: "Aviso legal",
    support: "Soporte",
    contactForm: "Formulario de contacto",
    noMessages: "No hay mensajes todavía.",
    unreadOne: "Tienes 1 mensaje nuevo.",
    unreadMany: "Tienes {count} mensajes nuevos.",
    noSubjects: "Este perfil todavía no tiene asignaturas asignadas.",
    noPosts: "No hay publicaciones asignadas todavía.",
    noDates: "No hay fechas próximas asignadas.",
    open: "Abrir",
    delete: "Borrar",
    openSubject: "Abrir asignatura",
    assignedPosts: "{count} publicación(es) asignada(s)",
    noInteractiveTests: "No tienes tests interactivos asignados por ahora.",
    hasInteractiveTests: "Tienes {count} test interactivo(s) asignado(s).",
    noWorkSettings: "Sin ajustes específicos configurados.",
    openOrDownloadPdf: "Abrir o descargar PDF",
    openImage: "Abrir imagen",
    openTest: "Abrir test interactivo",
    enterVideoClass: "Entrar en la videoclase",
    openLink: "Abrir enlace",
    noContentSection: "No hay contenido asignado en esta sección.",
    savedProfile: "Perfil actualizado.",
    sentMessage: "Mensaje enviado.",
    readMarked: "Mensajes recibidos marcados como leídos."
  },
  gl: {
    skipLink: "Saltar ao contido principal",
    internalEnv: "Contorno educativo interno",
    textSize: "Texto",
    darkMode: "Modo escuro",
    reading: "Lectura",
    defaultFont: "Por defecto",
    language: "Idioma",
    profile: "Perfil",
    loginAction: "Iniciar sesión",
    logoutAction: "Pechar sesión",
    mySubjects: "As miñas materias",
    calendar: "Calendario",
    messages: "Mensaxes",
    tasksAndPosts: "Tarefas e publicacións",
    communication: "Comunicación",
    accessClassroom: "Acceso á aula",
    enterTribeca: "Entrar en Tribeca Aula",
    loginIntro: "Accede á túa aula virtual para consultar materias, publicacións, calendario, mensaxes, chat e insignias.",
    username: "Nome de usuario",
    password: "Contrasinal",
    usernamePlaceholder: "Introduce o teu usuario",
    passwordPlaceholder: "Introduce o teu contrasinal",
    changePassword: "Cambiar contrasinal",
    passwordChangeHelp: "Déixao en branco se non queres cambialo agora.",
    newPassword: "Novo contrasinal",
    repeatPassword: "Repetir novo contrasinal",
    newPasswordPlaceholder: "Novo contrasinal",
    repeatPasswordPlaceholder: "Repite o novo contrasinal",
    passwordsDoNotMatch: "Os contrasinais non coinciden.",
    passwordTooShort: "O novo contrasinal debe ter polo menos 6 caracteres.",
    passwordUpdateError: "O perfil gardouse, pero non se puido cambiar o contrasinal.",
    enter: "Entrar",
    loginHelpReady: "Acceso exclusivo para alumnado e profesora de Tribeca Aula.",
    myProfile: "O meu perfil",
    userProfile: "Perfil de usuario",
    visibleNickname: "Alcume visible",
    preloadedAvatar: "Avatar precargado",
    uploadOwnAvatar: "Subir imaxe de perfil propia",
    saveProfile: "Gardar perfil",
    myClassroom: "A miña aula",
    hello: "Ola",
    myCourse: "O meu curso",
    myProgress: "O meu progreso",
    myBadges: "As miñas insignias",
    myWorkStyle: "A miña forma de traballo",
    noBadges: "Aínda non hai insignias conseguidas.",
    subjects: "Materias",
    monthlyView: "Vista mensual",
    previous: "Anterior",
    next: "Seguinte",
    addPersonalEvent: "Engadir evento persoal",
    subject: "Materia",
    title: "Título",
    dateAndTime: "Data e hora",
    description: "Descrición",
    addToMyCalendar: "Engadir ao meu calendario",
    timelineWall: "Muro cronolóxico",
    latestPosts: "Últimas publicacións",
    subjectSpace: "Espazo de materia",
    openedPost: "Publicación aberta",
    teacherPanel: "Panel da profesora",
    tribecaManagement: "Xestión de Tribeca Aula",
    teacherIntro: "Publicacións, calendario, imaxes de materias, mensaxes, chat e insignias.",
    publish: "Publicar",
    newPost: "Nova publicación",
    type: "Tipo",
    postTypeAnnouncement: "Publicación",
    postTypeNotes: "Apuntamentos",
    postTypeWorksheet: "Boletín",
    postTypeTest: "Test interactivo",
    postTypeVideoClass: "Videoclase",
    postTypeVideo: "Vídeo",
    postTypeGame: "Juego",
    postTypeChallenge: "Desafío",
    units: "Unidades",
    noUnits: "Esta materia todavía no tiene unidades didácticas.",
    withoutUnit: "Sin unidad didáctica",
    text: "Texto",
    keyIdeas: "Instrucións ou ideas clave, opcional, unha por liña",
    linkMeetTest: "Ligazón externa, Meet ou test interactivo",
    optionalFile: "Arquivo PDF, imaxe ou vídeo, opcional",
    assignToStudents: "Asignar ao alumnado",
    publishAction: "Publicar",
    subjectImage: "Imaxe da materia",
    uploadSubjectImage: "Subir imaxe representativa",
    saveImage: "Gardar imaxe",
    deleteImage: "Borrar imaxe",
    newDate: "Nova data",
    dateType: "Tipo de data",
    eventDeadline: "Data de entrega",
    eventExam: "Exame",
    eventReminder: "Recordatorio",
    eventClass: "Clase especial",
    eventOther: "Outra data",
    addDate: "Engadir data",
    badges: "Insignias",
    assignBadge: "Asignar insignia",
    student: "Alumno/a",
    badge: "Insignia",
    optionalNote: "Nota opcional",
    assignBadgeAction: "Asignar insignia",
    history: "Historial",
    posts: "Publicacións",
    deleteSelected: "Borrar seleccionadas",
    to: "Para",
    subjectLabel: "Asunto",
    message: "Mensaxe",
    sendMessage: "Enviar mensaxe",
    markRead: "Marcar recibidas como lidas",
    quickCalendar: "Calendario",
    instantChat: "Chat instantáneo",
    contact: "Contacto", connectedPeople: "Personas conectadas",
    writeMessage: "Escribe unha mensaxe...",
    send: "Enviar",
    legalNotice: "Aviso legal",
    support: "Soporte",
    contactForm: "Formulario de contacto",
    noMessages: "Non hai mensaxes aínda.",
    unreadOne: "Tes 1 mensaxe nova.",
    unreadMany: "Tes {count} mensaxes novas.",
    noSubjects: "Este perfil aínda non ten materias asignadas.",
    noPosts: "Non hai publicacións asignadas aínda.",
    noDates: "Non hai datas próximas asignadas.",
    open: "Abrir",
    delete: "Borrar",
    openSubject: "Abrir materia",
    assignedPosts: "{count} publicación(s) asignada(s)",
    noInteractiveTests: "Non tes tests interactivos asignados polo momento.",
    hasInteractiveTests: "Tes {count} test(s) interactivo(s) asignado(s).",
    noWorkSettings: "Sen axustes específicos configurados.",
    openOrDownloadPdf: "Abrir ou descargar PDF",
    openImage: "Abrir imaxe",
    openTest: "Abrir test interactivo",
    enterVideoClass: "Entrar na videoclase",
    openLink: "Abrir ligazón",
    noContentSection: "Non hai contido asignado nesta sección.",
    savedProfile: "Perfil actualizado.",
    sentMessage: "Mensaxe enviada.",
    readMarked: "Mensaxes recibidas marcadas como lidas."
  },
  en: {
    skipLink: "Skip to main content",
    internalEnv: "Internal learning space",
    textSize: "Text",
    darkMode: "Dark mode",
    reading: "Reading",
    defaultFont: "Default",
    language: "Language",
    profile: "Profile",
    loginAction: "Log in",
    logoutAction: "Log out",
    mySubjects: "My subjects",
    calendar: "Calendar",
    messages: "Messages",
    tasksAndPosts: "Tasks and posts",
    communication: "Communication",
    accessClassroom: "Classroom access",
    enterTribeca: "Enter Tribeca Aula",
    loginIntro: "Access your virtual classroom to check subjects, posts, calendar, messages, chat and badges.",
    username: "Username",
    password: "Password",
    usernamePlaceholder: "Enter your username",
    passwordPlaceholder: "Enter your password",
    changePassword: "Change password",
    passwordChangeHelp: "Leave it blank if you do not want to change it now.",
    newPassword: "New password",
    repeatPassword: "Repeat new password",
    newPasswordPlaceholder: "New password",
    repeatPasswordPlaceholder: "Repeat the new password",
    passwordsDoNotMatch: "The passwords do not match.",
    passwordTooShort: "The new password must have at least 6 characters.",
    passwordUpdateError: "The profile was saved, but the password could not be changed.",
    enter: "Enter",
    loginHelpReady: "Exclusive access for Tribeca Aula students and teacher.",
    myProfile: "My profile",
    userProfile: "User profile",
    visibleNickname: "Visible nickname",
    preloadedAvatar: "Preset avatar",
    uploadOwnAvatar: "Upload your own profile picture",
    saveProfile: "Save profile",
    myClassroom: "My classroom",
    hello: "Hello",
    myCourse: "My course",
    myProgress: "My progress",
    myBadges: "My badges",
    myWorkStyle: "My working style",
    noBadges: "No badges yet.",
    subjects: "Subjects",
    monthlyView: "Monthly view",
    previous: "Previous",
    next: "Next",
    addPersonalEvent: "Add personal event",
    subject: "Subject",
    title: "Title",
    dateAndTime: "Date and time",
    description: "Description",
    addToMyCalendar: "Add to my calendar",
    timelineWall: "Timeline wall",
    latestPosts: "Latest posts",
    subjectSpace: "Subject space",
    openedPost: "Opened post",
    teacherPanel: "Teacher panel",
    tribecaManagement: "Tribeca Aula management",
    teacherIntro: "Posts, calendar, subject images, messages, chat and badges.",
    publish: "Publish",
    newPost: "New post",
    type: "Type",
    postTypeAnnouncement: "Post",
    postTypeNotes: "Notes",
    postTypeWorksheet: "Worksheet",
    postTypeTest: "Interactive test",
    postTypeVideoClass: "Video class",
    text: "Text",
    keyIdeas: "Instructions or key ideas, optional, one per line",
    linkMeetTest: "External link, Meet or interactive test",
    optionalFile: "PDF, image or video file, optional",
    assignToStudents: "Assign to students",
    publishAction: "Publish",
    subjectImage: "Subject image",
    uploadSubjectImage: "Upload representative image",
    saveImage: "Save image",
    deleteImage: "Delete image",
    newDate: "New date",
    dateType: "Date type",
    eventDeadline: "Deadline",
    eventExam: "Exam",
    eventReminder: "Reminder",
    eventClass: "Special class",
    eventOther: "Other date",
    addDate: "Add date",
    badges: "Badges",
    assignBadge: "Assign badge",
    student: "Student",
    badge: "Badge",
    optionalNote: "Optional note",
    assignBadgeAction: "Assign badge",
    history: "History",
    posts: "Posts",
    deleteSelected: "Delete selected",
    to: "To",
    subjectLabel: "Subject",
    message: "Message",
    sendMessage: "Send message",
    markRead: "Mark received as read",
    quickCalendar: "Calendar",
    instantChat: "Instant chat",
    contact: "Contact", connectedPeople: "Connected people",
    writeMessage: "Write a message...",
    send: "Send",
    legalNotice: "Legal notice",
    support: "Support",
    contactForm: "Contact form",
    noMessages: "No messages yet.",
    unreadOne: "You have 1 new message.",
    unreadMany: "You have {count} new messages.",
    noSubjects: "This profile has no subjects assigned yet.",
    noPosts: "No posts assigned yet.",
    noDates: "No upcoming dates assigned.",
    open: "Open",
    delete: "Delete",
    openSubject: "Open subject",
    assignedPosts: "{count} assigned post(s)",
    noInteractiveTests: "You have no interactive tests assigned yet.",
    hasInteractiveTests: "You have {count} interactive test(s) assigned.",
    noWorkSettings: "No specific settings configured.",
    openOrDownloadPdf: "Open or download PDF",
    openImage: "Open image",
    openTest: "Open interactive test",
    enterVideoClass: "Enter video class",
    openLink: "Open link",
    noContentSection: "No content assigned in this section.",
    savedProfile: "Profile updated.",
    sentMessage: "Message sent.",
    readMarked: "Received messages marked as read."
  },
  fr: {
    skipLink: "Aller au contenu principal",
    internalEnv: "Espace éducatif interne",
    textSize: "Texte",
    darkMode: "Mode sombre",
    reading: "Lecture",
    defaultFont: "Par défaut",
    language: "Langue",
    profile: "Profil",
    loginAction: "Connexion",
    logoutAction: "Déconnexion",
    mySubjects: "Mes matières",
    calendar: "Calendrier",
    messages: "Messages",
    tasksAndPosts: "Tâches et publications",
    communication: "Communication",
    accessClassroom: "Accès à la classe",
    enterTribeca: "Entrer dans Tribeca Aula",
    loginIntro: "Accède à ton aula virtuelle pour consulter les matières, publications, calendrier, messages, chat et badges.",
    username: "Nom d’utilisateur",
    password: "Mot de passe",
    usernamePlaceholder: "Saisis ton identifiant",
    passwordPlaceholder: "Saisis ton mot de passe",
    changePassword: "Changer le mot de passe",
    passwordChangeHelp: "Laisse vide si tu ne veux pas le changer maintenant.",
    newPassword: "Nouveau mot de passe",
    repeatPassword: "Répéter le nouveau mot de passe",
    newPasswordPlaceholder: "Nouveau mot de passe",
    repeatPasswordPlaceholder: "Répète le nouveau mot de passe",
    passwordsDoNotMatch: "Les mots de passe ne correspondent pas.",
    passwordTooShort: "Le nouveau mot de passe doit contenir au moins 6 caractères.",
    passwordUpdateError: "Le profil a été enregistré, mais le mot de passe n’a pas pu être changé.",
    enter: "Entrer",
    loginHelpReady: "Accès réservé aux élèves et à l’enseignante de Tribeca Aula.",
    myProfile: "Mon profil",
    userProfile: "Profil utilisateur",
    visibleNickname: "Surnom visible",
    preloadedAvatar: "Avatar prédéfini",
    uploadOwnAvatar: "Importer une image de profil",
    saveProfile: "Enregistrer le profil",
    myClassroom: "Ma classe",
    hello: "Bonjour",
    myCourse: "Mon cours",
    myProgress: "Ma progression",
    myBadges: "Mes badges",
    myWorkStyle: "Ma façon de travailler",
    noBadges: "Aucun badge pour le moment.",
    subjects: "Matières",
    monthlyView: "Vue mensuelle",
    previous: "Précédent",
    next: "Suivant",
    addPersonalEvent: "Ajouter un événement personnel",
    subject: "Matière",
    title: "Titre",
    dateAndTime: "Date et heure",
    description: "Description",
    addToMyCalendar: "Ajouter à mon calendrier",
    timelineWall: "Mur chronologique",
    latestPosts: "Dernières publications",
    subjectSpace: "Espace matière",
    openedPost: "Publication ouverte",
    teacherPanel: "Panneau enseignante",
    tribecaManagement: "Gestion de Tribeca Aula",
    teacherIntro: "Publications, calendrier, images des matières, messages, chat et badges.",
    publish: "Publier",
    newPost: "Nouvelle publication",
    type: "Type",
    postTypeAnnouncement: "Publication",
    postTypeNotes: "Notes",
    postTypeWorksheet: "Fiche",
    postTypeTest: "Test interactif",
    postTypeVideoClass: "Visiocours",
    text: "Texte",
    keyIdeas: "Consignes ou idées clés, facultatif, une par ligne",
    linkMeetTest: "Lien externe, Meet ou test interactif",
    optionalFile: "PDF, image ou vidéo, facultatif",
    assignToStudents: "Attribuer aux élèves",
    publishAction: "Publier",
    subjectImage: "Image de la matière",
    uploadSubjectImage: "Importer une image représentative",
    saveImage: "Enregistrer l’image",
    deleteImage: "Supprimer l’image",
    newDate: "Nouvelle date",
    dateType: "Type de date",
    eventDeadline: "Date limite",
    eventExam: "Examen",
    eventReminder: "Rappel",
    eventClass: "Cours spécial",
    eventOther: "Autre date",
    addDate: "Ajouter la date",
    badges: "Badges",
    assignBadge: "Attribuer un badge",
    student: "Élève",
    badge: "Badge",
    optionalNote: "Note facultative",
    assignBadgeAction: "Attribuer le badge",
    history: "Historique",
    posts: "Publications",
    deleteSelected: "Supprimer sélectionnées",
    to: "À",
    subjectLabel: "Objet",
    message: "Message",
    sendMessage: "Envoyer le message",
    markRead: "Marquer les reçus comme lus",
    quickCalendar: "Calendrier",
    instantChat: "Chat instantané",
    contact: "Contact", connectedPeople: "Connected people",
    writeMessage: "Écrire un message...",
    send: "Envoyer",
    legalNotice: "Mentions légales",
    support: "Support",
    contactForm: "Formulaire de contact",
    noMessages: "Aucun message pour le moment.",
    unreadOne: "Vous avez 1 nouveau message.",
    unreadMany: "Vous avez {count} nouveaux messages.",
    noSubjects: "Ce profil n’a pas encore de matières attribuées.",
    noPosts: "Aucune publication attribuée pour le moment.",
    noDates: "Aucune date prochaine attribuée.",
    open: "Ouvrir",
    delete: "Supprimer",
    openSubject: "Ouvrir la matière",
    assignedPosts: "{count} publication(s) attribuée(s)",
    noInteractiveTests: "Aucun test interactif attribué pour le moment.",
    hasInteractiveTests: "Vous avez {count} test(s) interactif(s) attribué(s).",
    noWorkSettings: "Aucun réglage spécifique configuré.",
    openOrDownloadPdf: "Ouvrir ou télécharger le PDF",
    openImage: "Ouvrir l’image",
    openTest: "Ouvrir le test interactif",
    enterVideoClass: "Entrer dans le visiocours",
    openLink: "Ouvrir le lien",
    noContentSection: "Aucun contenu attribué dans cette section.",
    savedProfile: "Profil mis à jour.",
    sentMessage: "Message envoyé.",
    readMarked: "Messages reçus marqués comme lus."
  },
  pl: {
    skipLink: "Przejdź do głównej treści",
    internalEnv: "Wewnętrzna przestrzeń edukacyjna",
    textSize: "Tekst",
    darkMode: "Tryb ciemny",
    reading: "Czytanie",
    defaultFont: "Domyślna",
    language: "Język",
    profile: "Profil",
    loginAction: "Zaloguj się",
    logoutAction: "Wyloguj się",
    mySubjects: "Moje przedmioty",
    calendar: "Kalendarz",
    messages: "Wiadomości",
    tasksAndPosts: "Zadania i wpisy",
    communication: "Komunikacja",
    accessClassroom: "Dostęp do klasy",
    enterTribeca: "Wejdź do Tribeca Aula",
    loginIntro: "Wejdź do swojej wirtualnej klasy, aby sprawdzić przedmioty, publikacje, kalendarz, wiadomości, czat i odznaki.",
    username: "Nazwa użytkownika",
    password: "Hasło",
    usernamePlaceholder: "Wpisz nazwę użytkownika",
    passwordPlaceholder: "Wpisz hasło",
    changePassword: "Zmień hasło",
    passwordChangeHelp: "Zostaw puste, jeśli nie chcesz go teraz zmieniać.",
    newPassword: "Nowe hasło",
    repeatPassword: "Powtórz nowe hasło",
    newPasswordPlaceholder: "Nowe hasło",
    repeatPasswordPlaceholder: "Powtórz nowe hasło",
    passwordsDoNotMatch: "Hasła nie są takie same.",
    passwordTooShort: "Nowe hasło musi mieć co najmniej 6 znaków.",
    passwordUpdateError: "Profil został zapisany, ale nie udało się zmienić hasła.",
    enter: "Wejdź",
    loginHelpReady: "Dostęp wyłącznie dla uczniów i nauczycielki Tribeca Aula.",
    myProfile: "Mój profil",
    userProfile: "Profil użytkownika",
    visibleNickname: "Widoczny pseudonim",
    preloadedAvatar: "Gotowy awatar",
    uploadOwnAvatar: "Prześlij własne zdjęcie profilowe",
    saveProfile: "Zapisz profil",
    myClassroom: "Moja klasa",
    hello: "Cześć",
    myCourse: "Mój kurs",
    myProgress: "Moje postępy",
    myBadges: "Moje odznaki",
    myWorkStyle: "Mój sposób pracy",
    noBadges: "Nie ma jeszcze odznak.",
    subjects: "Przedmioty",
    monthlyView: "Widok miesięczny",
    previous: "Poprzedni",
    next: "Następny",
    addPersonalEvent: "Dodaj własne wydarzenie",
    subject: "Przedmiot",
    title: "Tytuł",
    dateAndTime: "Data i godzina",
    description: "Opis",
    addToMyCalendar: "Dodaj do mojego kalendarza",
    timelineWall: "Tablica chronologiczna",
    latestPosts: "Najnowsze wpisy",
    subjectSpace: "Przestrzeń przedmiotu",
    openedPost: "Otwarty wpis",
    teacherPanel: "Panel nauczycielki",
    tribecaManagement: "Zarządzanie Tribeca Aula",
    teacherIntro: "Wpisy, kalendarz, obrazy przedmiotów, wiadomości, czat i odznaki.",
    publish: "Opublikuj",
    newPost: "Nowy wpis",
    type: "Typ",
    postTypeAnnouncement: "Wpis",
    postTypeNotes: "Notatki",
    postTypeWorksheet: "Karta pracy",
    postTypeTest: "Test interaktywny",
    postTypeVideoClass: "Wideolekcja",
    text: "Tekst",
    keyIdeas: "Instrukcje lub kluczowe idee, opcjonalnie, jedna na linię",
    linkMeetTest: "Link zewnętrzny, Meet lub test interaktywny",
    optionalFile: "PDF, obraz lub film, opcjonalnie",
    assignToStudents: "Przypisz uczniom",
    publishAction: "Opublikuj",
    subjectImage: "Obraz przedmiotu",
    uploadSubjectImage: "Prześlij reprezentatywny obraz",
    saveImage: "Zapisz obraz",
    deleteImage: "Usuń obraz",
    newDate: "Nowa data",
    dateType: "Typ daty",
    eventDeadline: "Termin oddania",
    eventExam: "Sprawdzian",
    eventReminder: "Przypomnienie",
    eventClass: "Lekcja specjalna",
    eventOther: "Inna data",
    addDate: "Dodaj datę",
    badges: "Odznaki",
    assignBadge: "Przypisz odznakę",
    student: "Uczeń/uczennica",
    badge: "Odznaka",
    optionalNote: "Opcjonalna notatka",
    assignBadgeAction: "Przypisz odznakę",
    history: "Historia",
    posts: "Wpisy",
    deleteSelected: "Usuń zaznaczone",
    to: "Do",
    subjectLabel: "Temat",
    message: "Wiadomość",
    sendMessage: "Wyślij wiadomość",
    markRead: "Oznacz odebrane jako przeczytane",
    quickCalendar: "Kalendarz",
    instantChat: "Czat na żywo",
    contact: "Kontakt", connectedPeople: "Połączone osoby",
    writeMessage: "Napisz wiadomość...",
    send: "Wyślij",
    legalNotice: "Nota prawna",
    support: "Wsparcie",
    contactForm: "Formularz kontaktowy",
    noMessages: "Nie ma jeszcze wiadomości.",
    unreadOne: "Masz 1 nową wiadomość.",
    unreadMany: "Masz {count} nowe wiadomości.",
    noSubjects: "Ten profil nie ma jeszcze przypisanych przedmiotów.",
    noPosts: "Nie ma jeszcze przypisanych wpisów.",
    noDates: "Brak nadchodzących terminów.",
    open: "Otwórz",
    delete: "Usuń",
    openSubject: "Otwórz przedmiot",
    assignedPosts: "{count} przypisanych wpisów",
    noInteractiveTests: "Nie masz jeszcze przypisanych testów interaktywnych.",
    hasInteractiveTests: "Masz {count} przypisanych testów interaktywnych.",
    noWorkSettings: "Brak skonfigurowanych ustawień.",
    openOrDownloadPdf: "Otwórz lub pobierz PDF",
    openImage: "Otwórz obraz",
    openTest: "Otwórz test interaktywny",
    enterVideoClass: "Wejdź do wideolekcji",
    openLink: "Otwórz link",
    noContentSection: "Brak treści w tej sekcji.",
    savedProfile: "Profil zaktualizowany.",
    sentMessage: "Wiadomość wysłana.",
    readMarked: "Odebrane wiadomości oznaczone jako przeczytane."
  }
};

const state = {
  lang: "es"
};


const i18nExtra = {
  es: {
    upcomingEvents: "Eventos próximos",
    internalMailbox: "Buzón interno",
    mailboxHelp: "Buzón interno del aula, con recibidos, enviados y redacción de mensajes.",
    openUnreadMessages: "Abrir mensajes nuevos",
    markAsRead: "Marcar como leídos",
    deleteSelectedInbox: "Eliminar seleccionados",
    inbox: "Recibidos",
    sent: "Enviados",
    compose: "Redactar",
    sound: "Sonido",
    chatCourtesy: "Usa el chat con responsabilidad, respeto y solo para cuestiones relacionadas con el trabajo del aula. La profesora puede supervisar las conversaciones con finalidad educativa, de seguridad y convivencia.",
    myStatus: "Mi estado",
    statusOnline: "🟢 Conectado",
    statusOffline: "🔴 No conectado",
    statusStudying: "🟣 Estudiando, no molestar",
    statusWorking: "🟠 Trabajando, solo mensajes importantes",
    openConversation: "Abrir conversación", connectedPeople: "Personas conectadas",
    quickEmojis: "Emojis rápidos",
    nudge: "👋 Toque",
    subjectWindowLabel: "Asignatura",
    close: "Cerrar",
    dayEvents: "Eventos del día",
    addEventForDay: "Añadir evento para este día",
    personalEvent: "Evento personal",
    importantNotice: "Aviso importante",
    excursion: "Excursión",
    time: "Hora",
    addEvent: "Añadir evento",
    noEventsDay: "No hay eventos para este día.",
    noEvents: "Sin eventos",
    noOpenChats: "No hay conversaciones abiertas.",
    noChatMessages: "No hay mensajes nuevos en esta sesión con este contacto.",
    chatSessionNotice: "Chat de esta sesión: los mensajes anteriores no se muestran aquí para que sea fácil distinguir lo nuevo.",
    closeChat: "Cerrar chat",
    newChatFrom: "Nuevo mensaje de {name}",
    nudgeFrom: "Toque de {name}",
    connectedNotice: "{name} se ha conectado",
    disconnectedNotice: "{name} se ha desconectado",
    newMessage: "Nuevo mensaje",
    composeHelp: "Escribe el destinatario, el asunto y el contenido. El alumnado solo puede enviar mensajes a la profesora.",
    unreadShort: "{count} sin leer",
    sentShort: "{count} enviado(s)",
    messageCount: "{count} mensaje(s)",
    from: "De",
    new: "Nuevo",
    view: "Ver",
    selectMessage: "Seleccionar mensaje",
    me: "Yo",
    reply: "Responder",
    replyingTo: "Respondiendo a",
    cancel: "Cancelar",
    openFullscreen: "Abrir en ventana completa",
    exitFullscreen: "Salir de ventana completa",
    completeTest: "Marcar test como completado",
    fileAccessError: "No se pudo generar el acceso temporal al archivo.",
    openGame: "Abrir juego",
    openChallenge: "Abrir desafío",
    openVideo: "Abrir vídeo",
    savedProfile: "Perfil actualizado.",
    loginProfileMissing: "No se ha encontrado el perfil del usuario.",
    loginInvalid: "Usuario o contraseña incorrectos. Revisa que el usuario esté confirmado en Supabase.",
    noActivity: "Todavía no hay actividad registrada.",
    noActiveChats: "No hay chats activos todavía.",
    lastMessage: "Último mensaje",
    postLabel: "Publicación",
    classroom: "Aula",
    user: "Usuario",
    activityLogin: "entrada al aula",
    activityPostView: "consulta de publicación",
    activityCalendarEvent: "evento añadido",
    activityTestCompleted: "test completado",
    activityMessageSent: "mensaje enviado",
    entering: "Entrando...",
    streakDays: "{count} días de racha",
    viewEventsForDay: "Ver eventos del {date}",
    profileImageAlt: "Imagen de perfil"
  },
  gl: {
    upcomingEvents: "Eventos próximos",
    internalMailbox: "Buzón interno",
    mailboxHelp: "Buzón interno da aula, con recibidos, enviados e redacción de mensaxes.",
    openUnreadMessages: "Abrir mensaxes novas",
    markAsRead: "Marcar como lidas",
    deleteSelectedInbox: "Eliminar seleccionadas",
    inbox: "Recibidas",
    sent: "Enviadas",
    compose: "Redactar",
    sound: "Son",
    chatCourtesy: "Usa o chat con responsabilidade, respecto e só para cuestións relacionadas co traballo da aula. A profesora pode supervisar as conversas con finalidade educativa, de seguridade e convivencia.",
    myStatus: "O meu estado",
    statusOnline: "🟢 Conectado",
    statusOffline: "🔴 Non conectado",
    statusStudying: "🟣 Estudando, non molestar",
    statusWorking: "🟠 Traballando, só mensaxes importantes",
    openConversation: "Abrir conversa",
    quickEmojis: "Emojis rápidos",
    nudge: "👋 Toque",
    subjectWindowLabel: "Materia",
    close: "Pechar",
    dayEvents: "Eventos do día",
    addEventForDay: "Engadir evento para este día",
    personalEvent: "Evento persoal",
    importantNotice: "Aviso importante",
    excursion: "Excursión",
    time: "Hora",
    addEvent: "Engadir evento",
    noEventsDay: "Non hai eventos para este día.",
    noEvents: "Sen eventos",
    noOpenChats: "Non hai conversas abertas.",
    noChatMessages: "Non hai mensaxes novas nesta sesión con este contacto.",
    chatSessionNotice: "Chat desta sesión: as mensaxes anteriores non se amosan aquí para distinguir mellor o novo.",
    closeChat: "Pechar chat",
    newChatFrom: "Nova mensaxe de {name}",
    nudgeFrom: "Toque de {name}",
    connectedNotice: "{name} conectouse",
    disconnectedNotice: "{name} desconectouse",
    newMessage: "Nova mensaxe",
    composeHelp: "Escribe o destinatario, o asunto e o contido. O alumnado só pode enviar mensaxes á profesora.",
    unreadShort: "{count} sen ler",
    sentShort: "{count} enviada(s)",
    messageCount: "{count} mensaxe(s)",
    from: "De",
    new: "Nova",
    view: "Ver",
    selectMessage: "Seleccionar mensaxe",
    me: "Eu",
    reply: "Responder",
    replyingTo: "Respondendo a",
    cancel: "Cancelar",
    openFullscreen: "Abrir en xanela completa",
    exitFullscreen: "Saír de xanela completa",
    completeTest: "Marcar test como completado",
    fileAccessError: "Non se puido xerar o acceso temporal ao arquivo.",
    openGame: "Abrir xogo",
    openChallenge: "Abrir desafío",
    openVideo: "Abrir vídeo",
    loginProfileMissing: "Non se atopou o perfil do usuario.",
    loginInvalid: "Usuario ou contrasinal incorrectos. Revisa que o usuario estea confirmado en Supabase.",
    noActivity: "Aínda non hai actividade rexistrada.",
    noActiveChats: "Non hai chats activos aínda.",
    lastMessage: "Última mensaxe",
    postLabel: "Publicación",
    classroom: "Aula",
    user: "Usuario",
    activityLogin: "entrada na aula",
    activityPostView: "consulta de publicación",
    activityCalendarEvent: "evento engadido",
    activityTestCompleted: "test completado",
    activityMessageSent: "mensaxe enviada",
    entering: "Entrando...",
    streakDays: "{count} días de racha",
    viewEventsForDay: "Ver eventos do {date}",
    profileImageAlt: "Imaxe de perfil"
  },
  en: {
    upcomingEvents: "Upcoming events",
    internalMailbox: "Internal mailbox",
    mailboxHelp: "Internal classroom mailbox, with inbox, sent messages and message composition.",
    openUnreadMessages: "Open new messages",
    markAsRead: "Mark as read",
    deleteSelectedInbox: "Delete selected",
    inbox: "Inbox",
    sent: "Sent",
    compose: "Compose",
    sound: "Sound",
    chatCourtesy: "Use the chat responsibly, respectfully and only for classroom work. The teacher may supervise conversations for educational, safety and coexistence purposes.",
    myStatus: "My status",
    statusOnline: "🟢 Online",
    statusOffline: "🔴 Offline",
    statusStudying: "🟣 Studying, do not disturb",
    statusWorking: "🟠 Working, important messages only",
    openConversation: "Open conversation",
    quickEmojis: "Quick emojis",
    nudge: "👋 Nudge",
    subjectWindowLabel: "Subject",
    close: "Close",
    dayEvents: "Day events",
    addEventForDay: "Add an event for this day",
    personalEvent: "Personal event",
    importantNotice: "Important notice",
    excursion: "Trip",
    time: "Time",
    addEvent: "Add event",
    noEventsDay: "There are no events for this day.",
    noEvents: "No events",
    noOpenChats: "There are no open conversations.",
    noChatMessages: "There are no new messages in this session with this contact.",
    chatSessionNotice: "Session chat: previous messages are not shown here so new messages are easier to identify.",
    closeChat: "Close chat",
    newChatFrom: "New message from {name}",
    nudgeFrom: "Nudge from {name}",
    connectedNotice: "{name} is online",
    disconnectedNotice: "{name} is offline",
    newMessage: "New message",
    composeHelp: "Write the recipient, subject and content. Students can only send messages to the teacher.",
    unreadShort: "{count} unread",
    sentShort: "{count} sent",
    messageCount: "{count} message(s)",
    from: "From",
    new: "New",
    view: "View",
    selectMessage: "Select message",
    me: "Me",
    reply: "Reply",
    replyingTo: "Replying to",
    cancel: "Cancel",
    openFullscreen: "Open full window",
    exitFullscreen: "Exit full window",
    completeTest: "Mark test as completed",
    fileAccessError: "The temporary file access could not be generated.",
    openGame: "Open game",
    openChallenge: "Open challenge",
    openVideo: "Open video",
    savedProfile: "Profile updated.",
    loginProfileMissing: "The user profile could not be found.",
    loginInvalid: "Incorrect username or password. Check that the user is confirmed in Supabase.",
    noActivity: "No activity has been recorded yet.",
    noActiveChats: "There are no active chats yet.",
    lastMessage: "Last message",
    postLabel: "Post",
    classroom: "Classroom",
    user: "User",
    activityLogin: "classroom login",
    activityPostView: "post view",
    activityCalendarEvent: "event added",
    activityTestCompleted: "test completed",
    activityMessageSent: "message sent",
    entering: "Entering...",
    streakDays: "{count} day streak",
    viewEventsForDay: "View events for {date}",
    profileImageAlt: "Profile image"
  },
  fr: {
    upcomingEvents: "Événements à venir",
    internalMailbox: "Boîte interne",
    mailboxHelp: "Boîte interne de la classe, avec reçus, envoyés et rédaction de messages.",
    openUnreadMessages: "Ouvrir les nouveaux messages",
    markAsRead: "Marquer comme lus",
    deleteSelectedInbox: "Supprimer la sélection",
    inbox: "Reçus",
    sent: "Envoyés",
    compose: "Rédiger",
    sound: "Son",
    chatCourtesy: "Utilise le chat avec responsabilité, respect et uniquement pour le travail de classe. L’enseignante peut superviser les conversations à des fins éducatives, de sécurité et de convivencia.",
    myStatus: "Mon statut",
    statusOnline: "🟢 Connecté",
    statusOffline: "🔴 Déconnecté",
    statusStudying: "🟣 Étude, ne pas déranger",
    statusWorking: "🟠 Travail, messages importants seulement",
    openConversation: "Ouvrir la conversation",
    quickEmojis: "Emojis rapides",
    nudge: "👋 Signal",
    subjectWindowLabel: "Matière",
    close: "Fermer",
    dayEvents: "Événements du jour",
    addEventForDay: "Ajouter un événement pour ce jour",
    personalEvent: "Événement personnel",
    importantNotice: "Avis important",
    excursion: "Sortie",
    time: "Heure",
    addEvent: "Ajouter l’événement",
    noEventsDay: "Il n’y a pas d’événements pour ce jour.",
    noEvents: "Aucun événement",
    noOpenChats: "Aucune conversation ouverte.",
    noChatMessages: "Aucun nouveau message dans cette session avec ce contact.",
    chatSessionNotice: "Chat de cette session : les messages précédents ne sont pas affichés ici pour mieux repérer les nouveautés.",
    closeChat: "Fermer le chat",
    newChatFrom: "Nouveau message de {name}",
    nudgeFrom: "Signal de {name}",
    connectedNotice: "{name} est connecté",
    disconnectedNotice: "{name} est déconnecté",
    newMessage: "Nouveau message",
    composeHelp: "Écris le destinataire, l’objet et le contenu. Les élèves peuvent seulement écrire à l’enseignante.",
    unreadShort: "{count} non lu(s)",
    sentShort: "{count} envoyé(s)",
    messageCount: "{count} message(s)",
    from: "De",
    new: "Nouveau",
    view: "Voir",
    selectMessage: "Sélectionner le message",
    me: "Moi",
    reply: "Répondre",
    replyingTo: "Réponse à",
    cancel: "Annuler",
    openFullscreen: "Ouvrir en fenêtre complète",
    exitFullscreen: "Quitter la fenêtre complète",
    completeTest: "Marquer le test comme terminé",
    fileAccessError: "L’accès temporaire au fichier n’a pas pu être généré.",
    openGame: "Ouvrir le jeu",
    openChallenge: "Ouvrir le défi",
    openVideo: "Ouvrir la vidéo",
    savedProfile: "Profil mis à jour.",
    loginProfileMissing: "Le profil utilisateur est introuvable.",
    loginInvalid: "Nom d’utilisateur ou mot de passe incorrect. Vérifie que l’utilisateur est confirmé dans Supabase.",
    noActivity: "Aucune activité enregistrée pour le moment.",
    noActiveChats: "Aucun chat actif pour le moment.",
    lastMessage: "Dernier message",
    postLabel: "Publication",
    classroom: "Classe",
    user: "Utilisateur",
    activityLogin: "entrée dans la classe",
    activityPostView: "consultation de publication",
    activityCalendarEvent: "événement ajouté",
    activityTestCompleted: "test terminé",
    activityMessageSent: "message envoyé",
    entering: "Connexion...",
    streakDays: "{count} jours de série",
    viewEventsForDay: "Voir les événements du {date}",
    profileImageAlt: "Image de profil"
  },
  pl: {
    upcomingEvents: "Nadchodzące wydarzenia",
    internalMailbox: "Skrzynka wewnętrzna",
    mailboxHelp: "Wewnętrzna skrzynka klasy: odebrane, wysłane i tworzenie wiadomości.",
    openUnreadMessages: "Otwórz nowe wiadomości",
    markAsRead: "Oznacz jako przeczytane",
    deleteSelectedInbox: "Usuń zaznaczone",
    inbox: "Odebrane",
    sent: "Wysłane",
    compose: "Utwórz",
    sound: "Dźwięk",
    chatCourtesy: "Korzystaj z czatu odpowiedzialnie, z szacunkiem i tylko w sprawach związanych z pracą w klasie. Nauczycielka może nadzorować rozmowy w celach edukacyjnych, bezpieczeństwa i dobrego współżycia.",
    myStatus: "Mój status",
    statusOnline: "🟢 Online",
    statusOffline: "🔴 Offline",
    statusStudying: "🟣 Uczę się, nie przeszkadzać",
    statusWorking: "🟠 Pracuję, tylko ważne wiadomości",
    openConversation: "Otwórz rozmowę",
    quickEmojis: "Szybkie emoji",
    nudge: "👋 Szturchnięcie",
    subjectWindowLabel: "Przedmiot",
    close: "Zamknij",
    dayEvents: "Wydarzenia dnia",
    addEventForDay: "Dodaj wydarzenie na ten dzień",
    personalEvent: "Wydarzenie osobiste",
    importantNotice: "Ważne ogłoszenie",
    excursion: "Wycieczka",
    time: "Godzina",
    addEvent: "Dodaj wydarzenie",
    noEventsDay: "Brak wydarzeń na ten dzień.",
    noEvents: "Brak wydarzeń",
    noOpenChats: "Brak otwartych rozmów.",
    noChatMessages: "Brak nowych wiadomości w tej sesji z tym kontaktem.",
    chatSessionNotice: "Czat tej sesji: wcześniejsze wiadomości nie są tu pokazywane, aby łatwiej rozpoznać nowe.",
    closeChat: "Zamknij czat",
    newChatFrom: "Nowa wiadomość od {name}",
    nudgeFrom: "Sygnał od {name}",
    connectedNotice: "{name} jest online",
    disconnectedNotice: "{name} jest offline",
    newMessage: "Nowa wiadomość",
    composeHelp: "Wpisz odbiorcę, temat i treść. Uczniowie mogą pisać tylko do nauczycielki.",
    unreadShort: "{count} nieprzeczytane",
    sentShort: "{count} wysłane",
    messageCount: "{count} wiadomość/wiadomości",
    from: "Od",
    new: "Nowe",
    view: "Zobacz",
    selectMessage: "Zaznacz wiadomość",
    me: "Ja",
    reply: "Odpowiedz",
    replyingTo: "Odpowiedź do",
    cancel: "Anuluj",
    openFullscreen: "Otwórz w pełnym oknie",
    exitFullscreen: "Zamknij pełne okno",
    completeTest: "Oznacz test jako ukończony",
    fileAccessError: "Nie udało się wygenerować tymczasowego dostępu do pliku.",
    openGame: "Otwórz grę",
    openChallenge: "Otwórz wyzwanie",
    openVideo: "Otwórz wideo",
    savedProfile: "Profil zaktualizowany.",
    loginProfileMissing: "Nie znaleziono profilu użytkownika.",
    loginInvalid: "Nieprawidłowa nazwa użytkownika lub hasło. Sprawdź, czy użytkownik jest potwierdzony w Supabase.",
    noActivity: "Brak zapisanej aktywności.",
    noActiveChats: "Brak aktywnych czatów.",
    lastMessage: "Ostatnia wiadomość",
    postLabel: "Wpis",
    classroom: "Klasa",
    user: "Użytkownik",
    activityLogin: "wejście do klasy",
    activityPostView: "wyświetlenie wpisu",
    activityCalendarEvent: "dodano wydarzenie",
    activityTestCompleted: "test ukończony",
    activityMessageSent: "wiadomość wysłana",
    entering: "Wchodzenie...",
    streakDays: "{count} dni serii",
    viewEventsForDay: "Zobacz wydarzenia z {date}",
    profileImageAlt: "Zdjęcie profilowe"
  }
};

Object.keys(i18nExtra).forEach((lang) => {
  i18n[lang] = { ...(i18n[lang] || i18n.es), ...i18nExtra[lang] };
});


const i18nCorrections = {
  es: {
    teacherEventHelp: "Los eventos publicados por la profesora serán visibles para todo el alumnado.",
    templates: "Plantillas",
    teacherSummary: "Resumen docente",
    totalStudents: "Alumnado total",
    totalGroups: "Grupos",
    unreadMessages: "Mensajes sin leer",
    studentGroups: "Grupos de alumnado",
    studentGroupsHelp: "Los grupos permiten asignar materiales por curso o agrupación sin marcar alumno por alumno.",
    recentActivity: "Actividad reciente",
    classroomActivityTitle: "Qué ha ocurrido en el aula",
    recentActivityHelp: "Vista docente de accesos, consultas de publicaciones, eventos creados y tests completados.",
    teacherSupervision: "Supervisión docente",
    classroomChats: "Chats del aula",
    teacherSupervisionHelp: "Panel visible solo para la profesora. La supervisión debe entenderse como medida educativa y de convivencia, no como lectura oculta de carácter personal.",
    testCompletionError: "No se pudo registrar la finalización del test. Ejecuta la migración SQL correspondiente.",
    testCompleted: "Test marcado como completado. Se ha actualizado tu progreso.",
    deletePostConfirm: "¿Seguro que quieres borrar esta publicación?",
    postDeleteError: "No se pudo borrar la publicación.",
    selectOnePost: "Selecciona al menos una publicación.",
    deletePostsConfirm: "¿Seguro que quieres borrar {count} publicación(es)?",
    selectedPostsDeleteError: "No se pudieron borrar las publicaciones seleccionadas.",
    noPostsCreated: "Aún no se han creado publicaciones.",
    postField: "Publicación",
    subjectField: "Materia",
    activity: "actividad"
  },
  gl: {
    teacherEventHelp: "Os eventos publicados pola profesora serán visibles para todo o alumnado.",
    templates: "Modelos",
    teacherSummary: "Resumo docente",
    totalStudents: "Alumnado total",
    totalGroups: "Grupos",
    unreadMessages: "Mensaxes sen ler",
    studentGroups: "Grupos de alumnado",
    studentGroupsHelp: "Os grupos permiten asignar materiais por curso ou agrupación sen marcar alumno por alumno.",
    recentActivity: "Actividade recente",
    classroomActivityTitle: "Que ocorreu na aula",
    recentActivityHelp: "Vista docente de accesos, consultas de publicacións, eventos creados e tests completados.",
    teacherSupervision: "Supervisión docente",
    classroomChats: "Chats da aula",
    teacherSupervisionHelp: "Panel visible só para a profesora. A supervisión debe entenderse como medida educativa e de convivencia, non como lectura oculta de carácter persoal.",
    testCompletionError: "Non se puido rexistrar a finalización do test.",
    testCompleted: "Test marcado como completado. Actualizouse o teu progreso.",
    deletePostConfirm: "Seguro que queres borrar esta publicación?",
    postDeleteError: "Non se puido borrar a publicación.",
    selectOnePost: "Selecciona polo menos unha publicación.",
    deletePostsConfirm: "Seguro que queres borrar {count} publicación(s)?",
    selectedPostsDeleteError: "Non se puideron borrar as publicacións seleccionadas.",
    noPostsCreated: "Aínda non se crearon publicacións.",
    postField: "Publicación",
    subjectField: "Materia",
    activity: "actividade"
  },
  en: {
    teacherEventHelp: "Events published by the teacher will be visible to all students.",
    templates: "Templates",
    teacherSummary: "Teacher summary",
    totalStudents: "Total students",
    totalGroups: "Groups",
    unreadMessages: "Unread messages",
    studentGroups: "Student groups",
    studentGroupsHelp: "Groups allow you to assign materials by course or group without selecting students one by one.",
    recentActivity: "Recent activity",
    classroomActivityTitle: "What has happened in the classroom",
    recentActivityHelp: "Teacher view of logins, post views, created events and completed tests.",
    teacherSupervision: "Teacher supervision",
    classroomChats: "Classroom chats",
    teacherSupervisionHelp: "Panel visible only to the teacher. Supervision should be understood as an educational and coexistence measure, not as hidden personal reading.",
    testCompletionError: "The test completion could not be recorded.",
    testCompleted: "Test marked as completed. Your progress has been updated.",
    deletePostConfirm: "Are you sure you want to delete this post?",
    postDeleteError: "The post could not be deleted.",
    selectOnePost: "Select at least one post.",
    deletePostsConfirm: "Are you sure you want to delete {count} post(s)?",
    selectedPostsDeleteError: "The selected posts could not be deleted.",
    noPostsCreated: "No posts have been created yet.",
    postField: "Post",
    subjectField: "Subject",
    activity: "activity"
  },
  fr: {
    teacherEventHelp: "Les événements publiés par l’enseignante seront visibles par tous les élèves.",
    templates: "Modèles",
    teacherSummary: "Résumé enseignant",
    totalStudents: "Élèves au total",
    totalGroups: "Groupes",
    unreadMessages: "Messages non lus",
    studentGroups: "Groupes d’élèves",
    studentGroupsHelp: "Les groupes permettent d’attribuer des ressources par classe ou groupe sans sélectionner les élèves un par un.",
    recentActivity: "Activité récente",
    classroomActivityTitle: "Ce qui s’est passé dans la classe",
    recentActivityHelp: "Vue enseignante des connexions, consultations, événements créés et tests terminés.",
    teacherSupervision: "Supervision enseignante",
    classroomChats: "Chats de la classe",
    teacherSupervisionHelp: "Panneau visible seulement par l’enseignante. La supervision est une mesure éducative et de convivencia, pas une lecture cachée de caractère personnel.",
    testCompletionError: "La fin du test n’a pas pu être enregistrée.",
    testCompleted: "Test marqué comme terminé. Votre progression a été mise à jour.",
    deletePostConfirm: "Voulez-vous vraiment supprimer cette publication?",
    postDeleteError: "La publication n’a pas pu être supprimée.",
    selectOnePost: "Sélectionnez au moins une publication.",
    deletePostsConfirm: "Voulez-vous vraiment supprimer {count} publication(s)?",
    selectedPostsDeleteError: "Les publications sélectionnées n’ont pas pu être supprimées.",
    noPostsCreated: "Aucune publication n’a encore été créée.",
    postField: "Publication",
    subjectField: "Matière",
    activity: "activité"
  },
  pl: {
    teacherEventHelp: "Wydarzenia opublikowane przez nauczycielkę będą widoczne dla wszystkich uczniów.",
    templates: "Szablony",
    teacherSummary: "Podsumowanie nauczycielki",
    totalStudents: "Łącznie uczniów",
    totalGroups: "Grupy",
    unreadMessages: "Nieprzeczytane wiadomości",
    studentGroups: "Grupy uczniów",
    studentGroupsHelp: "Grupy pozwalają przypisywać materiały według klasy lub grupy bez wybierania uczniów pojedynczo.",
    recentActivity: "Ostatnia aktywność",
    classroomActivityTitle: "Co wydarzyło się w klasie",
    recentActivityHelp: "Widok logowań, otwartych wpisów, utworzonych wydarzeń i ukończonych testów.",
    teacherSupervision: "Nadzór nauczycielski",
    classroomChats: "Czaty klasy",
    teacherSupervisionHelp: "Panel widoczny tylko dla nauczycielki. Nadzór należy rozumieć jako środek edukacyjny i porządkowy, nie jako ukryte czytanie prywatne.",
    testCompletionError: "Nie udało się zapisać ukończenia testu.",
    testCompleted: "Test oznaczony jako ukończony. Postęp został zaktualizowany.",
    deletePostConfirm: "Czy na pewno chcesz usunąć ten wpis?",
    postDeleteError: "Nie udało się usunąć wpisu.",
    selectOnePost: "Wybierz co najmniej jeden wpis.",
    deletePostsConfirm: "Czy na pewno chcesz usunąć {count} wpis(ów)?",
    selectedPostsDeleteError: "Nie udało się usunąć zaznaczonych wpisów.",
    noPostsCreated: "Nie utworzono jeszcze wpisów.",
    postField: "Wpis",
    subjectField: "Przedmiot",
    activity: "aktywność"
  }
};

Object.keys(i18nCorrections).forEach((lang) => {
  i18n[lang] = { ...(i18n[lang] || i18n.es), ...i18nCorrections[lang] };
});

const i18nEnhancements = {
  es: {
    compactTeacherView: "Comprimir vista docente", expandTeacherView: "Expandir vista docente", openMessages: "Abrir mensajes", openCalendar: "Abrir calendario",
    teacherMode: "Modo docente", teacherOverview: "Vista general de aula", students: "Alumnos",
    studentProfiles: "Perfiles del alumnado", studentOverview: "Vista individual del alumnado",
    studentOverviewHelp: "Consulta rápida de eventos, publicaciones asignadas y mensajes relacionados contigo.",
    assignedWork: "Trabajos y publicaciones", relatedEvents: "Eventos relacionados", relatedMessages: "Mensajes", noRelatedItems: "No hay elementos relacionados todavía.",
    useTemplate: "Usar plantilla", saveAsTemplate: "Guardar publicación como plantilla", assignByGroups: "Asignar por grupos",
    assignByGroupsHelp: "Puedes seleccionar un curso o grupo completo y, si hace falta, ajustar después alumno por alumno.", selectAll: "Seleccionar todos", clearSelection: "Limpiar selección",
    chatPrivacyNotice: "Usa el chat con responsabilidad y respeto. La conversación es visible solo entre el alumno o alumna y la profesora.",
    editEvent: "Editar evento", deleteEvent: "Eliminar evento", saveEventChanges: "Guardar cambios", cancelEdit: "Cancelar edición", eventUpdated: "Evento actualizado.", eventDeleted: "Evento eliminado.", ownEvent: "Evento personal", teacherEvent: "Evento de profesora", cannotEditEvent: "Solo puedes editar o eliminar los eventos creados por ti.",
    realtimeActive: "Mensajes instantáneos activos", conversationWith: "Conversación con {name}", openChatWithStudent: "Abrir chat",
    inboxPrivacy: "Buzón privado del aula: los mensajes solo son visibles entre la profesora y el alumno o alumna correspondiente."
  },
  gl: {
    compactTeacherView: "Comprimir vista docente", expandTeacherView: "Ampliar vista docente", openMessages: "Abrir mensaxes", openCalendar: "Abrir calendario",
    teacherMode: "Modo docente", teacherOverview: "Vista xeral da aula", students: "Alumnado",
    studentProfiles: "Perfís do alumnado", studentOverview: "Vista individual do alumnado",
    studentOverviewHelp: "Consulta rápida de eventos, publicacións asignadas e mensaxes relacionadas contigo.",
    assignedWork: "Traballos e publicacións", relatedEvents: "Eventos relacionados", relatedMessages: "Mensaxes", noRelatedItems: "Aínda non hai elementos relacionados.",
    useTemplate: "Usar modelo", saveAsTemplate: "Gardar publicación como modelo", assignByGroups: "Asignar por grupos", assignByGroupsHelp: "Podes seleccionar un curso ou grupo completo e axustar despois alumno por alumno.", selectAll: "Seleccionar todo", clearSelection: "Limpar selección",
    chatPrivacyNotice: "Usa o chat con responsabilidade e respecto. A conversa é visible só entre o alumno ou alumna e a profesora.",
    editEvent: "Editar evento", deleteEvent: "Eliminar evento", saveEventChanges: "Gardar cambios", cancelEdit: "Cancelar edición", eventUpdated: "Evento actualizado.", eventDeleted: "Evento eliminado.", ownEvent: "Evento persoal", teacherEvent: "Evento da profesora", cannotEditEvent: "Só podes editar ou eliminar os eventos creados por ti.",
    realtimeActive: "Mensaxes instantáneas activas", conversationWith: "Conversa con {name}", openChatWithStudent: "Abrir chat", inboxPrivacy: "Buzón privado da aula: as mensaxes só son visibles entre a profesora e o alumno ou alumna correspondente."
  },
  en: {
    compactTeacherView: "Compress teacher view", expandTeacherView: "Expand teacher view", openMessages: "Open messages", openCalendar: "Open calendar",
    teacherMode: "Teacher mode", teacherOverview: "Classroom overview", students: "Students",
    studentProfiles: "Student profiles", studentOverview: "Individual student view", studentOverviewHelp: "Quick view of events, assigned posts and messages related to you.",
    assignedWork: "Work and posts", relatedEvents: "Related events", relatedMessages: "Messages", noRelatedItems: "No related items yet.",
    useTemplate: "Use template", saveAsTemplate: "Save post as template", assignByGroups: "Assign by groups", assignByGroupsHelp: "Select a whole course or group and then adjust students if needed.", selectAll: "Select all", clearSelection: "Clear selection",
    chatPrivacyNotice: "Use the chat responsibly and respectfully. The conversation is visible only between the student and the teacher.",
    editEvent: "Edit event", deleteEvent: "Delete event", saveEventChanges: "Save changes", cancelEdit: "Cancel editing", eventUpdated: "Event updated.", eventDeleted: "Event deleted.", ownEvent: "Personal event", teacherEvent: "Teacher event", cannotEditEvent: "You can only edit or delete events created by you.",
    realtimeActive: "Instant messages active", conversationWith: "Conversation with {name}", openChatWithStudent: "Open chat", inboxPrivacy: "Private classroom mailbox: messages are visible only between the teacher and the corresponding student."
  },
  fr: {
    compactTeacherView: "Compresser la vue enseignante", expandTeacherView: "Déployer la vue enseignante", openMessages: "Ouvrir les messages", openCalendar: "Ouvrir le calendrier",
    teacherMode: "Mode enseignante", teacherOverview: "Vue générale de la classe", students: "Élèves",
    studentProfiles: "Profils des élèves", studentOverview: "Vue individuelle des élèves", studentOverviewHelp: "Vue rapide des événements, publications attribuées et messages liés à vous.",
    assignedWork: "Travaux et publications", relatedEvents: "Événements liés", relatedMessages: "Messages", noRelatedItems: "Aucun élément lié pour le moment.",
    useTemplate: "Utiliser un modèle", saveAsTemplate: "Enregistrer comme modèle", assignByGroups: "Attribuer par groupes", assignByGroupsHelp: "Sélectionnez un cours ou groupe complet puis ajustez les élèves si besoin.", selectAll: "Tout sélectionner", clearSelection: "Effacer la sélection",
    chatPrivacyNotice: "Utilisez le chat avec responsabilité et respect. La conversation est visible uniquement entre l’élève et l’enseignante.",
    editEvent: "Modifier l’événement", deleteEvent: "Supprimer l’événement", saveEventChanges: "Enregistrer", cancelEdit: "Annuler", eventUpdated: "Événement mis à jour.", eventDeleted: "Événement supprimé.", ownEvent: "Événement personnel", teacherEvent: "Événement enseignante", cannotEditEvent: "Vous ne pouvez modifier ou supprimer que vos propres événements.",
    realtimeActive: "Messages instantanés actifs", conversationWith: "Conversation avec {name}", openChatWithStudent: "Ouvrir le chat", inboxPrivacy: "Boîte privée de la classe : les messages ne sont visibles qu’entre l’enseignante et l’élève concerné."
  },
  pl: {
    compactTeacherView: "Zwiń widok nauczycielki", expandTeacherView: "Rozwiń widok nauczycielki", openMessages: "Otwórz wiadomości", openCalendar: "Otwórz kalendarz",
    teacherMode: "Tryb nauczycielki", teacherOverview: "Widok klasy", students: "Uczniowie",
    studentProfiles: "Profile uczniów", studentOverview: "Widok indywidualny ucznia", studentOverviewHelp: "Szybki widok wydarzeń, przypisanych wpisów i wiadomości powiązanych z Tobą.",
    assignedWork: "Prace i wpisy", relatedEvents: "Powiązane wydarzenia", relatedMessages: "Wiadomości", noRelatedItems: "Brak powiązanych elementów.",
    useTemplate: "Użyj szablonu", saveAsTemplate: "Zapisz wpis jako szablon", assignByGroups: "Przypisz według grup", assignByGroupsHelp: "Możesz wybrać cały kurs lub grupę, a potem dostosować uczniów.", selectAll: "Zaznacz wszystko", clearSelection: "Wyczyść wybór",
    chatPrivacyNotice: "Używaj czatu odpowiedzialnie i z szacunkiem. Rozmowa jest widoczna tylko między uczniem a nauczycielką.",
    editEvent: "Edytuj wydarzenie", deleteEvent: "Usuń wydarzenie", saveEventChanges: "Zapisz zmiany", cancelEdit: "Anuluj edycję", eventUpdated: "Wydarzenie zaktualizowane.", eventDeleted: "Wydarzenie usunięte.", ownEvent: "Wydarzenie osobiste", teacherEvent: "Wydarzenie nauczycielki", cannotEditEvent: "Możesz edytować lub usuwać tylko własne wydarzenia.",
    realtimeActive: "Wiadomości natychmiastowe aktywne", conversationWith: "Rozmowa z {name}", openChatWithStudent: "Otwórz czat", inboxPrivacy: "Prywatna skrzynka klasy: wiadomości są widoczne tylko między nauczycielką a odpowiednim uczniem."
  }
};
Object.keys(i18nEnhancements).forEach((lang) => {
  i18n[lang] = { ...(i18n[lang] || i18n.es), ...i18nEnhancements[lang] };
});

const i18nStudentEnhancements = {
  es: {
    today: "Hoy",
    badgeDetailTitle: "Detalle de insignias",
    badgeMotivationText: "Cada insignia reconoce un paso adelante. Lo importante es seguir construyendo constancia, comprensión y confianza.",
    noBadgeDetail: "Todavía no hay insignias. La primera llegará cuando completes una actividad o consigas un objetivo.",
    badgeReason: "Motivo",
    badgeDate: "Fecha",
    myDifficultSubjects: "Mis materias con dificultades",
    difficultSubjectsTitle: "Materias en las que necesito más apoyo",
    difficultSubjectsIntro: "Marca las materias que te cuestan más. Esta información ayuda a orientar mejor el refuerzo.",
    difficultSubjectsHelp: "Indica dónde necesitas más refuerzo.",
    openDifficultSubjectsHint: "Abrir y actualizar",
    difficultSubjectNotePlaceholder: "Ejemplo: me cuestan los problemas, los verbos o la organización del estudio.",
    addDifficultSubject: "Añadir materia",
    remove: "Eliminar",
    noDifficultSubjects: "No has indicado materias con dificultad especial.",
    difficultSubjectSaved: "Materia añadida a tus necesidades de refuerzo.",
    difficultSubjectDeleted: "Materia eliminada.",
    myGrades: "Mis calificaciones",
    gradesTitle: "Calificaciones del centro escolar",
    gradesIntro: "Registra tus calificaciones para detectar avances, necesidades y prioridades de estudio.",
    gradesHelp: "Registra tus notas del centro escolar.",
    openGradesHint: "Abrir calificaciones",
    gradeType: "Tipo de calificación",
    gradeExam: "Examen",
    gradeAssignment: "Trabajo",
    gradePresentation: "Presentación",
    gradeReadingExam: "Examen de libro de lectura",
    gradeOther: "Otros",
    specifyIfOther: "Especifica si has elegido otros",
    gradeValue: "Calificación",
    addGrade: "Añadir calificación",
    noGrades: "Todavía no has registrado calificaciones.",
    gradeSaved: "Calificación guardada.",
    gradeDeleted: "Calificación eliminada.",
    optionalNote: "Nota opcional",
    subjectProgress: "Progreso",
    noProgressYet: "Sin actividades completadas todavía",
    completePost: "Marcar como completada",
    postCompleted: "Actividad marcada como completada.",
    postCompletionError: "No se pudo marcar como completada.",
    openBadgesHint: "Abrir detalle de insignias",
    teacherStudentNeeds: "Necesidades indicadas por el alumnado",
    teacherStudentGrades: "Calificaciones registradas",
    noStudentNeeds: "No ha indicado materias con dificultad especial.",
    noStudentGrades: "No ha registrado calificaciones."
  },
  gl: {
    today: "Hoxe", badgeDetailTitle: "Detalle de insignias", badgeMotivationText: "Cada insignia recoñece un paso adiante. O importante é seguir construíndo constancia, comprensión e confianza.", noBadgeDetail: "Aínda non hai insignias.", badgeReason: "Motivo", badgeDate: "Data", myDifficultSubjects: "Materias con dificultades", difficultSubjectsTitle: "Materias nas que necesito máis apoio", difficultSubjectsIntro: "Marca as materias que che custan máis.", difficultSubjectsHelp: "Indica onde precisas máis reforzo.", openDifficultSubjectsHint: "Abrir e actualizar", difficultSubjectNotePlaceholder: "Exemplo: cústanme os problemas ou a organización do estudo.", addDifficultSubject: "Engadir materia", remove: "Eliminar", noDifficultSubjects: "Non indicaches materias con dificultade especial.", difficultSubjectSaved: "Materia engadida.", difficultSubjectDeleted: "Materia eliminada.", myGrades: "As miñas cualificacións", gradesTitle: "Cualificacións do centro escolar", gradesIntro: "Rexistra as túas cualificacións para detectar avances e necesidades.", gradesHelp: "Rexistra as túas notas.", openGradesHint: "Abrir cualificacións", gradeType: "Tipo de cualificación", gradeExam: "Exame", gradeAssignment: "Traballo", gradePresentation: "Presentación", gradeReadingExam: "Exame de libro de lectura", gradeOther: "Outros", specifyIfOther: "Especifica se escolliches outros", gradeValue: "Cualificación", addGrade: "Engadir cualificación", noGrades: "Aínda non rexistraches cualificacións.", gradeSaved: "Cualificación gardada.", gradeDeleted: "Cualificación eliminada.", optionalNote: "Nota opcional", subjectProgress: "Progreso", noProgressYet: "Sen actividades completadas", completePost: "Marcar como completada", postCompleted: "Actividade marcada como completada.", postCompletionError: "Non se puido marcar como completada.", openBadgesHint: "Abrir detalle de insignias", teacherStudentNeeds: "Necesidades indicadas polo alumnado", teacherStudentGrades: "Cualificacións rexistradas", noStudentNeeds: "Non indicou materias con dificultade especial.", noStudentGrades: "Non rexistrou cualificacións."
  },
  en: {
    today: "Today", badgeDetailTitle: "Badge details", badgeMotivationText: "Each badge recognises progress. The important thing is to keep building consistency, understanding and confidence.", noBadgeDetail: "No badges yet.", badgeReason: "Reason", badgeDate: "Date", myDifficultSubjects: "Subjects I find difficult", difficultSubjectsTitle: "Subjects where I need more support", difficultSubjectsIntro: "Select the subjects you find harder.", difficultSubjectsHelp: "Tell us where you need more support.", openDifficultSubjectsHint: "Open and update", difficultSubjectNotePlaceholder: "Example: word problems, verbs or study organisation.", addDifficultSubject: "Add subject", remove: "Remove", noDifficultSubjects: "No difficult subjects selected yet.", difficultSubjectSaved: "Subject added.", difficultSubjectDeleted: "Subject removed.", myGrades: "My grades", gradesTitle: "School grades", gradesIntro: "Record your school grades to spot progress and priorities.", gradesHelp: "Record your school marks.", openGradesHint: "Open grades", gradeType: "Type of grade", gradeExam: "Exam", gradeAssignment: "Assignment", gradePresentation: "Presentation", gradeReadingExam: "Reading book exam", gradeOther: "Other", specifyIfOther: "Specify if you chose other", gradeValue: "Grade", addGrade: "Add grade", noGrades: "No grades recorded yet.", gradeSaved: "Grade saved.", gradeDeleted: "Grade deleted.", optionalNote: "Optional note", subjectProgress: "Progress", noProgressYet: "No completed activities yet", completePost: "Mark as completed", postCompleted: "Activity marked as completed.", postCompletionError: "Could not mark it as completed.", openBadgesHint: "Open badge details", teacherStudentNeeds: "Needs reported by students", teacherStudentGrades: "Recorded grades", noStudentNeeds: "No difficult subjects reported.", noStudentGrades: "No grades recorded."
  },
  fr: { today: "Aujourd’hui", badgeDetailTitle: "Détail des badges", badgeMotivationText: "Chaque badge reconnaît un progrès.", noBadgeDetail: "Aucun badge pour le moment.", badgeReason: "Motif", badgeDate: "Date", myDifficultSubjects: "Matières difficiles", difficultSubjectsTitle: "Matières où j’ai besoin d’aide", difficultSubjectsIntro: "Indique les matières les plus difficiles.", difficultSubjectsHelp: "Indique où tu as besoin d’aide.", openDifficultSubjectsHint: "Ouvrir et mettre à jour", addDifficultSubject: "Ajouter une matière", remove: "Supprimer", noDifficultSubjects: "Aucune matière indiquée.", difficultSubjectSaved: "Matière ajoutée.", difficultSubjectDeleted: "Matière supprimée.", myGrades: "Mes notes", gradesTitle: "Notes scolaires", gradesIntro: "Enregistre tes notes.", gradesHelp: "Enregistre tes notes.", openGradesHint: "Ouvrir les notes", gradeType: "Type de note", gradeExam: "Examen", gradeAssignment: "Travail", gradePresentation: "Présentation", gradeReadingExam: "Examen de livre", gradeOther: "Autre", specifyIfOther: "Précise si autre", gradeValue: "Note", addGrade: "Ajouter une note", noGrades: "Aucune note enregistrée.", gradeSaved: "Note enregistrée.", gradeDeleted: "Note supprimée.", optionalNote: "Note optionnelle", subjectProgress: "Progrès", noProgressYet: "Aucune activité terminée", completePost: "Marquer comme terminée", postCompleted: "Activité marquée comme terminée.", postCompletionError: "Impossible de terminer.", openBadgesHint: "Ouvrir le détail", teacherStudentNeeds: "Besoins indiqués", teacherStudentGrades: "Notes enregistrées", noStudentNeeds: "Aucun besoin indiqué.", noStudentGrades: "Aucune note enregistrée." },
  pl: { today: "Dzisiaj", badgeDetailTitle: "Szczegóły odznak", badgeMotivationText: "Każda odznaka oznacza postęp.", noBadgeDetail: "Brak odznak.", badgeReason: "Powód", badgeDate: "Data", myDifficultSubjects: "Trudniejsze przedmioty", difficultSubjectsTitle: "Przedmioty, w których potrzebuję wsparcia", difficultSubjectsIntro: "Wybierz trudniejsze przedmioty.", difficultSubjectsHelp: "Wskaż, gdzie potrzebujesz wsparcia.", openDifficultSubjectsHint: "Otwórz i zaktualizuj", addDifficultSubject: "Dodaj przedmiot", remove: "Usuń", noDifficultSubjects: "Brak wskazanych przedmiotów.", difficultSubjectSaved: "Dodano przedmiot.", difficultSubjectDeleted: "Usunięto przedmiot.", myGrades: "Moje oceny", gradesTitle: "Oceny szkolne", gradesIntro: "Zapisz swoje oceny.", gradesHelp: "Zapisz oceny.", openGradesHint: "Otwórz oceny", gradeType: "Typ oceny", gradeExam: "Sprawdzian", gradeAssignment: "Praca", gradePresentation: "Prezentacja", gradeReadingExam: "Test z lektury", gradeOther: "Inne", specifyIfOther: "Doprecyzuj", gradeValue: "Ocena", addGrade: "Dodaj ocenę", noGrades: "Brak ocen.", gradeSaved: "Ocena zapisana.", gradeDeleted: "Ocena usunięta.", optionalNote: "Notatka opcjonalna", subjectProgress: "Postęp", noProgressYet: "Brak ukończonych aktywności", completePost: "Oznacz jako ukończone", postCompleted: "Aktywność ukończona.", postCompletionError: "Nie udało się oznaczyć.", openBadgesHint: "Otwórz szczegóły", teacherStudentNeeds: "Wskazane potrzeby", teacherStudentGrades: "Zapisane oceny", noStudentNeeds: "Brak wskazanych potrzeb.", noStudentGrades: "Brak ocen." }
};
Object.keys(i18nStudentEnhancements).forEach((lang) => {
  i18n[lang] = { ...(i18n[lang] || i18n.es), ...i18nStudentEnhancements[lang] };
});

function t(key, params = {}) {
  const dictionary = i18n[state.lang] || i18n.es;
  let value = dictionary[key] || i18n.es[key] || key;

  Object.entries(params).forEach(([param, replacement]) => {
    value = value.replaceAll(`{${param}}`, String(replacement));
  });

  return value;
}

function applyI18n() {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = t(key);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    element.setAttribute("placeholder", t(key));
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const key = element.dataset.i18nAria;
    element.setAttribute("aria-label", t(key));
  });

  document.documentElement.lang = state.lang;

  if (currentUserId) {
    authButton.textContent = t("logoutAction");
  } else {
    authButton.textContent = t("loginAction");
  }

  if (toggleTeacherCompactButton) {
    toggleTeacherCompactButton.textContent = document.body.classList.contains("teacher-compact-mode")
      ? t("expandTeacherView")
      : t("compactTeacherView");
  }
}



Object.keys(i18n).forEach(function (lang) {
  i18n[lang] = Object.assign({
    teacherTools: "Herramientas de profesora",
    teacherToolsHelp: "Accesos compactos. Cada apartado se abre en una ventana de trabajo.",
    newPostHelp: "Crear publicaciones, vídeos, juegos, desafíos o materiales.",
    newDateHelp: "Publicar exámenes, entregas, avisos y excursiones.",
    studentGroupsHelpShort: "Ver grupos para asignar con rapidez.",
    recentActivityHelpShort: "Accesos, publicaciones consultadas y actividad reciente.",
    teacherSupervisionHelpShort: "Conversaciones educativas abiertas con el alumnado."
  }, i18n[lang]);
});

Object.keys(i18n).forEach(function (lang) {
  i18n[lang] = Object.assign({
    academicYear: "Curso {year}",
    academicYearPreparation: "Preparación del curso {year}",
    mySchoolCenter: "Mi centro educativo",
    openSchoolProfileHint: "Ver o modificar centro, etapa y curso",
    schoolProfile: "Perfil escolar",
    schoolProfileTitle: "Centro, etapa y curso",
    schoolProfileIntro: "Mantén actualizados estos datos para que las publicaciones y avisos lleguen bien.",
    schoolCenter: "Centro educativo",
    studyType: "Tipo de estudios",
    educationalStage: "Etapa educativa",
    academicCourse: "Curso",
    saveSchoolProfile: "Guardar perfil escolar",
    schoolProfileSaved: "Perfil escolar guardado.",
    targetBySchool: "Destinatarios por centro y curso",
    targetBySchoolHelp: "Elige centro educativo, tipo de estudios y curso. Después puedes quitar o añadir alumnado manualmente.",
    selectMatchingStudents: "Seleccionar coincidencias",
    teacherAlertsTitle: "Alertas docentes",
    teacherAlertsHelp: "Vista sobria para priorizar seguimiento: alumnado sin entrar, materias difíciles, calificaciones bajas y publicaciones pendientes.",
    teacherAlertsHelpShort: "Inactividad, dificultades, calificaciones bajas y tareas pendientes.",
    inactiveStudents: "Sin entrar en varios días",
    difficultSubjectAlerts: "Materias marcadas como difíciles",
    lowGradeAlerts: "Calificaciones bajas recientes",
    pendingPostsAlerts: "Publicaciones pendientes",
    noTeacherAlerts: "No hay alertas relevantes ahora mismo.",
    daysWithoutLogin: "{count} día(s) sin entrar",
    pendingCount: "{count} pendiente(s)",
    promotionToolTitle: "Cambio de curso",
    promotionToolHelp: "Puedes promocionar automáticamente al curso siguiente o modificar cada perfil desde la vista individual del alumnado.",
    promoteStudentsButton: "Promocionar alumnado al curso siguiente",
    promoteConfirm: "¿Seguro que quieres promocionar automáticamente al curso siguiente al alumnado con curso reconocido?",
    promotionDone: "Promoción realizada. Revisa los perfiles individuales antes de comenzar el nuevo curso.",
    studentSchoolData: "Datos escolares",
    saveStudentSchoolData: "Guardar datos escolares",
    promoted: "Curso actualizado.",
    unassigned: "Sin asignar",
    allCenters: "Todos los centros",
    allStudyTypes: "Todos los estudios",
    allCourses: "Todos los cursos"
  }, i18n[lang]);
});


const tribecaInterfaceLabels = {
    // Mantener traducciones propias si existen, pero asegurar que no aparezcan claves técnicas en la interfaz.
    teacherTools: "Herramientas de profesora",
    teacherToolsHelp: "Accesos compactos. Cada apartado se abre en una ventana de trabajo.",
    teacherMode: "Modo docente",
    teacherOverview: "Vista general del aula",
    teacherOverviewHelpShort: "Resumen rápido de alumnado, publicaciones, grupos y mensajes.",
    newPostHelp: "Crear anuncios, noticias, avisos, materiales y tareas.",
    newDateHelp: "Publicar exámenes, entregas, avisos y excursiones.",
    studentGroups: "Grupos de alumnado",
    studentGroupsHelp: "Organiza el alumnado por grupos para asignar materiales con rapidez.",
    studentGroupsHelpShort: "Crear y revisar grupos de alumnado.",
    classroomActivityTitle: "Qué ha ocurrido en el aula",
    recentActivity: "Actividad reciente",
    recentActivityHelp: "Últimos accesos, publicaciones consultadas, actividades completadas y cambios relevantes.",
    recentActivityHelpShort: "Accesos, publicaciones consultadas y actividad reciente.",
    classroomChats: "Chats del aula",
    teacherSupervision: "Supervisión docente",
    teacherSupervisionHelp: "Panel visible solo para la profesora. Úsalo para seguimiento educativo y organización del aula.",
    teacherSupervisionHelpShort: "Conversaciones educativas abiertas con el alumnado.",
    subjectImageHelpShort: "Cambiar imagen de una materia.",
    badgeToolHelpShort: "Asignar insignias y reconocer avances.",
    passwordHelpRequests: "Solicitudes de recuperación de contraseña",
    passwordHelpRequestsShort: "Alumnado que necesita una contraseña nueva.",
    passwordHelpTeacherHelp: "Estas solicitudes te avisan para restablecer la contraseña y comunicar una nueva al alumno o alumna.",
    notificationCenter: "Centro de notificaciones",
    notificationCenterHelp: "Avisos internos de Tribeca Aula. Cada aviso enlaza con la sección correspondiente.",
    notifications: "Notificaciones",
    markAllRead: "Marcar todo como leído",
    noNotifications: "No hay notificaciones pendientes.",
    openSection: "Ver apartado",
    notificationNewPost: "Nueva publicación",
    notificationNewTask: "Nueva tarea",
    notificationNewCorrection: "Nueva corrección",
    notificationNewMessage: "Nuevo mensaje",
    notificationNewMaterial: "Nuevo material",
    notificationNewEvent: "Nuevo evento",
    notificationPendingTask: "Tarea pendiente",
    notificationExam: "Examen o recordatorio",
    notificationAchievement: "Logro conseguido",
    notificationGeneral: "Aviso general",
    notificationPassword: "Contraseña",
    notificationQuickNeed: "Mensaje rápido",
    noPasswordRequests: "No hay solicitudes de recuperación de contraseña.",
    myAccount: "Mi cuenta",
    security: "Seguridad",
    securityHelp: "Gestiona el acceso a tu cuenta y pide ayuda si necesitas una nueva contraseña.",
    requestPasswordHelp: "Solicitar ayuda para recuperar contraseña",
    passwordHelpSent: "Solicitud enviada a la profesora. Te dará una nueva contraseña cuando la revise.",
    passwordHelpAlreadySent: "Ya tienes una solicitud pendiente.",
    profilePhotoHelp: "Formatos admitidos: PNG, JPG o WEBP. Tamaño máximo: 2 MB. La imagen debe ser clara y respetuosa.",
    deleteProfilePhoto: "Eliminar foto de perfil",
    profilePhotoUploaded: "Foto de perfil subida correctamente.",
    profilePhotoDeleted: "Foto de perfil eliminada correctamente.",
    profilePhotoDeleteError: "No se pudo eliminar la foto de perfil.",
    profilePhotoInvalidType: "La imagen debe ser PNG, JPG o WEBP.",
    profilePhotoTooLarge: "La imagen supera el tamaño máximo de 2 MB.",
    profilePhotoUploadError: "No se pudo subir la imagen de perfil.",
    emailNotifications: "Notificaciones por email",
    emailNoticeHelp: "El email solo servirá como aviso. No se enviarán notas, mensajes privados ni información sensible en el correo.",
    receiveEmailAlerts: "Recibir avisos por email",
    studentEmail: "Email del alumno/a",
    familyEmail: "Email familiar",
    sendAlertsTo: "Enviar avisos a",
    toStudent: "Al alumno/a",
    toFamily: "A la familia",
    toBoth: "A ambos",
    frequency: "Frecuencia",
    immediate: "Inmediata",
    dailySummary: "Resumen diario",
    weeklySummary: "Resumen semanal",
    noEmails: "No recibir emails",
    emailAlertTypes: "Tipos de aviso",
    saveEmailPrefs: "Guardar preferencias de email",
    emailPrefsSaved: "Preferencias de email guardadas.",
    quickMessageTeacher: "Mensaje rápido a la profesora",
    quickMessageHelp: "Elige una necesidad y añade un mensaje breve si lo necesitas. Máximo 300 caracteres.",
    whatDoYouNeed: "¿Qué necesitas?",
    needQuestion: "Tengo una duda",
    needExplanation: "No entendí la última explicación",
    needReview: "Necesito repasar este tema",
    needOrganization: "Me cuesta organizarme",
    needExercises: "Quiero más ejercicios",
    needStart: "No sé por dónde empezar",
    needTalk: "Quiero comentar algo con la profesora",
    briefMessage: "Mensaje breve",
    sendQuickMessage: "Enviar mensaje rápido",
    quickNeedSent: "Mensaje enviado a la profesora.",
    myActivity: "Mi actividad",
    lastAccess: "Último acceso",
    currentSession: "Sesión actual",
    officialName: "Nombre oficial",
    visibleName: "Nombre visible",
    accessEmail: "Email de acceso",
    accountCreated: "Fecha de alta",
    currentCourse: "Curso actual",
    assignedSubjects: "Materias asignadas",
    teacherAlertsTitle: "Alertas docentes",
    teacherAlertsHelp: "Vista sobria para priorizar seguimiento: alumnado sin entrar, materias difíciles, calificaciones bajas y publicaciones pendientes.",
    teacherAlertsHelpShort: "Inactividad, dificultades, calificaciones bajas y tareas pendientes.",
    teacherFeed: "Feed docente",
    teacherFeedTitle: "Feed de noticias y anuncios",
    latestFeedPosts: "Feed de noticias y anuncios",
    feed: "Feed",
    noFeedPosts: "Todavía no hay noticias, anuncios ni avisos.",
    postTypeAnnouncement: "Anuncio",
    postTypeNews: "Noticia",
    postTypeNotice: "Aviso",
    postTypeNotes: "Material o recurso",
    newMaterialAvailable: "Nuevo material disponible ({count})",
    mySchoolCenter: "Mi centro educativo",
    schoolProfile: "Perfil escolar",
    schoolProfileTitle: "Centro, etapa y curso",
    schoolProfileIntro: "Mantén actualizados estos datos para que las publicaciones y avisos lleguen bien.",
    schoolCenter: "Centro educativo",
    educationalStage: "Etapa educativa",
    academicCourse: "Curso",
    saveSchoolProfile: "Guardar perfil escolar",
    targetBySchool: "Destinatarios por centro, etapa y curso",
    targetBySchoolHelp: "Elige centro educativo, etapa y curso. Después puedes quitar o añadir alumnado manualmente.",
    allEducationalStages: "Todas las etapas",
    teacherStudentNeeds: "Materias con dificultades",
    teacherStudentGrades: "Calificaciones registradas",
    noStudentNeeds: "No indicó materias con dificultad especial.",
    noStudentGrades: "No registró calificaciones.",
    myStatus: "Mi estado",
    statusOnline: "Conectado",
    statusStudying: "Estudiando",
    statusWorking: "Trabajando",
    statusOffline: "Desconectado",
    sound: "Sonido",
    openConversation: "Abrir conversación", connectedPeople: "Personas conectadas",
    openMessages: "Abrir mensajes",
    openCalendar: "Abrir calendario",
    openUnreadMessages: "Abrir mensajes no leídos",
    internalMailbox: "Buzón interno",
    unreadMessages: "Mensajes no leídos",
    deleteSelectedInbox: "Borrar seleccionados",
    markAsRead: "Marcar como leído",
    quickEmojis: "Emojis rápidos",
    nudge: "👋 Toque",
    noRelatedItems: "No hay elementos relacionados todavía.",
    assignedWork: "Trabajos y publicaciones",
    relatedEvents: "Eventos relacionados",
    relatedMessages: "Mensajes",
    studentProfiles: "Perfiles del alumnado",
    studentOverview: "Vista individual del alumnado",
    studentOverviewHelp: "Abre cada ficha para consultar centro, curso, publicaciones, mensajes, calificaciones, necesidades y últimos movimientos.",
    openBadgesHint: "Ver insignias",
    openDifficultSubjectsHint: "Ver o actualizar",
    openGradesHint: "Ver calificaciones",
    openSchoolProfileHint: "Ver o modificar centro, etapa y curso",
    saveProfileChanges: "Guardar cambios del perfil",
    profileUnsavedChanges: "Hay cambios sin guardar.",
    closeProfile: "Cerrar perfil",
    openSection: "Abrir apartado",
    profileSectionWindow: "Detalle del perfil",
    changePasswordAction: "Cambiar contraseña",
    passwordChangeConfirm: "¿Seguro que quieres cambiar la contraseña?",
    passwordChangedCorrectly: "Contraseña cambiada correctamente.",
    passwordChangeEmpty: "Escribe y repite la nueva contraseña.",
    completedThisWeek: "Actividades completadas esta semana",
    pendingTasks: "Tareas pendientes",
    nextEvents: "Próximos eventos",
    noEvents: "Sin eventos",
    streak: "Racha de estudio",
    currentLevel: "Nivel actual",
    accumulatedPoints: "Puntos acumulados",
    latestMovements: "Últimos movimientos",
    studentDetail: "Ficha del alumno/a",
    schoolAndCourse: "Centro y curso",
    noPasswordRequests: "No hay solicitudes pendientes.",
    pendingPassword: "Solicitud de recuperación de contraseña pendiente.",
    markResolved: "Marcar como resuelta",
    newDidacticUnit: "Nueva unidad didáctica",
    addToExistingUnit: "Añadir a unidad existente",
    noTemplate: "Sin plantilla",
    quickMessageMovedHelp: "También puedes enviar un mensaje rápido desde este apartado.",
    quickNeedTypeDuda: "Tengo una duda",
    quickNeedTypeExplicacion: "No entendí la última explicación",
    quickNeedTypeRepaso: "Necesito repasar este tema",
    quickNeedTypeOrganizacion: "Me cuesta organizarme",
    quickNeedTypeEjercicios: "Quiero más ejercicios",
    quickNeedTypeInicio: "No sé por dónde empezar",
    quickNeedTypeComentario: "Quiero comentar algo con la profesora",

};
Object.keys(i18n).forEach(function (lang) {
  i18n[lang] = Object.assign({}, tribecaInterfaceLabels, i18n[lang]);
  if (lang === "es") {
    i18n[lang] = Object.assign({}, i18n[lang], tribecaInterfaceLabels);
  }
});

const tribecaFinalCleanLabels = {
  manageStudentsTitle: "Gestionar alumnado",
  manageStudentsHelpShort: "Añadir, archivar o editar centro, curso y horario.",
  manageStudentsHelp: "Alta básica, archivo y edición de centro, etapa, curso y horario de asistencia a Tribeca Aula.",
  addStudentTitle: "Añadir alumno/a",
  addStudentHelp: "Crea una cuenta básica con usuario y contraseña inicial. El alumno/a deberá cambiarla al entrar.",
  initialPassword: "Contraseña inicial",
  createStudentAccount: "Crear alumno/a",
  bulkStudentActions: "Acciones sobre alumnado",
  bulkStudentHelp: "Selecciona alumnado para archivarlo. La cuenta deja de aparecer en el aula, pero se conservan los datos históricos.",
  archiveSelectedStudents: "Archivar seleccionados",
  archiveStudent: "Archivar alumno/a",
  archiveStudentConfirm: "¿Seguro que quieres archivar este alumno o alumna? Dejará de aparecer en el aula.",
  archiveStudentsConfirm: "¿Seguro que quieres archivar el alumnado seleccionado?",
  studentsArchived: "Alumnado archivado correctamente.",
  archiveStudentError: "No se pudo archivar el alumnado seleccionado.",
  selectStudentsFirst: "Selecciona al menos un alumno o alumna.",
  completeRequiredFields: "Completa los campos obligatorios.",
  studentCreated: "Alumno/a creado correctamente. Entrará con el usuario y la contraseña inicial indicados.",
  studentCreateAuthError: "No se pudo crear la cuenta de acceso. Revisa que el usuario no exista ya y que Supabase permita altas con email local.",
  studentCreateProfileError: "La cuenta se creó, pero no se pudo completar el perfil. Revisa la migración SQL.",
  tribecaSchedule: "Horario en Tribeca Aula",
  tribecaSchedulePlaceholder: "Ej.: lunes y miércoles, 17:00-18:00",
  schedulePlaceholder: "Ej.: lunes y miércoles, 17:00-18:00",
  noTribecaSchedule: "Sin horario de asistencia indicado",
  studentSchoolReadonly: "Estos datos los gestiona la profesora desde el panel docente.",
  studentSchoolSaveError: "No se pudo guardar. Ejecuta la migración SQL de gestión de alumnado o revisa permisos de profesora.",
  schoolProfileIntro: "Estos datos los actualiza la profesora para que publicaciones, avisos y materiales lleguen correctamente.",
  saveStudentSchoolData: "Guardar centro, curso y horario",
  schoolProfileSaved: "Datos escolares guardados correctamente.",
  targetBySchoolHelp: "Elige centro educativo y curso. Después puedes quitar o añadir alumnado de forma manual.",
  openChatWithStudent: "Abrir chat",
  relatedMessages: "Mensajes relacionados",
  noActivity: "Sin actividad reciente",
  completedThisWeek: "Actividades completadas esta semana",
  pendingTasks: "Tareas pendientes",
  nextEvents: "Próximos eventos",
  noEvents: "Sin eventos",
  currentLevel: "Nivel actual",
  accumulatedPoints: "Puntos acumulados",
  visibleNickname: "Nombre visible",
  preloadedAvatar: "Icono de perfil",
  latestFeedPosts: "Feed de noticias y anuncios",
  teacherFeed: "Feed docente",
  teacherFeedTitle: "Feed de noticias y anuncios",
  postTypeNotes: "Material o recurso",
  postTypeAnnouncement: "Anuncio",
  postTypeNews: "Noticia",
  postTypeNotice: "Aviso",
  edit: "Editar",
  editPost: "Editar publicación",
  savePostChanges: "Guardar cambios",
  cancelEdit: "Cancelar edición",
  postUpdated: "Publicación actualizada correctamente.",
  postUpdateError: "No se pudo actualizar la publicación.",
  inlineImageHelp: "Si subes una imagen, aparecerá visible dentro de la publicación sin que el alumnado tenga que abrirla aparte.",
  keepCurrentFileHelp: "Si no eliges un archivo nuevo, se conservará el archivo actual de la publicación."
};
Object.keys(i18n).forEach(function (lang) {
  i18n[lang] = Object.assign({}, i18n[lang], tribecaFinalCleanLabels);
});


const loginForm = document.getElementById("loginForm");
const loginButton = document.getElementById("loginButton");
const loginError = document.getElementById("loginError");
const loginSection = document.getElementById("loginSection");
const authButton = document.getElementById("authButton");
const profileButton = document.getElementById("profileButton");
const quickNav = document.getElementById("quickNav");
const quickCalendarLink = document.getElementById("quickCalendarLink");
const quickMessagesLink = document.getElementById("quickMessagesLink");
const rightRail = document.getElementById("rightRail");

const fontSizeSelect = document.getElementById("fontSizeSelect");
const btnDarkMode = document.getElementById("btnDarkMode");
const dyslexiaSelect = document.getElementById("dyslexiaSelect");
const languageSelect = document.getElementById("languageSelect");

const profilePanel = document.getElementById("profilePanel");
const profileForm = document.getElementById("profileForm");
const closeProfilePanelButton = document.getElementById("closeProfilePanelButton");
const profileUnsavedMessage = document.getElementById("profileUnsavedMessage");
const passwordChangeForm = document.getElementById("passwordChangeForm");
const quickNeedCard = document.getElementById("quickNeedCard");
const quickNeedMessagesSlot = document.getElementById("quickNeedMessagesSlot");
const profileNickname = document.getElementById("profileNickname");
const profileNewPassword = document.getElementById("profileNewPassword");
const profileRepeatPassword = document.getElementById("profileRepeatPassword");
const profileAvatarFile = document.getElementById("profileAvatarFile");
const deleteProfilePhotoButton = document.getElementById("deleteProfilePhotoButton");
const profileAvatarPreview = document.getElementById("profileAvatarPreview");
const profileNamePreview = document.getElementById("profileNamePreview");
const avatarChoiceList = document.getElementById("avatarChoiceList");
const profileMessage = document.getElementById("profileMessage");
const profileAccountInfo = document.getElementById("profileAccountInfo");
const requestPasswordHelpButton = document.getElementById("requestPasswordHelpButton");
const passwordHelpMessage = document.getElementById("passwordHelpMessage");
const emailPrefsForm = document.getElementById("emailPrefsForm");
const emailPrefsEnabled = document.getElementById("emailPrefsEnabled");
const emailPrefsStudent = document.getElementById("emailPrefsStudent");
const emailPrefsFamily = document.getElementById("emailPrefsFamily");
const emailPrefsRecipient = document.getElementById("emailPrefsRecipient");
const emailPrefsFrequency = document.getElementById("emailPrefsFrequency");
const emailPrefsTypes = document.getElementById("emailPrefsTypes");
const emailPrefsMessage = document.getElementById("emailPrefsMessage");
const studentActivitySummary = document.getElementById("studentActivitySummary");
const quickNeedForm = document.getElementById("quickNeedForm");
const quickNeedType = document.getElementById("quickNeedType");
const quickNeedText = document.getElementById("quickNeedText");
const quickNeedCounter = document.getElementById("quickNeedCounter");
const quickNeedMessage = document.getElementById("quickNeedMessage");
const privacyPrefsForm = document.getElementById("privacyPrefsForm");
const privacyPlatformUse = document.getElementById("privacyPlatformUse");
const privacyEmailContact = document.getElementById("privacyEmailContact");
const privacyFamilyContact = document.getElementById("privacyFamilyContact");
const privacyProfileImage = document.getElementById("privacyProfileImage");
const privacyPrefsMessage = document.getElementById("privacyPrefsMessage");

const studentDashboardSection = document.getElementById("studentDashboardSection");
const teacherDashboardSection = document.getElementById("teacherDashboardSection");
const communicationSection = document.getElementById("communicationSection");

const studentName = document.getElementById("studentName");
const studentCourse = document.getElementById("studentCourse");
const courseCardText = document.getElementById("courseCardText");
const learningSettingsText = document.getElementById("learningSettingsText");
const progressText = document.getElementById("progressText");
const progressFill = document.getElementById("progressFill");
const badgesContainer = document.getElementById("badgesContainer");
const studentTodayDate = document.getElementById("studentTodayDate");
const studentBadgesCard = document.getElementById("studentBadgesCard");
const studentDifficultSubjectsCard = document.getElementById("studentDifficultSubjectsCard");
const studentGradesCard = document.getElementById("studentGradesCard");
const studentBadgesPanel = document.getElementById("studentBadgesPanel");
const studentBadgesDetailList = document.getElementById("studentBadgesDetailList");
const studentDifficultSubjectsPanel = document.getElementById("studentDifficultSubjectsPanel");
const difficultSubjectForm = document.getElementById("difficultSubjectForm");
const difficultSubjectSelect = document.getElementById("difficultSubjectSelect");
const difficultSubjectNote = document.getElementById("difficultSubjectNote");
const difficultSubjectMessage = document.getElementById("difficultSubjectMessage");
const difficultSubjectsList = document.getElementById("difficultSubjectsList");
const difficultSubjectsSummary = document.getElementById("difficultSubjectsSummary");
const studentGradesPanel = document.getElementById("studentGradesPanel");
const gradeRecordForm = document.getElementById("gradeRecordForm");
const gradeSubjectSelect = document.getElementById("gradeSubjectSelect");
const gradeTypeSelect = document.getElementById("gradeTypeSelect");
const gradeOtherTypeInput = document.getElementById("gradeOtherTypeInput");
const gradeValueInput = document.getElementById("gradeValueInput");
const gradeDateInput = document.getElementById("gradeDateInput");
const gradeNoteInput = document.getElementById("gradeNoteInput");
const gradeRecordMessage = document.getElementById("gradeRecordMessage");
const gradeRecordsList = document.getElementById("gradeRecordsList");
const gradesSummary = document.getElementById("gradesSummary");
const studentSchoolCard = document.getElementById("studentSchoolCard");
const studentSchoolPanel = document.getElementById("studentSchoolPanel");
const studentSchoolForm = document.getElementById("studentSchoolForm");
const studentSchoolCenterSelect = document.getElementById("studentSchoolCenterSelect");
const studentStudyTypeSelect = document.getElementById("studentStudyTypeSelect");
const studentEducationalStageSelect = document.getElementById("studentEducationalStageSelect");
const studentAcademicCourseSelect = document.getElementById("studentAcademicCourseSelect");
const studentSchoolMessage = document.getElementById("studentSchoolMessage");
const academicYearBanner = document.getElementById("academicYearBanner");
const brandLogo = document.querySelector(".brand-logo");
const defaultBrandLogoMarkup = brandLogo ? brandLogo.innerHTML : "";

const subjectsContainer = document.getElementById("subjectsContainer");
const studentEventSubject = document.getElementById("studentEventSubject");
const studentEventForm = document.getElementById("studentEventForm");
const studentEventTitle = document.getElementById("studentEventTitle");
const studentEventDate = document.getElementById("studentEventDate");
const studentEventDescription = document.getElementById("studentEventDescription");
const studentEventMessage = document.getElementById("studentEventMessage");

const studentPrevMonth = document.getElementById("studentPrevMonth");
const studentNextMonth = document.getElementById("studentNextMonth");
const studentMonthTitle = document.getElementById("studentMonthTitle");
const studentMonthGrid = document.getElementById("studentMonthGrid");
const studentCalendarList = document.getElementById("studentCalendarList");
const studentWallList = document.getElementById("studentWallList");

const subjectDetail = document.getElementById("subjectDetail");
const subjectDetailTitle = document.getElementById("subjectDetailTitle");
const subjectDetailBody = document.getElementById("subjectDetailBody");
const subjectModal = document.getElementById("subjectModal");
const subjectModalTitle = document.getElementById("subjectModalTitle");
const subjectModalBody = document.getElementById("subjectModalBody");
const closeSubjectModal = document.getElementById("closeSubjectModal");
const dayModal = document.getElementById("dayModal");
const closeDayModal = document.getElementById("closeDayModal");
const dayModalTitle = document.getElementById("dayModalTitle");
const dayModalEvents = document.getElementById("dayModalEvents");
const dayEventForm = document.getElementById("dayEventForm");
const dayEventSubject = document.getElementById("dayEventSubject");
const dayEventType = document.getElementById("dayEventType");
const dayEventTitleInput = document.getElementById("dayEventTitleInput");
const dayEventTimeInput = document.getElementById("dayEventTimeInput");
const dayEventDescriptionInput = document.getElementById("dayEventDescriptionInput");
const dayEventMessage = document.getElementById("dayEventMessage");
const panelWindowModal = document.getElementById("panelWindowModal");
const panelWindowTitle = document.getElementById("panelWindowTitle");
const panelWindowBody = document.getElementById("panelWindowBody");
const closePanelWindow = document.getElementById("closePanelWindow");
const teacherPanelButtons = document.querySelectorAll(".teacher-launch-card[data-teacher-panel]");
let openedTeacherPanel = null;
let openedTeacherPanelPlaceholder = null;
let openedFloatingPanel = null;
let openedFloatingPanelPlaceholder = null;
let editingPostId = null;
let editingPostOriginalContent = null;

const contentPanel = document.getElementById("contentPanel");
const contentTitle = document.getElementById("contentTitle");
const contentBody = document.getElementById("contentBody");

const teacherPostForm = document.getElementById("teacherPostForm");
const teacherSubject = document.getElementById("teacherSubject");
const teacherPostType = document.getElementById("teacherPostType");
const teacherUnitMode = document.getElementById("teacherUnitMode");
const teacherUnitExisting = document.getElementById("teacherUnitExisting");
const teacherUnitNew = document.getElementById("teacherUnitNew");
const teacherUnitExistingControls = document.querySelectorAll(".unit-existing-control");
const teacherUnitNewControls = document.querySelectorAll(".unit-new-control");
const teacherTitle = document.getElementById("teacherTitle");
const teacherBody = document.getElementById("teacherBody");
const teacherKeyPoints = document.getElementById("teacherKeyPoints");
const teacherUrl = document.getElementById("teacherUrl");
const teacherFile = document.getElementById("teacherFile");
const teacherFileEditHint = document.getElementById("teacherFileEditHint");
const teacherPostSubmitButton = document.getElementById("teacherPostSubmitButton");
const cancelPostEditButton = document.getElementById("cancelPostEditButton");
const teacherStudentsList = document.getElementById("teacherStudentsList");
const teacherPostMessage = document.getElementById("teacherPostMessage");
const postTemplateSelect = document.getElementById("postTemplateSelect");
const savePostTemplateButton = document.getElementById("savePostTemplateButton");
const teacherGroupsList = document.getElementById("teacherGroupsList");
const selectAllStudentsButton = document.getElementById("selectAllStudentsButton");
const clearAllStudentsButton = document.getElementById("clearAllStudentsButton");
const teacherMetricStudents = document.getElementById("teacherMetricStudents");
const teacherMetricPosts = document.getElementById("teacherMetricPosts");
const teacherMetricGroups = document.getElementById("teacherMetricGroups");
const teacherMetricUnread = document.getElementById("teacherMetricUnread");
const teacherGroupSummary = document.getElementById("teacherGroupSummary");
const recentActivityList = document.getElementById("recentActivityList");
const teacherChatOverview = document.getElementById("teacherChatOverview");
const toggleTeacherCompactButton = document.getElementById("toggleTeacherCompactButton");
const teacherStudentFocusSelect = document.getElementById("teacherStudentFocusSelect");
const teacherStudentFocusBody = document.getElementById("teacherStudentFocusBody");
const openTeacherMessagesButton = document.getElementById("openTeacherMessagesButton");
const openTeacherCalendarButton = document.getElementById("openTeacherCalendarButton");
const teacherFilterCenter = document.getElementById("teacherFilterCenter");
const teacherFilterStudyType = document.getElementById("teacherFilterStudyType");
const teacherFilterAcademicCourse = document.getElementById("teacherFilterAcademicCourse");
const applyStudentFilterButton = document.getElementById("applyStudentFilterButton");
const clearStudentFilterButton = document.getElementById("clearStudentFilterButton");
const teacherAlertsList = document.getElementById("teacherAlertsList");
const promoteStudentsButton = document.getElementById("promoteStudentsButton");
const promotionMessage = document.getElementById("promotionMessage");
const teacherRecoveryList = document.getElementById("teacherRecoveryList");
const teacherChronologicalFeedPanel = document.getElementById("teacherChronologicalFeedPanel");
const toggleTeacherFeedButton = document.getElementById("toggleTeacherFeedButton");

const coverSubjectSelect = document.getElementById("coverSubjectSelect");
const coverImageFile = document.getElementById("coverImageFile");
const subjectCoverForm = document.getElementById("subjectCoverForm");
const deleteCoverButton = document.getElementById("deleteCoverButton");
const coverMessage = document.getElementById("coverMessage");

const teacherEventForm = document.getElementById("teacherEventForm");
const teacherEventSubject = document.getElementById("teacherEventSubject");
const teacherEventType = document.getElementById("teacherEventType");
const teacherEventTitle = document.getElementById("teacherEventTitle");
const teacherEventDate = document.getElementById("teacherEventDate");
const teacherEventDescription = document.getElementById("teacherEventDescription");
const teacherEventStudentsList = document.getElementById("teacherEventStudentsList");
const teacherEventMessage = document.getElementById("teacherEventMessage");

const teacherBadgeForm = document.getElementById("teacherBadgeForm");
const teacherBadgeStudent = document.getElementById("teacherBadgeStudent");
const teacherBadge = document.getElementById("teacherBadge");
const teacherBadgeNote = document.getElementById("teacherBadgeNote");
const teacherBadgeMessage = document.getElementById("teacherBadgeMessage");

const teacherPrevMonth = document.getElementById("teacherPrevMonth");
const teacherNextMonth = document.getElementById("teacherNextMonth");
const teacherMonthTitle = document.getElementById("teacherMonthTitle");
const teacherMonthGrid = document.getElementById("teacherMonthGrid");

const teacherPostsList = document.getElementById("teacherPostsList");
const deleteSelectedPostsButton = document.getElementById("deleteSelectedPostsButton");

const messageForm = document.getElementById("messageForm");
const messageRecipient = document.getElementById("messageRecipient");
const messageSubject = document.getElementById("messageSubject");
const messageBody = document.getElementById("messageBody");
const messageStatus = document.getElementById("messageStatus");
const messageList = document.getElementById("messageList");
const messageUnreadBadge = document.getElementById("messageUnreadBadge");
const messageUnreadNotice = document.getElementById("messageUnreadNotice");
const quickUnreadBadge = document.getElementById("quickUnreadBadge");
const quickUpcomingBadge = document.getElementById("quickUpcomingBadge");
const quickNotificationsLink = document.getElementById("quickNotificationsLink");
const quickNotificationsBadge = document.getElementById("quickNotificationsBadge");
const notificationCenterPanel = document.getElementById("notificationCenterPanel");
const notificationList = document.getElementById("notificationList");
const markAllNotificationsReadButton = document.getElementById("markAllNotificationsReadButton");
const quickUpcomingLink = document.getElementById("quickUpcomingLink");
const markMessagesReadButton = document.getElementById("markMessagesReadButton");
const openUnreadMessagesButton = document.getElementById("openUnreadMessagesButton");
const markMessagesReadTopButton = document.getElementById("markMessagesReadTopButton");
const messageInboxTab = document.getElementById("messageInboxTab");
const messageSentTab = document.getElementById("messageSentTab");
const messageComposeTab = document.getElementById("messageComposeTab");
const deleteSelectedInboxMessagesButton = document.getElementById("deleteSelectedInboxMessagesButton");

const chatContact = document.getElementById("chatContact");
const chatMessages = document.getElementById("chatMessages");
const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");
const chatSoundToggle = document.getElementById("chatSoundToggle");
const presenceStatusSelect = document.getElementById("presenceStatusSelect");
const openChatTabsButton = document.getElementById("openChatTabsButton");
const chatTabs = document.getElementById("chatTabs");
const replyPreview = document.getElementById("replyPreview");
const nudgeButton = document.getElementById("nudgeButton");
const emojiButtons = document.querySelectorAll(".emoji-button");
const streakToast = document.getElementById("streakToast");
const streakToastText = document.getElementById("streakToastText");
const backToTopButton = document.getElementById("backToTopButton");

const railPrevMonth = document.getElementById("railPrevMonth");
const railNextMonth = document.getElementById("railNextMonth");
const railMonthTitle = document.getElementById("railMonthTitle");
const railMonthGrid = document.getElementById("railMonthGrid");

let currentUserId = null;
let currentProfile = null;
let currentSubjects = [];
let currentPosts = [];
let currentEvents = [];
let currentBadgeAwards = [];
let currentUnits = [];
let currentPostCompletions = [];
let currentDifficultSubjects = [];
let currentGradeRecords = [];
let schoolCenters = [];
let platformNotifications = [];
let emailPreferences = null;
let privacyPreferences = null;
let teacherPasswordRequests = [];
let teacherQuickHelpRequests = [];
let studentAvatarUrlCache = new Map();

let teacherSubjects = [];
let teacherStudents = [];
let teacherPosts = [];
let teacherEvents = [];
let teacherBadges = [];
let teacherUnits = [];
let postTemplates = [];
let studentGroups = [];
let recentActivity = [];
let teacherPostAssignments = [];
let teacherEventAssignments = [];
let teacherPostCompletions = [];
let teacherDifficultSubjects = [];
let teacherGradeRecords = [];
let calendarEditEventId = "";

let contacts = [];
let messages = [];
let presence = [];
let unreadCount = 0;
let currentMessageView = "inbox";
let openedMailMessageId = "";
let selectedCalendarDay = null;
let realtimeChannel = null;
let openChatIds = [];
let activeChatId = "";
let replyToMessageId = "";
let soundEnabled = false;
let currentPresenceStatus = "online";
let previousChatMessageIds = new Set();
let previousOnlineIds = new Set();
let communicationInitialized = false;
let currentStreak = 0;
const chatSessionStartedAt = new Date();
let sessionUnreadChatIds = new Set();
let animatedChatMessageIds = new Set();

let selectedAvatarType = "emoji";
let selectedAvatarValue = "💡";
let selectedAvatarFilePath = "";

let studentCalendarDate = new Date();
let teacherCalendarDate = new Date();
let railCalendarDate = new Date();
let refreshTimer = null;
let chatFastRefreshTimer = null;

const avatarChoices = [
  "💡", "📚", "🌟", "🌍", "🧠", "🎨", "🚀", "😎", "😊", "🙂", "🤓", "🥳",
  "🐱", "🐶", "🦊", "🐼", "🦉", "🦋", "🐢", "🐬", "🐳", "🦄", "🐝", "🧸",
  "🌙", "☀️", "🍀", "🌸", "🌻", "⭐", "⚡", "🔥", "❄️", "🌈", "🌊", "🌲",
  "🎯", "🧩", "🎧", "📝", "🔬", "🧪", "📐", "🧮", "🗺️", "🧭", "💬", "✏️",
  "🏆", "💎", "🪐", "🎮", "🎬", "🎭", "🎹", "⚽", "🏀", "🏐", "🚴", "⛵",
  "🍎", "🍓", "🍉", "🍕", "🥐", "🧁", "🪴", "🏰", "🛸", "🕹️", "📖", "🎒"
];


const PROFILE_IMAGE_MAX_BYTES = 2 * 1024 * 1024;
const FEED_POST_TYPES = ["announcement", "news", "notice"];
const MATERIAL_POST_TYPES = ["notes"];
function materialSeenStorageKey(postId) {
  return `tribecaMaterialSeen:${currentUserId || "anon"}:${postId}`;
}
function isMaterialPostSeen(postId) {
  try { return localStorage.getItem(materialSeenStorageKey(postId)) === "1"; } catch (e) { return false; }
}
function markMaterialPostSeen(postId) {
  try { localStorage.setItem(materialSeenStorageKey(postId), "1"); } catch (e) {}
}

const GALICIA_HOLIDAYS_2026 = new Set([
  "2026-01-01", "2026-01-06", "2026-03-19", "2026-04-02",
  "2026-04-03", "2026-05-01", "2026-06-24", "2026-07-25",
  "2026-08-15", "2026-10-12", "2026-12-08", "2026-12-25"
]);

const TRIBECA_SCHOOL_CENTERS = [
  { name: "CEIP Plurilingüe de Ponte do Porto", locality: "Ponte do Porto, Camariñas", offer: "Infantil y Primaria" },
  { name: "CEIP O Areal", locality: "Camariñas", offer: "Infantil y Primaria" },
  { name: "CEIP de Camelle", locality: "Camelle, Camariñas", offer: "Infantil y Primaria" },
  { name: "IES Pedra da Aguia", locality: "Ponte do Porto, Camariñas", offer: "ESO, Bachillerato y FP" },
  { name: "CEIP do Pindo", locality: "O Pindo, Carnota", offer: "Infantil y Primaria" },
  { name: "CEIP Plurilingüe de Carnota", locality: "Carnota", offer: "Infantil y Primaria" },
  { name: "IES Lamas de Castelo", locality: "Carnota", offer: "ESO y Bachillerato" },
  { name: "EEI da Pereiriña", locality: "A Pereiriña, Cee", offer: "Infantil" },
  { name: "CEIP de Brens", locality: "Brens, Cee", offer: "Infantil y Primaria" },
  { name: "CEIP Plurilingüe Vila de Cee", locality: "Cee", offer: "Infantil y Primaria" },
  { name: "IES Agra de Raíces", locality: "Cee", offer: "ESO, Bachillerato, FP sanitaria, idiomas" },
  { name: "IES Fernando Blanco", locality: "Cee", offer: "ESO, Bachillerato, FP industrial, administrativa y automoción" },
  { name: "CPR Plurilingüe Manuela Rial Mouzo", locality: "Cee", offer: "Infantil, Primaria y ESO" },
  { name: "CEIP Praia de Quenxe", locality: "Corcubión", offer: "Infantil y Primaria" },
  { name: "CEIP Plurilingüe Santa Eulalia de Dumbría", locality: "Dumbría", offer: "Infantil y Primaria" },
  { name: "CEIP Mar de Fóra", locality: "Fisterra", offer: "Infantil y Primaria" },
  { name: "CEIP Areouta", locality: "Sardiñeiro, Fisterra", offer: "Infantil y Primaria" },
  { name: "IES Fin do Camiño", locality: "Fisterra", offer: "ESO y Bachillerato" },
  { name: "CPR Ntra. Sra. del Carmen", locality: "Fisterra", offer: "Infantil, Primaria y ESO" },
  { name: "CPI Plurilingüe da Picota", locality: "Mazaricos", offer: "Infantil, Primaria y ESO" },
  { name: "CEIP San Cosme de Antes", locality: "Antes, Mazaricos", offer: "Infantil y Primaria" },
  { name: "CEIP de Vilarmide-Eduardo Noya", locality: "Muxía", offer: "Infantil y Primaria" },
  { name: "CEIP dos Muíños", locality: "Moraime, Muxía", offer: "Infantil y Primaria" },
  { name: "CEIP Virxe da Barca", locality: "Muxía", offer: "Infantil y Primaria" },
  { name: "IES Ramón Caamaño", locality: "Muxía", offer: "ESO" },
  { name: "EEI de Carantoña", locality: "Carantoña, Vimianzo", offer: "Infantil" },
  { name: "CEIP Baíñas", locality: "Baíñas, Vimianzo", offer: "Infantil y Primaria" },
  { name: "CEIP Plurilingüe San Vicenzo", locality: "Vimianzo", offer: "Infantil y Primaria" },
  { name: "IES Terra de Soneira", locality: "Vimianzo", offer: "ESO, Bachillerato, FP Administración" },
  { name: "CPI de Zas", locality: "Zas", offer: "Infantil, Primaria y ESO" },
  { name: "CEIP Labarta Pose", locality: "Baio, Zas", offer: "Infantil y Primaria" },
  { name: "IES Maximino Romero de Lema", locality: "Baio, Zas", offer: "ESO, Bachillerato, FP Informática" }
];

const STUDY_TYPES = ["Infantil", "Primaria", "ESO", "Bachillerato", "FP básica", "FP grado medio", "FP grado superior", "Grado universitario", "Máster universitario", "Idiomas", "Otros"];
const EDUCATIONAL_STAGES = ["Infantil", "Primaria", "ESO", "Bachillerato", "Formación Profesional", "Universidad", "Máster", "Idiomas", "Otros"];
const ACADEMIC_COURSES = ["1º Infantil", "2º Infantil", "3º Infantil", "1º Primaria", "2º Primaria", "3º Primaria", "4º Primaria", "5º Primaria", "6º Primaria", "1º ESO", "2º ESO", "3º ESO", "4º ESO", "1º Bachillerato", "2º Bachillerato", "1º FP", "2º FP", "1º Universidad", "2º Universidad", "3º Universidad", "4º Universidad", "Máster", "Otros"];

const EMAIL_NOTIFICATION_TYPES = [
  "new_post", "new_task", "pending_task", "deadline", "correction", "message", "material", "event", "exam", "general", "achievement"
];

const NOTIFICATION_SECTION_MAP = {
  feed: "studentWallPanel",
  calendar: "calendar",
  messages: "messages",
  badges: "badges",
  profile: "profile",
  subjects: "subjectsPanel"
};

const localeMap = {
  es: "es-ES",
  gl: "gl-ES",
  en: "en-GB",
  fr: "fr-FR",
  pl: "pl-PL"
};

const weekdayMap = {
  es: ["lun", "mar", "mié", "jue", "vie", "sáb", "dom"],
  gl: ["lun", "mar", "mér", "xov", "ven", "sáb", "dom"],
  en: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  fr: ["lun", "mar", "mer", "jeu", "ven", "sam", "dim"],
  pl: ["pon", "wt", "śr", "czw", "pt", "sob", "ndz"]
};

document.addEventListener("DOMContentLoaded", async function () {
  restoreUiSettings();
  renderAvatarChoices();
  applyI18n();
  updateAcademicYearBanner();
  initSchoolStaticSelectors();

  const { data } = await supabaseClient.auth.getSession();

  if (data.session) {
    await loadUserData(data.session.user.id);
  } else {
    setLoggedOutUi();
  }
});

loginForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim().toLowerCase();
  const password = document.getElementById("password").value.trim();

  if (!username || !password) {
    showLoginError(t("username") + " + " + t("password"));
    return;
  }

  setLoginLoading(true);
  loginError.textContent = "";

  const email = `${username}@tribeca-aula.local`;

  const { data, error } = await supabaseClient.auth.signInWithPassword({
    email,
    password
  });

  if (error) {
    setLoginLoading(false);
    showLoginError(t("loginInvalid"));
    return;
  }

  await loadUserData(data.user.id);
  playNotificationTone("login");
  setLoginLoading(false);
});

authButton.addEventListener("click", async function () {
  if (currentUserId) {
    await logout();
    return;
  }

  loginSection.scrollIntoView({ behavior: "smooth", block: "start" });
});

profileButton.addEventListener("click", function () {
  openGenericPanelWindow(profilePanel, t("userProfile"), function () {
    renderProfilePanel();
  moveQuickNeedCardToMessages();
    prepareProfileCards();
    moveQuickNeedCardToMessages();
  });
});

if (closeProfilePanelButton) {
  closeProfilePanelButton.addEventListener("click", function () {
    closeFloatingPanelWindow(true);
  });
}

async function logout() {
  if (currentUserId) {
    playNotificationTone("logout");
    await updatePresence("offline");
  }

  await supabaseClient.auth.signOut();
  clearInterval(refreshTimer);
  clearInterval(chatFastRefreshTimer);
  if (realtimeChannel) {
    supabaseClient.removeChannel(realtimeChannel);
    realtimeChannel = null;
  }

  currentUserId = null;
  currentProfile = null;
  currentSubjects = [];
  currentPosts = [];
  currentEvents = [];
  currentBadgeAwards = [];
  teacherSubjects = [];
  teacherStudents = [];
  teacherPosts = [];
  teacherEvents = [];
  teacherBadges = [];
  contacts = [];
  messages = [];
  presence = [];
  unreadCount = 0;

  loginForm.reset();
  loginError.textContent = "";
  subjectDetail.classList.add("hidden");
  contentPanel.classList.add("hidden");
  profilePanel.classList.add("hidden");
  studentDashboardSection.classList.add("hidden");
  teacherDashboardSection.classList.add("hidden");
  communicationSection.classList.add("hidden");
  loginSection.classList.remove("hidden");
  rightRail.classList.add("hidden");
  quickNav.classList.add("hidden");
  closeFloatingPanelWindow();
  document.body.classList.remove("logged-in");

  setLoggedOutUi();
}

async function loadUserData(userId) {
  currentUserId = userId;
  const profile = await fetchProfile(userId);

  if (!profile) {
    showLoginError(t("loginProfileMissing"));
    setLoggedOutUi();
    return;
  }

  currentProfile = profile;
  await updatePresence(currentPresenceStatus);

  loginSection.classList.add("hidden");
  profilePanel.classList.add("hidden");
  document.body.classList.add("logged-in");
  rightRail.classList.remove("hidden");
  quickNav.classList.remove("hidden");
  setLoggedInUi();
  renderProfilePanel();

  if (profile.role === "teacher") {
    await loadTeacherPanel();
    document.body.classList.add("teacher-compact-mode");
    teacherDashboardSection.classList.remove("hidden");
    studentDashboardSection.classList.add("hidden");
  } else {
    await loadStudentPanel();
    studentDashboardSection.classList.remove("hidden");
    teacherDashboardSection.classList.add("hidden");
  }

  await loadCommunication();
  if (currentProfile && currentProfile.role === "teacher") {
    renderTeacherOverview();
    renderTeacherChatOverview();
    renderTeacherStudentHub();
  }
  await recordActivityEvent("login", {});
  if (currentProfile && currentProfile.role !== "teacher") {
    await registerLearningAction("login");
  }
  communicationSection.classList.add("hidden");
  startRefreshTimer();
  applyI18n();
}

function setLoggedInUi() {
  authButton.textContent = t("logoutAction");
  profileButton.classList.remove("hidden");
}

function setLoggedOutUi() {
  authButton.textContent = t("loginAction");
  profileButton.classList.add("hidden");
  updateUnreadBadges();
}

async function fetchProfile(userId) {
  const { data, error } = await supabaseClient
    .from("profiles")
    .select("id, username, display_name, nickname, avatar_type, avatar_value, avatar_file_path, learning_settings, role, school_center, educational_stage, academic_course, study_type, created_at, courses(name, stage)")
    .eq("id", userId)
    .single();

  if (error) {
    console.error("Error cargando perfil:", error);
    return null;
  }

  return {
    id: data.id,
    username: data.username,
    displayName: data.display_name,
    name: data.nickname || data.display_name,
    nickname: data.nickname || "",
    role: data.role,
    avatarType: data.avatar_type || "emoji",
    avatarValue: data.avatar_value || "💡",
    avatarFilePath: data.avatar_file_path || "",
    createdAt: data.created_at || "",
    course: data.courses ? data.courses.name : "Curso no asignado",
    level: data.courses ? data.courses.stage : "Etapa no asignada",
    learningSettings: data.learning_settings || [],
    schoolCenter: data.school_center || "",
    educationalStage: data.educational_stage || (data.courses ? data.courses.stage : ""),
    academicCourse: data.academic_course || (data.courses ? data.courses.name : ""),
    studyType: data.study_type || ""
  };
}

async function loadStudentPanel() {
  currentSubjects = await fetchStudentSubjects(currentProfile.id);
  currentSubjects = await addSignedCoverUrls(currentSubjects);
  currentPosts = await fetchStudentPosts();
  currentUnits = await fetchUnitsForSubjects(currentSubjects.map(subject => subject.id));
  currentEvents = await fetchStudentEvents();
  currentBadgeAwards = await fetchStudentBadgeAwards(currentProfile.id);
  currentPostCompletions = await fetchPostCompletions(currentProfile.id);
  currentDifficultSubjects = await fetchStudentDifficultSubjects(currentProfile.id);
  currentGradeRecords = await fetchStudentGradeRecords(currentProfile.id);
  currentStreak = await fetchCurrentStreak();
  platformNotifications = await fetchPlatformNotifications();
  emailPreferences = await fetchEmailPreferences();
  privacyPreferences = null;

  renderStudentDashboard();
  renderNotifications();
  renderEmailPreferences();
}

async function loadTeacherPanel() {
  teacherSubjects = await fetchAllSubjects();
  teacherSubjects = await addSignedCoverUrls(teacherSubjects);
  teacherStudents = await fetchAllStudents();
  teacherPosts = await fetchAllPosts();
  teacherPostAssignments = await fetchPostAssignments();
  teacherUnits = await fetchUnitsForSubjects(teacherSubjects.map(subject => subject.id));
  postTemplates = await fetchPostTemplates();
  studentGroups = await fetchStudentGroups();
  recentActivity = await fetchRecentActivity();
  teacherEvents = await fetchAllEvents();
  teacherEventAssignments = await fetchCalendarEventAssignments();
  teacherPostCompletions = await fetchPostCompletions();
  teacherDifficultSubjects = await fetchAllDifficultSubjects();
  teacherGradeRecords = await fetchAllGradeRecords();
  teacherBadges = await fetchAllBadges();
  platformNotifications = await fetchPlatformNotifications();
  emailPreferences = await fetchEmailPreferences();
  privacyPreferences = null;
  teacherPasswordRequests = await fetchTeacherPasswordRequests();
  teacherQuickHelpRequests = await fetchTeacherQuickHelpRequests();
  await preloadTeacherStudentAvatars();

  renderTeacherSubjects();
  renderTeacherStudents();
  renderTeacherBadges();
  renderTeacherPostTemplates();
  renderTeacherGroups();
  renderTeacherOverview();
  renderTeacherPosts();
  renderTeacherCalendar();
  renderRecentActivity();
  renderTeacherChatOverview();
  renderTeacherStudentHub();
  renderTeacherAlerts();
  renderTeacherTargetFilters();
  renderNotifications();
  renderEmailPreferences();
  renderPrivacyPreferences();
  renderTeacherRecoveryRequests();
}

async function fetchStudentSubjects(userId) {
  const { data, error } = await supabaseClient
    .from("profile_subjects")
    .select("subjects(id, code, name, stage, description, icon, cover_image_path, cover_color)")
    .eq("profile_id", userId);

  if (error) {
    console.error("Error cargando asignaturas:", error);
    return [];
  }

  return data.map(item => item.subjects).filter(Boolean).sort(sortSubjects);
}

async function fetchUnitsForSubjects(subjectIds) {
  if (!subjectIds || subjectIds.length === 0) {
    return [];
  }

  const { data, error } = await supabaseClient
    .from("subject_units")
    .select("id, subject_id, title, description, sort_order, created_at")
    .in("subject_id", subjectIds)
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: true });

  if (error) {
    console.error("Error cargando unidades didácticas:", error);
    return [];
  }

  return data || [];
}

async function fetchUnitsForSubject(subjectId) {
  if (!subjectId) {
    return [];
  }

  const { data, error } = await supabaseClient
    .from("subject_units")
    .select("id, subject_id, title, description, sort_order, created_at")
    .eq("subject_id", subjectId)
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: true });

  if (error) {
    console.error("Error cargando unidades de la asignatura:", error);
    return [];
  }

  return data || [];
}

async function fetchStudentPosts() {
  const { data, error } = await supabaseClient
    .from("posts")
    .select("id, subject_id, unit_id, title, body, post_type, content, due_at, created_at, subjects(name, code, icon), subject_units(title, sort_order)")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error cargando publicaciones:", error);
    return [];
  }

  return data || [];
}

async function fetchStudentEvents() {
  const { data, error } = await supabaseClient
    .from("calendar_events")
    .select("id, subject_id, title, description, event_type, starts_at, created_by, created_at, visibility_scope, affected_school_centers, subjects(name, code, icon)")
    .order("starts_at", { ascending: true });

  if (error) {
    console.error("Error cargando calendario:", error);
    return [];
  }

  return withSystemCalendarEvents(filterEventsForCurrentProfile(data || []));
}

function filterEventsForCurrentProfile(events) {
  if (!currentProfile || currentProfile.role === "teacher") return withSystemCalendarEvents(events || []);
  return (events || []).filter(function(event) {
    if (event.created_by === currentUserId) return true;
    if (event.visibility_scope === "all" || !event.visibility_scope) return true;
    if (Array.isArray(event.affected_school_centers) && event.affected_school_centers.includes(currentProfile.schoolCenter)) return true;
    return false;
  });
}

async function fetchStudentBadgeAwards(userId) {
  const { data, error } = await supabaseClient
    .from("badge_awards")
    .select("id, note, source, awarded_at, badges(code, name, emoji, description)")
    .eq("profile_id", userId)
    .order("awarded_at", { ascending: false });

  if (error) {
    console.error("Error cargando insignias:", error);
    return [];
  }

  return data || [];
}

async function fetchPostCompletions(profileId = "") {
  let query = supabaseClient
    .from("post_completions")
    .select("post_id, profile_id, completed_at");

  if (profileId) {
    query = query.eq("profile_id", profileId);
  }

  const { data, error } = await query;

  if (error) {
    console.error("Error cargando actividades completadas:", error);
    return [];
  }

  return data || [];
}

async function fetchStudentDifficultSubjects(profileId) {
  const { data, error } = await supabaseClient
    .from("student_difficult_subjects")
    .select("id, profile_id, subject_id, note, created_at, subjects(id, name, icon)")
    .eq("profile_id", profileId)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error cargando materias con dificultad:", error);
    return [];
  }

  return data || [];
}

async function fetchAllDifficultSubjects() {
  const { data, error } = await supabaseClient
    .from("student_difficult_subjects")
    .select("id, profile_id, subject_id, note, created_at, subjects(id, name, icon), profiles(display_name, nickname, username)")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error cargando dificultades del alumnado:", error);
    return [];
  }

  return data || [];
}

async function fetchStudentGradeRecords(profileId) {
  const { data, error } = await supabaseClient
    .from("student_grade_records")
    .select("id, profile_id, subject_id, grade_type, other_type, grade_value, grade_date, note, created_at, subjects(id, name, icon)")
    .eq("profile_id", profileId)
    .order("grade_date", { ascending: false })
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error cargando calificaciones:", error);
    return [];
  }

  return data || [];
}

async function fetchAllGradeRecords() {
  const { data, error } = await supabaseClient
    .from("student_grade_records")
    .select("id, profile_id, subject_id, grade_type, other_type, grade_value, grade_date, note, created_at, subjects(id, name, icon), profiles(display_name, nickname, username)")
    .order("grade_date", { ascending: false })
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error cargando calificaciones del alumnado:", error);
    return [];
  }

  return data || [];
}

async function fetchAllSubjects() {
  const { data, error } = await supabaseClient
    .from("subjects")
    .select("id, code, name, stage, description, icon, cover_image_path, cover_color")
    .order("name", { ascending: true });

  if (error) {
    console.error("Error cargando asignaturas:", error);
    return [];
  }

  return data || [];
}

async function fetchAllStudents() {
  const { data, error } = await supabaseClient
    .from("profiles")
    .select("id, username, display_name, nickname, role, avatar_type, avatar_value, avatar_file_path, school_center, educational_stage, academic_course, study_type, created_at, courses(name, stage)")
    .eq("role", "student")
    .order("display_name", { ascending: true });

  if (error) {
    console.error("Error cargando alumnado:", error);
    return [];
  }

  return data || [];
}

async function fetchAllPosts() {
  const { data, error } = await supabaseClient
    .from("posts")
    .select("id, subject_id, unit_id, title, body, post_type, content, due_at, created_at, subjects(name, icon), subject_units(title, sort_order)")
    .order("created_at", { ascending: false })
    .limit(80);

  if (error) {
    console.error("Error cargando publicaciones:", error);
    return [];
  }

  return data || [];
}

async function fetchAllEvents() {
  const { data, error } = await supabaseClient
    .from("calendar_events")
    .select("id, subject_id, title, description, event_type, starts_at, created_by, created_at, visibility_scope, affected_school_centers, subjects(name, icon)")
    .order("starts_at", { ascending: true })
    .limit(120);

  if (error) {
    console.error("Error cargando eventos:", error);
    return [];
  }

  return withSystemCalendarEvents(data || []);
}

async function fetchPostAssignments() {
  const { data, error } = await supabaseClient
    .from("post_assignments")
    .select("post_id, profile_id");

  if (error) {
    console.error("Error cargando asignaciones de publicaciones:", error);
    return [];
  }

  return data || [];
}

async function fetchCalendarEventAssignments() {
  const { data, error } = await supabaseClient
    .from("calendar_event_assignments")
    .select("event_id, profile_id");

  if (error) {
    console.error("Error cargando asignaciones de calendario:", error);
    return [];
  }

  return data || [];
}

async function fetchAllBadges() {
  const { data, error } = await supabaseClient
    .from("badges")
    .select("id, code, name, emoji, description")
    .order("name", { ascending: true });

  if (error) {
    console.error("Error cargando insignias:", error);
    return [];
  }

  return data || [];
}


async function fetchPostTemplates() {
  const { data, error } = await supabaseClient
    .from("post_templates")
    .select("id, name, post_type, title, body, key_points, default_url, created_at")
    .order("name", { ascending: true });

  if (error) {
    console.error("Error cargando plantillas:", error);
    return [];
  }

  return data || [];
}

async function fetchStudentGroups() {
  const { data, error } = await supabaseClient
    .from("student_groups")
    .select("id, code, name, description, student_group_members(profile_id)")
    .order("name", { ascending: true });

  if (error) {
    console.error("Error cargando grupos:", error);
    return [];
  }

  return (data || []).map(function (group) {
    return {
      ...group,
      memberIds: (group.student_group_members || []).map(member => member.profile_id)
    };
  });
}

async function fetchRecentActivity() {
  const { data, error } = await supabaseClient
    .from("activity_events")
    .select("id, profile_id, action_type, post_id, subject_id, event_id, metadata, created_at, profiles(display_name, nickname, username), posts(title, post_type), subjects(name)")
    .order("created_at", { ascending: false })
    .limit(80);

  if (error) {
    console.error("Error cargando actividad reciente:", error);
    return [];
  }

  return data || [];
}



async function fetchPlatformNotifications() {
  const { data, error } = await supabaseClient
    .from("platform_notifications")
    .select("id, profile_id, title, body, notification_type, link_target, is_read, created_at")
    .order("created_at", { ascending: false })
    .limit(80);

  if (error) {
    console.warn("No se pudieron cargar notificaciones internas:", error);
    return [];
  }

  return data || [];
}

async function fetchEmailPreferences() {
  if (!currentUserId) return null;
  const { data, error } = await supabaseClient
    .from("notification_email_preferences")
    .select("profile_id, enabled, student_email, family_email, send_to, frequency, types")
    .eq("profile_id", currentUserId)
    .maybeSingle();

  if (error) {
    console.warn("No se pudieron cargar preferencias de email:", error);
    return null;
  }

  return data || null;
}

async function fetchPrivacyPreferences() {
  if (!currentUserId) return null;
  const { data, error } = await supabaseClient
    .from("privacy_authorizations")
    .select("profile_id, platform_use, email_contact, family_contact, profile_image, updated_at")
    .eq("profile_id", currentUserId)
    .maybeSingle();

  if (error) {
    console.warn("No se pudieron cargar autorizaciones:", error);
    return null;
  }

  return data || null;
}

async function fetchTeacherPasswordRequests() {
  if (!currentProfile || currentProfile.role !== "teacher") return [];
  const { data, error } = await supabaseClient
    .from("password_reset_requests")
    .select("id, profile_id, status, requested_at, resolved_at, profiles(display_name, nickname, username)")
    .order("requested_at", { ascending: false })
    .limit(80);

  if (error) {
    console.warn("No se pudieron cargar solicitudes de contraseña:", error);
    return [];
  }

  return data || [];
}

async function fetchTeacherQuickHelpRequests() {
  if (!currentProfile || currentProfile.role !== "teacher") return [];
  const { data, error } = await supabaseClient
    .from("student_quick_help_requests")
    .select("id, profile_id, need_type, body, status, created_at, profiles(display_name, nickname, username)")
    .order("created_at", { ascending: false })
    .limit(80);

  if (error) {
    console.warn("No se pudieron cargar mensajes rápidos:", error);
    return [];
  }

  return data || [];
}

async function createInternalNotification(profileId, title, body, type, linkTarget) {
  if (!profileId) return;
  const { error } = await supabaseClient.rpc("create_platform_notification", {
    p_profile_id: profileId,
    p_title: title,
    p_body: body || "",
    p_notification_type: type || "general",
    p_link_target: linkTarget || "feed"
  });
  if (error) {
    console.warn("No se pudo crear notificación interna:", error);
  }
}

function renderNotifications() {
  updateNotificationBadge();
  if (!notificationList) return;

  if (!platformNotifications || platformNotifications.length === 0) {
    notificationList.innerHTML = `<div class="empty-panel"><p>${escapeHtml(t("noNotifications"))}</p></div>`;
    return;
  }

  notificationList.innerHTML = platformNotifications.map(function (item) {
    return `
      <article class="notification-card ${item.is_read ? "" : "unread"}" data-notification-id="${item.id}">
        <div class="notification-card-top">
          <div>
            <span class="notification-type-pill">${escapeHtml(readableNotificationType(item.notification_type))}</span>
            <h3>${escapeHtml(item.title)}</h3>
          </div>
          <span class="status-pill">${escapeHtml(item.is_read ? t("read") : t("unread"))}</span>
        </div>
        <p>${escapeHtml(item.body || "")}</p>
        <p class="activity-meta">${escapeHtml(formatDateTime(item.created_at))}</p>
        <button type="button" class="secondary-button open-notification-button" data-id="${item.id}" data-target="${escapeAttribute(item.link_target || "feed")}">${escapeHtml(t("openSection"))}</button>
      </article>
    `;
  }).join("");

  notificationList.querySelectorAll(".open-notification-button").forEach(function (button) {
    button.addEventListener("click", async function () {
      await markNotificationRead(button.dataset.id);
      openNotificationTarget(button.dataset.target);
    });
  });
}

function readableNotificationType(type) {
  const labels = {
    new_post: t("notificationNewPost"),
    new_task: t("notificationNewTask"),
    correction: t("notificationNewCorrection"),
    message: t("notificationNewMessage"),
    material: t("notificationNewMaterial"),
    event: t("notificationNewEvent"),
    pending_task: t("notificationPendingTask"),
    exam: t("notificationExam"),
    achievement: t("notificationAchievement"),
    general: t("notificationGeneral"),
    password: t("notificationPassword"),
    quick_need: t("notificationQuickNeed")
  };
  return labels[type] || labels.general;
}

async function markNotificationRead(notificationId) {
  const { error } = await supabaseClient
    .from("platform_notifications")
    .update({ is_read: true })
    .eq("id", notificationId);
  if (error) {
    console.warn("No se pudo marcar la notificación:", error);
    return;
  }
  platformNotifications = platformNotifications.map(item => item.id === notificationId ? { ...item, is_read: true } : item);
  renderNotifications();
}

async function markAllNotificationsRead() {
  const unreadIds = platformNotifications.filter(item => !item.is_read).map(item => item.id);
  if (unreadIds.length === 0) return;
  const { error } = await supabaseClient
    .from("platform_notifications")
    .update({ is_read: true })
    .in("id", unreadIds);
  if (error) {
    console.warn("No se pudieron marcar las notificaciones:", error);
    return;
  }
  platformNotifications = platformNotifications.map(item => ({ ...item, is_read: true }));
  renderNotifications();
}

function updateNotificationBadge() {
  if (!quickNotificationsBadge) return;
  const unread = (platformNotifications || []).filter(item => !item.is_read).length;
  quickNotificationsBadge.textContent = String(unread);
  quickNotificationsBadge.classList.toggle("hidden", unread === 0);
}

function openNotificationTarget(target) {
  closeFloatingPanelWindow(true);
  if (target === "calendar") {
    openFloatingPanelWindow("calendar");
    return;
  }
  if (target === "messages") {
    openFloatingPanelWindow("messages");
    return;
  }
  if (target === "badges") {
    openGenericPanelWindow(studentBadgesPanel, t("myBadges"), renderStudentBadgesDetail);
    return;
  }
  if (target === "profile") {
    openGenericPanelWindow(profilePanel, t("userProfile"), function () {
      renderProfilePanel();
      prepareProfileCards();
      moveQuickNeedCardToMessages();
    });
    return;
  }
  const section = document.getElementById(NOTIFICATION_SECTION_MAP[target] || "studentWallPanel");
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function renderEmailPreferences() {
  if (!emailPrefsTypes) return;
  const selectedTypes = new Set(emailPreferences && Array.isArray(emailPreferences.types) ? emailPreferences.types : EMAIL_NOTIFICATION_TYPES);
  emailPrefsTypes.innerHTML = EMAIL_NOTIFICATION_TYPES.map(function (type) {
    return `<label class="checkbox-card"><input type="checkbox" value="${escapeAttribute(type)}" ${selectedTypes.has(type) ? "checked" : ""} /><span>${escapeHtml(readableNotificationType(emailTypeToNotificationType(type)))}</span></label>`;
  }).join("");
  if (emailPrefsEnabled) emailPrefsEnabled.checked = Boolean(emailPreferences && emailPreferences.enabled);
  if (emailPrefsStudent) emailPrefsStudent.value = emailPreferences ? (emailPreferences.student_email || "") : "";
  if (emailPrefsFamily) emailPrefsFamily.value = emailPreferences ? (emailPreferences.family_email || "") : "";
  if (emailPrefsRecipient) emailPrefsRecipient.value = emailPreferences ? (emailPreferences.send_to || "student") : "student";
  if (emailPrefsFrequency) emailPrefsFrequency.value = emailPreferences ? (emailPreferences.frequency || "immediate") : "immediate";
}

function emailTypeToNotificationType(type) {
  const map = { new_post: "new_post", new_task: "new_task", pending_task: "pending_task", deadline: "pending_task", correction: "correction", message: "message", material: "material", event: "event", exam: "exam", general: "general", achievement: "achievement" };
  return map[type] || "general";
}

function renderPrivacyPreferences() { return; }

function renderTeacherRecoveryRequests() {
  if (!teacherRecoveryList) return;
  const pending = (teacherPasswordRequests || []).filter(item => item.status !== "resolved");
  const quick = (teacherQuickHelpRequests || []).filter(item => item.status !== "closed").slice(0, 20);
  if (!pending.length && !quick.length) {
    teacherRecoveryList.innerHTML = `<div class="empty-panel"><p>${escapeHtml(t("noPasswordRequests"))}</p></div>`;
    return;
  }
  teacherRecoveryList.innerHTML = [
    ...pending.map(function (item) {
      const name = item.profiles ? (item.profiles.nickname || item.profiles.display_name || item.profiles.username) : t("student");
      return `<article class="detail-card"><h3>${escapeHtml(name)}</h3><p class="activity-meta">${escapeHtml(formatDateTime(item.requested_at))}</p><p>${escapeHtml(t("pendingPassword"))}</p><button type="button" class="secondary-button resolve-password-request-button" data-id="${item.id}">${escapeHtml(t("markResolved"))}</button></article>`;
    }),
    ...quick.map(function (item) {
      const name = item.profiles ? (item.profiles.nickname || item.profiles.display_name || item.profiles.username) : t("student");
      return `<article class="detail-card quick-need-open"><h3>${escapeHtml(name)} · ${escapeHtml(t("quickMessageTeacher"))}</h3><p class="activity-meta">${escapeHtml(formatDateTime(item.created_at))}</p><p><strong>${escapeHtml(readableQuickNeedType(item.need_type))}</strong></p><p>${escapeHtml(item.body || "")}</p></article>`;
    })
  ].join("");
  teacherRecoveryList.querySelectorAll(".resolve-password-request-button").forEach(function(button){
    button.addEventListener("click", async function(){ await resolvePasswordRequest(button.dataset.id); });
  });
}

async function resolvePasswordRequest(requestId) {
  const { error } = await supabaseClient
    .from("password_reset_requests")
    .update({ status: "resolved", resolved_at: new Date().toISOString(), resolved_by: currentUserId })
    .eq("id", requestId);
  if (error) {
    console.warn(error);
    return;
  }
  teacherPasswordRequests = await fetchTeacherPasswordRequests();
  renderTeacherRecoveryRequests();
}

async function addSignedCoverUrls(subjects) {
  const enriched = [];

  for (const subject of subjects) {
    const copy = { ...subject, coverUrl: "" };

    if (subject.cover_image_path) {
      const { data } = await supabaseClient
        .storage
        .from(STORAGE_BUCKET)
        .createSignedUrl(subject.cover_image_path, 3600);

      if (data && data.signedUrl) {
        copy.coverUrl = data.signedUrl;
      }
    }

    enriched.push(copy);
  }

  return enriched;
}

function renderStudentDashboard() {
  studentName.textContent = currentProfile.name;
  if (studentTodayDate) {
    studentTodayDate.textContent = formatFullTodayDate();
  }
  studentCourse.textContent = formatStudentSchoolLine(currentProfile);
  courseCardText.textContent = formatStudentSchoolLine(currentProfile);

  renderBadges();
  renderStudentSummaryCards();
  renderSubjects();
  renderStudentSubjectSelect();
  renderStudentCalendar();
  renderStudentWall();
  updateUpcomingBadge();
  renderRightRailCalendar();
}

function renderProgress() {
  const assignedTests = currentPosts.filter(post => post.post_type === "interactive_test").length;

  if (assignedTests === 0) {
    progressText.textContent = t("noInteractiveTests");
  } else {
    progressText.textContent = t("hasInteractiveTests", { count: assignedTests });
  }

  const percentage = Math.min(currentBadgeAwards.length * 15, 100);
  progressFill.style.width = `${percentage}%`;
}

function renderBadges() {
  badgesContainer.innerHTML = "";

  if (currentBadgeAwards.length === 0) {
    badgesContainer.innerHTML = `<p class="empty-state">${escapeHtml(t("noBadges"))}</p>`;
    return;
  }

  currentBadgeAwards.forEach(function (award) {
    if (!award.badges) {
      return;
    }

    const badge = document.createElement("span");
    badge.className = "badge";
    badge.innerHTML = `
      <span class="badge-emoji">${escapeHtml(award.badges.emoji)}</span>
      <span>${escapeHtml(award.badges.name)}</span>
    `;
    badgesContainer.appendChild(badge);
  });
}

function renderStudentSummaryCards() {
  if (difficultSubjectsSummary) {
    difficultSubjectsSummary.textContent = currentDifficultSubjects.length > 0
      ? currentDifficultSubjects.map(item => item.subjects ? item.subjects.name : t("subject")).join(", ")
      : t("difficultSubjectsHelp");
  }

  if (gradesSummary) {
    gradesSummary.textContent = currentGradeRecords.length > 0
      ? `${currentGradeRecords.length} registro(s)`
      : t("gradesHelp");
  }
}

function renderStudentSubjectSelect() {
  const options = currentSubjects.map(function (subject) {
    return `<option value="${subject.id}">${escapeHtml(subject.icon || "📘")} ${escapeHtml(subject.name)}</option>`;
  }).join("");

  studentEventSubject.innerHTML = options;
  if (difficultSubjectSelect) {
    difficultSubjectSelect.innerHTML = options;
  }
  if (gradeSubjectSelect) {
    gradeSubjectSelect.innerHTML = options;
  }
  if (dayEventSubject) {
    dayEventSubject.innerHTML = options;
  }
}

function renderStudentBadgesDetail() {
  if (!studentBadgesDetailList) {
    return;
  }

  if (currentBadgeAwards.length === 0) {
    studentBadgesDetailList.innerHTML = `<div class="empty-panel"><p>${escapeHtml(t("noBadgeDetail"))}</p></div>`;
    return;
  }

  studentBadgesDetailList.innerHTML = currentBadgeAwards.map(function (award) {
    const badge = award.badges || {};
    const reason = award.note || badge.description || t("badgeMotivationText");
    return `
      <article class="detail-card">
        <div class="detail-card-heading">
          <span class="badge-emoji">${escapeHtml(badge.emoji || "🏅")}</span>
          <strong>${escapeHtml(badge.name || t("myBadges"))}</strong>
        </div>
        <p><strong>${escapeHtml(t("badgeReason"))}:</strong> ${escapeHtml(reason)}</p>
        <p class="activity-meta"><strong>${escapeHtml(t("badgeDate"))}:</strong> ${escapeHtml(formatDateTime(award.awarded_at))}</p>
      </article>
    `;
  }).join("");
}

function renderDifficultSubjectsPanel() {
  if (!difficultSubjectsList) {
    return;
  }

  if (currentDifficultSubjects.length === 0) {
    difficultSubjectsList.innerHTML = `<div class="empty-panel"><p>${escapeHtml(t("noDifficultSubjects"))}</p></div>`;
    return;
  }

  difficultSubjectsList.innerHTML = currentDifficultSubjects.map(function (item) {
    const subject = item.subjects || {};
    return `
      <article class="detail-card">
        <div class="detail-card-heading"><strong>${escapeHtml(subject.icon || "📘")} ${escapeHtml(subject.name || t("subject"))}</strong></div>
        <p>${escapeHtml(item.note || "")}</p>
        <button type="button" class="secondary-button delete-difficult-subject-button" data-id="${item.id}">${escapeHtml(t("remove"))}</button>
      </article>
    `;
  }).join("");

  difficultSubjectsList.querySelectorAll(".delete-difficult-subject-button").forEach(function (button) {
    button.addEventListener("click", async function () {
      await deleteDifficultSubject(button.dataset.id);
    });
  });
}

function renderGradeRecordsPanel() {
  if (!gradeRecordsList) {
    return;
  }

  if (currentGradeRecords.length === 0) {
    gradeRecordsList.innerHTML = `<div class="empty-panel"><p>${escapeHtml(t("noGrades"))}</p></div>`;
    return;
  }

  gradeRecordsList.innerHTML = currentGradeRecords.map(function (item) {
    const subject = item.subjects || {};
    const gradeType = item.grade_type === "other" ? (item.other_type || t("gradeOther")) : readableGradeType(item.grade_type);
    return `
      <article class="detail-card">
        <div class="detail-card-heading"><strong>${escapeHtml(subject.icon || "📘")} ${escapeHtml(subject.name || t("subject"))}</strong></div>
        <p><strong>${escapeHtml(gradeType)}:</strong> ${escapeHtml(item.grade_value)}</p>
        <p class="activity-meta">${escapeHtml(item.grade_date || formatDateKey(new Date(item.created_at)))}</p>
        ${item.note ? `<p>${escapeHtml(item.note)}</p>` : ""}
        <button type="button" class="secondary-button delete-grade-record-button" data-id="${item.id}">${escapeHtml(t("remove"))}</button>
      </article>
    `;
  }).join("");

  gradeRecordsList.querySelectorAll(".delete-grade-record-button").forEach(function (button) {
    button.addEventListener("click", async function () {
      await deleteGradeRecord(button.dataset.id);
    });
  });
}

function renderSubjects() {
  subjectsContainer.innerHTML = "";

  if (currentSubjects.length === 0) {
    subjectsContainer.innerHTML = `
      <div class="empty-panel">
        <h3>${escapeHtml(t("subjects"))}</h3>
        <p>${escapeHtml(t("noSubjects"))}</p>
      </div>
    `;
    return;
  }

  currentSubjects.forEach(function (subject) {
    const subjectPosts = currentPosts.filter(post => post.subject_id === subject.id);
    const subjectUnits = currentUnits.filter(unit => unit.subject_id === subject.id);
    const card = document.createElement("article");
    card.className = "subject-card";

    const backgroundStyle = subject.coverUrl
      ? `background-image: url('${escapeAttribute(subject.coverUrl)}');`
      : `background-color: ${escapeAttribute(subject.cover_color || "#b58b5b")};`;

    const subjectProgress = calculateSubjectProgress(subject.id);
    const unseenMaterialCount = countUnseenMaterialForSubject(subject.id);
    const materialNoticeHtml = unseenMaterialCount > 0
      ? `<p class="subject-new-material">${escapeHtml(t("newMaterialAvailable", { count: unseenMaterialCount }))}</p>`
      : "";

    card.innerHTML = `
      <div class="subject-cover" style="${backgroundStyle}">
        <span class="subject-course-pill">${escapeHtml(currentProfile.course)}</span>
        <span class="subject-icon-large" aria-hidden="true">${escapeHtml(subject.icon || "📘")}</span>
      </div>
      <div class="subject-card-body">
        <h3>${escapeHtml(subject.name)}</h3>
        ${materialNoticeHtml}
        <p>${escapeHtml(t("assignedPosts", { count: subjectPosts.length }))} · ${subjectUnits.length} unidad(es)</p>
        <div class="subject-progress" aria-label="${escapeAttribute(t("subjectProgress"))}">
          <div class="subject-progress-text"><span>${escapeHtml(t("subjectProgress"))}</span><strong>${subjectProgress.percentage}%</strong></div>
          <div class="progress-bar small"><div class="progress-fill" style="width: ${subjectProgress.percentage}%"></div></div>
          <p class="activity-meta">${escapeHtml(subjectProgress.label)}</p>
        </div>
        <button type="button" class="secondary-button open-subject-button" data-subject-id="${subject.id}">
          ${escapeHtml(t("openSubject"))}
        </button>
      </div>
    `;

    subjectsContainer.appendChild(card);
  });

  subjectsContainer.querySelectorAll(".open-subject-button").forEach(function (button) {
    button.addEventListener("click", function () {
      const subject = currentSubjects.find(item => item.id === button.dataset.subjectId);
      if (subject) {
        openSubject(subject);
      }
    });
  });
}

function countUnseenMaterialForSubject(subjectId) {
  return currentPosts.filter(function(post) {
    return post.subject_id === subjectId && MATERIAL_POST_TYPES.includes(post.post_type) && !isMaterialPostSeen(post.id);
  }).length;
}

function getActionablePostsForSubject(subjectId) {
  return currentPosts.filter(function (post) {
    return post.subject_id === subjectId && !["announcement", "notes"].includes(post.post_type);
  });
}

function calculateSubjectProgress(subjectId) {
  const actionablePosts = getActionablePostsForSubject(subjectId);

  if (actionablePosts.length === 0) {
    return { percentage: 0, label: t("noProgressYet") };
  }

  const completedPostIds = new Set(currentPostCompletions.map(item => item.post_id));
  const completed = actionablePosts.filter(post => completedPostIds.has(post.id)).length;
  const percentage = Math.round((completed / actionablePosts.length) * 100);

  return {
    percentage,
    label: `${completed}/${actionablePosts.length} completada(s)`
  };
}

function renderStudentWall() {
  const feedPosts = currentPosts.filter(post => FEED_POST_TYPES.includes(post.post_type));
  renderPostList(feedPosts.slice(0, 12), studentWallList, t("noFeedPosts"), false);
}

function openSubject(subject) {
  const subjectPosts = currentPosts.filter(post => post.subject_id === subject.id);
  const subjectEvents = currentEvents.filter(event => event.subject_id === subject.id);
  const subjectUnits = currentUnits.filter(unit => unit.subject_id === subject.id);

  subjectDetail.classList.add("hidden");
  contentPanel.classList.add("hidden");
  subjectModal.classList.remove("subject-is-fullscreen");
  subjectModalTitle.textContent = `${subject.icon || "📘"} ${subject.name}`;

  renderSubjectContent(subject, subjectPosts, subjectEvents, subjectUnits, subjectModalBody, false);
  subjectModal.classList.remove("hidden");
}

function openSubjectFullscreen(subject) {
  const subjectPosts = currentPosts.filter(post => post.subject_id === subject.id);
  const subjectEvents = currentEvents.filter(event => event.subject_id === subject.id);
  const subjectUnits = currentUnits.filter(unit => unit.subject_id === subject.id);

  subjectModal.classList.add("subject-is-fullscreen");
  subjectModalTitle.textContent = `${subject.icon || "📘"} ${subject.name}`;
  renderSubjectContent(subject, subjectPosts, subjectEvents, subjectUnits, subjectModalBody, true);
  subjectModal.classList.remove("hidden");
}

function renderSubjectContent(subject, subjectPosts, subjectEvents, subjectUnits, bodyTarget, fullscreenMode) {
  const panelId = fullscreenMode ? "subjectFullscreenTabPanel" : "subjectInlineTabPanel";

  bodyTarget.innerHTML = `
    <div class="subject-open-header">
      <p class="subject-description">${escapeHtml(subject.description || "")}</p>
      ${fullscreenMode ? "" : `
        <button type="button" class="secondary-button subject-fullscreen-open-button">
          Abrir en ventana completa
        </button>
      `}
    </div>

    <div class="tabs" aria-label="Secciones de la asignatura">
      <div class="tab-list" role="tablist" aria-label="Contenido de ${escapeHtml(subject.name)}">
        <button type="button" class="tab-button active" role="tab" aria-selected="true" data-tab="units">${escapeHtml(t("units"))}</button>
        <button type="button" class="tab-button" role="tab" aria-selected="false" data-tab="wall">${escapeHtml(t("timelineWall"))}</button>
        <button type="button" class="tab-button" role="tab" aria-selected="false" data-tab="notes">${escapeHtml(t("postTypeNotes"))}</button>
        <button type="button" class="tab-button" role="tab" aria-selected="false" data-tab="tests">${escapeHtml(t("postTypeTest"))}</button>
        <button type="button" class="tab-button" role="tab" aria-selected="false" data-tab="worksheets">${escapeHtml(t("postTypeWorksheet"))}</button>
        <button type="button" class="tab-button" role="tab" aria-selected="false" data-tab="video_class">${escapeHtml(t("postTypeVideoClass"))}</button>
        <button type="button" class="tab-button" role="tab" aria-selected="false" data-tab="videos">${escapeHtml(t("postTypeVideo"))}</button>
        <button type="button" class="tab-button" role="tab" aria-selected="false" data-tab="games">${escapeHtml(t("postTypeGame"))}</button>
        <button type="button" class="tab-button" role="tab" aria-selected="false" data-tab="challenges">${escapeHtml(t("postTypeChallenge"))}</button>
        <button type="button" class="tab-button" role="tab" aria-selected="false" data-tab="calendar">${escapeHtml(t("calendar"))}</button>
      </div>

      <div id="${panelId}" class="tab-panel" role="tabpanel"></div>
    </div>
  `;

  const fullscreenButton = bodyTarget.querySelector(".subject-fullscreen-open-button");
  if (fullscreenButton) {
    fullscreenButton.addEventListener("click", function () {
      openSubjectFullscreen(subject);
    });
  }

  const tabButtons = bodyTarget.querySelectorAll(".tab-button");
  const tabPanel = bodyTarget.querySelector(`#${panelId}`);

  tabButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      tabButtons.forEach(function (otherButton) {
        otherButton.classList.remove("active");
        otherButton.setAttribute("aria-selected", "false");
      });

      button.classList.add("active");
      button.setAttribute("aria-selected", "true");
      contentPanel.classList.add("hidden");

      renderSubjectTab(button.dataset.tab, subjectPosts, subjectEvents, subjectUnits, tabPanel);
    });
  });

  renderSubjectTab("units", subjectPosts, subjectEvents, subjectUnits, tabPanel);
}

if (closeSubjectModal) {
  closeSubjectModal.addEventListener("click", function () {
    subjectModal.classList.add("hidden");
    subjectModal.classList.remove("subject-is-fullscreen");
  });
}

function renderSubjectTab(tabName, subjectPosts, subjectEvents, subjectUnits, tabPanel) {
  const filterMap = {
    notes: "notes",
    tests: "interactive_test",
    worksheets: "worksheet",
    video_class: "video_class",
    videos: "video",
    games: "game",
    challenges: "challenge"
  };

  if (tabName === "units") {
    renderSubjectUnits(subjectUnits, subjectPosts, tabPanel);
    return;
  }

  if (tabName === "wall") {
    renderPostList(subjectPosts, tabPanel, t("noPosts"), false);
    return;
  }

  if (tabName in filterMap) {
    renderPostList(
      subjectPosts.filter(post => post.post_type === filterMap[tabName]),
      tabPanel,
      t("noContentSection"),
      false
    );
    return;
  }

  if (tabName === "calendar") {
    renderCalendarList(subjectEvents, tabPanel, t("noDates"));
  }
}

function renderSubjectUnits(subjectUnits, subjectPosts, container) {
  if (!subjectUnits || subjectUnits.length === 0) {
    renderPostList(subjectPosts, container, t("noUnits"), false);
    return;
  }

  const unassignedPosts = subjectPosts.filter(post => !post.unit_id);
  let html = `<div class="unit-list">`;

  subjectUnits.forEach(function (unit) {
    const posts = subjectPosts.filter(post => post.unit_id === unit.id);
    html += `
      <section class="unit-card">
        <div class="unit-card-header">
          <h3>${escapeHtml(unit.title)}</h3>
          <span>${posts.length} publicación(es)</span>
        </div>
        <div class="feed-list unit-feed" data-unit-id="${unit.id}"></div>
      </section>
    `;
  });

  if (unassignedPosts.length > 0) {
    html += `
      <section class="unit-card">
        <div class="unit-card-header">
          <h3>${escapeHtml(t("withoutUnit"))}</h3>
          <span>${unassignedPosts.length} publicación(es)</span>
        </div>
        <div class="feed-list unit-feed" data-unit-id="without-unit"></div>
      </section>
    `;
  }


  html += `</div>`;
  container.innerHTML = html;

  subjectUnits.forEach(function (unit) {
    const target = container.querySelector(`[data-unit-id="${unit.id}"]`);
    renderPostList(subjectPosts.filter(post => post.unit_id === unit.id), target, t("noContentSection"), false);
  });

  if (unassignedPosts.length > 0) {
    const target = container.querySelector('[data-unit-id="without-unit"]');
    renderPostList(unassignedPosts, target, t("noContentSection"), false);
  }
}

function renderPostList(posts, container, emptyMessage, teacherMode) {
  if (!posts || posts.length === 0) {
    container.innerHTML = `
      <div class="empty-panel">
        <h3>${escapeHtml(t("posts"))}</h3>
        <p>${escapeHtml(emptyMessage)}</p>
      </div>
    `;
    return;
  }

  container.innerHTML = posts.map(post => createPostCard(post, teacherMode)).join("");

  container.querySelectorAll(".open-post-button").forEach(function (button) {
    button.addEventListener("click", async function () {
      const post = currentPosts.find(item => item.id === button.dataset.postId)
        || teacherPosts.find(item => item.id === button.dataset.postId);

      if (post) {
        await openPost(post);
      }
    });
  });

  container.querySelectorAll(".edit-post-button").forEach(function (button) {
    button.addEventListener("click", async function () {
      await startEditingPost(button.dataset.postId);
    });
  });

  container.querySelectorAll(".delete-post-button").forEach(function (button) {
    button.addEventListener("click", async function () {
      await deletePost(button.dataset.postId);
    });
  });

  loadInlinePostImages(container);
}


async function loadInlinePostImages(container) {
  if (!container || !supabaseClient) {
    return;
  }

  const targets = Array.from(container.querySelectorAll(".post-inline-image[data-post-id]"));

  for (const target of targets) {
    const post = currentPosts.find(item => item.id === target.dataset.postId)
      || teacherPosts.find(item => item.id === target.dataset.postId);

    if (!post || !post.content || !post.content.file_path) {
      continue;
    }

    try {
      const { data } = await supabaseClient
        .storage
        .from(STORAGE_BUCKET)
        .createSignedUrl(post.content.file_path, 3600);

      if (data && data.signedUrl) {
        target.innerHTML = `<img src="${escapeAttribute(data.signedUrl)}" alt="${escapeAttribute(post.title)}" loading="lazy" />`;
      }
    } catch (error) {
      console.warn("No se pudo cargar la imagen de la publicación", error);
    }
  }
}

function createPostCard(post, teacherMode) {
  const subjectIcon = post.subjects && post.subjects.icon ? post.subjects.icon : "📘";
  const subjectName = post.subjects && post.subjects.name ? post.subjects.name : t("subject");
  const unitName = post.subject_units && post.subject_units.title ? post.subject_units.title : "";
  const date = formatDate(post.created_at);

  const content = post.content || {};
  const hasInlineImage = content.file_path && ["image/png", "image/jpeg", "image/webp"].includes(content.file_mime_type);

  return `
    <article class="post-card">
      <div class="post-topline">
        ${teacherMode ? `<input type="checkbox" class="post-select-checkbox" value="${post.id}" aria-label="Seleccionar publicación" />` : ""}
        <span class="post-type">${escapeHtml(readablePostType(post.post_type))}</span>
        <span class="post-subject">${escapeHtml(subjectIcon)} ${escapeHtml(subjectName)}</span>
        ${unitName ? `<span class="post-unit">Unidad: ${escapeHtml(unitName)}</span>` : ""}
        <span class="post-date">${escapeHtml(date)}</span>
      </div>
      <h3>${escapeHtml(post.title)}</h3>
      ${hasInlineImage ? `<div class="post-inline-image" data-post-id="${escapeAttribute(post.id)}" aria-label="Imagen insertada en la publicación"></div>` : ""}
      <p>${escapeHtml(shorten(post.body, 190))}</p>
      <div class="post-actions">
        <button type="button" class="primary-button open-post-button" data-post-id="${post.id}">
          ${escapeHtml(t("open"))}
        </button>
        ${teacherMode ? `<button type="button" class="secondary-button edit-post-button" data-post-id="${post.id}">${escapeHtml(t("edit"))}</button>` : ""}
        ${teacherMode ? `<button type="button" class="secondary-button delete-post-button" data-post-id="${post.id}">${escapeHtml(t("delete"))}</button>` : ""}
      </div>
    </article>
  `;
}
async function openPost(post) {
  const subjectWindowOpen = subjectModal && !subjectModal.classList.contains("hidden") && subjectModalBody;
  contentTitle.textContent = post.title;

  const content = post.content || {};
  if (MATERIAL_POST_TYPES.includes(post.post_type)) {
    markMaterialPostSeen(post.id);
    renderSubjects();
  }
  let fileUrl = "";

  if (content.file_path) {
    const { data } = await supabaseClient
      .storage
      .from(STORAGE_BUCKET)
      .createSignedUrl(content.file_path, 3600);

    if (data && data.signedUrl) {
      fileUrl = data.signedUrl;
    }
  }

  let html = `
    <div class="content-card">
      <p><strong>${escapeHtml(readablePostType(post.post_type))}</strong></p>
      <p>${escapeHtml(post.body || "")}</p>
  `;

  if (Array.isArray(content.key_points) && content.key_points.length > 0) {
    html += `
      <h3>${escapeHtml(t("keyIdeas"))}</h3>
      <ul class="key-points">
        ${content.key_points.map(point => `<li>${escapeHtml(point)}</li>`).join("")}
      </ul>
    `;
  }

  if (content.file_path && !fileUrl) {
    html += `<p class="feedback warning">No se pudo generar el acceso temporal al archivo.</p>`;
  }

  if (fileUrl && content.file_mime_type === "application/pdf") {
    html += `
      <iframe class="pdf-frame" src="${escapeHtml(fileUrl)}" title="${escapeHtml(post.title)}"></iframe>
      <a class="external-link" href="${escapeHtml(fileUrl)}" target="_blank" rel="noopener noreferrer">
        ${escapeHtml(t("openOrDownloadPdf"))}
      </a>
    `;
  }

  if (fileUrl && ["image/png", "image/jpeg", "image/webp"].includes(content.file_mime_type)) {
    html += `
      <img class="uploaded-image" src="${escapeHtml(fileUrl)}" alt="${escapeHtml(post.title)}" />
      <a class="external-link" href="${escapeHtml(fileUrl)}" target="_blank" rel="noopener noreferrer">
        ${escapeHtml(t("openImage"))}
      </a>
    `;
  }

  if (fileUrl && content.file_mime_type === "video/mp4") {
    html += `<video class="video-upload" controls src="${escapeHtml(fileUrl)}"></video>`;
  }

  if (content.url) {
    if (post.post_type === "interactive_test") {
      html += `
        <a class="external-link" href="${escapeHtml(content.url)}" target="_blank" rel="noopener noreferrer">
          ${escapeHtml(t("openTest"))}
        </a>
        ${currentProfile && currentProfile.role !== "teacher" ? `<button type="button" class="primary-button complete-post-button" data-post-id="${post.id}">${escapeHtml(t("completePost"))}</button>` : ""}
      `;
    } else if (post.post_type === "video_class") {
      html += `
        <a class="external-link" href="${escapeHtml(content.url)}" target="_blank" rel="noopener noreferrer">
          ${escapeHtml(t("enterVideoClass"))}
        </a>
      `;
    } else if (["video", "game", "challenge"].includes(post.post_type)) {
      const embedUrl = post.post_type === "video" ? getYoutubeEmbedUrl(content.url) : "";

      if (embedUrl) {
        html += `<iframe class="video-frame" src="${escapeHtml(embedUrl)}" title="${escapeHtml(post.title)}" allowfullscreen></iframe>`;
      }

      const linkLabel = post.post_type === "game" ? "Abrir juego" : post.post_type === "challenge" ? "Abrir desafío" : "Abrir vídeo";
      html += `
        <a class="external-link" href="${escapeHtml(content.url)}" target="_blank" rel="noopener noreferrer">
          ${escapeHtml(linkLabel)}
        </a>
      `;
    } else {
      const embedUrl = getYoutubeEmbedUrl(content.url);

      if (embedUrl) {
        html += `
          <iframe class="video-frame" src="${escapeHtml(embedUrl)}" title="${escapeHtml(post.title)}" allowfullscreen></iframe>
        `;
      }

      html += `
        <a class="external-link" href="${escapeHtml(content.url)}" target="_blank" rel="noopener noreferrer">
          ${escapeHtml(t("openLink"))}
        </a>
      `;
    }
  }

  if (currentProfile && currentProfile.role !== "teacher" && !["announcement", "notes", "interactive_test"].includes(post.post_type)) {
    const alreadyCompleted = currentPostCompletions.some(item => item.post_id === post.id);
    html += `<button type="button" class="primary-button complete-post-button" data-post-id="${post.id}" ${alreadyCompleted ? "disabled" : ""}>${escapeHtml(alreadyCompleted ? t("postCompleted") : t("completePost"))}</button>`;
  }

  html += `</div>`;

  let targetBody = contentBody;

  if (subjectWindowOpen) {
    let modalPostPanel = subjectModalBody.querySelector("#subjectPostPanel");

    if (!modalPostPanel) {
      modalPostPanel = document.createElement("section");
      modalPostPanel.id = "subjectPostPanel";
      modalPostPanel.className = "subject-post-panel";
      subjectModalBody.appendChild(modalPostPanel);
    }

    modalPostPanel.innerHTML = `<h3>${escapeHtml(post.title)}</h3>${html}`;
    targetBody = modalPostPanel;
    modalPostPanel.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    contentBody.innerHTML = html;
    contentPanel.classList.remove("hidden");
    contentPanel.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  targetBody.querySelectorAll(".complete-post-button").forEach(function (button) {
    button.addEventListener("click", async function () {
      await completePostForCurrentStudent(button.dataset.postId);
    });
  });

  if (currentProfile && currentProfile.role !== "teacher") {
    await recordActivityEvent("post_view", {
      postId: post.id,
      subjectId: post.subject_id,
      metadata: { title: post.title, post_type: post.post_type }
    });
  }
}

async function completePostForCurrentStudent(postId) {
  if (!currentProfile || currentProfile.role === "teacher") {
    return;
  }

  const { error } = await supabaseClient.rpc("complete_assigned_post", {
    p_post_id: postId
  });

  if (error) {
    console.error(error);
    alert(t("postCompletionError"));
    return;
  }

  const post = currentPosts.find(item => item.id === postId);
  await recordActivityEvent(post && post.post_type === "interactive_test" ? "interactive_test_completed" : "post_completed", {
    postId,
    subjectId: post ? post.subject_id : null,
    metadata: { title: post ? post.title : "" }
  });
  currentBadgeAwards = await fetchStudentBadgeAwards(currentProfile.id);
  currentPostCompletions = await fetchPostCompletions(currentProfile.id);
  renderBadges();
  renderSubjects();
  alert(t("postCompleted"));
}

async function deletePost(postId) {
  const post = teacherPosts.find(item => item.id === postId);

  const confirmed = confirm(t("deletePostConfirm"));
  if (!confirmed) {
    return;
  }

  if (post && post.content && post.content.file_path) {
    await supabaseClient.storage.from(STORAGE_BUCKET).remove([post.content.file_path]);
  }

  const { error } = await supabaseClient
    .from("posts")
    .delete()
    .eq("id", postId);

  if (error) {
    alert(t("postDeleteError"));
    console.error(error);
    return;
  }

  teacherPosts = await fetchAllPosts();
  renderTeacherOverview();
  renderTeacherPosts();
}

deleteSelectedPostsButton.addEventListener("click", async function () {
  const selectedIds = Array.from(teacherPostsList.querySelectorAll(".post-select-checkbox:checked"))
    .map(input => input.value);

  if (selectedIds.length === 0) {
    alert(t("selectOnePost"));
    return;
  }

  const confirmed = confirm(t("deletePostsConfirm", { count: selectedIds.length }));
  if (!confirmed) {
    return;
  }

  const selectedPosts = teacherPosts.filter(post => selectedIds.includes(post.id));
  const filePaths = selectedPosts
    .map(post => post.content && post.content.file_path ? post.content.file_path : "")
    .filter(Boolean);

  if (filePaths.length > 0) {
    await supabaseClient.storage.from(STORAGE_BUCKET).remove(filePaths);
  }

  const { error } = await supabaseClient
    .from("posts")
    .delete()
    .in("id", selectedIds);

  if (error) {
    alert(t("selectedPostsDeleteError"));
    console.error(error);
    return;
  }

  teacherPosts = await fetchAllPosts();
  renderTeacherPosts();
});

function renderStudentCalendar() {
  renderMonthCalendar(currentEvents, studentMonthGrid, studentMonthTitle, studentCalendarDate, false);
  const upcoming = currentEvents
    .filter(event => new Date(event.starts_at).getTime() >= Date.now() - 24 * 60 * 60 * 1000)
    .slice(0, 6);

  renderCalendarList(upcoming, studentCalendarList, t("noDates"));
  renderRightRailCalendar();
  updateUpcomingBadge();
}

function renderTeacherCalendar() {
  renderMonthCalendar(teacherEvents, teacherMonthGrid, teacherMonthTitle, teacherCalendarDate, false);
  renderRightRailCalendar();
  updateUpcomingBadge();
}

function renderRightRailCalendar() {
  const sourceEvents = currentProfile && currentProfile.role === "teacher" ? teacherEvents : currentEvents;
  renderMonthCalendar(sourceEvents, railMonthGrid, railMonthTitle, railCalendarDate, true);
}

function updateUpcomingBadge() {
  if (!quickUpcomingBadge || !quickCalendarLink) {
    return;
  }

  const sourceEvents = currentProfile && currentProfile.role === "teacher" ? teacherEvents : currentEvents;
  const now = new Date();
  const weekEnd = new Date(now);
  weekEnd.setDate(now.getDate() + 7);

  const count = sourceEvents.filter(function (event) {
    const date = new Date(event.starts_at);
    return date >= now && date <= weekEnd;
  }).length;

  quickCalendarLink.setAttribute("href", "#");
  quickCalendarLink.dataset.openPanel = "calendar";
  quickCalendarLink.setAttribute("title", count > 0 ? `${count} evento(s) próximo(s)` : t("calendar"));

  if (count > 0) {
    quickUpcomingBadge.textContent = String(count);
    quickUpcomingBadge.classList.remove("hidden");
  } else {
    quickUpcomingBadge.textContent = "0";
    quickUpcomingBadge.classList.add("hidden");
  }
}

function renderMonthCalendar(events, gridElement, titleElement, selectedDate, compact) {
  const year = selectedDate.getFullYear();
  const month = selectedDate.getMonth();
  const locale = localeMap[state.lang] || "es-ES";

  titleElement.textContent = new Intl.DateTimeFormat(locale, {
    month: "long",
    year: "numeric"
  }).format(selectedDate);

  const firstDay = new Date(year, month, 1);
  const startOffset = (firstDay.getDay() + 6) % 7;
  const startDate = new Date(year, month, 1 - startOffset);
  const dayNames = weekdayMap[state.lang] || weekdayMap.es;

  let html = dayNames.map(day => `<div class="month-head">${day}</div>`).join("");

  for (let i = 0; i < 42; i++) {
    const day = new Date(startDate);
    day.setDate(startDate.getDate() + i);

    const dayEvents = events.filter(event => isSameDay(new Date(event.starts_at), day));
    const visibleEvents = dayEvents.slice(0, compact ? 4 : 3);
    const isMuted = day.getMonth() !== month;
    const isWeekend = day.getDay() === 0 || day.getDay() === 6;
    const isHoliday = GALICIA_HOLIDAYS_2026.has(formatDateKey(day));
    const hasImportant = dayEvents.some(event => event.event_type === "important");
    const isToday = isSameDay(day, new Date());

    const classes = [
      "month-day",
      isMuted ? "is-muted" : "",
      isWeekend ? "is-weekend" : "",
      isHoliday ? "is-holiday" : "",
      hasImportant ? "has-important" : "",
      isToday ? "is-today" : ""
    ].filter(Boolean).join(" ");

    const dayTooltip = createDayTooltip(dayEvents);

    html += `
      <button
        type="button"
        class="${classes}"
        data-day="${formatDateKey(day)}"
        ${dayTooltip ? `data-tooltip="${escapeAttribute(dayTooltip)}"` : ""}
        title="${escapeAttribute(dayTooltip)}"
        aria-label="${escapeAttribute(dayTooltip || t("viewEventsForDay", { date: formatDateKey(day) }))}">
        <span class="month-number">${day.getDate()}</span>
        ${visibleEvents.map(event => compact
          ? `<span class="month-event ${calendarEventClass(event)}" title="${escapeAttribute(event.title)}"></span>`
          : `<span class="month-event ${calendarEventClass(event)}">${escapeHtml(shorten(event.title, 18))}</span>`
        ).join("")}
      </button>
    `;
  }

  gridElement.innerHTML = html;

  gridElement.querySelectorAll(".month-day[data-day]").forEach(function (dayButton) {
    dayButton.addEventListener("click", function () {
      openDayModal(dayButton.dataset.day, events);
    });
  });
}
function openDayModal(dayKey, sourceEvents) {
  if (!dayModal) {
    return;
  }

  selectedCalendarDay = dayKey;
  const day = new Date(`${dayKey}T12:00:00`);
  const dayEvents = sourceEvents.filter(event => isSameDay(new Date(event.starts_at), day));
  const locale = localeMap[state.lang] || "es-ES";

  dayModalTitle.textContent = new Intl.DateTimeFormat(locale, {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric"
  }).format(day);

  renderCalendarList(dayEvents, dayModalEvents, t("noEventsDay"));
  calendarEditEventId = "";
  dayEventMessage.textContent = "";
  dayEventForm.reset();
  dayEventTimeInput.value = "18:00";
  setDayEventFormMode(false);

  if (currentProfile && currentProfile.role !== "teacher") {
    dayEventType.value = "other";
    Array.from(dayEventType.options).forEach(function (option) {
      option.disabled = option.value !== "other";
    });
  } else {
    Array.from(dayEventType.options).forEach(function (option) {
      option.disabled = false;
    });
  }

  dayModal.classList.remove("hidden");
}

async function reloadCalendarData() {
  if (currentProfile && currentProfile.role === "teacher") {
    teacherEvents = await fetchAllEvents();
    renderTeacherCalendar();
  } else {
    currentEvents = await fetchStudentEvents();
    renderStudentCalendar();
    renderRightRailCalendar();
  }
}

async function createCalendarEventForCurrentUser({ subjectId, eventType, title, description, startsAt, messageElement }) {
  if (!currentProfile) {
    return false;
  }

  if (currentProfile.role === "teacher") {
    const selectedStudentIds = teacherStudents.map(student => student.id);

    const { data: createdEvent, error: eventError } = await supabaseClient
      .from("calendar_events")
      .insert({
        subject_id: subjectId,
        created_by: currentUserId,
        title,
        description,
        event_type: eventType,
        starts_at: startsAt,
        is_published: true
      })
      .select("id")
      .single();

    if (eventError) {
      console.error(eventError);
      showMessage(messageElement, "No se pudo crear el evento.", "warning");
      return false;
    }

    if (selectedStudentIds.length > 0) {
      const assignments = selectedStudentIds.map(studentId => ({ event_id: createdEvent.id, profile_id: studentId }));
      const { error: assignmentError } = await supabaseClient
        .from("calendar_event_assignments")
        .insert(assignments);

      if (assignmentError) {
        console.error(assignmentError);
        showMessage(messageElement, "El evento se creó, pero no se pudo asignar.", "warning");
        return false;
      }
    }

    return true;
  }

  const { error } = await supabaseClient.rpc("create_personal_calendar_event", {
    p_subject_id: subjectId,
    p_title: title,
    p_description: description,
    p_starts_at: startsAt
  });

  if (error) {
    console.error(error);
    showMessage(messageElement, "No se pudo crear el evento personal. Ejecuta la migración SQL de esta actualización.", "warning");
    return false;
  }

  return true;
}

function renderCalendarList(events, container, emptyMessage) {
  if (!events || events.length === 0) {
    container.innerHTML = `
      <div class="empty-panel">
        <h3>${escapeHtml(t("calendar"))}</h3>
        <p>${escapeHtml(emptyMessage)}</p>
      </div>
    `;
    return;
  }

  container.innerHTML = events.map(function (event) {
    const subjectIcon = event.subjects && event.subjects.icon ? event.subjects.icon : "📘";
    const subjectName = event.subjects && event.subjects.name ? event.subjects.name : t("subject");

    return `
      <article class="calendar-card">
        <div class="calendar-topline">
          <span class="event-type">${escapeHtml(readableEventType(event.event_type))}</span>
          <span class="calendar-subject">${escapeHtml(subjectIcon)} ${escapeHtml(subjectName)}</span>
          <span class="calendar-date">${escapeHtml(formatDateTime(event.starts_at))}</span>
        </div>
        <h3>${escapeHtml(event.title)}</h3>
        <p>${escapeHtml(event.description || "")}</p>
        <p class="activity-meta">${escapeHtml(event.created_by === currentUserId && currentProfile.role !== "teacher" ? t("ownEvent") : readableEventOwner(event))}</p>
        ${calendarEventActions(event)}
      </article>
    `;
  }).join("");

  container.querySelectorAll(".edit-calendar-event-button").forEach(function (button) {
    button.addEventListener("click", function () {
      startEditingCalendarEvent(button.dataset.eventId);
    });
  });

  container.querySelectorAll(".delete-calendar-event-button").forEach(function (button) {
    button.addEventListener("click", async function () {
      await deleteCalendarEvent(button.dataset.eventId);
    });
  });
}

function readableEventOwner(event) {
  if (!event.created_by) {
    return "";
  }

  if (event.created_by === currentUserId && currentProfile.role !== "teacher") {
    return t("ownEvent");
  }

  const owner = teacherStudents.find(student => student.id === event.created_by);
  if (owner) {
    return `${t("student")}: ${owner.nickname || owner.display_name}`;
  }

  return t("teacherEvent");
}

function canManageCalendarEvent(event) {
  if (!currentProfile || !event || event.system_event) {
    return false;
  }

  if (currentProfile.role === "teacher") {
    return event.created_by === currentUserId;
  }

  return event.created_by === currentUserId;
}

function calendarEventActions(event) {
  if (!canManageCalendarEvent(event)) {
    return "";
  }

  return `
    <div class="calendar-card-actions">
      <button type="button" class="secondary-button edit-calendar-event-button" data-event-id="${event.id}">${escapeHtml(t("editEvent"))}</button>
      <button type="button" class="secondary-button delete-calendar-event-button" data-event-id="${event.id}">${escapeHtml(t("deleteEvent"))}</button>
    </div>
  `;
}

function setDayEventFormMode(isEditing) {
  if (!dayEventForm) {
    return;
  }

  const submitButton = dayEventForm.querySelector("button[type='submit']");
  if (submitButton) {
    submitButton.textContent = isEditing ? t("saveEventChanges") : t("addToMyCalendar");
  }

  let cancelButton = document.getElementById("cancelCalendarEditButton");

  if (isEditing && !cancelButton) {
    cancelButton = document.createElement("button");
    cancelButton.type = "button";
    cancelButton.id = "cancelCalendarEditButton";
    cancelButton.className = "secondary-button";
    cancelButton.textContent = t("cancelEdit");
    cancelButton.addEventListener("click", function () {
      calendarEditEventId = "";
      dayEventForm.reset();
      dayEventTimeInput.value = "18:00";
      setDayEventFormMode(false);
    });
    submitButton.insertAdjacentElement("afterend", cancelButton);
  }

  if (!isEditing && cancelButton) {
    cancelButton.remove();
  }
}

function findCalendarEventById(eventId) {
  return [...currentEvents, ...teacherEvents].find(event => event.id === eventId);
}

function startEditingCalendarEvent(eventId) {
  const event = findCalendarEventById(eventId);

  if (!event || !canManageCalendarEvent(event)) {
    showMessage(dayEventMessage, t("cannotEditEvent"), "warning");
    return;
  }

  const dayKey = formatDateKey(new Date(event.starts_at));
  const sourceEvents = currentProfile.role === "teacher" ? teacherEvents : currentEvents;
  openDayModal(dayKey, sourceEvents);

  calendarEditEventId = event.id;
  if (dayEventSubject) dayEventSubject.value = event.subject_id || dayEventSubject.value;
  if (dayEventType) dayEventType.value = event.event_type || "other";
  if (dayEventTitleInput) dayEventTitleInput.value = event.title || "";
  if (dayEventDescriptionInput) dayEventDescriptionInput.value = event.description || "";
  if (dayEventTimeInput) {
    const d = new Date(event.starts_at);
    dayEventTimeInput.value = `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
  }
  setDayEventFormMode(true);
}

async function updateCalendarEventForCurrentUser({ eventId, subjectId, eventType, title, description, startsAt, messageElement }) {
  const event = findCalendarEventById(eventId);

  if (!event || !canManageCalendarEvent(event)) {
    showMessage(messageElement, t("cannotEditEvent"), "warning");
    return false;
  }

  const updates = {
    subject_id: subjectId,
    title,
    description,
    starts_at: startsAt
  };

  if (currentProfile.role === "teacher") {
    updates.event_type = eventType;
  }

  const { error } = await supabaseClient
    .from("calendar_events")
    .update(updates)
    .eq("id", eventId)
    .eq("created_by", currentUserId);

  if (error) {
    console.error(error);
    showMessage(messageElement, "No se pudo actualizar el evento.", "warning");
    return false;
  }

  return true;
}

async function deleteCalendarEvent(eventId) {
  const event = findCalendarEventById(eventId);

  if (!event || !canManageCalendarEvent(event)) {
    showMessage(dayEventMessage, t("cannotEditEvent"), "warning");
    return;
  }

  const confirmed = window.confirm(t("deleteEvent"));
  if (!confirmed) {
    return;
  }

  const { error } = await supabaseClient
    .from("calendar_events")
    .delete()
    .eq("id", eventId)
    .eq("created_by", currentUserId);

  if (error) {
    console.error(error);
    showMessage(dayEventMessage, "No se pudo eliminar el evento.", "warning");
    return;
  }

  await reloadCalendarData();
  const sourceEvents = currentProfile.role === "teacher" ? teacherEvents : currentEvents;
  if (selectedCalendarDay) {
    openDayModal(selectedCalendarDay, sourceEvents);
  }
  showMessage(dayEventMessage, t("eventDeleted"), "success");
}

studentPrevMonth.addEventListener("click", function () {
  studentCalendarDate.setMonth(studentCalendarDate.getMonth() - 1);
  renderStudentCalendar();
});

studentNextMonth.addEventListener("click", function () {
  studentCalendarDate.setMonth(studentCalendarDate.getMonth() + 1);
  renderStudentCalendar();
});

teacherPrevMonth.addEventListener("click", function () {
  teacherCalendarDate.setMonth(teacherCalendarDate.getMonth() - 1);
  renderTeacherCalendar();
});

teacherNextMonth.addEventListener("click", function () {
  teacherCalendarDate.setMonth(teacherCalendarDate.getMonth() + 1);
  renderTeacherCalendar();
});

railPrevMonth.addEventListener("click", function () {
  railCalendarDate.setMonth(railCalendarDate.getMonth() - 1);
  renderRightRailCalendar();
});

railNextMonth.addEventListener("click", function () {
  railCalendarDate.setMonth(railCalendarDate.getMonth() + 1);
  renderRightRailCalendar();
});

studentEventForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  const ok = await createCalendarEventForCurrentUser({
    subjectId: studentEventSubject.value,
    eventType: "other",
    title: studentEventTitle.value.trim(),
    description: studentEventDescription.value.trim(),
    startsAt: new Date(studentEventDate.value).toISOString(),
    messageElement: studentEventMessage
  });

  if (!ok) {
    return;
  }

  const createdTitle = studentEventTitle.value.trim();
  const createdSubjectId = studentEventSubject.value;
  studentEventForm.reset();
  await reloadCalendarData();
  await recordActivityEvent("calendar_event", { subjectId: createdSubjectId, metadata: { title: createdTitle } });
  showMessage(studentEventMessage, "Evento personal añadido.", "success");
});

if (closeDayModal) {
  closeDayModal.addEventListener("click", function () {
    dayModal.classList.add("hidden");
  });
}

if (dayEventForm) {
  dayEventForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    if (!selectedCalendarDay) {
      return;
    }

    const startsAt = new Date(`${selectedCalendarDay}T${dayEventTimeInput.value || "18:00"}:00`).toISOString();
    const eventPayload = {
      subjectId: dayEventSubject.value,
      eventType: dayEventType.value,
      title: dayEventTitleInput.value.trim(),
      description: dayEventDescriptionInput.value.trim(),
      startsAt,
      messageElement: dayEventMessage
    };

    const ok = calendarEditEventId
      ? await updateCalendarEventForCurrentUser({ eventId: calendarEditEventId, ...eventPayload })
      : await createCalendarEventForCurrentUser(eventPayload);

    if (!ok) {
      return;
    }

    const wasEditing = Boolean(calendarEditEventId);
    calendarEditEventId = "";
    setDayEventFormMode(false);
    await reloadCalendarData();
    if (currentProfile && currentProfile.role !== "teacher") {
      await recordActivityEvent("calendar_event", { subjectId: dayEventSubject.value, metadata: { title: dayEventTitleInput.value.trim() } });
    }
    const sourceEvents = currentProfile && currentProfile.role === "teacher" ? teacherEvents : currentEvents;
    openDayModal(selectedCalendarDay, sourceEvents);
    showMessage(dayEventMessage, wasEditing ? t("eventUpdated") : "Evento añadido.", "success");
  });
}
async function addDifficultSubjectForCurrentStudent() {
  if (!currentProfile || currentProfile.role === "teacher") {
    return;
  }

  const { error } = await supabaseClient
    .from("student_difficult_subjects")
    .insert({
      profile_id: currentUserId,
      subject_id: difficultSubjectSelect.value,
      note: difficultSubjectNote.value.trim()
    });

  if (error) {
    console.error(error);
    showMessage(difficultSubjectMessage, "No se pudo guardar la materia.", "warning");
    return;
  }

  difficultSubjectForm.reset();
  currentDifficultSubjects = await fetchStudentDifficultSubjects(currentUserId);
  renderStudentSummaryCards();
  renderDifficultSubjectsPanel();
  showMessage(difficultSubjectMessage, t("difficultSubjectSaved"), "success");
}

async function deleteDifficultSubject(id) {
  const { error } = await supabaseClient
    .from("student_difficult_subjects")
    .delete()
    .eq("id", id);

  if (error) {
    console.error(error);
    return;
  }

  currentDifficultSubjects = await fetchStudentDifficultSubjects(currentUserId);
  renderStudentSummaryCards();
  renderDifficultSubjectsPanel();
  showMessage(difficultSubjectMessage, t("difficultSubjectDeleted"), "success");
}

async function addGradeRecordForCurrentStudent() {
  if (!currentProfile || currentProfile.role === "teacher") {
    return;
  }

  const { error } = await supabaseClient
    .from("student_grade_records")
    .insert({
      profile_id: currentUserId,
      subject_id: gradeSubjectSelect.value,
      grade_type: gradeTypeSelect.value,
      other_type: gradeOtherTypeInput.value.trim(),
      grade_value: gradeValueInput.value.trim(),
      grade_date: gradeDateInput.value || null,
      note: gradeNoteInput.value.trim()
    });

  if (error) {
    console.error(error);
    showMessage(gradeRecordMessage, "No se pudo guardar la calificación.", "warning");
    return;
  }

  gradeRecordForm.reset();
  currentGradeRecords = await fetchStudentGradeRecords(currentUserId);
  renderStudentSummaryCards();
  renderGradeRecordsPanel();
  showMessage(gradeRecordMessage, t("gradeSaved"), "success");
}

async function deleteGradeRecord(id) {
  const { error } = await supabaseClient
    .from("student_grade_records")
    .delete()
    .eq("id", id);

  if (error) {
    console.error(error);
    return;
  }

  currentGradeRecords = await fetchStudentGradeRecords(currentUserId);
  renderStudentSummaryCards();
  renderGradeRecordsPanel();
  showMessage(gradeRecordMessage, t("gradeDeleted"), "success");
}

function readableGradeType(type) {
  const labels = {
    exam: t("gradeExam"),
    assignment: t("gradeAssignment"),
    presentation: t("gradePresentation"),
    reading_exam: t("gradeReadingExam"),
    other: t("gradeOther")
  };

  return labels[type] || type || t("gradeOther");
}

function updateAcademicYearBanner() {
  if (!academicYearBanner) {
    applySeasonalHeaderLogo();
    return;
  }
  const label = getAcademicYearLabel(new Date());
  academicYearBanner.textContent = label.isPreparation
    ? t("academicYearPreparation", { year: label.label })
    : t("academicYear", { year: label.label });
  applySeasonalHeaderLogo();
}

function applySeasonalHeaderLogo() {
  if (!brandLogo) {
    return;
  }

  const todayKey = formatDateKey(new Date());
  const summerMode = todayKey >= "2026-06-19" && todayKey < "2026-09-09";

  if (summerMode) {
    brandLogo.classList.add("summer-logo");
    brandLogo.setAttribute("aria-label", "Tribeca Aula en modo verano");
    brandLogo.innerHTML = `
      <text x="8" y="28" class="summer-logo-emoji">☀️</text>
      <text x="25" y="34" class="summer-logo-emoji">🌴</text>
      <text x="8" y="54" class="summer-logo-emoji">🏖️</text>
    `;
  } else {
    brandLogo.classList.remove("summer-logo");
    brandLogo.setAttribute("aria-label", "Logo de Tribeca Aula");
    if (defaultBrandLogoMarkup) {
      brandLogo.innerHTML = defaultBrandLogoMarkup;
    }
  }
}

function getAcademicYearLabel(date) {
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const isPreparation = month === 7 || month === 8;
  const startYear = isPreparation || month >= 9 ? year : year - 1;
  const endYear = startYear + 1;
  const label = `${startYear}/${String(endYear).slice(2)}`;
  return { label, isPreparation };
}

function getSystemCalendarEvents() {
  return [
    {
      id: "system-fin-curso-2026",
      subject_id: null,
      title: "🎉🌴☀️🏖️ ¡Fin de curso!",
      description: "Fin del curso escolar. Tribeca Aula entra en ambiente de verano hasta el inicio del curso 2026/27.",
      event_type: "important",
      starts_at: "2026-06-19T10:00:00",
      created_by: null,
      created_at: "2026-06-19T10:00:00",
      visibility_scope: "all",
      affected_school_centers: [],
      system_event: true,
      subjects: { name: "Tribeca Aula", code: "TRIBECA", icon: "🏖️" }
    }
  ];
}

function withSystemCalendarEvents(events) {
  const base = Array.isArray(events) ? events.slice() : [];
  const existingIds = new Set(base.map(event => event.id));
  getSystemCalendarEvents().forEach(function (event) {
    if (!existingIds.has(event.id)) {
      base.push(event);
    }
  });
  return base.sort((a, b) => new Date(a.starts_at) - new Date(b.starts_at));
}

function initSchoolStaticSelectors() {
  fillSchoolSelect(studentSchoolCenterSelect, false);
  fillBasicSelect(studentStudyTypeSelect, STUDY_TYPES, false);
  fillBasicSelect(studentEducationalStageSelect, EDUCATIONAL_STAGES, false);
  fillBasicSelect(studentAcademicCourseSelect, ACADEMIC_COURSES, false);
  initTeacherStudentAdminSelectors();
}

function initTeacherStudentAdminSelectors() {
  fillSchoolSelect(newStudentCenter, false);
  fillBasicSelect(newStudentStage, EDUCATIONAL_STAGES, false);
  fillBasicSelect(newStudentCourse, ACADEMIC_COURSES, false);
}

function fillSchoolSelect(select, includeAll) {
  if (!select) {
    return;
  }
  const first = includeAll ? `<option value="">${escapeHtml(t("allCenters"))}</option>` : `<option value="">${escapeHtml(t("unassigned"))}</option>`;
  select.innerHTML = first + TRIBECA_SCHOOL_CENTERS.map(center => `<option value="${escapeAttribute(center.name)}">${escapeHtml(center.name)} · ${escapeHtml(center.locality)}</option>`).join("");
}

function fillBasicSelect(select, values, includeAll, allLabelKey) {
  if (!select) {
    return;
  }
  const first = includeAll ? `<option value="">${escapeHtml(t(allLabelKey || "unassigned"))}</option>` : `<option value="">${escapeHtml(t("unassigned"))}</option>`;
  select.innerHTML = first + values.map(value => `<option value="${escapeAttribute(value)}">${escapeHtml(value)}</option>`).join("");
}

function formatStudentSchoolLine(profileOrStudent) {
  if (!profileOrStudent) {
    return t("unassigned");
  }
  const center = profileOrStudent.schoolCenter || profileOrStudent.school_center || "Centro sin asignar";
  const course = profileOrStudent.academicCourse || profileOrStudent.academic_course || profileOrStudent.course || (profileOrStudent.courses ? profileOrStudent.courses.name : "Curso sin asignar");
  const stage = profileOrStudent.educationalStage || profileOrStudent.educational_stage || "";
  return [center, stage, course].filter(Boolean).join(" · ");
}

function renderStudentSchoolPanel() {
  if (!currentProfile || !studentSchoolForm) {
    return;
  }
  initSchoolStaticSelectors();
  studentSchoolCenterSelect.value = currentProfile.schoolCenter || "";
  if (studentStudyTypeSelect) studentStudyTypeSelect.value = currentProfile.studyType || currentProfile.educationalStage || currentProfile.level || "";
  studentEducationalStageSelect.value = currentProfile.educationalStage || currentProfile.level || currentProfile.studyType || "";
  studentAcademicCourseSelect.value = currentProfile.academicCourse || currentProfile.course || "";
  if (studentTribecaSchedule) {
    studentTribecaSchedule.value = currentProfile.classSchedule || t("unassigned");
  }
}

async function saveCurrentStudentSchoolProfile() {
  showMessage(studentSchoolMessage, t("studentSchoolReadonly"), "warning");
}

function renderTeacherTargetFilters() {
  fillSchoolSelect(teacherFilterCenter, true);
  if (teacherFilterStudyType) fillBasicSelect(teacherFilterStudyType, EDUCATIONAL_STAGES, true, "allEducationalStages");
  fillBasicSelect(teacherFilterAcademicCourse, ACADEMIC_COURSES, true, "allCourses");
}

function applyTeacherStudentFilter() {
  if (!teacherStudentsList) {
    return;
  }
  const center = teacherFilterCenter ? teacherFilterCenter.value : "";
  const studyType = teacherFilterStudyType ? teacherFilterStudyType.value : "";
  const course = teacherFilterAcademicCourse ? teacherFilterAcademicCourse.value : "";
  teacherStudentsList.querySelectorAll("label.checkbox-card").forEach(function (label) {
    const matchesCenter = !center || label.dataset.center === center;
    const matchesStudy = !studyType || label.dataset.studyType === studyType;
    const matchesCourse = !course || label.dataset.course === course;
    const input = label.querySelector("input[type='checkbox']");
    input.checked = matchesCenter && matchesStudy && matchesCourse;
  });
}

function renderTeacherAlerts() {
  if (!teacherAlertsList || !currentProfile || currentProfile.role !== "teacher") {
    return;
  }
  const alerts = [];
  const lastLogins = new Map();
  recentActivity
    .filter(item => item.action_type === "login")
    .forEach(function (item) {
      if (!lastLogins.has(item.profile_id)) {
        lastLogins.set(item.profile_id, item.created_at);
      }
    });

  const now = Date.now();
  const inactive = teacherStudents.filter(function (student) {
    const last = lastLogins.get(student.id);
    if (!last) {
      return true;
    }
    return now - new Date(last).getTime() > 5 * 24 * 60 * 60 * 1000;
  }).slice(0, 8);

  if (inactive.length) {
    alerts.push({
      title: t("inactiveStudents"),
      items: inactive.map(student => `${student.nickname || student.display_name} · ${lastLogins.get(student.id) ? t("daysWithoutLogin", { count: Math.floor((now - new Date(lastLogins.get(student.id)).getTime()) / (24 * 60 * 60 * 1000)) }) : "sin registro de acceso"}`)
    });
  }

  if (teacherDifficultSubjects.length) {
    alerts.push({
      title: t("difficultSubjectAlerts"),
      items: teacherDifficultSubjects.slice(0, 8).map(item => `${item.profiles ? (item.profiles.nickname || item.profiles.display_name || item.profiles.username) : t("student")} · ${item.subjects ? item.subjects.name : t("subject")}${item.note ? `: ${item.note}` : ""}`)
    });
  }

  const recentLowGrades = teacherGradeRecords.filter(function (item) {
    const value = parseGradeNumber(item.grade_value);
    const dateValue = item.grade_date || item.created_at;
    return value !== null && value < 5 && now - new Date(dateValue).getTime() < 60 * 24 * 60 * 60 * 1000;
  }).slice(0, 8);

  if (recentLowGrades.length) {
    alerts.push({
      title: t("lowGradeAlerts"),
      items: recentLowGrades.map(item => `${item.profiles ? (item.profiles.nickname || item.profiles.display_name || item.profiles.username) : t("student")} · ${item.subjects ? item.subjects.name : t("subject")} · ${item.grade_value}`)
    });
  }

  const completionSet = new Set(teacherPostCompletions.map(item => `${item.profile_id}|${item.post_id}`));
  const pendingByStudent = teacherStudents.map(function (student) {
    const assignedPostIds = teacherPostAssignments.filter(item => item.profile_id === student.id).map(item => item.post_id);
    const pending = teacherPosts.filter(post => assignedPostIds.includes(post.id) && !["announcement", "notes"].includes(post.post_type) && !completionSet.has(`${student.id}|${post.id}`));
    return { student, pendingCount: pending.length };
  }).filter(item => item.pendingCount > 0).sort((a, b) => b.pendingCount - a.pendingCount).slice(0, 8);

  if (pendingByStudent.length) {
    alerts.push({
      title: t("pendingPostsAlerts"),
      items: pendingByStudent.map(item => `${item.student.nickname || item.student.display_name} · ${t("pendingCount", { count: item.pendingCount })}`)
    });
  }

  if (!alerts.length) {
    teacherAlertsList.innerHTML = `<div class="empty-panel"><p>${escapeHtml(t("noTeacherAlerts"))}</p></div>`;
    return;
  }

  teacherAlertsList.innerHTML = alerts.map(function (alert) {
    return `<article class="teacher-alert-card"><h3>${escapeHtml(alert.title)}</h3>${alert.items.map(item => `<p>${escapeHtml(item)}</p>`).join("")}</article>`;
  }).join("");
}

function parseGradeNumber(value) {
  const raw = String(value || "").replace(",", ".").match(/\d+(?:\.\d+)?/);
  if (!raw) {
    return null;
  }
  const num = Number(raw[0]);
  return Number.isFinite(num) ? num : null;
}


function renderTeacherStudentAdminList() {
  if (!teacherBulkStudentList) return;
  if (!teacherStudents || teacherStudents.length === 0) {
    teacherBulkStudentList.innerHTML = `<div class="empty-panel"><p>${escapeHtml(t("noRelatedItems"))}</p></div>`;
    return;
  }
  teacherBulkStudentList.innerHTML = teacherStudents.map(function (student) {
    return `
      <label class="student-admin-row">
        <input type="checkbox" value="${escapeAttribute(student.id)}" />
        <span>
          <strong>${escapeHtml(student.nickname || student.display_name || student.username)}</strong>
          <small>${escapeHtml(student.username || "")} · ${escapeHtml(formatStudentSchoolLine(student))}</small>
          <small class="profile-inline-schedule">${escapeHtml(student.class_schedule || t("noTribecaSchedule"))}</small>
        </span>
      </label>
    `;
  }).join("");
}

function getAdminSelectedStudentIds() {
  if (!teacherBulkStudentList) return [];
  return Array.from(teacherBulkStudentList.querySelectorAll("input[type='checkbox']:checked")).map(input => input.value);
}

async function archiveStudents(ids, messageTarget) {
  if (!ids || ids.length === 0) {
    showMessage(messageTarget || teacherArchiveMessage, t("selectStudentsFirst"), "warning");
    return;
  }
  const { error } = await supabaseClient.rpc("teacher_archive_students", { p_profile_ids: ids });
  if (error) {
    console.error(error);
    showMessage(messageTarget || teacherArchiveMessage, t("archiveStudentError"), "warning");
    return;
  }
  teacherStudents = await fetchAllStudents();
  renderTeacherStudents();
  await preloadTeacherStudentAvatars();
  renderTeacherStudentHub();
  renderTeacherStudentAdminList();
  showMessage(messageTarget || teacherArchiveMessage, t("studentsArchived"), "success");
}

async function createStudentFromTeacher() {
  if (!teacherAddStudentForm) return;
  const displayName = newStudentName.value.trim();
  const username = normalizeUsername(newStudentUsername.value.trim());
  const password = newStudentPassword.value.trim();
  if (!displayName || !username || !password) {
    showMessage(teacherAddStudentMessage, t("completeRequiredFields"), "warning");
    return;
  }
  if (password.length < 6) {
    showMessage(teacherAddStudentMessage, t("passwordTooShort"), "warning");
    return;
  }

  const email = `${username}@tribeca-aula.local`;
  const creationClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false }
  });
  const { data, error } = await creationClient.auth.signUp({
    email,
    password,
    options: { data: { username, display_name: displayName, role: "student" } }
  });
  if (error || !data || !data.user) {
    console.error(error);
    showMessage(teacherAddStudentMessage, t("studentCreateAuthError"), "warning");
    return;
  }
  lastCreatedStudentAuthId = data.user.id;
  const { error: profileError } = await supabaseClient.rpc("teacher_upsert_student_profile", {
    p_profile_id: data.user.id,
    p_username: username,
    p_display_name: displayName,
    p_school_center: newStudentCenter.value,
    p_educational_stage: newStudentStage.value,
    p_academic_course: newStudentCourse.value,
    p_class_schedule: newStudentSchedule.value.trim()
  });
  if (profileError) {
    console.error(profileError);
    showMessage(teacherAddStudentMessage, t("studentCreateProfileError"), "warning");
    return;
  }
  teacherAddStudentForm.reset();
  initTeacherStudentAdminSelectors();
  teacherStudents = await fetchAllStudents();
  renderTeacherStudents();
  await preloadTeacherStudentAvatars();
  renderTeacherStudentHub();
  renderTeacherStudentAdminList();
  showMessage(teacherAddStudentMessage, t("studentCreated"), "success");
}

function normalizeUsername(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9._-]+/g, "_")
    .replace(/^_+|_+$/g, "");
}

async function promoteAllStudentsOneCourse() {
  const { error } = await supabaseClient.rpc("promote_all_students_one_course");
  if (error) {
    console.error(error);
    showMessage(promotionMessage, "No se pudo promocionar. Ejecuta la migración SQL.", "warning");
    return;
  }
  teacherStudents = await fetchAllStudents();
  renderTeacherStudents();
  renderTeacherStudentHub();
  renderTeacherAlerts();
  showMessage(promotionMessage, t("promotionDone"), "success");
}

async function saveTeacherStudentSchoolProfile(studentId, formPrefix) {
  const centerInput = document.getElementById(`${formPrefix}Center`);
  const stageInput = document.getElementById(`${formPrefix}Stage`);
  const courseInput = document.getElementById(`${formPrefix}Course`);
  const scheduleInput = document.getElementById(`${formPrefix}Schedule`);
  const message = document.getElementById(`${formPrefix}Message`);
  const center = centerInput ? centerInput.value : "";
  const stage = stageInput ? stageInput.value : "";
  const study = stage;
  const course = courseInput ? courseInput.value : "";
  const schedule = scheduleInput ? scheduleInput.value.trim() : "";

  const { error } = await supabaseClient.rpc("teacher_update_student_school_profile", {
    p_profile_id: studentId,
    p_school_center: center,
    p_educational_stage: stage,
    p_academic_course: course,
    p_study_type: study,
    p_class_schedule: schedule
  });
  if (error) {
    console.error(error);
    showMessage(message, t("studentSchoolSaveError") || "No se pudo guardar. Ejecuta la migración SQL de gestión de alumnado.", "warning");
    return;
  }
  teacherStudents = await fetchAllStudents();
  renderTeacherStudents();
  renderTeacherStudentHub();
  renderTeacherStudentAdminList();
  showMessage(message, t("schoolProfileSaved"), "success");
}

function renderInlineSchoolProfileForm(student, formPrefix) {
  const center = student.school_center || "";
  const stage = student.educational_stage || student.study_type || "";
  const course = student.academic_course || (student.courses ? student.courses.name : "");
  const schedule = student.class_schedule || "";
  return `
    <form id="${escapeAttribute(formPrefix)}Form" class="teacher-form compact-school-form">
      <label>${escapeHtml(t("schoolCenter"))}<select id="${escapeAttribute(formPrefix)}Center">${schoolOptionsHtml(center, false)}</select></label>
      <label>${escapeHtml(t("educationalStage"))}<select id="${escapeAttribute(formPrefix)}Stage">${basicOptionsHtml(EDUCATIONAL_STAGES, stage, false)}</select></label>
      <label>${escapeHtml(t("academicCourse"))}<select id="${escapeAttribute(formPrefix)}Course">${basicOptionsHtml(ACADEMIC_COURSES, course, false)}</select></label>
      <label>${escapeHtml(t("tribecaSchedule"))}<textarea id="${escapeAttribute(formPrefix)}Schedule" rows="2" placeholder="${escapeAttribute(t("tribecaSchedulePlaceholder"))}">${escapeHtml(schedule)}</textarea></label>
      <button type="submit" class="secondary-button">${escapeHtml(t("saveStudentSchoolData"))}</button>
      <p id="${escapeAttribute(formPrefix)}Message" class="feedback"></p>
    </form>
  `;
}

function schoolOptionsHtml(selectedValue, includeAll) {
  const first = includeAll ? `<option value="">${escapeHtml(t("allCenters"))}</option>` : `<option value="">${escapeHtml(t("unassigned"))}</option>`;
  return first + TRIBECA_SCHOOL_CENTERS.map(function (center) {
    const selected = center.name === selectedValue ? " selected" : "";
    return `<option value="${escapeAttribute(center.name)}"${selected}>${escapeHtml(center.name)} · ${escapeHtml(center.locality)}</option>`;
  }).join("");
}

function basicOptionsHtml(values, selectedValue, includeAll) {
  const first = includeAll ? `<option value="">${escapeHtml(t("allCourses"))}</option>` : `<option value="">${escapeHtml(t("unassigned"))}</option>`;
  return first + values.map(function (value) {
    const selected = value === selectedValue ? " selected" : "";
    return `<option value="${escapeAttribute(value)}"${selected}>${escapeHtml(value)}</option>`;
  }).join("");
}

function renderTeacherSubjects() {
  const options = teacherSubjects.map(function (subject) {
    return `<option value="${subject.id}">${escapeHtml(subject.icon || "📘")} ${escapeHtml(subject.name)}</option>`;
  }).join("");

  teacherSubject.innerHTML = options;
  teacherEventSubject.innerHTML = options;
  coverSubjectSelect.innerHTML = options;
  if (dayEventSubject) {
    dayEventSubject.innerHTML = options;
  }

  updateTeacherUnitControls();
}


async function updateTeacherUnitControls() {
  if (!teacherSubject || !teacherUnitExisting || !teacherUnitMode) {
    return;
  }

  const selectedSubjectId = teacherSubject.value;
  const units = await fetchUnitsForSubject(selectedSubjectId);
  teacherUnits = [
    ...teacherUnits.filter(unit => unit.subject_id !== selectedSubjectId),
    ...units
  ];

  teacherUnitExisting.innerHTML = units.length > 0
    ? units.map(unit => `<option value="${unit.id}">${escapeHtml(unit.title)}</option>`).join("")
    : `<option value="">No hay unidades creadas</option>`;

  const mode = teacherUnitMode.value;
  teacherUnitExistingControls.forEach(control => control.classList.toggle("hidden", mode !== "existing"));
  teacherUnitNewControls.forEach(control => control.classList.toggle("hidden", mode !== "new"));

  if (mode === "existing" && units.length === 0) {
    teacherUnitMode.value = "new";
    teacherUnitExistingControls.forEach(control => control.classList.add("hidden"));
    teacherUnitNewControls.forEach(control => control.classList.remove("hidden"));
  }
}

async function resolveTeacherUnitId() {
  if (!teacherUnitMode || teacherUnitMode.value === "none") {
    return null;
  }

  if (teacherUnitMode.value === "existing") {
    return teacherUnitExisting.value || null;
  }

  const title = teacherUnitNew.value.trim();

  if (!title) {
    showMessage(teacherPostMessage, "Escribe el nombre de la nueva unidad didáctica.", "warning");
    return false;
  }

  const subjectId = teacherSubject.value;
  const existingUnits = await fetchUnitsForSubject(subjectId);
  const nextSortOrder = existingUnits.length + 1;

  const { data, error } = await supabaseClient
    .from("subject_units")
    .insert({
      subject_id: subjectId,
      title,
      sort_order: nextSortOrder,
      created_by: currentUserId
    })
    .select("id")
    .single();

  if (error) {
    console.error(error);
    showMessage(teacherPostMessage, "No se pudo crear la unidad didáctica.", "warning");
    return false;
  }

  teacherUnits = await fetchUnitsForSubjects(teacherSubjects.map(subject => subject.id));
  return data.id;
}

if (toggleTeacherCompactButton) {
  toggleTeacherCompactButton.addEventListener("click", function () {
    document.body.classList.toggle("teacher-compact-mode");
    toggleTeacherCompactButton.textContent = document.body.classList.contains("teacher-compact-mode")
      ? t("expandTeacherView")
      : t("compactTeacherView");
  });
}

if (teacherStudentFocusSelect) {
  teacherStudentFocusSelect.addEventListener("change", renderTeacherStudentHub);
}

if (openTeacherMessagesButton) {
  openTeacherMessagesButton.addEventListener("click", handlePanelLinkClick);
}

if (openTeacherCalendarButton) {
  openTeacherCalendarButton.addEventListener("click", handlePanelLinkClick);
}

if (teacherSubject) {
  teacherSubject.addEventListener("change", updateTeacherUnitControls);
}

if (teacherUnitMode) {
  teacherUnitMode.addEventListener("change", updateTeacherUnitControls);
}

function renderTeacherStudents() {
  const checkboxHtml = createStudentCheckboxes(teacherStudents);
  teacherStudentsList.innerHTML = checkboxHtml;
  teacherEventStudentsList.innerHTML = checkboxHtml;

  teacherBadgeStudent.innerHTML = teacherStudents.map(function (student) {
    const courseName = student.courses ? student.courses.name : "Curso sin asignar";
    return `<option value="${student.id}">${escapeHtml(student.nickname || student.display_name)} · ${escapeHtml(courseName)}</option>`;
  }).join("");

  if (teacherStudentFocusSelect) {
    teacherStudentFocusSelect.innerHTML = teacherStudents.map(function (student) {
      const courseName = student.academic_course || (student.courses ? student.courses.name : "Curso sin asignar");
      const centerName = student.school_center || "Centro sin asignar";
      return `<option value="${student.id}">${escapeHtml(student.nickname || student.display_name)} · ${escapeHtml(centerName)} · ${escapeHtml(courseName)}</option>`;
    }).join("");
  }
  renderTeacherTargetFilters();
}

function createStudentCheckboxes(students) {
  if (!students || students.length === 0) {
    return `<p class="empty-state">Todavía no hay alumnado disponible.</p>`;
  }

  return students.map(function (student) {
    const courseName = student.academic_course || (student.courses ? student.courses.name : "Curso sin asignar");
    const centerName = student.school_center || "Centro sin asignar";
    const studyType = student.educational_stage || student.study_type || "";

    return `
      <label class="checkbox-card" data-center="${escapeAttribute(centerName)}" data-study-type="${escapeAttribute(studyType)}" data-course="${escapeAttribute(courseName)}">
        <input type="checkbox" value="${student.id}" />
        <span>
          ${escapeHtml(student.nickname || student.display_name)}
          <small>${escapeHtml(centerName)} · ${escapeHtml(courseName)} · ${escapeHtml(student.username)}</small>
        </span>
      </label>
    `;
  }).join("");
}


function renderTeacherPostTemplates() {
  if (!postTemplateSelect) {
    return;
  }

  postTemplateSelect.innerHTML = `<option value="">Sin plantilla</option>` + postTemplates.map(function (template) {
    return `<option value="${template.id}">${escapeHtml(template.name)}</option>`;
  }).join("");
}

function renderTeacherGroups() {
  if (!teacherGroupsList) {
    return;
  }

  if (!studentGroups || studentGroups.length === 0) {
    teacherGroupsList.innerHTML = `<p class="empty-state">No hay grupos creados todavía.</p>`;
  } else {
    teacherGroupsList.innerHTML = studentGroups.map(function (group) {
      return `
        <label class="checkbox-card">
          <input type="checkbox" value="${group.id}" />
          <span>
            ${escapeHtml(group.name)}
            <small>${group.memberIds.length} alumno(s)</small>
          </span>
        </label>
      `;
    }).join("");
  }

  if (teacherGroupSummary) {
    teacherGroupSummary.innerHTML = studentGroups.map(function (group) {
      const names = group.memberIds
        .map(id => teacherStudents.find(student => student.id === id))
        .filter(Boolean)
        .map(student => student.nickname || student.display_name)
        .slice(0, 8);
      return `
        <article class="group-summary-card">
          <h3>${escapeHtml(group.name)}</h3>
          <p class="activity-meta">${group.memberIds.length} alumno(s)</p>
          <p>${escapeHtml(names.join(", ") || "Sin miembros asignados.")}${group.memberIds.length > 8 ? "..." : ""}</p>
        </article>
      `;
    }).join("") || `<div class="empty-panel"><p>No hay grupos creados.</p></div>`;
  }
}

function renderTeacherOverview() {
  if (teacherMetricStudents) teacherMetricStudents.textContent = String(teacherStudents.length);
  if (teacherMetricPosts) teacherMetricPosts.textContent = String(teacherPosts.length);
  if (teacherMetricGroups) teacherMetricGroups.textContent = String(studentGroups.length);
  if (teacherMetricUnread) teacherMetricUnread.textContent = String(messages.filter(message => message.message_type === "mail" && message.recipient_id === currentUserId && !message.is_read).length);
}


function renderTeacherStudentHub() {
  if (!teacherStudentFocusBody || !currentProfile || currentProfile.role !== "teacher") {
    return;
  }

  if (!teacherStudents || teacherStudents.length === 0) {
    teacherStudentFocusBody.innerHTML = `<div class="empty-panel"><p>${escapeHtml(t("noRelatedItems"))}</p></div>`;
    return;
  }

  teacherStudentFocusBody.innerHTML = teacherStudents.map(function (student) {
    const assignedPostIds = new Set(teacherPostAssignments.filter(item => item.profile_id === student.id).map(item => item.post_id));
    const completionSet = new Set(teacherPostCompletions.filter(item => item.profile_id === student.id).map(item => item.post_id));
    const pending = teacherPosts.filter(post => assignedPostIds.has(post.id) && !["announcement", "notes"].includes(post.post_type) && !completionSet.has(post.id)).length;
    const needs = teacherDifficultSubjects.filter(item => item.profile_id === student.id).length;
    const lows = teacherGradeRecords.filter(item => item.profile_id === student.id && parseGradeNumber(item.grade_value) !== null && parseGradeNumber(item.grade_value) < 5).length;
    return `
      <button type="button" class="teacher-student-card" data-student-id="${student.id}">
        <div class="teacher-student-card-head">
          <div class="teacher-student-avatar">${studentAvatarHtml(student)}</div>
          <div>
            <h3>${escapeHtml(student.nickname || student.display_name)}</h3>
            <small>${escapeHtml(student.username || "")}</small>
          </div>
        </div>
        <div class="student-card-facts">
          <span>${escapeHtml(formatStudentSchoolLine(student))}</span>
          <span>${escapeHtml(t("pendingTasks"))}: ${pending}</span>
          <span>${escapeHtml(t("myDifficultSubjects"))}: ${needs}</span>
          <span>${escapeHtml(t("lowGradeAlerts"))}: ${lows}</span>
        </div>
      </button>
    `;
  }).join("");

  teacherStudentFocusBody.querySelectorAll(".teacher-student-card").forEach(function (card) {
    card.addEventListener("click", function () {
      openTeacherStudentDetailWindow(card.dataset.studentId);
    });
  });
}

function studentAvatarHtml(student) {
  const cached = studentAvatarUrlCache.get(student.id);
  if (cached) {
    return `<img src="${escapeAttribute(cached)}" alt="${escapeAttribute(t("profileImageAlt"))}" />`;
  }
  if (student.avatar_type === "emoji" && student.avatar_value) {
    return escapeHtml(student.avatar_value);
  }
  return escapeHtml(getInitials(student.nickname || student.display_name || student.username));
}

async function preloadTeacherStudentAvatars() {
  studentAvatarUrlCache = new Map();
  for (const student of teacherStudents) {
    if (student.avatar_type === "upload" && student.avatar_file_path) {
      const { data } = await supabaseClient.storage.from(AVATAR_BUCKET).createSignedUrl(student.avatar_file_path, 3600);
      if (data && data.signedUrl) {
        studentAvatarUrlCache.set(student.id, data.signedUrl);
      }
    }
  }
}

function openTeacherStudentDetailWindow(studentId) {
  const student = teacherStudents.find(item => item.id === studentId);
  if (!student || !panelWindowModal || !panelWindowBody || !panelWindowTitle) return;

  closeFloatingPanelWindow(true);
  closeTeacherPanelWindow(true);
  panelWindowTitle.textContent = t("studentDetail");
  const assignedPostIds = new Set(teacherPostAssignments.filter(item => item.profile_id === studentId).map(item => item.post_id));
  const assignedEventIds = new Set(teacherEventAssignments.filter(item => item.profile_id === studentId).map(item => item.event_id));
  const completionSet = new Set(teacherPostCompletions.filter(item => item.profile_id === studentId).map(item => item.post_id));
  const posts = teacherPosts.filter(post => assignedPostIds.has(post.id)).slice(0, 8);
  const pending = posts.filter(post => !["announcement", "notes"].includes(post.post_type) && !completionSet.has(post.id));
  const events = teacherEvents.filter(event => event.created_by === studentId || assignedEventIds.has(event.id)).slice(0, 8);
  const relatedMessages = messages.filter(message => message.sender_id === studentId || message.recipient_id === studentId).slice(0, 8);
  const studentNeeds = teacherDifficultSubjects.filter(item => item.profile_id === studentId).slice(0, 8);
  const studentGrades = teacherGradeRecords.filter(item => item.profile_id === studentId).slice(0, 8);
  const movements = recentActivity.filter(item => item.profile_id === studentId).slice(0, 10);

  panelWindowBody.innerHTML = `
    <div class="student-focus-head">
      <div class="teacher-student-avatar">${studentAvatarHtml(student)}</div>
      <div>
        <h3>${escapeHtml(student.nickname || student.display_name)}</h3>
        <p class="activity-meta">${escapeHtml(formatStudentSchoolLine(student))} · ${escapeHtml(student.username || "")}</p>
      </div>
      <button type="button" class="secondary-button" id="detailOpenChatButton">${escapeHtml(t("openChatWithStudent"))}</button>
    </div>
    <div class="student-detail-grid">
      <article class="student-detail-card"><h4>${escapeHtml(t("schoolAndCourse"))}</h4>${renderInlineSchoolProfileForm(student, "detailSchool")}</article>
      <article class="student-detail-card"><h4>${escapeHtml(t("pendingTasks"))}</h4>${pending.length ? pending.map(post => `<p><strong>${escapeHtml(post.title)}</strong><br><small>${escapeHtml(post.subjects ? post.subjects.name : t("subject"))}</small></p>`).join("") : `<p>${escapeHtml(t("noRelatedItems"))}</p>`}</article>
      <article class="student-detail-card"><h4>${escapeHtml(t("assignedWork"))}</h4>${posts.length ? posts.map(post => `<p><strong>${escapeHtml(post.title)}</strong><br><small>${escapeHtml(readablePostType(post.post_type))}</small></p>`).join("") : `<p>${escapeHtml(t("noRelatedItems"))}</p>`}</article>
      <article class="student-detail-card"><h4>${escapeHtml(t("relatedEvents"))}</h4>${events.length ? events.map(event => `<p><strong>${escapeHtml(event.title)}</strong><br><small>${escapeHtml(formatDateTime(event.starts_at))}</small></p>`).join("") : `<p>${escapeHtml(t("noRelatedItems"))}</p>`}</article>
      <article class="student-detail-card"><h4>${escapeHtml(t("teacherStudentNeeds"))}</h4>${studentNeeds.length ? studentNeeds.map(item => `<p><strong>${escapeHtml(item.subjects ? item.subjects.name : t("subject"))}</strong><br><small>${escapeHtml(item.note || "")}</small></p>`).join("") : `<p>${escapeHtml(t("noStudentNeeds"))}</p>`}</article>
      <article class="student-detail-card"><h4>${escapeHtml(t("teacherStudentGrades"))}</h4>${studentGrades.length ? studentGrades.map(item => `<p><strong>${escapeHtml(item.subjects ? item.subjects.name : t("subject"))}</strong>: ${escapeHtml(item.grade_value)}<br><small>${escapeHtml(readableGradeType(item.grade_type))} · ${escapeHtml(item.grade_date || formatDateKey(new Date(item.created_at)))}</small></p>`).join("") : `<p>${escapeHtml(t("noStudentGrades"))}</p>`}</article>
      <article class="student-detail-card"><h4>${escapeHtml(t("relatedMessages"))}</h4>${relatedMessages.length ? relatedMessages.map(message => `<p><strong>${escapeHtml(getProfileName(message.sender_id))}</strong>: ${escapeHtml(shorten(message.body || message.subject, 90))}<br><small>${escapeHtml(formatDateTime(message.created_at))}</small></p>`).join("") : `<p>${escapeHtml(t("noRelatedItems"))}</p>`}</article>
      <article class="student-detail-card"><h4>${escapeHtml(t("latestMovements"))}</h4>${movements.length ? movements.map(item => `<p><strong>${escapeHtml(readableActivityType(item.action_type))}</strong><br><small>${escapeHtml(formatDateTime(item.created_at))}</small></p>`).join("") : `<p>${escapeHtml(t("noActivity"))}</p>`}</article>
    </div>
  `;
  panelWindowModal.classList.remove("hidden");

  const chatButton = document.getElementById("detailOpenChatButton");
  if (chatButton) {
    chatButton.addEventListener("click", function () {
      if (!openChatIds.includes(studentId)) openChatIds.push(studentId);
      activeChatId = studentId;
      renderChatTabs();
      renderChat();
      openFloatingPanelWindow("messages");
    });
  }
  const detailForm = document.getElementById("detailSchoolForm");
  if (detailForm) {
    detailForm.addEventListener("submit", async function (event) {
      event.preventDefault();
      await saveTeacherStudentSchoolProfile(studentId, "detailSchool");
      openTeacherStudentDetailWindow(studentId);
    });
  }
}

function renderRecentActivity() {
  if (!recentActivityList) {
    return;
  }

  if (!recentActivity || recentActivity.length === 0) {
    recentActivityList.innerHTML = `<div class="empty-panel"><p>${escapeHtml(t("noActivity"))}</p></div>`;
    return;
  }

  recentActivityList.innerHTML = recentActivity.map(function (item) {
    const profileName = item.profiles ? (item.profiles.nickname || item.profiles.display_name || item.profiles.username) : t("user");
    const postTitle = item.posts ? item.posts.title : "";
    const subjectName = item.subjects ? item.subjects.name : "";
    return `
      <article class="activity-card">
        <h3>${escapeHtml(profileName)} · ${escapeHtml(readableActivityType(item.action_type))}</h3>
        <p class="activity-meta">${escapeHtml(formatDateTime(item.created_at))}</p>
        <p>${postTitle ? `${escapeHtml(t("postField"))}: ${escapeHtml(postTitle)}` : ""}${subjectName ? ` · ${escapeHtml(t("subjectField"))}: ${escapeHtml(subjectName)}` : ""}</p>
      </article>
    `;
  }).join("");
}

function renderTeacherChatOverview() {
  if (!teacherChatOverview || !currentProfile || currentProfile.role !== "teacher") {
    return;
  }

  const chatMessagesOnly = messages
    .filter(message => ["chat", "nudge"].includes(message.message_type))
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

  if (chatMessagesOnly.length === 0) {
    teacherChatOverview.innerHTML = `<div class="empty-panel"><p>${escapeHtml(t("noActiveChats"))}</p></div>`;
    return;
  }

  const conversations = new Map();

  chatMessagesOnly.forEach(function (message) {
    const otherId = message.sender_id === currentUserId ? message.recipient_id : message.sender_id;
    const key = [message.sender_id, message.recipient_id].sort().join("|");
    if (!conversations.has(key)) {
      conversations.set(key, { otherId, messages: [] });
    }
    conversations.get(key).messages.push(message);
  });

  teacherChatOverview.innerHTML = Array.from(conversations.values()).slice(0, 12).map(function (conversation) {
    const latest = conversation.messages[0];
    return `
      <article class="chat-overview-card">
        <h3><span class="status-dot ${presenceClass(conversation.otherId)}"></span>${escapeHtml(getProfileName(conversation.otherId))}</h3>
        <p class="chat-meta">${escapeHtml(t("lastMessage"))}: ${escapeHtml(formatDateTime(latest.created_at))}</p>
        <button type="button" class="secondary-button open-supervised-chat-button" data-contact-id="${conversation.otherId}">${escapeHtml(t("openChatWithStudent"))}</button>
        <div class="chat-overview-messages">
          ${conversation.messages.slice(0, 6).reverse().map(function (message) {
            return `
              <div class="chat-overview-line">
                <strong>${escapeHtml(getProfileName(message.sender_id))}:</strong>
                ${escapeHtml(message.message_type === "nudge" ? t("nudge") : message.body)}
              </div>
            `;
          }).join("")}
        </div>
      </article>
    `;
  }).join("");

  teacherChatOverview.querySelectorAll(".open-supervised-chat-button").forEach(function (button) {
    button.addEventListener("click", function () {
      const id = button.dataset.contactId;
      if (!openChatIds.includes(id)) {
        openChatIds.push(id);
      }
      activeChatId = id;
      renderChatTabs();
      renderChat();
      openFloatingPanelWindow("messages");
    });
  });
}

function readableActivityType(type) {
  const labels = {
    login: t("activityLogin"),
    post_view: t("activityPostView"),
    calendar_event: t("activityCalendarEvent"),
    interactive_test_completed: t("activityTestCompleted"),
    message_sent: t("activityMessageSent")
  };

  return labels[type] || type || t("activity");
}

function renderTeacherBadges() {
  teacherBadge.innerHTML = teacherBadges.map(function (badge) {
    return `<option value="${badge.id}">${escapeHtml(badge.emoji)} ${escapeHtml(badge.name)}</option>`;
  }).join("");
}


async function startEditingPost(postId) {
  const post = teacherPosts.find(item => item.id === postId);
  if (!post) {
    return;
  }

  editingPostId = post.id;
  editingPostOriginalContent = post.content || {};

  openTeacherPanelWindow("teacherPostToolPanel", "editPost");

  if (teacherSubject) {
    teacherSubject.value = post.subject_id || teacherSubject.value;
  }

  if (teacherUnitMode && teacherUnitExisting && teacherUnitNew) {
    if (post.unit_id) {
      teacherUnitMode.value = "existing";
      await updateTeacherUnitControls();
      teacherUnitExisting.value = post.unit_id;
    } else {
      teacherUnitMode.value = "none";
      teacherUnitNew.value = "";
      await updateTeacherUnitControls();
    }
  }

  if (teacherPostType) teacherPostType.value = post.post_type || "announcement";
  if (teacherTitle) teacherTitle.value = post.title || "";
  if (teacherBody) teacherBody.value = post.body || "";
  if (teacherKeyPoints) teacherKeyPoints.value = Array.isArray(editingPostOriginalContent.key_points) ? editingPostOriginalContent.key_points.join("\n") : "";
  if (teacherUrl) teacherUrl.value = editingPostOriginalContent.url || "";
  if (teacherFile) teacherFile.value = "";
  if (teacherFileEditHint) teacherFileEditHint.classList.remove("hidden");
  if (teacherPostSubmitButton) teacherPostSubmitButton.textContent = t("savePostChanges");
  if (cancelPostEditButton) cancelPostEditButton.classList.remove("hidden");

  const assignedIds = new Set(teacherPostAssignments.filter(item => item.post_id === post.id).map(item => item.profile_id));
  if (teacherGroupsList) {
    teacherGroupsList.querySelectorAll("input[type='checkbox']").forEach(input => { input.checked = false; });
  }
  if (teacherStudentsList) {
    teacherStudentsList.querySelectorAll("input[type='checkbox']").forEach(function (input) {
      input.checked = assignedIds.has(input.value);
    });
  }

  showMessage(teacherPostMessage, "Editando publicación. Guarda los cambios cuando termines.", "success");
}

function resetPostEditMode() {
  editingPostId = null;
  editingPostOriginalContent = null;
  if (teacherFileEditHint) teacherFileEditHint.classList.add("hidden");
  if (teacherPostSubmitButton) teacherPostSubmitButton.textContent = t("publishAction");
  if (cancelPostEditButton) cancelPostEditButton.classList.add("hidden");
  if (teacherGroupsList) {
    teacherGroupsList.querySelectorAll("input[type='checkbox']").forEach(input => { input.checked = false; });
  }
}

async function updateExistingPost(postId, payload, selectedStudentIds, newFileData) {
  const previousContent = editingPostOriginalContent || {};

  const { error: postError } = await supabaseClient
    .from("posts")
    .update(payload)
    .eq("id", postId);

  if (postError) {
    console.error(postError);
    showMessage(teacherPostMessage, t("postUpdateError"), "warning");
    return false;
  }

  const { error: deleteAssignmentsError } = await supabaseClient
    .from("post_assignments")
    .delete()
    .eq("post_id", postId);

  if (deleteAssignmentsError) {
    console.error(deleteAssignmentsError);
    showMessage(teacherPostMessage, "La publicación se actualizó, pero no se pudieron actualizar los destinatarios.", "warning");
    return false;
  }

  if (selectedStudentIds.length > 0) {
    const assignments = selectedStudentIds.map(function (studentId) {
      return { post_id: postId, profile_id: studentId };
    });

    const { error: assignmentError } = await supabaseClient
      .from("post_assignments")
      .insert(assignments);

    if (assignmentError) {
      console.error(assignmentError);
      showMessage(teacherPostMessage, "La publicación se actualizó, pero no se pudo reasignar.", "warning");
      return false;
    }
  }

  if (newFileData && newFileData.filePath && previousContent.file_path && previousContent.file_path !== newFileData.filePath) {
    await supabaseClient.storage.from(STORAGE_BUCKET).remove([previousContent.file_path]);
  }

  teacherPostAssignments = await fetchPostAssignments();
  teacherPosts = await fetchAllPosts();
  renderTeacherOverview();
  renderTeacherPosts();
  return true;
}

function renderTeacherPosts() {
  renderPostList(teacherPosts, teacherPostsList, t("noPostsCreated"), true);
}


function getTeacherSelectedStudentIds() {
  const directIds = getCheckedStudentIds(teacherStudentsList);
  const groupIds = teacherGroupsList
    ? Array.from(teacherGroupsList.querySelectorAll("input[type='checkbox']:checked")).map(input => input.value)
    : [];

  const groupMemberIds = studentGroups
    .filter(group => groupIds.includes(group.id))
    .flatMap(group => group.memberIds);

  return Array.from(new Set([...directIds, ...groupMemberIds]));
}

function applySelectedGroupsToStudents() {
  const selectedIds = getTeacherSelectedStudentIds();
  teacherStudentsList.querySelectorAll("input[type='checkbox']").forEach(function (input) {
    input.checked = selectedIds.includes(input.value);
  });
}


if (postTemplateSelect) {
  postTemplateSelect.addEventListener("change", function () {
    const template = postTemplates.find(item => item.id === postTemplateSelect.value);
    if (!template) {
      return;
    }
    teacherPostType.value = template.post_type || "announcement";
    teacherTitle.value = template.title || template.name || "";
    teacherBody.value = template.body || "";
    teacherKeyPoints.value = Array.isArray(template.key_points) ? template.key_points.join("\n") : "";
    teacherUrl.value = template.default_url || "";
  });
}

if (savePostTemplateButton) {
  savePostTemplateButton.addEventListener("click", async function () {
    const name = prompt("Nombre de la plantilla:", teacherTitle.value.trim() || "Nueva plantilla");
    if (!name) {
      return;
    }

    const keyPoints = teacherKeyPoints.value
      .split("\n")
      .map(line => line.trim())
      .filter(Boolean);

    const { error } = await supabaseClient
      .from("post_templates")
      .insert({
        name: name.trim(),
        post_type: teacherPostType.value,
        title: teacherTitle.value.trim(),
        body: teacherBody.value.trim(),
        key_points: keyPoints,
        default_url: teacherUrl.value.trim(),
        created_by: currentUserId
      });

    if (error) {
      console.error(error);
      showMessage(teacherPostMessage, "No se pudo guardar la plantilla.", "warning");
      return;
    }

    postTemplates = await fetchPostTemplates();
    renderTeacherPostTemplates();
    showMessage(teacherPostMessage, "Plantilla guardada.", "success");
  });
}

if (teacherGroupsList) {
  teacherGroupsList.addEventListener("change", applySelectedGroupsToStudents);
}

if (selectAllStudentsButton) {
  selectAllStudentsButton.addEventListener("click", function () {
    teacherStudentsList.querySelectorAll("input[type='checkbox']").forEach(input => { input.checked = true; });
  });
}

if (clearAllStudentsButton) {
  clearAllStudentsButton.addEventListener("click", function () {
    if (teacherGroupsList) {
      teacherGroupsList.querySelectorAll("input[type='checkbox']").forEach(input => { input.checked = false; });
    }
    teacherStudentsList.querySelectorAll("input[type='checkbox']").forEach(input => { input.checked = false; });
  });
}

if (applyStudentFilterButton) {
  applyStudentFilterButton.addEventListener("click", applyTeacherStudentFilter);
}

if (clearStudentFilterButton) {
  clearStudentFilterButton.addEventListener("click", function () {
    if (teacherStudentsList) {
      teacherStudentsList.querySelectorAll("input[type='checkbox']").forEach(input => { input.checked = false; });
    }
  });
}

if (studentSchoolCard) {
  studentSchoolCard.addEventListener("click", function () {
    renderStudentSchoolPanel();
    openFloatingPanelWindow("school");
  });
  studentSchoolCard.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      renderStudentSchoolPanel();
      openFloatingPanelWindow("school");
    }
  });
}

if (studentSchoolForm) {
  studentSchoolForm.addEventListener("submit", async function (event) {
    event.preventDefault();
    await saveCurrentStudentSchoolProfile();
  });
}


if (teacherAddStudentForm) {
  teacherAddStudentForm.addEventListener("submit", async function (event) {
    event.preventDefault();
    await createStudentFromTeacher();
  });
}

if (selectAllAdminStudentsButton) {
  selectAllAdminStudentsButton.addEventListener("click", function () {
    if (!teacherBulkStudentList) return;
    teacherBulkStudentList.querySelectorAll("input[type='checkbox']").forEach(input => input.checked = true);
  });
}

if (clearAdminStudentsButton) {
  clearAdminStudentsButton.addEventListener("click", function () {
    if (!teacherBulkStudentList) return;
    teacherBulkStudentList.querySelectorAll("input[type='checkbox']").forEach(input => input.checked = false);
  });
}

if (archiveSelectedStudentsButton) {
  archiveSelectedStudentsButton.addEventListener("click", async function () {
    const ids = getAdminSelectedStudentIds();
    if (!ids.length) {
      showMessage(teacherArchiveMessage, t("selectStudentsFirst"), "warning");
      return;
    }
    if (!confirm(t("archiveStudentsConfirm"))) return;
    await archiveStudents(ids, teacherArchiveMessage);
  });
}

if (promoteStudentsButton) {
  promoteStudentsButton.addEventListener("click", async function () {
    if (!confirm(t("promoteConfirm"))) {
      return;
    }
    await promoteAllStudentsOneCourse();
  });
}

if (cancelPostEditButton) {
  cancelPostEditButton.addEventListener("click", function () {
    teacherPostForm.reset();
    resetPostEditMode();
    updateTeacherUnitControls();
    showMessage(teacherPostMessage, "Edición cancelada.", "success");
  });
}

teacherPostForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  const selectedStudentIds = getTeacherSelectedStudentIds();

  if (selectedStudentIds.length === 0) {
    showMessage(teacherPostMessage, "Selecciona al menos un alumno o alumna.", "warning");
    return;
  }

  const postType = teacherPostType.value;
  const url = teacherUrl.value.trim();

  if (["interactive_test", "video_class", "video", "game"].includes(postType) && !url) {
    showMessage(teacherPostMessage, "Para este tipo de publicación debes pegar un enlace.", "warning");
    return;
  }

  const unitId = await resolveTeacherUnitId();

  if (unitId === false) {
    return;
  }

  const selectedFile = teacherFile.files[0] || null;
  const fileData = await uploadOptionalMaterialFile(selectedFile, teacherPostMessage);

  if (!fileData.ok) {
    return;
  }

  const keyPoints = teacherKeyPoints.value
    .split("\n")
    .map(line => line.trim())
    .filter(Boolean);

  const previousContent = editingPostOriginalContent || {};
  const content = {
    key_points: keyPoints,
    url,
    file_path: fileData.filePath || previousContent.file_path || "",
    file_name: fileData.fileName || previousContent.file_name || "",
    file_mime_type: fileData.fileMimeType || previousContent.file_mime_type || ""
  };

  const postPayload = {
    subject_id: teacherSubject.value,
    unit_id: unitId,
    title: teacherTitle.value.trim(),
    body: teacherBody.value.trim(),
    post_type: postType,
    content,
    is_published: true
  };

  if (editingPostId) {
    const updated = await updateExistingPost(editingPostId, postPayload, selectedStudentIds, fileData);
    if (!updated) {
      return;
    }

    teacherPostForm.reset();
    resetPostEditMode();
    updateTeacherUnitControls();
    showMessage(teacherPostMessage, t("postUpdated"), "success");
    return;
  }

  const { data: createdPost, error: postError } = await supabaseClient
    .from("posts")
    .insert({
      ...postPayload,
      created_by: currentUserId
    })
    .select("id")
    .single();

  if (postError) {
    console.error(postError);
    showMessage(teacherPostMessage, "No se pudo crear la publicación.", "warning");
    return;
  }

  const assignments = selectedStudentIds.map(function (studentId) {
    return {
      post_id: createdPost.id,
      profile_id: studentId
    };
  });

  const { error: assignmentError } = await supabaseClient
    .from("post_assignments")
    .insert(assignments);

  if (assignmentError) {
    console.error(assignmentError);
    showMessage(teacherPostMessage, "La publicación se creó, pero no se pudo asignar.", "warning");
    return;
  }

  await Promise.all(selectedStudentIds.map(function (studentId) {
    const notificationType = ["worksheet", "interactive_test", "challenge", "game"].includes(postType) ? "new_task" : (MATERIAL_POST_TYPES.includes(postType) ? "material" : "new_post");
    return createInternalNotification(studentId, teacherTitle.value.trim(), "Tienes una nueva publicación disponible en Tribeca Aula.", notificationType, "feed");
  }));

  teacherPostForm.reset();
  resetPostEditMode();
  updateTeacherUnitControls();
  teacherUnits = await fetchUnitsForSubjects(teacherSubjects.map(subject => subject.id));
  teacherPosts = await fetchAllPosts();
  renderTeacherPosts();

  showMessage(teacherPostMessage, "Publicación creada y asignada correctamente.", "success");
});

async function uploadOptionalMaterialFile(file, messageElement) {
  if (!file) {
    return { ok: true, filePath: "", fileName: "", fileMimeType: "" };
  }

  const validationMessage = validateMaterialFile(file);

  if (validationMessage) {
    showMessage(messageElement, validationMessage, "warning");
    return { ok: false };
  }

  const safeName = sanitizeFileName(file.name);
  const filePath = `materials/${makeId()}-${safeName}`;

  const { error } = await supabaseClient
    .storage
    .from(STORAGE_BUCKET)
    .upload(filePath, file, {
      cacheControl: "3600",
      upsert: false,
      contentType: file.type
    });

  if (error) {
    console.error(error);
    showMessage(messageElement, "No se pudo subir el archivo.", "warning");
    return { ok: false };
  }

  return {
    ok: true,
    filePath,
    fileName: file.name,
    fileMimeType: file.type
  };
}
subjectCoverForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  const file = coverImageFile.files[0];

  if (!file) {
    showMessage(coverMessage, "Selecciona una imagen.", "warning");
    return;
  }

  if (!["image/png", "image/jpeg", "image/webp"].includes(file.type)) {
    showMessage(coverMessage, "La imagen debe ser PNG, JPG, JPEG o WEBP.", "warning");
    return;
  }

  const selectedSubject = teacherSubjects.find(subject => subject.id === coverSubjectSelect.value);
  const safeName = sanitizeFileName(file.name);
  const filePath = `subject-covers/${coverSubjectSelect.value}-${makeId()}-${safeName}`;

  const { error: uploadError } = await supabaseClient
    .storage
    .from(STORAGE_BUCKET)
    .upload(filePath, file, {
      cacheControl: "3600",
      upsert: false,
      contentType: file.type
    });

  if (uploadError) {
    console.error(uploadError);
    showMessage(coverMessage, "No se pudo subir la imagen.", "warning");
    return;
  }

  const { error: updateError } = await supabaseClient
    .from("subjects")
    .update({ cover_image_path: filePath })
    .eq("id", coverSubjectSelect.value);

  if (updateError) {
    console.error(updateError);
    showMessage(coverMessage, "La imagen subió, pero no se pudo asignar a la materia.", "warning");
    return;
  }

  if (selectedSubject && selectedSubject.cover_image_path) {
    await supabaseClient.storage.from(STORAGE_BUCKET).remove([selectedSubject.cover_image_path]);
  }

  coverImageFile.value = "";
  teacherSubjects = await fetchAllSubjects();
  teacherSubjects = await addSignedCoverUrls(teacherSubjects);
  renderTeacherSubjects();

  showMessage(coverMessage, "Imagen de asignatura actualizada.", "success");
});

deleteCoverButton.addEventListener("click", async function () {
  const selectedSubject = teacherSubjects.find(subject => subject.id === coverSubjectSelect.value);

  if (!selectedSubject || !selectedSubject.cover_image_path) {
    showMessage(coverMessage, "Esta asignatura no tiene imagen personalizada.", "warning");
    return;
  }

  await supabaseClient.storage.from(STORAGE_BUCKET).remove([selectedSubject.cover_image_path]);

  const { error } = await supabaseClient
    .from("subjects")
    .update({ cover_image_path: null })
    .eq("id", selectedSubject.id);

  if (error) {
    console.error(error);
    showMessage(coverMessage, "No se pudo borrar la imagen.", "warning");
    return;
  }

  teacherSubjects = await fetchAllSubjects();
  teacherSubjects = await addSignedCoverUrls(teacherSubjects);
  renderTeacherSubjects();

  showMessage(coverMessage, "Imagen borrada.", "success");
});

teacherEventForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  let selectedStudentIds = getCheckedStudentIds(teacherEventStudentsList);
  if (selectedStudentIds.length === 0) {
    selectedStudentIds = teacherStudents.map(student => student.id);
  }

  if (selectedStudentIds.length === 0) {
    showMessage(teacherEventMessage, "Todavía no hay alumnado disponible.", "warning");
    return;
  }

  const { data: createdEvent, error: eventError } = await supabaseClient
    .from("calendar_events")
    .insert({
      subject_id: teacherEventSubject.value,
      created_by: currentUserId,
      title: teacherEventTitle.value.trim(),
      description: teacherEventDescription.value.trim(),
      event_type: teacherEventType.value,
      starts_at: new Date(teacherEventDate.value).toISOString(),
      is_published: true
    })
    .select("id")
    .single();

  if (eventError) {
    console.error(eventError);
    showMessage(teacherEventMessage, "No se pudo crear la fecha.", "warning");
    return;
  }

  const assignments = selectedStudentIds.map(function (studentId) {
    return {
      event_id: createdEvent.id,
      profile_id: studentId
    };
  });

  const { error: assignmentError } = await supabaseClient
    .from("calendar_event_assignments")
    .insert(assignments);

  if (assignmentError) {
    console.error(assignmentError);
    showMessage(teacherEventMessage, "La fecha se creó, pero no se pudo asignar.", "warning");
    return;
  }

  await Promise.all(selectedStudentIds.map(function (studentId) {
    const type = teacherEventType.value === "exam" ? "exam" : "event";
    return createInternalNotification(studentId, teacherEventTitle.value.trim(), "Tienes una nueva fecha en el calendario de Tribeca Aula.", type, "calendar");
  }));

  teacherEventForm.reset();
  teacherEvents = await fetchAllEvents();
  renderTeacherCalendar();
  renderRightRailCalendar();

  showMessage(teacherEventMessage, "Fecha creada y asignada correctamente.", "success");
});

teacherBadgeForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  const { error } = await supabaseClient
    .from("badge_awards")
    .insert({
      profile_id: teacherBadgeStudent.value,
      badge_id: teacherBadge.value,
      awarded_by: currentUserId,
      source: "manual",
      note: teacherBadgeNote.value.trim()
    });

  if (error) {
    console.error(error);
    showMessage(teacherBadgeMessage, "No se pudo asignar la insignia.", "warning");
    return;
  }

  const selectedBadge = teacherBadges.find(item => item.id === teacherBadge.value);
  await createInternalNotification(teacherBadgeStudent.value, selectedBadge ? `${selectedBadge.emoji} ${selectedBadge.name}` : t("myBadges"), "Has conseguido un nuevo logro en Tribeca Aula.", "achievement", "badges");
  teacherBadgeForm.reset();
  showMessage(teacherBadgeMessage, "Insignia asignada correctamente.", "success");
});

async function loadCommunication() {
  contacts = await fetchContacts();
  messages = await fetchMessages();
  presence = await fetchPresence();
  unreadCount = countUnreadMail();

  openChatIds = [];
  activeChatId = "";

  renderContactSelectors();
  setMessageView(currentMessageView || "inbox");
  renderChatTabs();
  renderChat();
  setupRealtimeSubscriptions();
  updateUnreadBadges();

  previousChatMessageIds = new Set(messages.map(message => message.id));
  previousOnlineIds = new Set(presence.filter(item => isPresenceActive(item)).map(item => item.profile_id));
  communicationInitialized = true;
}

async function fetchContacts() {
  if (currentProfile.role === "teacher") {
    return teacherStudents.map(student => ({
      id: student.id,
      name: student.nickname || student.display_name,
      role: "student"
    }));
  }

  const { data, error } = await supabaseClient
    .from("profiles")
    .select("id, display_name, nickname, role")
    .eq("role", "teacher");

  if (error) {
    console.error("Error cargando contactos:", error);
    return [];
  }

  return (data || []).map(item => ({
    id: item.id,
    name: item.nickname || item.display_name,
    role: item.role
  }));
}

async function fetchMessages() {
  const { data, error } = await supabaseClient
    .from("messages")
    .select("id, sender_id, recipient_id, message_type, subject, body, is_read, reply_to, reaction_emoji, sender_deleted_at, recipient_deleted_at, created_at")
    .order("created_at", { ascending: false })
    .limit(180);

  if (error) {
    console.error("Error cargando mensajes:", error);
    return [];
  }

  return data || [];
}

async function fetchPresence() {
  const { data, error } = await supabaseClient
    .from("user_presence")
    .select("profile_id, status, last_seen");

  if (error) {
    console.error("Error cargando presencia:", error);
    return [];
  }

  return data || [];
}

function countUnreadMail() {
  return messages.filter(message =>
    message.message_type === "mail"
    && message.recipient_id === currentUserId
    && !message.recipient_deleted_at
    && !message.is_read
  ).length;
}

function updateUnreadBadges() {
  const badges = [quickUnreadBadge, messageUnreadBadge];

  badges.forEach(function (badge) {
    if (!badge) {
      return;
    }

    if (unreadCount > 0) {
      badge.textContent = String(unreadCount);
      badge.classList.remove("hidden");
    } else {
      badge.textContent = "0";
      badge.classList.add("hidden");
    }
  });

  if (messageUnreadNotice) {
    if (unreadCount > 0) {
      messageUnreadNotice.textContent = unreadCount === 1
        ? t("unreadOne")
        : t("unreadMany", { count: unreadCount });
      messageUnreadNotice.classList.remove("hidden");
    } else {
      messageUnreadNotice.textContent = "";
      messageUnreadNotice.classList.add("hidden");
    }
  }

  [openUnreadMessagesButton, markMessagesReadTopButton].forEach(function (button) {
    if (!button) {
      return;
    }
    button.classList.toggle("hidden", unreadCount === 0);
  });
}

function renderContactSelectors() {
  const options = contacts.map(function (contact) {
    return `<option value="${contact.id}">${presenceLabel(contact.id)} ${escapeHtml(contact.name)}</option>`;
  }).join("");

  messageRecipient.innerHTML = options;
  chatContact.innerHTML = options;
}

function setMessageView(view) {
  currentMessageView = view;
  openedMailMessageId = "";

  [messageInboxTab, messageSentTab, messageComposeTab].forEach(function (button) {
    if (button) {
      button.classList.remove("active");
    }
  });

  if (view === "inbox" && messageInboxTab) messageInboxTab.classList.add("active");
  if (view === "sent" && messageSentTab) messageSentTab.classList.add("active");
  if (view === "compose" && messageComposeTab) messageComposeTab.classList.add("active");

  if (messageForm) {
    messageForm.classList.toggle("hidden", view !== "compose");
  }

  if (markMessagesReadButton) {
    markMessagesReadButton.classList.add("hidden");
  }

  renderMessages();
}

function renderMessages() {
  const inboxMessages = messages.filter(message =>
    message.message_type === "mail"
    && message.recipient_id === currentUserId
    && !message.recipient_deleted_at
  );

  const sentMessages = messages.filter(message =>
    message.message_type === "mail"
    && message.sender_id === currentUserId
    && !message.sender_deleted_at
  );

  const unreadInboxCount = inboxMessages.filter(message => !message.is_read).length;

  if (messageInboxTab) {
    messageInboxTab.innerHTML = `${escapeHtml(t("inbox"))} <span class="folder-count">${inboxMessages.length}</span>${unreadInboxCount ? `<span class="folder-unread">${unreadInboxCount}</span>` : ""}`;
  }

  if (messageSentTab) {
    messageSentTab.innerHTML = `${escapeHtml(t("sent"))} <span class="folder-count">${sentMessages.length}</span>`;
  }

  if (messageComposeTab) {
    messageComposeTab.textContent = t("compose");
  }

  if (currentMessageView === "compose") {
    messageList.innerHTML = `
      <div class="gmail-empty compose-helper-card">
        <h3>${escapeHtml(t("newMessage"))}</h3>
        <p>${escapeHtml(t("composeHelp"))}</p>
      </div>
    `;
    if (deleteSelectedInboxMessagesButton) deleteSelectedInboxMessagesButton.classList.add("hidden");
    return;
  }

  let mail = currentMessageView === "sent" ? sentMessages : inboxMessages;
  mail = mail.slice(0, 60);

  const viewTitle = currentMessageView === "sent" ? t("sent") : t("inbox");
  const viewCount = mail.length;
  const selectedTools = currentMessageView === "inbox" ? `
    <div class="gmail-toolbar-right">
      <span>${escapeHtml(t("unreadShort", { count: unreadInboxCount }))}</span>
    </div>
  ` : `
    <div class="gmail-toolbar-right">
      <span>${escapeHtml(t("sentShort", { count: viewCount }))}</span>
    </div>
  `;

  if (mail.length === 0) {
    messageList.innerHTML = `
      <div class="gmail-topbar">
        <div>
          <strong>${escapeHtml(viewTitle)}</strong>
          <small>${escapeHtml(t("messageCount", { count: viewCount }))}</small>
        </div>
        ${selectedTools}
      </div>
      <div class="gmail-empty">
        <h3>${escapeHtml(t("messages"))}</h3>
        <p>${escapeHtml(t("noMessages"))}</p>
      </div>
    `;
    if (deleteSelectedInboxMessagesButton) deleteSelectedInboxMessagesButton.classList.toggle("hidden", currentMessageView !== "inbox");
    return;
  }

  const openedMessage = openedMailMessageId ? messages.find(item => item.id === openedMailMessageId) : null;
  const openedHtml = openedMessage ? `
    <article class="gmail-message-detail">
      <div class="gmail-message-head">
        <div>
          <strong>${escapeHtml(openedMessage.subject || t("subjectLabel"))}</strong>
          <small>${escapeHtml(formatDateTime(openedMessage.created_at))}</small>
        </div>
        <button type="button" id="closeOpenedMailButton" class="secondary-button">${escapeHtml(t("close"))}</button>
      </div>
      <div class="gmail-message-meta">
        <span><strong>${escapeHtml(t("from"))}:</strong> ${escapeHtml(getProfileName(openedMessage.sender_id))}</span>
        <span><strong>${escapeHtml(t("to"))}:</strong> ${escapeHtml(getProfileName(openedMessage.recipient_id))}</span>
      </div>
      <p class="gmail-message-body-full">${escapeHtml(openedMessage.body)}</p>
    </article>
  ` : "";

  messageList.innerHTML = `
    <p class="message-privacy-note">${escapeHtml(t("inboxPrivacy"))}</p>
    <div class="gmail-topbar">
      <div>
        <strong>${escapeHtml(viewTitle)}</strong>
        <small>${escapeHtml(t("messageCount", { count: viewCount }))}</small>
      </div>
      ${selectedTools}
    </div>
    ${openedHtml}
    <div class="gmail-list" role="list">
      ${mail.map(function (message) {
        const sender = getProfileName(message.sender_id);
        const recipient = getProfileName(message.recipient_id);
        const unread = message.recipient_id === currentUserId && !message.is_read;
        const person = currentMessageView === "sent" ? recipient : sender;
        const initials = getInitials(person);

        return `
          <article class="gmail-message-row ${unread ? "unread-message" : ""}" data-message-id="${message.id}" role="listitem" tabindex="0">
            ${currentMessageView === "inbox" ? `<input type="checkbox" class="gmail-message-select" value="${message.id}" aria-label="${escapeAttribute(t("selectMessage"))}" />` : ""}
            <div class="gmail-avatar" aria-hidden="true">${escapeHtml(initials)}</div>
            <div class="gmail-message-main">
              <div class="gmail-message-head">
                <strong>${escapeHtml(person)}</strong>
                <span>${escapeHtml(formatDateTime(message.created_at))}</span>
              </div>
              <h3>${escapeHtml(message.subject || t("subjectLabel"))}</h3>
              <p>${escapeHtml(shorten(message.body, 190))}</p>
              <small>${currentMessageView === "sent" ? escapeHtml(t("to")) : escapeHtml(t("from"))}: ${escapeHtml(person)}</small>
            </div>
            <div class="gmail-message-actions">
              ${unread ? `<span class="new-pill">${escapeHtml(t("new"))}</span>` : ""}
              <button type="button" class="open-message-button" data-message-id="${message.id}">${unread ? escapeHtml(t("open")) : escapeHtml(t("view"))}</button>
              ${currentMessageView === "inbox" ? `<button type="button" class="delete-message-button" data-message-id="${message.id}">${escapeHtml(t("delete"))}</button>` : ""}
            </div>
          </article>
        `;
      }).join("")}
    </div>
  `;

  const closeOpenedMailButton = document.getElementById("closeOpenedMailButton");
  if (closeOpenedMailButton) {
    closeOpenedMailButton.addEventListener("click", function () {
      openedMailMessageId = "";
      renderMessages();
    });
  }

  messageList.querySelectorAll(".open-message-button").forEach(function (button) {
    button.addEventListener("click", async function (event) {
      event.stopPropagation();
      await openMailMessage(button.dataset.messageId);
    });
  });

  messageList.querySelectorAll(".gmail-message-row").forEach(function (row) {
    row.addEventListener("click", async function (event) {
      if (event.target.closest("button") || event.target.closest("input")) {
        return;
      }
      await openMailMessage(row.dataset.messageId);
    });

    row.addEventListener("keydown", async function (event) {
      if (event.key === "Enter") {
        await openMailMessage(row.dataset.messageId);
      }
    });
  });

  messageList.querySelectorAll(".delete-message-button").forEach(function (button) {
    button.addEventListener("click", async function (event) {
      event.stopPropagation();
      await deleteReceivedMessage(button.dataset.messageId);
    });
  });

  if (deleteSelectedInboxMessagesButton) {
    deleteSelectedInboxMessagesButton.classList.toggle("hidden", currentMessageView !== "inbox");
  }
}

function getInitials(name) {
  return String(name || "U")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map(part => part[0])
    .join("")
    .toUpperCase();
}

async function openMailMessage(messageId) {
  const message = messages.find(item => item.id === messageId);

  if (!message) {
    return;
  }

  if (message.recipient_id === currentUserId && !message.is_read) {
    await supabaseClient
      .from("messages")
      .update({ is_read: true })
      .eq("id", messageId);

    messages = await fetchMessages();
    unreadCount = countUnreadMail();
    updateUnreadBadges();
  }

  openedMailMessageId = messageId;
  renderMessages();
}


async function deleteReceivedMessage(messageId) {
  const message = messages.find(item => item.id === messageId);

  if (!message || message.recipient_id !== currentUserId) {
    return;
  }

  const { error } = await supabaseClient
    .from("messages")
    .update({ recipient_deleted_at: new Date().toISOString(), is_read: true })
    .eq("id", messageId);

  if (error) {
    console.error(error);
    return;
  }

  messages = await fetchMessages();
  unreadCount = countUnreadMail();
  renderMessages();
  updateUnreadBadges();
}

async function deleteSelectedInboxMessages() {
  const ids = Array.from(messageList.querySelectorAll(".gmail-message-select:checked")).map(input => input.value);

  if (ids.length === 0) {
    return;
  }

  const { error } = await supabaseClient
    .from("messages")
    .update({ recipient_deleted_at: new Date().toISOString(), is_read: true })
    .in("id", ids);

  if (error) {
    console.error(error);
    return;
  }

  messages = await fetchMessages();
  unreadCount = countUnreadMail();
  renderMessages();
  updateUnreadBadges();
}

async function markUnreadMailAsRead() {
  const unreadIds = messages
    .filter(message => message.message_type === "mail" && message.recipient_id === currentUserId && !message.recipient_deleted_at && !message.is_read)
    .map(message => message.id);

  if (unreadIds.length === 0) {
    return;
  }

  const { error } = await supabaseClient
    .from("messages")
    .update({ is_read: true })
    .in("id", unreadIds);

  if (error) {
    console.error(error);
    return;
  }

  messages = await fetchMessages();
  unreadCount = countUnreadMail();
  setMessageView("inbox");
  updateUnreadBadges();
}

function renderChatTabs() {
  if (!chatTabs) {
    return;
  }

  if (openChatIds.length === 0) {
    chatTabs.innerHTML = "";
    return;
  }

  chatTabs.innerHTML = openChatIds.map(function (id) {
    const contact = contacts.find(item => item.id === id);
    if (!contact) {
      return "";
    }

    const unread = sessionUnreadChatIds.has(id);

    return `
      <div class="chat-tab-wrap ${id === activeChatId ? "active" : ""} ${unread ? "has-unread" : ""}">
        <button type="button" class="chat-tab" data-contact-id="${id}">
          <span class="status-dot ${presenceClass(id)}"></span>
          <span>${escapeHtml(contact.name)}</span>
          ${unread ? `<span class="chat-tab-badge">${escapeHtml(t("newMessage"))}</span>` : ""}
        </button>
        <button type="button" class="chat-tab-close" data-contact-id="${id}" aria-label="${escapeAttribute(t("closeChat"))}">×</button>
      </div>
    `;
  }).join("");

  chatTabs.querySelectorAll(".chat-tab").forEach(function (button) {
    button.addEventListener("click", function () {
      activeChatId = button.dataset.contactId;
      sessionUnreadChatIds.delete(activeChatId);
      replyToMessageId = "";
      renderReplyPreview();
      renderChatTabs();
      renderChat();
    });
  });

  chatTabs.querySelectorAll(".chat-tab-close").forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.stopPropagation();
      const id = button.dataset.contactId;
      openChatIds = openChatIds.filter(item => item !== id);
      sessionUnreadChatIds.delete(id);
      if (activeChatId === id) {
        activeChatId = openChatIds[0] || "";
      }
      replyToMessageId = "";
      renderReplyPreview();
      renderChatTabs();
      renderChat();
    });
  });
}

function renderChat() {
  const selectedContactId = activeChatId || (openChatIds[0] || "");

  if (!selectedContactId) {
    chatMessages.innerHTML = `
      <div class="empty-panel">
        <p>${escapeHtml(t("noOpenChats"))}</p>
      </div>
    `;
    return;
  }

  sessionUnreadChatIds.delete(selectedContactId);

  const chat = messages
    .filter(message => ["chat", "nudge"].includes(message.message_type))
    .filter(message => new Date(message.created_at) >= chatSessionStartedAt)
    .filter(message =>
      (message.sender_id === currentUserId && message.recipient_id === selectedContactId)
      || (message.sender_id === selectedContactId && message.recipient_id === currentUserId)
    )
    .sort((a, b) => new Date(a.created_at) - new Date(b.created_at));

  if (chat.length === 0) {
    chatMessages.innerHTML = `
      <div class="empty-panel">
        <p>${escapeHtml(t("noChatMessages"))}</p>
      </div>
    `;
    return;
  }

  chatMessages.innerHTML = `<p class="chat-live-note">${escapeHtml(t("chatSessionNotice"))}</p>` + chat.map(function (message) {
    const mine = message.sender_id === currentUserId;
    const reply = message.reply_to ? chat.find(item => item.id === message.reply_to) : null;

    if (message.message_type === "nudge") {
      return `
        <div class="chat-message nudge ${mine ? "mine" : ""} ${animatedChatMessageIds.has(message.id) ? "is-new" : ""}">
          <p><span class="nudge-hand">👋</span> ${mine ? "Has enviado un toque" : "Te han enviado un toque"}</p>
          <small>${escapeHtml(formatDateTime(message.created_at))}</small>
        </div>
      `;
    }

    return `
      <div class="chat-message ${mine ? "mine" : ""} ${animatedChatMessageIds.has(message.id) ? "is-new" : ""}">
        ${reply ? `<div class="reply-box"><strong>${escapeHtml(getProfileName(reply.sender_id))}:</strong> ${escapeHtml(shorten(reply.body, 80))}</div>` : ""}
        <div class="chat-bubble-head"><strong>${mine ? "Yo" : escapeHtml(getProfileName(message.sender_id))}</strong><small>${escapeHtml(formatTimeOnly(message.created_at))}</small></div>
        <p>${escapeHtml(message.body)}</p>
        ${message.reaction_emoji ? `<span class="chat-reaction">${escapeHtml(message.reaction_emoji)}</span>` : ""}
        <div class="chat-message-actions">
          <button type="button" class="reply-chat-button" data-message-id="${message.id}">Responder</button>
          <button type="button" class="react-chat-button" data-message-id="${message.id}" data-emoji="👍">👍</button>
          <button type="button" class="react-chat-button" data-message-id="${message.id}" data-emoji="❤️">❤️</button>
          <button type="button" class="react-chat-button" data-message-id="${message.id}" data-emoji="🔥">🔥</button>
        </div>
        <small class="chat-date-full">${escapeHtml(formatDateTime(message.created_at))}</small>
      </div>
    `;
  }).join("");

  chatMessages.querySelectorAll(".reply-chat-button").forEach(function (button) {
    button.addEventListener("click", function () {
      replyToMessageId = button.dataset.messageId;
      renderReplyPreview();
    });
  });

  chatMessages.querySelectorAll(".react-chat-button").forEach(function (button) {
    button.addEventListener("click", async function () {
      await reactToMessage(button.dataset.messageId, button.dataset.emoji);
    });
  });

  chatMessages.scrollTop = chatMessages.scrollHeight;
  setTimeout(function () {
    chat.forEach(message => animatedChatMessageIds.delete(message.id));
  }, 1600);
}

function renderReplyPreview() {
  if (!replyPreview) {
    return;
  }

  if (!replyToMessageId) {
    replyPreview.classList.add("hidden");
    replyPreview.innerHTML = "";
    return;
  }

  const message = messages.find(item => item.id === replyToMessageId);

  if (!message) {
    replyPreview.classList.add("hidden");
    return;
  }

  replyPreview.classList.remove("hidden");
  replyPreview.innerHTML = `
    Respondiendo a <strong>${escapeHtml(getProfileName(message.sender_id))}</strong>: ${escapeHtml(shorten(message.body, 70))}
    <button type="button" id="cancelReplyButton" class="secondary-button">Cancelar</button>
  `;

  document.getElementById("cancelReplyButton").addEventListener("click", function () {
    replyToMessageId = "";
    renderReplyPreview();
  });
}

if (messageInboxTab) messageInboxTab.addEventListener("click", () => setMessageView("inbox"));
if (messageSentTab) messageSentTab.addEventListener("click", () => setMessageView("sent"));
if (messageComposeTab) messageComposeTab.addEventListener("click", () => setMessageView("compose"));

messageForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  const { error } = await supabaseClient
    .from("messages")
    .insert({
      sender_id: currentUserId,
      recipient_id: messageRecipient.value,
      message_type: "mail",
      subject: messageSubject.value.trim(),
      body: messageBody.value.trim()
    });

  if (error) {
    console.error(error);
    showMessage(messageStatus, "No se pudo enviar el mensaje.", "warning");
    return;
  }

  await createInternalNotification(messageRecipient.value, messageSubject.value.trim() || t("messages"), "Hay un nuevo mensaje disponible en Tribeca Aula.", "message", "messages");
  await recordActivityEvent("message_sent", {});
  messageForm.reset();
  messages = await fetchMessages();
  unreadCount = countUnreadMail();
  renderMessages();
  updateUnreadBadges();

  showMessage(messageStatus, t("sentMessage"), "success");
});

if (markMessagesReadButton) {
  markMessagesReadButton.addEventListener("click", async function () {
    await markUnreadMailAsRead();
    showMessage(messageStatus, t("readMarked"), "success");
  });
}

if (markMessagesReadTopButton) {
  markMessagesReadTopButton.addEventListener("click", async function () {
    await markUnreadMailAsRead();
  });
}

if (deleteSelectedInboxMessagesButton) {
  deleteSelectedInboxMessagesButton.addEventListener("click", deleteSelectedInboxMessages);
}

if (openUnreadMessagesButton) {
  openUnreadMessagesButton.addEventListener("click", async function () {
    setMessageView("inbox");
    communicationSection.scrollIntoView({ behavior: "smooth", block: "start" });
    await markUnreadMailAsRead();
  });
}

if (openChatTabsButton) {
  openChatTabsButton.addEventListener("click", function () {
    const selectedIds = Array.from(chatContact.selectedOptions).map(option => option.value);

    selectedIds.forEach(function (id) {
      if (!openChatIds.includes(id)) {
        openChatIds.push(id);
      }
    });

    if (!activeChatId && openChatIds.length > 0) {
      activeChatId = openChatIds[0];
    }

    if (selectedIds.length > 0) {
      activeChatId = selectedIds[0];
    }

    renderChatTabs();
    renderChat();
  });
}

chatForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  const recipients = getChatRecipients();

  if (recipients.length === 0 || !chatInput.value.trim()) {
    return;
  }

  await sendChatMessage(recipients, chatInput.value.trim(), "chat");
  chatInput.value = "";
});

nudgeButton.addEventListener("click", async function () {
  const recipients = getChatRecipients();

  if (recipients.length === 0) {
    return;
  }

  nudgeButton.classList.add("nudge-sent");
  setTimeout(() => nudgeButton.classList.remove("nudge-sent"), 1500);
  await sendChatMessage(recipients, "👋", "nudge");
  playNotificationTone("nudge");
});

emojiButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    chatInput.value += button.dataset.emoji;
    chatInput.focus();
  });
});

chatContact.addEventListener("change", function () {
  const selectedIds = Array.from(chatContact.selectedOptions).map(option => option.value);

  if (selectedIds.length === 1) {
    activeChatId = selectedIds[0];

    if (!openChatIds.includes(activeChatId)) {
      openChatIds.push(activeChatId);
    }

    renderChatTabs();
    renderChat();
  }
});

presenceStatusSelect.addEventListener("change", async function () {
  currentPresenceStatus = presenceStatusSelect.value;
  await updatePresence(currentPresenceStatus);
  presence = await fetchPresence();
  renderContactSelectors();
  renderChatTabs();
});

chatSoundToggle.addEventListener("change", function () {
  soundEnabled = chatSoundToggle.checked;
  saveUiSettings();

  if (soundEnabled) {
    playNotificationTone("chat");
  }
});

async function sendChatMessage(recipients, body, type) {
  const payload = recipients.map(function (recipientId) {
    return {
      sender_id: currentUserId,
      recipient_id: recipientId,
      message_type: type,
      subject: "",
      body,
      reply_to: type === "chat" ? replyToMessageId || null : null
    };
  });

  const { error } = await supabaseClient
    .from("messages")
    .insert(payload);

  if (error) {
    console.error(error);
    return;
  }

  replyToMessageId = "";
  renderReplyPreview();
  messages = await fetchMessages();
  renderChat();
}

function getChatRecipients() {
  const selected = Array.from(chatContact.selectedOptions).map(option => option.value);

  if (selected.length > 0) {
    selected.forEach(function (id) {
      if (!openChatIds.includes(id)) {
        openChatIds.push(id);
      }
    });

    return selected;
  }

  return activeChatId ? [activeChatId] : [];
}

async function reactToMessage(messageId, emoji) {
  const { error } = await supabaseClient
    .from("messages")
    .update({ reaction_emoji: emoji })
    .eq("id", messageId);

  if (error) {
    console.error(error);
    return;
  }

  messages = await fetchMessages();
  renderChat();
}

async function updatePresence(status) {
  if (!currentUserId) {
    return;
  }

  await supabaseClient
    .from("user_presence")
    .upsert({
      profile_id: currentUserId,
      status,
      last_seen: new Date().toISOString()
    });
}

function setupRealtimeSubscriptions() {
  if (realtimeChannel || !currentUserId) {
    return;
  }

  realtimeChannel = supabaseClient
    .channel("tribeca-live-messages")
    .on("postgres_changes", { event: "*", schema: "public", table: "messages" }, async function () {
      const newMessages = await fetchMessages();
      detectNewChatActivity(newMessages, presence);
      messages = newMessages;
      unreadCount = countUnreadMail();
      renderMessages();
      renderChatTabs();
      renderChat();
      updateUnreadBadges();
      if (currentProfile && currentProfile.role === "teacher") {
        renderTeacherOverview();
        renderTeacherChatOverview();
      }
    })
    .on("postgres_changes", { event: "*", schema: "public", table: "user_presence" }, async function () {
      const newPresence = await fetchPresence();
      detectNewChatActivity(messages, newPresence);
      presence = newPresence;
      renderContactSelectors();
      renderChatTabs();
      if (currentProfile && currentProfile.role === "teacher") {
        renderTeacherChatOverview();
      }
    })
    .on("postgres_changes", { event: "*", schema: "public", table: "calendar_events" }, async function () {
      await reloadCalendarData();
      if (currentProfile && currentProfile.role === "teacher") {
        teacherEventAssignments = await fetchCalendarEventAssignments();
        renderTeacherStudentHub();
      }
    })
    .on("postgres_changes", { event: "*", schema: "public", table: "platform_notifications" }, async function () {
      platformNotifications = await fetchPlatformNotifications();
      renderNotifications();
    })
    .on("postgres_changes", { event: "*", schema: "public", table: "password_reset_requests" }, async function () {
      if (currentProfile && currentProfile.role === "teacher") {
        teacherPasswordRequests = await fetchTeacherPasswordRequests();
        renderTeacherRecoveryRequests();
      }
    })
    .on("postgres_changes", { event: "*", schema: "public", table: "student_quick_help_requests" }, async function () {
      if (currentProfile && currentProfile.role === "teacher") {
        teacherQuickHelpRequests = await fetchTeacherQuickHelpRequests();
        renderTeacherRecoveryRequests();
      }
    })
    .on("postgres_changes", { event: "*", schema: "public", table: "calendar_event_assignments" }, async function () {
      await reloadCalendarData();
      if (currentProfile && currentProfile.role === "teacher") {
        teacherEventAssignments = await fetchCalendarEventAssignments();
        renderTeacherStudentHub();
      }
    })
    .subscribe();
}

function startRefreshTimer() {
  clearInterval(refreshTimer);
  clearInterval(chatFastRefreshTimer);

  if (realtimeChannel) {
    supabaseClient.removeChannel(realtimeChannel);
    realtimeChannel = null;
  }

  setupRealtimeSubscriptions();

  chatFastRefreshTimer = setInterval(async function () {
    if (!currentUserId) {
      return;
    }

    const newMessages = await fetchMessages();
    const newPresence = await fetchPresence();
    detectNewChatActivity(newMessages, newPresence);
    messages = newMessages;
    presence = newPresence;
    unreadCount = countUnreadMail();
    renderContactSelectors();
    renderMessages();
    renderChatTabs();
    renderChat();
    updateUnreadBadges();
    if (currentProfile && currentProfile.role === "teacher") {
      renderTeacherChatOverview();
    }
  }, 1000);

  refreshTimer = setInterval(async function () {
    if (!currentUserId) {
      return;
    }

    await updatePresence(currentPresenceStatus);
    await reloadCalendarData();
    if (currentProfile && currentProfile.role === "teacher") {
      recentActivity = await fetchRecentActivity();
      teacherEventAssignments = await fetchCalendarEventAssignments();
      platformNotifications = await fetchPlatformNotifications();
      teacherPasswordRequests = await fetchTeacherPasswordRequests();
      teacherQuickHelpRequests = await fetchTeacherQuickHelpRequests();
      renderTeacherOverview();
      renderRecentActivity();
      renderTeacherStudentHub();
      renderTeacherAlerts();
      renderNotifications();
      renderTeacherRecoveryRequests();
    }
  }, 30000);
}

function detectNewChatActivity(newMessages, newPresence) {
  if (!communicationInitialized) {
    previousChatMessageIds = new Set(newMessages.map(message => message.id));
    previousOnlineIds = new Set(newPresence.filter(item => isPresenceActive(item)).map(item => item.profile_id));
    return;
  }

  const incoming = newMessages.filter(message =>
    ["chat", "nudge"].includes(message.message_type)
    && message.recipient_id === currentUserId
    && !previousChatMessageIds.has(message.id)
  );

  if (incoming.length > 0) {
    incoming.forEach(function (message) {
      const otherId = message.sender_id === currentUserId ? message.recipient_id : message.sender_id;
      if (otherId && !openChatIds.includes(otherId)) {
        openChatIds.push(otherId);
      }
      if (otherId) {
        sessionUnreadChatIds.add(otherId);
      }
      animatedChatMessageIds.add(message.id);
      if (!activeChatId) {
        activeChatId = otherId;
      }
      showChatNotice(message.message_type === "nudge" ? t("nudgeFrom", { name: getProfileName(message.sender_id) }) : t("newChatFrom", { name: getProfileName(message.sender_id) }), message.message_type);
    });
    renderChatTabs();
    renderChat();
  }

  if (incoming.some(message => message.message_type === "nudge")) {
    playNotificationTone("nudge");
  } else if (incoming.length > 0) {
    playNotificationTone("chat");
  }

  const newOnlineIds = new Set(newPresence.filter(item => isPresenceActive(item)).map(item => item.profile_id));
  const someoneNewOnline = [...newOnlineIds].some(id => id !== currentUserId && !previousOnlineIds.has(id));
  const someoneWentOffline = [...previousOnlineIds].some(id => id !== currentUserId && !newOnlineIds.has(id));

  if (someoneNewOnline) {
    playNotificationTone("presenceOn");
    const id = [...newOnlineIds].find(item => item !== currentUserId && !previousOnlineIds.has(item));
    if (id) showChatNotice(t("connectedNotice", { name: getProfileName(id) }), "presenceOn");
  }

  if (someoneWentOffline) {
    playNotificationTone("presenceOff");
    const id = [...previousOnlineIds].find(item => item !== currentUserId && !newOnlineIds.has(item));
    if (id) showChatNotice(t("disconnectedNotice", { name: getProfileName(id) }), "presenceOff");
  }

  previousChatMessageIds = new Set(newMessages.map(message => message.id));
  previousOnlineIds = newOnlineIds;
}

function showChatNotice(text, type) {
  let stack = document.getElementById("chatNoticeStack");
  if (!stack) {
    stack = document.createElement("div");
    stack.id = "chatNoticeStack";
    stack.className = "chat-notice-stack";
    document.body.appendChild(stack);
  }

  const icon = type === "nudge" ? "👋" : type === "presenceOn" ? "🟢" : type === "presenceOff" ? "🔴" : "💬";
  const notice = document.createElement("div");
  notice.className = `chat-notice chat-notice-${type || "chat"}`;
  notice.innerHTML = `<span>${icon}</span><strong>${escapeHtml(text)}</strong>`;
  stack.appendChild(notice);

  setTimeout(function () {
    notice.classList.add("leaving");
    setTimeout(function () {
      notice.remove();
    }, 360);
  }, 3500);
}

function playNotificationTone(type) {
  if (!soundEnabled) {
    return;
  }

  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioContext = new AudioContext();
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();

    const toneMap = {
      chat: { frequency: 720, second: 960, duration: 0.18, type: "sine" },
      nudge: { frequency: 880, second: 1170, duration: 0.26, type: "triangle" },
      presence: { frequency: 520, second: 640, duration: 0.20, type: "sine" },
      presenceOn: { frequency: 520, second: 700, duration: 0.22, type: "sine" },
      presenceOff: { frequency: 360, second: 260, duration: 0.24, type: "sine" },
      login: { frequency: 740, second: 980, duration: 0.24, type: "sine" },
      logout: { frequency: 330, second: 260, duration: 0.24, type: "sine" }
    };

    const tone = toneMap[type] || toneMap.chat;
    oscillator.type = tone.type;
    oscillator.frequency.value = tone.frequency;
    oscillator.frequency.setValueAtTime(tone.frequency, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(tone.second, audioContext.currentTime + tone.duration * 0.55);
    gain.gain.setValueAtTime(0.0001, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(type === "chat" ? 0.09 : 0.13, audioContext.currentTime + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + tone.duration);

    oscillator.connect(gain);
    gain.connect(audioContext.destination);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + tone.duration + 0.02);
  } catch (error) {
    console.warn("No se pudo reproducir sonido:", error);
  }
}

function isPresenceActive(item) {
  if (!item || item.status === "offline") {
    return false;
  }

  return Date.now() - new Date(item.last_seen).getTime() < 30000;
}

function presenceClass(profileId) {
  const item = presence.find(entry => entry.profile_id === profileId);

  if (!item || Date.now() - new Date(item.last_seen).getTime() >= 30000) {
    return "offline";
  }

  return item.status || "offline";
}

function presenceLabel(profileId) {
  const status = presenceClass(profileId);
  const labels = {
    online: "🟢",
    offline: "🔴",
    studying: "🟣",
    working: "🟠"
  };

  return labels[status] || "🔴";
}

function isOnline(profileId) {
  return presenceClass(profileId) !== "offline";
}

function getProfileName(profileId) {
  if (profileId === currentUserId) {
    return currentProfile ? currentProfile.name : "Yo";
  }

  const contact = contacts.find(item => item.id === profileId);
  if (contact) {
    return contact.name;
  }

  const student = teacherStudents.find(item => item.id === profileId);
  if (student) {
    return student.nickname || student.display_name;
  }

  return "Usuario";
}

function readableQuickNeedType(type) {
  const map = {
    duda: t("quickNeedTypeDuda"),
    explicacion: t("quickNeedTypeExplicacion"),
    repaso: t("quickNeedTypeRepaso"),
    organizacion: t("quickNeedTypeOrganizacion"),
    ejercicios: t("quickNeedTypeEjercicios"),
    inicio: t("quickNeedTypeInicio"),
    comentario: t("quickNeedTypeComentario")
  };
  return map[type] || type || t("message");
}

function moveQuickNeedCardToMessages() {
  if (!quickNeedCard || !quickNeedMessagesSlot) return;
  if (currentProfile && currentProfile.role === "teacher") {
    quickNeedCard.classList.add("hidden");
    return;
  }
  quickNeedCard.classList.remove("hidden", "profile-extra-card", "student-only-profile-card");
  quickNeedCard.classList.add("quick-need-message-card");
  quickNeedMessagesSlot.appendChild(quickNeedCard);
}

let openedProfileCard = null;
let openedProfileCardPlaceholder = null;
let profileCardOverlay = null;

function closeProfileCardWindow() {
  if (!openedProfileCard) return;
  openedProfileCard.classList.remove("profile-card-in-window");
  if (openedProfileCardPlaceholder && openedProfileCardPlaceholder.parentNode) {
    openedProfileCardPlaceholder.parentNode.insertBefore(openedProfileCard, openedProfileCardPlaceholder);
    openedProfileCardPlaceholder.remove();
  }
  if (profileCardOverlay) {
    profileCardOverlay.remove();
  }
  openedProfileCard = null;
  openedProfileCardPlaceholder = null;
  profileCardOverlay = null;
}

function openProfileCardWindow(card) {
  if (!card || card.classList.contains("profile-card-in-window") || card.classList.contains("quick-need-message-card")) return;
  closeProfileCardWindow();
  openedProfileCard = card;
  openedProfileCardPlaceholder = document.createComment("profile-card-placeholder");
  card.parentNode.insertBefore(openedProfileCardPlaceholder, card);
  profileCardOverlay = document.createElement("div");
  profileCardOverlay.className = "profile-card-window-overlay";
  const title = card.querySelector("h3") ? card.querySelector("h3").textContent : t("profileSectionWindow");
  profileCardOverlay.innerHTML = `<div class="profile-card-window" role="dialog" aria-modal="true"><div class="section-heading-row"><h2>${escapeHtml(title)}</h2><button type="button" class="secondary-button profile-card-close">×</button></div><div class="profile-card-window-body"></div></div>`;
  document.body.appendChild(profileCardOverlay);
  card.classList.add("profile-card-in-window");
  profileCardOverlay.querySelector(".profile-card-window-body").appendChild(card);
  profileCardOverlay.querySelector(".profile-card-close").addEventListener("click", closeProfileCardWindow);
  profileCardOverlay.addEventListener("click", function (event) {
    if (event.target === profileCardOverlay) closeProfileCardWindow();
  });
}

function prepareProfileCards() {
  const cards = Array.from(document.querySelectorAll("#profileExtraGrid .profile-extra-card"));
  cards.forEach(function (card) {
    if (card.dataset.compactReady === "true") return;
    card.dataset.compactReady = "true";
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    card.addEventListener("click", function (event) {
      if (card.classList.contains("profile-card-in-window")) return;
      event.preventDefault();
      openProfileCardWindow(card);
    });
    card.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openProfileCardWindow(card);
      }
    });
  });
}

if (profileForm) {
  [profileNickname, profileAvatarFile].forEach(function (element) {
    if (!element) return;
    element.addEventListener("input", function () {
      if (profileUnsavedMessage) profileUnsavedMessage.classList.remove("hidden");
    });
    element.addEventListener("change", function () {
      if (profileUnsavedMessage) profileUnsavedMessage.classList.remove("hidden");
    });
  });
}

if (passwordChangeForm) {
  passwordChangeForm.addEventListener("submit", async function (event) {
    event.preventDefault();
    const newPassword = profileNewPassword.value.trim();
    const repeatedPassword = profileRepeatPassword.value.trim();
    if (!newPassword || !repeatedPassword) {
      showMessage(passwordHelpMessage, t("passwordChangeEmpty"), "warning");
      return;
    }
    if (newPassword !== repeatedPassword) {
      showMessage(passwordHelpMessage, t("passwordsDoNotMatch"), "warning");
      return;
    }
    if (newPassword.length < 6) {
      showMessage(passwordHelpMessage, t("passwordTooShort"), "warning");
      return;
    }
    if (!confirm(t("passwordChangeConfirm"))) {
      return;
    }
    const { error } = await supabaseClient.auth.updateUser({ password: newPassword });
    if (error) {
      console.error(error);
      showMessage(passwordHelpMessage, t("passwordUpdateError"), "warning");
      return;
    }
    profileNewPassword.value = "";
    profileRepeatPassword.value = "";
    showMessage(passwordHelpMessage, t("passwordChangedCorrectly"), "success");
  });
}

profileForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  let avatarFilePath = selectedAvatarFilePath;
  const file = profileAvatarFile.files[0] || null;
  if (file) {
    if (!["image/png", "image/jpeg", "image/webp"].includes(file.type)) {
      showMessage(profileMessage, t("profilePhotoInvalidType"), "warning");
      return;
    }

    if (file.size > PROFILE_IMAGE_MAX_BYTES) {
      showMessage(profileMessage, t("profilePhotoTooLarge"), "warning");
      return;
    }

    const safeName = sanitizeFileName(file.name);
    avatarFilePath = `avatars/${currentUserId}/${makeId()}-${safeName}`;

    const { error: uploadError } = await supabaseClient
      .storage
      .from(AVATAR_BUCKET)
      .upload(avatarFilePath, file, {
        cacheControl: "3600",
        upsert: false,
        contentType: file.type
      });

    if (uploadError) {
      console.error(uploadError);
      showMessage(profileMessage, t("profilePhotoUploadError"), "warning");
      return;
    }

    selectedAvatarType = "upload";
    selectedAvatarValue = "";
  }

  const { error } = await supabaseClient.rpc("update_own_profile_settings", {
    p_nickname: profileNickname.value.trim(),
    p_avatar_type: selectedAvatarType,
    p_avatar_value: selectedAvatarValue,
    p_avatar_file_path: avatarFilePath
  });

  if (error) {
    console.error(error);
    showMessage(profileMessage, "No se pudo guardar el perfil.", "warning");
    return;
  }

  currentProfile = await fetchProfile(currentUserId);
  renderProfilePanel();

  if (currentProfile.role !== "teacher") {
    renderStudentDashboard();
  }

  if (profileUnsavedMessage) profileUnsavedMessage.classList.add("hidden");
  showMessage(profileMessage, file ? t("profilePhotoUploaded") : t("savedProfile"), "success");
});

if (profileAvatarFile) {
  profileAvatarFile.addEventListener("change", function () {
    const file = profileAvatarFile.files[0];
    if (!file) return;
    if (!["image/png", "image/jpeg", "image/webp"].includes(file.type)) {
      showMessage(profileMessage, t("profilePhotoInvalidType"), "warning");
      profileAvatarFile.value = "";
      return;
    }
    if (file.size > PROFILE_IMAGE_MAX_BYTES) {
      showMessage(profileMessage, t("profilePhotoTooLarge"), "warning");
      profileAvatarFile.value = "";
      return;
    }
    const reader = new FileReader();
    reader.onload = function () {
      profileAvatarPreview.innerHTML = `<img src="${escapeAttribute(reader.result)}" alt="${escapeAttribute(t("profileImageAlt"))}" />`;
    };
    reader.readAsDataURL(file);
  });
}

if (deleteProfilePhotoButton) {
  deleteProfilePhotoButton.addEventListener("click", async function () {
    if (!currentProfile) return;
    selectedAvatarType = "emoji";
    selectedAvatarValue = "💡";
    selectedAvatarFilePath = "";
    const { error } = await supabaseClient.rpc("update_own_profile_settings", {
      p_nickname: profileNickname.value.trim(),
      p_avatar_type: "emoji",
      p_avatar_value: "💡",
      p_avatar_file_path: ""
    });
    if (error) {
      console.error(error);
      showMessage(profileMessage, t("profilePhotoDeleteError"), "warning");
      return;
    }
    profileAvatarFile.value = "";
    currentProfile = await fetchProfile(currentUserId);
    renderProfilePanel();
    if (currentProfile.role !== "teacher") renderStudentDashboard();
    showMessage(profileMessage, t("profilePhotoDeleted"), "success");
  });
}

function renderProfilePanel() {
  profileNickname.value = currentProfile.nickname || "";
  profileNamePreview.textContent = currentProfile.name;

  selectedAvatarType = currentProfile.avatarType || "emoji";
  selectedAvatarValue = currentProfile.avatarValue || "💡";
  selectedAvatarFilePath = currentProfile.avatarFilePath || "";

  renderAvatarChoices();
  renderProfileAvatar();
  renderProfileAccountInfo();
  renderStudentActivitySummary();
}

async function renderProfileAvatar() {
  if (currentProfile.avatarType === "upload" && currentProfile.avatarFilePath) {
    const { data } = await supabaseClient
      .storage
      .from(AVATAR_BUCKET)
      .createSignedUrl(currentProfile.avatarFilePath, 3600);

    if (data && data.signedUrl) {
      profileAvatarPreview.innerHTML = `<img src="${escapeAttribute(data.signedUrl)}" alt="${escapeAttribute(t("profileImageAlt") || "Imagen de perfil")}" />`;
      return;
    }
  }

  profileAvatarPreview.textContent = currentProfile.avatarValue || "💡";
}

function renderAvatarChoices() {
  avatarChoiceList.innerHTML = avatarChoices.map(function (avatar) {
    const selected = selectedAvatarType === "emoji" && selectedAvatarValue === avatar;
    return `
      <button type="button" class="avatar-choice ${selected ? "selected" : ""}" data-avatar="${escapeAttribute(avatar)}">
        ${escapeHtml(avatar)}
      </button>
    `;
  }).join("");

  avatarChoiceList.querySelectorAll(".avatar-choice").forEach(function (button) {
    button.addEventListener("click", function () {
      selectedAvatarType = "emoji";
      selectedAvatarValue = button.dataset.avatar;
      selectedAvatarFilePath = "";
      if (profileAvatarFile) profileAvatarFile.value = "";
      profileAvatarPreview.textContent = selectedAvatarValue;
      renderAvatarChoices();
    });
  });
}



function renderProfileAccountInfo() {
  if (!profileAccountInfo || !currentProfile) return;
  const accessEmail = `${currentProfile.username}@tribeca-aula.local`;
  const lastPresence = presence.find(item => item.profile_id === currentUserId);
  const lastAccess = lastPresence && lastPresence.last_seen ? formatDateTime(lastPresence.last_seen) : t("currentSession") || "Sesión actual";
  const subjectsLabel = currentSubjects && currentSubjects.length ? currentSubjects.map(s => s.name).join(", ") : (currentProfile.role === "teacher" ? "Panel docente" : t("unassigned"));
  profileAccountInfo.innerHTML = [
    [t("officialName"), currentProfile.displayName || currentProfile.name],
    [t("visibleName"), currentProfile.nickname || currentProfile.name],
    [t("accessEmail"), accessEmail],
    [t("accountCreated"), currentProfile.createdAt ? formatDate(currentProfile.createdAt) : t("unassigned")],
    [t("lastAccess"), lastAccess],
    [t("currentCourse"), currentProfile.academicCourse || currentProfile.course || t("unassigned")],
    [t("assignedSubjects"), subjectsLabel]
  ].map(row => `<div class="profile-info-row"><span>${escapeHtml(row[0])}</span><strong>${escapeHtml(row[1])}</strong></div>`).join("");
}

function renderStudentActivitySummary() {
  if (!studentActivitySummary || !currentProfile) return;
  document.querySelectorAll(".student-only-profile-card").forEach(function(card){ card.classList.toggle("hidden", currentProfile.role === "teacher"); });
  if (currentProfile.role === "teacher") return;
  const completionSet = new Set(currentPostCompletions.map(item => item.post_id));
  const actionable = currentPosts.filter(post => !["announcement", "notes"].includes(post.post_type));
  const pending = actionable.filter(post => !completionSet.has(post.id)).length;
  const weekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
  const completedThisWeek = currentPostCompletions.filter(item => new Date(item.completed_at).getTime() >= weekAgo).length;
  const nextEvents = currentEvents.filter(event => new Date(event.starts_at).getTime() >= Date.now()).slice(0, 2).map(event => event.title).join(", ") || t("noEvents");
  studentActivitySummary.innerHTML = [
    [t("completedThisWeek"), `${completedThisWeek}`],
    [t("pendingTasks"), `${pending}`],
    [t("nextEvents"), nextEvents],
    [t("streak"), t("streakDays", { count: currentStreak || 0 })],
    [t("currentLevel"), currentBadgeAwards.length >= 8 ? "Avanzado" : currentBadgeAwards.length >= 3 ? "En progreso" : "Inicio"],
    [t("accumulatedPoints"), `${currentBadgeAwards.length * 10}`]
  ].map(row => `<div class="profile-info-row"><span>${escapeHtml(row[0])}</span><strong>${escapeHtml(row[1])}</strong></div>`).join("");
}

function getCheckedStudentIds(container) {
  return Array.from(container.querySelectorAll("input[type='checkbox']:checked"))
    .map(input => input.value);
}

function validateMaterialFile(file) {
  const maxSize = 50 * 1024 * 1024;
  const allowedTypes = ["application/pdf", "image/png", "image/jpeg", "image/webp", "video/mp4"];

  if (file.size > maxSize) {
    return "El archivo supera el límite de 50 MB.";
  }

  if (!allowedTypes.includes(file.type)) {
    return "Solo se admiten PDF, PNG, JPG, WEBP o MP4.";
  }

  return "";
}

function readablePostType(type) {
  const labels = {
    announcement: t("postTypeAnnouncement"),
    news: t("postTypeNews"),
    notice: t("postTypeNotice"),
    notes: t("postTypeNotes"),
    worksheet: t("postTypeWorksheet"),
    interactive_test: t("postTypeTest"),
    video_class: t("postTypeVideoClass"),
    video: t("postTypeVideo"),
    game: t("postTypeGame"),
    challenge: t("postTypeChallenge")
  };

  return labels[type] || t("postTypeAnnouncement");
}

function readableEventType(type) {
  const labels = {
    deadline: t("eventDeadline"),
    exam: t("eventExam"),
    important: t("importantNotice"),
    excursion: t("excursion"),
    reminder: t("eventReminder"),
    class: t("eventClass"),
    other: t("eventOther")
  };

  return labels[type] || t("eventOther");
}

function getYoutubeEmbedUrl(url) {
  try {
    const parsedUrl = new URL(url);

    if (parsedUrl.hostname.includes("youtube.com") && parsedUrl.searchParams.get("v")) {
      return `https://www.youtube.com/embed/${parsedUrl.searchParams.get("v")}`;
    }

    if (parsedUrl.hostname.includes("youtu.be")) {
      return `https://www.youtube.com/embed/${parsedUrl.pathname.replace("/", "")}`;
    }

    return "";
  } catch {
    return "";
  }
}

function sanitizeFileName(fileName) {
  return fileName
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9.\-_]/g, "-")
    .replace(/-+/g, "-");
}

function makeId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

function sortSubjects(a, b) {
  if (a.name === "Apoyo personalizado") {
    return -1;
  }

  if (b.name === "Apoyo personalizado") {
    return 1;
  }

  return a.name.localeCompare(b.name, localeMap[state.lang] || "es-ES");
}

function formatFullTodayDate() {
  return new Intl.DateTimeFormat(localeMap[state.lang] || "es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(new Date());
}

function formatDate(value) {
  if (!value) {
    return "";
  }

  return new Intl.DateTimeFormat(localeMap[state.lang] || "es-ES", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  }).format(new Date(value));
}

function formatDateTime(value) {
  if (!value) {
    return "";
  }

  return new Intl.DateTimeFormat(localeMap[state.lang] || "es-ES", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  }).format(new Date(value));
}

function isSameDay(a, b) {
  return a.getFullYear() === b.getFullYear()
    && a.getMonth() === b.getMonth()
    && a.getDate() === b.getDate();
}

function formatDateKey(value) {
  const year = value.getFullYear();
  const month = String(value.getMonth() + 1).padStart(2, "0");
  const day = String(value.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function calendarEventClass(event) {
  const classes = [event.event_type || "other"];

  if (event.created_by === currentUserId && currentProfile && currentProfile.role !== "teacher") {
    classes.push("personal");
  }

  return classes.join(" ");
}

function createDayTooltip(dayEvents) {
  if (!dayEvents || dayEvents.length === 0) {
    return t("noEvents");
  }

  return dayEvents
    .map(event => `${formatTimeOnly(event.starts_at)} · ${event.title}`)
    .join("\n");
}

function formatTimeOnly(value) {
  if (!value) {
    return "";
  }

  return new Intl.DateTimeFormat(localeMap[state.lang] || "es-ES", {
    hour: "2-digit",
    minute: "2-digit"
  }).format(new Date(value));
}


async function recordActivityEvent(actionType, details = {}) {
  if (!currentUserId || !currentProfile || currentProfile.role === "teacher") {
    return;
  }

  const payload = {
    profile_id: currentUserId,
    action_type: actionType,
    post_id: details.postId || null,
    subject_id: details.subjectId || null,
    event_id: details.eventId || null,
    metadata: details.metadata || {}
  };

  const { error } = await supabaseClient
    .from("activity_events")
    .insert(payload);

  if (error) {
    console.warn("No se pudo registrar actividad detallada:", error);
  }
}

async function fetchCurrentStreak() {
  const { data, error } = await supabaseClient.rpc("get_learning_streak");

  if (error || !data || data.length === 0) {
    return 0;
  }

  return Number(data[0].current_streak || 0);
}

async function registerLearningAction(activityType) {
  if (!currentProfile || currentProfile.role === "teacher") {
    return;
  }

  const { data, error } = await supabaseClient.rpc("log_learning_activity", {
    p_activity_type: activityType
  });

  if (error || !data || data.length === 0) {
    if (error) {
      console.warn("No se pudo registrar la racha:", error);
    }
    return;
  }

  currentStreak = Number(data[0].current_streak || 0);

  if (data[0].activated_today && currentStreak >= 3) {
    showStreakToast(currentStreak);
  }
}

function showStreakToast(days) {
  if (!streakToast || !streakToastText) {
    return;
  }

  streakToastText.textContent = t("streakDays", { count: days });
  streakToast.classList.remove("hidden");

  setTimeout(function () {
    streakToast.classList.add("hidden");
  }, 4200);
}

function shorten(text, maxLength) {
  const value = String(text || "");

  if (value.length <= maxLength) {
    return value;
  }

  return `${value.slice(0, maxLength).trim()}...`;
}

function setLoginLoading(isLoading) {
  loginButton.disabled = isLoading;
  loginButton.textContent = isLoading ? t("entering") : t("enter");
}

function showLoginError(message) {
  loginError.textContent = message;
}

function showMessage(element, message, type) {
  if (!element) {
    return;
  }

  element.className = type === "success" ? "feedback success" : "feedback warning";
  element.textContent = message;

  if (element.dataset.clearTimer) {
    clearTimeout(Number(element.dataset.clearTimer));
  }

  const timer = setTimeout(function () {
    element.textContent = "";
    element.className = "feedback";
    delete element.dataset.clearTimer;
  }, 5200);

  element.dataset.clearTimer = String(timer);
}


if (backToTopButton) {
  window.addEventListener("scroll", function () {
    backToTopButton.classList.toggle("hidden", window.scrollY < 650);
  });

  backToTopButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replaceAll("`", "&#096;");
}

function restoreUiSettings() {
  const settings = JSON.parse(localStorage.getItem("tribecaUiSettings") || "{}");

  state.lang = settings.language || "es";
  languageSelect.value = state.lang;

  const fontScale = settings.fontScale || "1";
  document.documentElement.style.setProperty("--base-size", fontScale);
  fontSizeSelect.value = fontScale;

  if (settings.darkMode) {
    document.body.classList.add("dark-mode");
  }

  const dyslexiaMode = settings.dyslexiaMode || "default";
  dyslexiaSelect.value = dyslexiaMode;
  applyDyslexiaMode(dyslexiaMode);

  soundEnabled = Boolean(settings.soundEnabled);
  if (chatSoundToggle) {
    chatSoundToggle.checked = soundEnabled;
  }
}

function saveUiSettings() {
  const settings = {
    fontScale: fontSizeSelect.value,
    darkMode: document.body.classList.contains("dark-mode"),
    dyslexiaMode: dyslexiaSelect.value,
    language: languageSelect.value,
    soundEnabled
  };

  localStorage.setItem("tribecaUiSettings", JSON.stringify(settings));
}

function applyDyslexiaMode(mode) {
  document.body.classList.remove("dyslexia-comic", "dyslexia-opendyslexic");

  if (mode === "comic") {
    document.body.classList.add("dyslexia-comic");
  }

  if (mode === "opendyslexic") {
    document.body.classList.add("dyslexia-opendyslexic");
  }
}


function openTeacherPanelWindow(panelId, titleKey) {
  if (!panelWindowModal || !panelWindowBody || !panelWindowTitle) {
    return;
  }

  const panel = document.getElementById(panelId);
  if (!panel) {
    return;
  }

  closeFloatingPanelWindow(true);
  closeTeacherPanelWindow(true);

  panelWindowBody.innerHTML = "";
  openedTeacherPanel = panel;
  openedTeacherPanelPlaceholder = document.createComment(`placeholder-${panelId}`);
  panel.parentNode.insertBefore(openedTeacherPanelPlaceholder, panel);
  panel.classList.remove("hidden");
  panel.classList.add("panel-in-window", "teacher-panel-in-window");
  panelWindowBody.appendChild(panel);
  panelWindowTitle.textContent = t(titleKey || "teacherTools");
  panelWindowModal.classList.remove("hidden");

  if (panelId === "teacherActivityPanel") {
    renderRecentActivity();
  }
  if (panelId === "teacherChatsPanel") {
    renderTeacherChatOverview();
  }
  if (panelId === "teacherGroupsPanel") {
    renderTeacherGroups();
  }
  if (panelId === "teacherAlertsPanel") {
    renderTeacherAlerts();
  }
  if (panelId === "teacherRecoveryPanel") {
    renderTeacherRecoveryRequests();
  }
  if (panelId === "teacherOverviewPanel") {
    renderTeacherOverview();
  }

  applyI18n();
}

function closeTeacherPanelWindow(addHidden = true) {
  if (!openedTeacherPanel) {
    return;
  }

  openedTeacherPanel.classList.remove("panel-in-window", "teacher-panel-in-window");
  if (addHidden) {
    openedTeacherPanel.classList.add("hidden");
  }

  if (openedTeacherPanelPlaceholder && openedTeacherPanelPlaceholder.parentNode) {
    openedTeacherPanelPlaceholder.parentNode.insertBefore(openedTeacherPanel, openedTeacherPanelPlaceholder);
    openedTeacherPanelPlaceholder.remove();
  }

  openedTeacherPanel = null;
  openedTeacherPanelPlaceholder = null;
}

function openGenericPanelWindow(panel, title, onOpen) {
  if (!panel || !panelWindowModal || !panelWindowBody || !panelWindowTitle) {
    return;
  }

  closeFloatingPanelWindow(true);
  closeTeacherPanelWindow(true);

  panelWindowBody.innerHTML = "";
  openedFloatingPanel = panel;
  openedFloatingPanelPlaceholder = document.createComment(`placeholder-${panel.id}`);
  panel.parentNode.insertBefore(openedFloatingPanelPlaceholder, panel);
  panel.classList.remove("hidden");
  panel.classList.add("panel-in-window");
  panelWindowBody.appendChild(panel);
  panelWindowTitle.textContent = title;
  panelWindowModal.classList.remove("hidden");

  if (typeof onOpen === "function") {
    onOpen();
  }

  applyI18n();
}

function openFloatingPanelWindow(panelKey) {
  if (!panelWindowModal || !panelWindowBody || !panelWindowTitle) {
    return;
  }

  let panelId = "";
  let title = "";

  if (panelKey === "calendar") {
    panelId = currentProfile && currentProfile.role === "teacher" ? "teacherCalendarPanel" : "studentCalendarPanel";
    title = t("calendar");
  }

  if (panelKey === "messages") {
    panelId = "communicationSection";
    title = t("messages");
  }

  if (panelKey === "school") {
    panelId = "studentSchoolPanel";
    title = t("schoolProfileTitle");
    renderStudentSchoolPanel();
  }

  if (panelKey === "notifications") {
    panelId = "notificationCenterPanel";
    title = t("notificationCenter");
  }

  if (panelKey === "profile") {
    panelId = "profilePanel";
    title = t("userProfile");
    renderProfilePanel();
  }

  if (!panelId) {
    return;
  }

  const panel = document.getElementById(panelId);
  if (!panel) {
    return;
  }

  closeFloatingPanelWindow(true);

  panelWindowBody.innerHTML = "";
  openedFloatingPanel = panel;
  openedFloatingPanelPlaceholder = document.createComment(`placeholder-${panelId}`);
  panel.parentNode.insertBefore(openedFloatingPanelPlaceholder, panel);
  panel.classList.remove("hidden");
  panel.classList.add("panel-in-window");
  panelWindowBody.appendChild(panel);
  panelWindowTitle.textContent = title;
  panelWindowModal.classList.remove("hidden");

  if (panelKey === "calendar") {
    if (currentProfile && currentProfile.role === "teacher") {
      renderTeacherCalendar();
    } else {
      renderStudentCalendar();
    }
  }

  if (panelKey === "messages") {
    renderMessages();
    updateUnreadBadges();
  }

  if (panelKey === "school") {
    renderStudentSchoolPanel();
  }

  if (panelKey === "notifications") {
    renderNotifications();
  }

  if (panelKey === "profile") {
    prepareProfileCards();
    moveQuickNeedCardToMessages();
  }

  applyI18n();
}

function closeFloatingPanelWindow(addHidden = true) {
  closeProfileCardWindow();
  closeTeacherPanelWindow(addHidden);

  if (!openedFloatingPanel) {
    if (panelWindowModal) {
      panelWindowModal.classList.add("hidden");
    }
    return;
  }

  openedFloatingPanel.classList.remove("panel-in-window");
  if (addHidden) {
    openedFloatingPanel.classList.add("hidden");
  }

  if (openedFloatingPanelPlaceholder && openedFloatingPanelPlaceholder.parentNode) {
    openedFloatingPanelPlaceholder.parentNode.insertBefore(openedFloatingPanel, openedFloatingPanelPlaceholder);
    openedFloatingPanelPlaceholder.remove();
  }

  openedFloatingPanel = null;
  openedFloatingPanelPlaceholder = null;

  if (panelWindowModal) {
    panelWindowModal.classList.add("hidden");
  }
}

function handlePanelLinkClick(event) {
  const target = event.currentTarget.dataset.openPanel;
  if (!target) {
    return;
  }

  event.preventDefault();
  openFloatingPanelWindow(target);
}

teacherPanelButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    openTeacherPanelWindow(button.dataset.teacherPanel, button.dataset.teacherTitleKey);
  });
});

[quickCalendarLink, quickUpcomingLink, quickMessagesLink, quickNotificationsLink].forEach(function (link) {
  if (link) {
    link.addEventListener("click", handlePanelLinkClick);
  }
});

if (closePanelWindow) {
  closePanelWindow.addEventListener("click", function () {
    closeFloatingPanelWindow(true);
  });
}

if (panelWindowModal) {
  panelWindowModal.addEventListener("click", function (event) {
    if (event.target === panelWindowModal) {
      closeFloatingPanelWindow(true);
    }
  });
}

function makeKeyboardClickable(element, handler) {
  if (!element) {
    return;
  }

  element.addEventListener("click", handler);
  element.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handler();
    }
  });
}

makeKeyboardClickable(studentBadgesCard, function () {
  openGenericPanelWindow(studentBadgesPanel, t("myBadges"), renderStudentBadgesDetail);
});

makeKeyboardClickable(studentDifficultSubjectsCard, function () {
  openGenericPanelWindow(studentDifficultSubjectsPanel, t("myDifficultSubjects"), renderDifficultSubjectsPanel);
});

makeKeyboardClickable(studentGradesCard, function () {
  if (gradeDateInput && !gradeDateInput.value) {
    gradeDateInput.value = formatDateKey(new Date());
  }
  openGenericPanelWindow(studentGradesPanel, t("myGrades"), renderGradeRecordsPanel);
});

if (difficultSubjectForm) {
  difficultSubjectForm.addEventListener("submit", async function (event) {
    event.preventDefault();
    await addDifficultSubjectForCurrentStudent();
  });
}

if (gradeRecordForm) {
  gradeRecordForm.addEventListener("submit", async function (event) {
    event.preventDefault();
    await addGradeRecordForCurrentStudent();
  });
}



if (markAllNotificationsReadButton) {
  markAllNotificationsReadButton.addEventListener("click", markAllNotificationsRead);
}

if (emailPrefsForm) {
  emailPrefsForm.addEventListener("submit", async function (event) {
    event.preventDefault();
    const selectedTypes = Array.from(emailPrefsTypes.querySelectorAll("input[type='checkbox']:checked")).map(input => input.value);
    const { error } = await supabaseClient.from("notification_email_preferences").upsert({
      profile_id: currentUserId,
      enabled: emailPrefsEnabled.checked,
      student_email: emailPrefsStudent.value.trim(),
      family_email: emailPrefsFamily.value.trim(),
      send_to: emailPrefsRecipient.value,
      frequency: emailPrefsFrequency.value,
      types: selectedTypes,
      updated_at: new Date().toISOString()
    });
    if (error) {
      console.error(error);
      showMessage(emailPrefsMessage, "No se pudieron guardar las preferencias.", "warning");
      return;
    }
    emailPreferences = await fetchEmailPreferences();
    renderEmailPreferences();
    showMessage(emailPrefsMessage, t("emailPrefsSaved"), "success");
  });
}

if (privacyPrefsForm) {
  privacyPrefsForm.addEventListener("submit", async function (event) {
    event.preventDefault();
    const { error } = await supabaseClient.from("privacy_authorizations").upsert({
      profile_id: currentUserId,
      platform_use: privacyPlatformUse.checked,
      email_contact: privacyEmailContact.checked,
      family_contact: privacyFamilyContact.checked,
      profile_image: privacyProfileImage.checked,
      updated_at: new Date().toISOString()
    });
    if (error) {
      console.error(error);
      showMessage(privacyPrefsMessage, "No se pudieron guardar las autorizaciones.", "warning");
      return;
    }
    privacyPreferences = await fetchPrivacyPreferences();
    showMessage(privacyPrefsMessage, t("privacyPrefsSaved"), "success");
  });
}

if (requestPasswordHelpButton) {
  requestPasswordHelpButton.addEventListener("click", async function () {
    const { error } = await supabaseClient.from("password_reset_requests").insert({ profile_id: currentUserId });
    if (error) {
      console.error(error);
      showMessage(passwordHelpMessage, "No se pudo enviar la solicitud.", "warning");
      return;
    }
    const teacher = contacts.find(item => item.role === "teacher") || contacts[0];
    if (teacher) {
      await createInternalNotification(teacher.id, t("passwordHelpRequests"), `${currentProfile.name} solicita ayuda para recuperar su contraseña.`, "password", "profile");
    }
    showMessage(passwordHelpMessage, t("passwordHelpSent"), "success");
  });
}

if (quickNeedText && quickNeedCounter) {
  quickNeedText.addEventListener("input", function () {
    quickNeedCounter.textContent = `${quickNeedText.value.length}/300`;
  });
}

if (quickNeedForm) {
  quickNeedForm.addEventListener("submit", async function (event) {
    event.preventDefault();
    const { error } = await supabaseClient.from("student_quick_help_requests").insert({
      profile_id: currentUserId,
      need_type: quickNeedType.value,
      body: quickNeedText.value.trim()
    });
    if (error) {
      console.error(error);
      showMessage(quickNeedMessage, "No se pudo enviar el aviso.", "warning");
      return;
    }
    const teacher = contacts.find(item => item.role === "teacher") || contacts[0];
    if (teacher) {
      await createInternalNotification(teacher.id, t("quickMessageTeacher"), `${currentProfile.name}: ${quickNeedText.value.trim() || readableQuickNeedType(quickNeedType.value)}`, "quick_need", "messages");
    }
    quickNeedForm.reset();
    quickNeedCounter.textContent = "0/300";
    showMessage(quickNeedMessage, t("quickNeedSent"), "success");
  });
}

if (toggleTeacherFeedButton && teacherChronologicalFeedPanel) {
  toggleTeacherFeedButton.addEventListener("click", function () {
    const expanded = teacherChronologicalFeedPanel.classList.toggle("is-expanded");
    teacherChronologicalFeedPanel.classList.toggle("is-collapsed", !expanded);
    toggleTeacherFeedButton.setAttribute("aria-expanded", String(expanded));
    toggleTeacherFeedButton.textContent = expanded ? "⌃" : "⌄";
  });
}

fontSizeSelect.addEventListener("change", function () {
  document.documentElement.style.setProperty("--base-size", fontSizeSelect.value);
  saveUiSettings();
});

btnDarkMode.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  saveUiSettings();
});

dyslexiaSelect.addEventListener("change", function () {
  applyDyslexiaMode(dyslexiaSelect.value);
  saveUiSettings();
});

languageSelect.addEventListener("change", function () {
  state.lang = languageSelect.value;
  applyI18n();
  saveUiSettings();

  if (openedFloatingPanel && panelWindowTitle) {
    panelWindowTitle.textContent = openedFloatingPanel.id === "communicationSection" ? t("messages") : (openedFloatingPanel.id === "notificationCenterPanel" ? t("notificationCenter") : t("calendar"));
  }

  if (currentUserId) {
    if (currentProfile && currentProfile.role === "teacher") {
      renderTeacherPosts();
      renderTeacherCalendar();
    } else {
      renderStudentDashboard();
    }
    renderMessages();
    renderChat();
    updateUnreadBadges();
    renderRightRailCalendar();
  }
});
