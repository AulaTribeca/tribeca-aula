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
    contact: "Contacto",
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
    contact: "Contacto",
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
    contact: "Contact",
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
    contact: "Contact",
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
    contact: "Kontakt",
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

  document.documentElement.lang = state.lang;

  if (currentUserId) {
    authButton.textContent = t("logoutAction");
  } else {
    authButton.textContent = t("loginAction");
  }
}

const loginForm = document.getElementById("loginForm");
const loginButton = document.getElementById("loginButton");
const loginError = document.getElementById("loginError");
const loginSection = document.getElementById("loginSection");
const authButton = document.getElementById("authButton");
const profileButton = document.getElementById("profileButton");
const quickNav = document.getElementById("quickNav");
const rightRail = document.getElementById("rightRail");

const fontSizeSelect = document.getElementById("fontSizeSelect");
const btnDarkMode = document.getElementById("btnDarkMode");
const dyslexiaSelect = document.getElementById("dyslexiaSelect");
const languageSelect = document.getElementById("languageSelect");

const profilePanel = document.getElementById("profilePanel");
const profileForm = document.getElementById("profileForm");
const profileNickname = document.getElementById("profileNickname");
const profileNewPassword = document.getElementById("profileNewPassword");
const profileRepeatPassword = document.getElementById("profileRepeatPassword");
const profileAvatarFile = document.getElementById("profileAvatarFile");
const profileAvatarPreview = document.getElementById("profileAvatarPreview");
const profileNamePreview = document.getElementById("profileNamePreview");
const avatarChoiceList = document.getElementById("avatarChoiceList");
const profileMessage = document.getElementById("profileMessage");

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

let teacherSubjects = [];
let teacherStudents = [];
let teacherPosts = [];
let teacherEvents = [];
let teacherBadges = [];
let teacherUnits = [];
let postTemplates = [];
let studentGroups = [];
let recentActivity = [];

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

let selectedAvatarType = "emoji";
let selectedAvatarValue = "💡";
let selectedAvatarFilePath = "";

let studentCalendarDate = new Date();
let teacherCalendarDate = new Date();
let railCalendarDate = new Date();
let refreshTimer = null;

const avatarChoices = [
  "💡", "📚", "🌟", "🌍", "🧠", "🎨", "🚀", "😎",
  "🐱", "🐶", "🦊", "🐼", "🦉", "🦋", "🌙", "☀️",
  "🍀", "🌸", "⚡", "🎯", "🧩", "🎧", "📝", "🔬",
  "🗺️", "🏆", "💎", "🪐", "🐝", "🧸", "🎮", "🎬"
];

const GALICIA_HOLIDAYS_2026 = new Set([
  "2026-01-01", "2026-01-06", "2026-03-19", "2026-04-02",
  "2026-04-03", "2026-05-01", "2026-06-24", "2026-07-25",
  "2026-08-15", "2026-10-12", "2026-12-08", "2026-12-25"
]);

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
    showLoginError("Usuario o contraseña incorrectos. Revisa que el usuario esté confirmado en Supabase.");
    return;
  }

  await loadUserData(data.user.id);
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
  profilePanel.classList.toggle("hidden");

  if (!profilePanel.classList.contains("hidden")) {
    profilePanel.scrollIntoView({ behavior: "smooth", block: "start" });
  }
});

async function logout() {
  if (currentUserId) {
    await updatePresence("offline");
  }

  await supabaseClient.auth.signOut();
  clearInterval(refreshTimer);
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
  document.body.classList.remove("logged-in");

  setLoggedOutUi();
}

async function loadUserData(userId) {
  currentUserId = userId;
  const profile = await fetchProfile(userId);

  if (!profile) {
    showLoginError("No se ha encontrado el perfil del usuario.");
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
  }
  await recordActivityEvent("login", {});
  communicationSection.classList.remove("hidden");
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
    .select("id, username, display_name, nickname, avatar_type, avatar_value, avatar_file_path, learning_settings, role, courses(name, stage)")
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
    course: data.courses ? data.courses.name : "Curso no asignado",
    level: data.courses ? data.courses.stage : "Etapa no asignada",
    learningSettings: data.learning_settings || []
  };
}

async function loadStudentPanel() {
  currentSubjects = await fetchStudentSubjects(currentProfile.id);
  currentSubjects = await addSignedCoverUrls(currentSubjects);
  currentPosts = await fetchStudentPosts();
  currentUnits = await fetchUnitsForSubjects(currentSubjects.map(subject => subject.id));
  currentEvents = await fetchStudentEvents();
  currentBadgeAwards = await fetchStudentBadgeAwards(currentProfile.id);
  currentStreak = await fetchCurrentStreak();

  renderStudentDashboard();
}

async function loadTeacherPanel() {
  teacherSubjects = await fetchAllSubjects();
  teacherSubjects = await addSignedCoverUrls(teacherSubjects);
  teacherStudents = await fetchAllStudents();
  teacherPosts = await fetchAllPosts();
  teacherUnits = await fetchUnitsForSubjects(teacherSubjects.map(subject => subject.id));
  postTemplates = await fetchPostTemplates();
  studentGroups = await fetchStudentGroups();
  recentActivity = await fetchRecentActivity();
  teacherEvents = await fetchAllEvents();
  teacherBadges = await fetchAllBadges();

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
    .select("id, subject_id, title, description, event_type, starts_at, created_by, created_at, subjects(name, code, icon)")
    .order("starts_at", { ascending: true });

  if (error) {
    console.error("Error cargando calendario:", error);
    return [];
  }

  return data || [];
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
    .select("id, username, display_name, nickname, role, courses(name, stage)")
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
    .select("id, subject_id, title, description, event_type, starts_at, created_by, created_at, subjects(name, icon)")
    .order("starts_at", { ascending: true })
    .limit(120);

  if (error) {
    console.error("Error cargando eventos:", error);
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
  studentCourse.textContent = `${currentProfile.level}, ${currentProfile.course}`;
  courseCardText.textContent = currentProfile.course;

  learningSettingsText.textContent = currentProfile.learningSettings.length > 0
    ? currentProfile.learningSettings.join(". ") + "."
    : t("noWorkSettings");

  renderBadges();
  renderProgress();
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

    card.innerHTML = `
      <div class="subject-cover" style="${backgroundStyle}">
        <span class="subject-course-pill">${escapeHtml(currentProfile.course)}</span>
        <span class="subject-icon-large" aria-hidden="true">${escapeHtml(subject.icon || "📘")}</span>
      </div>
      <div class="subject-card-body">
        <h3>${escapeHtml(subject.name)}</h3>
        <p>${escapeHtml(t("assignedPosts", { count: subjectPosts.length }))} · ${subjectUnits.length} unidad(es)</p>
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

function renderStudentSubjectSelect() {
  const options = currentSubjects.map(function (subject) {
    return `<option value="${subject.id}">${escapeHtml(subject.icon || "📘")} ${escapeHtml(subject.name)}</option>`;
  }).join("");

  studentEventSubject.innerHTML = options;
  if (dayEventSubject) {
    dayEventSubject.innerHTML = options;
  }
}

function renderStudentWall() {
  renderPostList(currentPosts.slice(0, 12), studentWallList, t("noPosts"), false);
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

  container.querySelectorAll(".delete-post-button").forEach(function (button) {
    button.addEventListener("click", async function () {
      await deletePost(button.dataset.postId);
    });
  });
}

function createPostCard(post, teacherMode) {
  const subjectIcon = post.subjects && post.subjects.icon ? post.subjects.icon : "📘";
  const subjectName = post.subjects && post.subjects.name ? post.subjects.name : t("subject");
  const unitName = post.subject_units && post.subject_units.title ? post.subject_units.title : "";
  const date = formatDate(post.created_at);

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
      <p>${escapeHtml(shorten(post.body, 190))}</p>
      <div class="post-actions">
        <button type="button" class="primary-button open-post-button" data-post-id="${post.id}">
          ${escapeHtml(t("open"))}
        </button>
        ${teacherMode ? `<button type="button" class="secondary-button delete-post-button" data-post-id="${post.id}">${escapeHtml(t("delete"))}</button>` : ""}
      </div>
    </article>
  `;
}
async function openPost(post) {
  const subjectWindowOpen = subjectModal && !subjectModal.classList.contains("hidden") && subjectModalBody;
  contentTitle.textContent = post.title;

  const content = post.content || {};
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
        ${currentProfile && currentProfile.role !== "teacher" ? `<button type="button" class="primary-button complete-test-button" data-post-id="${post.id}">Marcar test como completado</button>` : ""}
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

  targetBody.querySelectorAll(".complete-test-button").forEach(function (button) {
    button.addEventListener("click", async function () {
      await completeInteractiveTest(button.dataset.postId);
    });
  });

  if (currentProfile && currentProfile.role !== "teacher") {
    await recordActivityEvent("post_view", {
      postId: post.id,
      subjectId: post.subject_id,
      metadata: { title: post.title, post_type: post.post_type }
    });
    await registerLearningAction("post_view");
  }
}

async function completeInteractiveTest(postId) {
  if (!currentProfile || currentProfile.role === "teacher") {
    return;
  }

  const { error } = await supabaseClient.rpc("complete_interactive_test_post", {
    p_post_id: postId
  });

  if (error) {
    console.error(error);
    alert("No se pudo registrar la finalización del test. Ejecuta la migración SQL de esta actualización.");
    return;
  }

  await recordActivityEvent("interactive_test_completed", { postId });
  await registerLearningAction("interactive_test_completed");
  currentBadgeAwards = await fetchStudentBadgeAwards(currentProfile.id);
  renderBadges();
  alert("Test marcado como completado. Se ha actualizado tu progreso.");
}

async function deletePost(postId) {
  const post = teacherPosts.find(item => item.id === postId);

  const confirmed = confirm("¿Seguro que quieres borrar esta publicación?");
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
    alert("No se pudo borrar la publicación.");
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
    alert("Selecciona al menos una publicación.");
    return;
  }

  const confirmed = confirm(`¿Seguro que quieres borrar ${selectedIds.length} publicación(es)?`);
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
    alert("No se pudieron borrar las publicaciones seleccionadas.");
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
  if (!quickUpcomingBadge || !quickUpcomingLink) {
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

  quickUpcomingLink.setAttribute("href", currentProfile && currentProfile.role === "teacher" ? "#teacherCalendarPanel" : "#studentCalendarPanel");

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

    const classes = [
      "month-day",
      isMuted ? "is-muted" : "",
      isWeekend ? "is-weekend" : "",
      isHoliday ? "is-holiday" : "",
      hasImportant ? "has-important" : ""
    ].filter(Boolean).join(" ");

    const dayTooltip = createDayTooltip(dayEvents);

    html += `
      <button
        type="button"
        class="${classes}"
        data-day="${formatDateKey(day)}"
        title="${escapeAttribute(dayTooltip)}"
        aria-label="${escapeAttribute(dayTooltip || `Ver eventos del ${formatDateKey(day)}`)}">
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

  renderCalendarList(dayEvents, dayModalEvents, "No hay eventos para este día.");
  dayEventMessage.textContent = "";
  dayEventForm.reset();
  dayEventTimeInput.value = "18:00";

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
      </article>
    `;
  }).join("");
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

  studentEventForm.reset();
  await reloadCalendarData();
  await recordActivityEvent("calendar_event", { subjectId: studentEventSubject.value, metadata: { title: studentEventTitle.value.trim() } });
  await registerLearningAction("calendar_event");
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
    const ok = await createCalendarEventForCurrentUser({
      subjectId: dayEventSubject.value,
      eventType: dayEventType.value,
      title: dayEventTitleInput.value.trim(),
      description: dayEventDescriptionInput.value.trim(),
      startsAt,
      messageElement: dayEventMessage
    });

    if (!ok) {
      return;
    }

    await reloadCalendarData();
    if (currentProfile && currentProfile.role !== "teacher") {
      await recordActivityEvent("calendar_event", { subjectId: dayEventSubject.value, metadata: { title: dayEventTitleInput.value.trim() } });
    }
    const sourceEvents = currentProfile && currentProfile.role === "teacher" ? teacherEvents : currentEvents;
    openDayModal(selectedCalendarDay, sourceEvents);
    await registerLearningAction("calendar_event");
    showMessage(dayEventMessage, "Evento añadido.", "success");
  });
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
}

function createStudentCheckboxes(students) {
  if (!students || students.length === 0) {
    return `<p class="empty-state">Todavía no hay alumnado disponible.</p>`;
  }

  return students.map(function (student) {
    const courseName = student.courses ? student.courses.name : "Curso sin asignar";

    return `
      <label class="checkbox-card">
        <input type="checkbox" value="${student.id}" />
        <span>
          ${escapeHtml(student.nickname || student.display_name)}
          <small>${escapeHtml(courseName)} · ${escapeHtml(student.username)}</small>
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

function renderRecentActivity() {
  if (!recentActivityList) {
    return;
  }

  if (!recentActivity || recentActivity.length === 0) {
    recentActivityList.innerHTML = `<div class="empty-panel"><p>Todavía no hay actividad registrada.</p></div>`;
    return;
  }

  recentActivityList.innerHTML = recentActivity.map(function (item) {
    const profileName = item.profiles ? (item.profiles.nickname || item.profiles.display_name || item.profiles.username) : "Usuario";
    const postTitle = item.posts ? item.posts.title : "";
    const subjectName = item.subjects ? item.subjects.name : "";
    return `
      <article class="activity-card">
        <h3>${escapeHtml(profileName)} · ${escapeHtml(readableActivityType(item.action_type))}</h3>
        <p class="activity-meta">${escapeHtml(formatDateTime(item.created_at))}</p>
        <p>${postTitle ? `Publicación: ${escapeHtml(postTitle)}` : ""}${subjectName ? ` · Materia: ${escapeHtml(subjectName)}` : ""}</p>
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
    teacherChatOverview.innerHTML = `<div class="empty-panel"><p>No hay chats activos todavía.</p></div>`;
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
        <p class="chat-meta">Último mensaje: ${escapeHtml(formatDateTime(latest.created_at))}</p>
        <div class="chat-overview-messages">
          ${conversation.messages.slice(0, 6).reverse().map(function (message) {
            return `
              <div class="chat-overview-line">
                <strong>${escapeHtml(getProfileName(message.sender_id))}:</strong>
                ${escapeHtml(message.message_type === "nudge" ? "👋 Toque" : message.body)}
              </div>
            `;
          }).join("")}
        </div>
      </article>
    `;
  }).join("");
}

function readableActivityType(type) {
  const labels = {
    login: "entrada al aula",
    post_view: "consulta de publicación",
    calendar_event: "evento añadido",
    interactive_test_completed: "test completado",
    message_sent: "mensaje enviado"
  };

  return labels[type] || type || "actividad";
}

function renderTeacherBadges() {
  teacherBadge.innerHTML = teacherBadges.map(function (badge) {
    return `<option value="${badge.id}">${escapeHtml(badge.emoji)} ${escapeHtml(badge.name)}</option>`;
  }).join("");
}

function renderTeacherPosts() {
  renderPostList(teacherPosts, teacherPostsList, "Aún no se han creado publicaciones.", true);
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

  const content = {
    key_points: keyPoints,
    url,
    file_path: fileData.filePath,
    file_name: fileData.fileName,
    file_mime_type: fileData.fileMimeType
  };

  const { data: createdPost, error: postError } = await supabaseClient
    .from("posts")
    .insert({
      subject_id: teacherSubject.value,
      unit_id: unitId,
      created_by: currentUserId,
      title: teacherTitle.value.trim(),
      body: teacherBody.value.trim(),
      post_type: postType,
      content,
      is_published: true
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

  teacherPostForm.reset();
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

  const selectedStudentIds = teacherStudents.map(student => student.id);

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

  teacherBadgeForm.reset();
  showMessage(teacherBadgeMessage, "Insignia asignada correctamente.", "success");
});

async function loadCommunication() {
  contacts = await fetchContacts();
  messages = await fetchMessages();
  presence = await fetchPresence();
  unreadCount = countUnreadMail();

  if (openChatIds.length === 0 && contacts.length > 0) {
    openChatIds = [contacts[0].id];
    activeChatId = contacts[0].id;
  }

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
    messageInboxTab.innerHTML = `Recibidos <span class="folder-count">${inboxMessages.length}</span>${unreadInboxCount ? `<span class="folder-unread">${unreadInboxCount}</span>` : ""}`;
  }

  if (messageSentTab) {
    messageSentTab.innerHTML = `Enviados <span class="folder-count">${sentMessages.length}</span>`;
  }

  if (messageComposeTab) {
    messageComposeTab.textContent = "Redactar";
  }

  if (currentMessageView === "compose") {
    messageList.innerHTML = `
      <div class="gmail-empty compose-helper-card">
        <h3>Nuevo mensaje</h3>
        <p>Escribe el destinatario, el asunto y el contenido. El alumnado solo puede enviar mensajes a la profesora.</p>
      </div>
    `;
    if (deleteSelectedInboxMessagesButton) deleteSelectedInboxMessagesButton.classList.add("hidden");
    return;
  }

  let mail = currentMessageView === "sent" ? sentMessages : inboxMessages;
  mail = mail.slice(0, 60);

  const viewTitle = currentMessageView === "sent" ? "Enviados" : "Recibidos";
  const viewCount = mail.length;
  const selectedTools = currentMessageView === "inbox" ? `
    <div class="gmail-toolbar-right">
      <span>${unreadInboxCount} sin leer</span>
    </div>
  ` : `
    <div class="gmail-toolbar-right">
      <span>${viewCount} enviado(s)</span>
    </div>
  `;

  if (mail.length === 0) {
    messageList.innerHTML = `
      <div class="gmail-topbar">
        <div>
          <strong>${escapeHtml(viewTitle)}</strong>
          <small>${viewCount} mensaje(s)</small>
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
        <button type="button" id="closeOpenedMailButton" class="secondary-button">Cerrar</button>
      </div>
      <div class="gmail-message-meta">
        <span><strong>De:</strong> ${escapeHtml(getProfileName(openedMessage.sender_id))}</span>
        <span><strong>Para:</strong> ${escapeHtml(getProfileName(openedMessage.recipient_id))}</span>
      </div>
      <p class="gmail-message-body-full">${escapeHtml(openedMessage.body)}</p>
    </article>
  ` : "";

  messageList.innerHTML = `
    <div class="gmail-topbar">
      <div>
        <strong>${escapeHtml(viewTitle)}</strong>
        <small>${viewCount} mensaje(s)</small>
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
            ${currentMessageView === "inbox" ? `<input type="checkbox" class="gmail-message-select" value="${message.id}" aria-label="Seleccionar mensaje" />` : ""}
            <div class="gmail-avatar" aria-hidden="true">${escapeHtml(initials)}</div>
            <div class="gmail-message-main">
              <div class="gmail-message-head">
                <strong>${escapeHtml(person)}</strong>
                <span>${escapeHtml(formatDateTime(message.created_at))}</span>
              </div>
              <h3>${escapeHtml(message.subject || t("subjectLabel"))}</h3>
              <p>${escapeHtml(shorten(message.body, 190))}</p>
              <small>${currentMessageView === "sent" ? "Para" : "De"}: ${escapeHtml(person)}</small>
            </div>
            <div class="gmail-message-actions">
              ${unread ? `<span class="new-pill">Nuevo</span>` : ""}
              <button type="button" class="open-message-button" data-message-id="${message.id}">${unread ? "Abrir" : "Ver"}</button>
              ${currentMessageView === "inbox" ? `<button type="button" class="delete-message-button" data-message-id="${message.id}">Eliminar</button>` : ""}
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

    return `
      <button type="button" class="chat-tab ${id === activeChatId ? "active" : ""}" data-contact-id="${id}">
        <span class="status-dot ${presenceClass(id)}"></span>${escapeHtml(contact.name)}
      </button>
    `;
  }).join("");

  chatTabs.querySelectorAll(".chat-tab").forEach(function (button) {
    button.addEventListener("click", function () {
      activeChatId = button.dataset.contactId;
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
        <p>No hay conversaciones abiertas.</p>
      </div>
    `;
    return;
  }

  const chat = messages
    .filter(message => ["chat", "nudge"].includes(message.message_type))
    .filter(message =>
      (message.sender_id === currentUserId && message.recipient_id === selectedContactId)
      || (message.sender_id === selectedContactId && message.recipient_id === currentUserId)
    )
    .sort((a, b) => new Date(a.created_at) - new Date(b.created_at));

  if (chat.length === 0) {
    chatMessages.innerHTML = `
      <div class="empty-panel">
        <p>No hay mensajes de chat con este contacto.</p>
      </div>
    `;
    return;
  }

  chatMessages.innerHTML = chat.map(function (message) {
    const mine = message.sender_id === currentUserId;
    const reply = message.reply_to ? chat.find(item => item.id === message.reply_to) : null;

    if (message.message_type === "nudge") {
      return `
        <div class="chat-message nudge ${mine ? "mine" : ""}">
          <p>${mine ? "Has enviado un toque" : "👋 Te han enviado un toque"}</p>
          <small>${escapeHtml(formatDateTime(message.created_at))}</small>
        </div>
      `;
    }

    return `
      <div class="chat-message ${mine ? "mine" : ""}">
        ${reply ? `<div class="reply-box"><strong>${escapeHtml(getProfileName(reply.sender_id))}:</strong> ${escapeHtml(shorten(reply.body, 80))}</div>` : ""}
        <p><strong>${mine ? "Yo" : escapeHtml(getProfileName(message.sender_id))}</strong></p>
        <p>${escapeHtml(message.body)}</p>
        ${message.reaction_emoji ? `<span class="chat-reaction">${escapeHtml(message.reaction_emoji)}</span>` : ""}
        <div class="chat-message-actions">
          <button type="button" class="reply-chat-button" data-message-id="${message.id}">Responder</button>
          <button type="button" class="react-chat-button" data-message-id="${message.id}" data-emoji="👍">👍</button>
          <button type="button" class="react-chat-button" data-message-id="${message.id}" data-emoji="❤️">❤️</button>
          <button type="button" class="react-chat-button" data-message-id="${message.id}" data-emoji="🔥">🔥</button>
        </div>
        <small>${escapeHtml(formatDateTime(message.created_at))}</small>
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
    .subscribe();
}

function startRefreshTimer() {
  clearInterval(refreshTimer);
  if (realtimeChannel) {
    supabaseClient.removeChannel(realtimeChannel);
    realtimeChannel = null;
  }

  refreshTimer = setInterval(async function () {
    if (!currentUserId) {
      return;
    }

    await updatePresence(currentPresenceStatus);
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
      recentActivity = await fetchRecentActivity();
      renderTeacherOverview();
      renderRecentActivity();
      renderTeacherChatOverview();
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

  if (incoming.some(message => message.message_type === "nudge")) {
    playNotificationTone("nudge");
  } else if (incoming.length > 0) {
    playNotificationTone("chat");
  }

  const newOnlineIds = new Set(newPresence.filter(item => isPresenceActive(item)).map(item => item.profile_id));
  const someoneNewOnline = [...newOnlineIds].some(id => id !== currentUserId && !previousOnlineIds.has(id));

  if (someoneNewOnline) {
    playNotificationTone("presence");
  }

  previousChatMessageIds = new Set(newMessages.map(message => message.id));
  previousOnlineIds = newOnlineIds;
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

    const frequencies = {
      chat: 660,
      nudge: 880,
      presence: 520
    };

    oscillator.type = "sine";
    oscillator.frequency.value = frequencies[type] || 660;
    gain.gain.setValueAtTime(0.0001, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.12, audioContext.currentTime + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 0.22);

    oscillator.connect(gain);
    gain.connect(audioContext.destination);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.24);
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
profileForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  let avatarFilePath = selectedAvatarFilePath;
  const file = profileAvatarFile.files[0] || null;
  const newPassword = profileNewPassword.value.trim();
  const repeatedPassword = profileRepeatPassword.value.trim();

  if (newPassword || repeatedPassword) {
    if (newPassword !== repeatedPassword) {
      showMessage(profileMessage, t("passwordsDoNotMatch"), "warning");
      return;
    }

    if (newPassword.length < 6) {
      showMessage(profileMessage, t("passwordTooShort"), "warning");
      return;
    }
  }

  if (file) {
    if (!["image/png", "image/jpeg", "image/webp"].includes(file.type)) {
      showMessage(profileMessage, "La imagen debe ser PNG, JPG, JPEG o WEBP.", "warning");
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
      showMessage(profileMessage, "No se pudo subir la imagen de perfil.", "warning");
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

  if (newPassword) {
    const { error: passwordError } = await supabaseClient.auth.updateUser({
      password: newPassword
    });

    if (passwordError) {
      console.error(passwordError);
      showMessage(profileMessage, t("passwordUpdateError"), "warning");
      return;
    }

    profileNewPassword.value = "";
    profileRepeatPassword.value = "";
  }

  currentProfile = await fetchProfile(currentUserId);
  renderProfilePanel();

  if (currentProfile.role !== "teacher") {
    renderStudentDashboard();
  }

  showMessage(profileMessage, t("savedProfile"), "success");
});

function renderProfilePanel() {
  profileNickname.value = currentProfile.nickname || "";
  profileNamePreview.textContent = currentProfile.name;

  selectedAvatarType = currentProfile.avatarType || "emoji";
  selectedAvatarValue = currentProfile.avatarValue || "💡";
  selectedAvatarFilePath = currentProfile.avatarFilePath || "";

  renderAvatarChoices();
  renderProfileAvatar();
}

async function renderProfileAvatar() {
  if (currentProfile.avatarType === "upload" && currentProfile.avatarFilePath) {
    const { data } = await supabaseClient
      .storage
      .from(AVATAR_BUCKET)
      .createSignedUrl(currentProfile.avatarFilePath, 3600);

    if (data && data.signedUrl) {
      profileAvatarPreview.innerHTML = `<img src="${escapeAttribute(data.signedUrl)}" alt="Imagen de perfil" />`;
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
      profileAvatarPreview.textContent = selectedAvatarValue;
      renderAvatarChoices();
    });
  });
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
    important: "Aviso importante",
    excursion: "Excursión",
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
    return "Sin eventos";
  }

  return dayEvents
    .map(event => `${formatTimeOnly(event.starts_at)} · ${event.title}`)
    .join("\n");
}

function formatTimeOnly(value) {
  if (!value) {
    return "";
  }

  return new Intl.DateTimeFormat("es-ES", {
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

  streakToastText.textContent = `${days} días de racha`;
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
  loginButton.textContent = isLoading ? "Entrando..." : t("enter");
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
