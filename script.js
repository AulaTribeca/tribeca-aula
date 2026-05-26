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
    loginIntro: "La profesora crea publicaciones, apuntes, boletines, tests interactivos, videoclases, fechas, mensajes e insignias. El alumnado ve solo lo que tiene asignado.",
    username: "Nombre de usuario",
    password: "Contraseña",
    enter: "Entrar",
    testUsers: "Usuarios de prueba: demo_1eso_full y profesora.",
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
    loginIntro: "A profesora crea publicacións, apuntamentos, boletíns, tests interactivos, videoclases, datas, mensaxes e insignias. O alumnado ve só o que ten asignado.",
    username: "Nome de usuario",
    password: "Contrasinal",
    enter: "Entrar",
    testUsers: "Usuarios de proba: demo_1eso_full e profesora.",
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
    loginIntro: "The teacher creates posts, notes, worksheets, interactive tests, video classes, dates, messages and badges. Students only see what has been assigned to them.",
    username: "Username",
    password: "Password",
    enter: "Enter",
    testUsers: "Test users: demo_1eso_full and profesora.",
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
    loginIntro: "L’enseignante crée des publications, notes, fiches, tests interactifs, visiocours, dates, messages et badges. Les élèves ne voient que ce qui leur est attribué.",
    username: "Nom d’utilisateur",
    password: "Mot de passe",
    enter: "Entrer",
    testUsers: "Utilisateurs de test : demo_1eso_full et profesora.",
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
    loginIntro: "Nauczycielka tworzy wpisy, notatki, karty pracy, testy interaktywne, wideolekcje, terminy, wiadomości i odznaki. Uczniowie widzą tylko przypisane treści.",
    username: "Nazwa użytkownika",
    password: "Hasło",
    enter: "Wejdź",
    testUsers: "Użytkownicy testowi: demo_1eso_full i profesora.",
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

const contentPanel = document.getElementById("contentPanel");
const contentTitle = document.getElementById("contentTitle");
const contentBody = document.getElementById("contentBody");

const teacherPostForm = document.getElementById("teacherPostForm");
const teacherSubject = document.getElementById("teacherSubject");
const teacherPostType = document.getElementById("teacherPostType");
const teacherTitle = document.getElementById("teacherTitle");
const teacherBody = document.getElementById("teacherBody");
const teacherKeyPoints = document.getElementById("teacherKeyPoints");
const teacherUrl = document.getElementById("teacherUrl");
const teacherFile = document.getElementById("teacherFile");
const teacherStudentsList = document.getElementById("teacherStudentsList");
const teacherPostMessage = document.getElementById("teacherPostMessage");

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
const markMessagesReadButton = document.getElementById("markMessagesReadButton");

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

let teacherSubjects = [];
let teacherStudents = [];
let teacherPosts = [];
let teacherEvents = [];
let teacherBadges = [];

let contacts = [];
let messages = [];
let presence = [];
let unreadCount = 0;
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
  teacherEvents = await fetchAllEvents();
  teacherBadges = await fetchAllBadges();

  renderTeacherSubjects();
  renderTeacherStudents();
  renderTeacherBadges();
  renderTeacherPosts();
  renderTeacherCalendar();
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

async function fetchStudentPosts() {
  const { data, error } = await supabaseClient
    .from("posts")
    .select("id, subject_id, title, body, post_type, content, due_at, created_at, subjects(name, code, icon)")
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
    .select("id, subject_id, title, body, post_type, content, due_at, created_at, subjects(name, icon)")
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
        <p>${escapeHtml(t("assignedPosts", { count: subjectPosts.length }))}</p>
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
  studentEventSubject.innerHTML = currentSubjects.map(function (subject) {
    return `<option value="${subject.id}">${escapeHtml(subject.icon || "📘")} ${escapeHtml(subject.name)}</option>`;
  }).join("");
}

function renderStudentWall() {
  renderPostList(currentPosts.slice(0, 12), studentWallList, t("noPosts"), false);
}

function openSubject(subject) {
  const subjectPosts = currentPosts.filter(post => post.subject_id === subject.id);
  const subjectEvents = currentEvents.filter(event => event.subject_id === subject.id);

  subjectDetailTitle.textContent = `${subject.icon || "📘"} ${subject.name}`;
  contentPanel.classList.add("hidden");

  subjectDetailBody.innerHTML = `
    <p class="subject-description">${escapeHtml(subject.description || "")}</p>

    <div class="tabs" aria-label="Secciones de la asignatura">
      <div class="tab-list" role="tablist" aria-label="Contenido de ${escapeHtml(subject.name)}">
        <button type="button" class="tab-button active" role="tab" aria-selected="true" data-tab="wall">${escapeHtml(t("timelineWall"))}</button>
        <button type="button" class="tab-button" role="tab" aria-selected="false" data-tab="notes">${escapeHtml(t("postTypeNotes"))}</button>
        <button type="button" class="tab-button" role="tab" aria-selected="false" data-tab="tests">${escapeHtml(t("postTypeTest"))}</button>
        <button type="button" class="tab-button" role="tab" aria-selected="false" data-tab="worksheets">${escapeHtml(t("postTypeWorksheet"))}</button>
        <button type="button" class="tab-button" role="tab" aria-selected="false" data-tab="video">${escapeHtml(t("postTypeVideoClass"))}</button>
        <button type="button" class="tab-button" role="tab" aria-selected="false" data-tab="calendar">${escapeHtml(t("calendar"))}</button>
      </div>

      <div id="tabPanel" class="tab-panel" role="tabpanel"></div>
    </div>
  `;

  subjectDetail.classList.remove("hidden");

  const tabButtons = subjectDetailBody.querySelectorAll(".tab-button");
  const tabPanel = document.getElementById("tabPanel");

  tabButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      tabButtons.forEach(function (otherButton) {
        otherButton.classList.remove("active");
        otherButton.setAttribute("aria-selected", "false");
      });

      button.classList.add("active");
      button.setAttribute("aria-selected", "true");
      contentPanel.classList.add("hidden");

      renderSubjectTab(button.dataset.tab, subjectPosts, subjectEvents, tabPanel);
    });
  });

  renderSubjectTab("wall", subjectPosts, subjectEvents, tabPanel);
  subjectDetail.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderSubjectTab(tabName, subjectPosts, subjectEvents, tabPanel) {
  const filterMap = {
    notes: "notes",
    tests: "interactive_test",
    worksheets: "worksheet",
    video: "video_class"
  };

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
  const date = formatDate(post.created_at);

  return `
    <article class="post-card">
      <div class="post-topline">
        ${teacherMode ? `<input type="checkbox" class="post-select-checkbox" value="${post.id}" aria-label="Seleccionar publicación" />` : ""}
        <span class="post-type">${escapeHtml(readablePostType(post.post_type))}</span>
        <span class="post-subject">${escapeHtml(subjectIcon)} ${escapeHtml(subjectName)}</span>
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
      `;
    } else if (post.post_type === "video_class") {
      html += `
        <a class="external-link" href="${escapeHtml(content.url)}" target="_blank" rel="noopener noreferrer">
          ${escapeHtml(t("enterVideoClass"))}
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

  contentBody.innerHTML = html;
  contentPanel.classList.remove("hidden");
  contentPanel.scrollIntoView({ behavior: "smooth", block: "start" });

  if (currentProfile && currentProfile.role !== "teacher") {
    await registerLearningAction("post_view");
  }
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
}

function renderRightRailCalendar() {
  const sourceEvents = currentProfile && currentProfile.role === "teacher" ? teacherEvents : currentEvents;
  renderMonthCalendar(sourceEvents, railMonthGrid, railMonthTitle, railCalendarDate, true);
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

    html += `
      <div class="${classes}">
        <div class="month-number">${day.getDate()}</div>
        ${visibleEvents.map(event => compact
          ? `<span class="month-event ${calendarEventClass(event)}" title="${escapeAttribute(event.title)}"></span>`
          : `<span class="month-event ${calendarEventClass(event)}">${escapeHtml(shorten(event.title, 18))}</span>`
        ).join("")}
      </div>
    `;
  }

  gridElement.innerHTML = html;
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

  const { error } = await supabaseClient.rpc("create_personal_calendar_event", {
    p_subject_id: studentEventSubject.value,
    p_title: studentEventTitle.value.trim(),
    p_description: studentEventDescription.value.trim(),
    p_starts_at: new Date(studentEventDate.value).toISOString()
  });

  if (error) {
    console.error(error);
    showMessage(studentEventMessage, "No se pudo crear el evento personal. Ejecuta la migración SQL de esta actualización.", "warning");
    return;
  }

  studentEventForm.reset();
  currentEvents = await fetchStudentEvents();
  renderStudentCalendar();
  renderRightRailCalendar();
  await registerLearningAction("calendar_event");
  showMessage(studentEventMessage, "Evento personal añadido.", "success");
});
function renderTeacherSubjects() {
  const options = teacherSubjects.map(function (subject) {
    return `<option value="${subject.id}">${escapeHtml(subject.icon || "📘")} ${escapeHtml(subject.name)}</option>`;
  }).join("");

  teacherSubject.innerHTML = options;
  teacherEventSubject.innerHTML = options;
  coverSubjectSelect.innerHTML = options;
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

function renderTeacherBadges() {
  teacherBadge.innerHTML = teacherBadges.map(function (badge) {
    return `<option value="${badge.id}">${escapeHtml(badge.emoji)} ${escapeHtml(badge.name)}</option>`;
  }).join("");
}

function renderTeacherPosts() {
  renderPostList(teacherPosts, teacherPostsList, "Aún no se han creado publicaciones.", true);
}

teacherPostForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  const selectedStudentIds = getCheckedStudentIds(teacherStudentsList);

  if (selectedStudentIds.length === 0) {
    showMessage(teacherPostMessage, "Selecciona al menos un alumno o alumna.", "warning");
    return;
  }

  const postType = teacherPostType.value;
  const url = teacherUrl.value.trim();

  if ((postType === "interactive_test" || postType === "video_class") && !url) {
    showMessage(teacherPostMessage, "Para este tipo de publicación debes pegar un enlace.", "warning");
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
  renderMessages();
  renderChatTabs();
  renderChat();
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
    .select("id, sender_id, recipient_id, message_type, subject, body, is_read, reply_to, reaction_emoji, created_at")
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
}

function renderContactSelectors() {
  const options = contacts.map(function (contact) {
    return `<option value="${contact.id}">${presenceLabel(contact.id)} ${escapeHtml(contact.name)}</option>`;
  }).join("");

  messageRecipient.innerHTML = options;
  chatContact.innerHTML = options;
}

function renderMessages() {
  const mail = messages.filter(message => message.message_type === "mail").slice(0, 16);

  if (mail.length === 0) {
    messageList.innerHTML = `
      <div class="empty-panel">
        <h3>${escapeHtml(t("messages"))}</h3>
        <p>${escapeHtml(t("noMessages"))}</p>
      </div>
    `;
    return;
  }

  messageList.innerHTML = mail.map(function (message) {
    const sender = getProfileName(message.sender_id);
    const recipient = getProfileName(message.recipient_id);
    const unread = message.recipient_id === currentUserId && !message.is_read;

    return `
      <article class="post-card ${unread ? "unread-message" : ""}">
        <div class="post-topline">
          <span class="post-type">${escapeHtml(t("messages"))}${unread ? " · NUEVO" : ""}</span>
          <span class="post-date">${escapeHtml(formatDateTime(message.created_at))}</span>
        </div>
        <h3>${escapeHtml(message.subject || t("subjectLabel"))}</h3>
        <p><strong>De:</strong> ${escapeHtml(sender)} · <strong>Para:</strong> ${escapeHtml(recipient)}</p>
        <p>${escapeHtml(message.body)}</p>
      </article>
    `;
  }).join("");
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

  messageForm.reset();
  messages = await fetchMessages();
  unreadCount = countUnreadMail();
  renderMessages();
  updateUnreadBadges();

  showMessage(messageStatus, t("sentMessage"), "success");
});

markMessagesReadButton.addEventListener("click", async function () {
  const unreadIds = messages
    .filter(message => message.message_type === "mail" && message.recipient_id === currentUserId && !message.is_read)
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
  renderMessages();
  updateUnreadBadges();
  showMessage(messageStatus, t("readMarked"), "success");
});

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

function startRefreshTimer() {
  clearInterval(refreshTimer);

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
  }, 7000);
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
    video_class: t("postTypeVideoClass")
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
  element.className = type === "success" ? "feedback success" : "feedback warning";
  element.textContent = message;
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
