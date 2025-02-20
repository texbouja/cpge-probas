var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "sec-generalites",
  "level": "1",
  "url": "sec-generalites.html",
  "type": "Section",
  "number": "1.1",
  "title": "Espaces de probabilité",
  "body": " Espaces de probabilité   Dans tout le chapitre désignera un ensemble non vide. est une ensemble non vide qui sera souvent utilisé comme ensemble d'indices.  On notera , resp. , l'ensemble de toutes les parties de , resp. l'ensemble de toutes les parties finies de .  Si est une partie de on notera son complémentaire dans .    Tribus    On appelle tribu de tout ensemble de parties de tel que :   ;  si alors ;  si est une suite d'éléments de alors ;  Si est une tribu de alors le couple est dit un espace probabilisable. Tout élément de est dit un événement de l'espace .     Si est une tribu de alors    ;    si est une suite d'éléments de alors .           est une tribu de . C'est la plus petite tribu de .     est une tribu de . C'est la plus grande tribu de .    Si est une partie de alors est une tribu de . C'est la plus petite tribu de contenant .          Si est une famille de tribus de alors est une tribu de .    Soit un ensemble de parties de . L'intersubsection de toutes les tribus de contenant est une tribu de . Elle est appelée la tribu engendrée par . On la notera .        La tribu engendrée par l'ensemble des segments de est appelée la tribu de Borel de . On la note .        Soient et deux ensembles de parties de . Si alors .    Tout intervalle de peut être écrit comme la réunion d'une suite de segments. La tribu de Borel de contient donc tous les intervalles de . Comme tout ouvert de est une union au plus dénombrable d'intervalles ouverts, la tribu de Borel de contient tous les ouverts de . Elle contient donc aussi tous les fermés de .    En général si est un espace vectoriel normé de dimension finie alors la tribu de Borel de , notée est par définition la tribu engendrée par les boules fermées de . Elle contient alors tous les ouverts et tous les fermés de et est de ce fait indépendante de la norme choisie sur .        Soit un ensemble au plus dénombrable de parties de qui forment une partition de . Alors     Posons et montrons que est une tribu de .   Comme alors .    Si alors .    Soit est une suite d'éléments de et posons pour tout , alors .    est donc bien une tribu de . Elle contient et toute tribu qui contient tous les ensembles contient tous les éléments de . C'est donc la plus petite tribu de contenant . Soit .      Si l'ensemble est au plus dénombrable alors Autrement dit la seule tribu de qui contient tous les singletons de est .     Si est infini non dénombrable alors la tribu engendrée par les singletons de est définie par la condition En particulier toute tribu de qui contient tous les singletons de contient et donc contient toutes la parties dénombrables de .  C'est le cas par exemple de la tribu de Borel de tout espace vectoriel normé de dimension finie (les singletons sont des boules fermées).    (tribu induite)   Soit une tribu de . Pour toute élément de , l'ensemble est une tribu de . On l'appelle la tribu induite par sur .      Probabilités   Dans toute cette subsection, désignera un espace probabilisable.     On appelle probabilité de l'espace toute application telle que :    ;    si est une suite d'éléments de deux à deux disjoints alors .   Si est un probabilité de alors le triplet est dit un espace probabilisé.     Expérimentalement, est une approximation de la fréquence de réalisation de l'événement quand on répète l'expérience un grand nombre de fois :  étant le nombre de fois où l'événement se réalise quand on répète l'expérience aléatoire fois, pour très grand.    Dans la définition précédente, on a utilisé la notation pour désigner la somme de la série que celle-ci soit convergente ou non avec la convention que la somme d'une série divergente à termes positifs est . Ce qui pose évidemment un problème de consistence puisque est sensé être dans l'intervalle .  En fait avec les deux axiomes de la définition, la famille est toujours sommable et sa somme est dans . Voilà comment le justifier :   En posant pour tout , le deuxième axiome aboutit à .    Si sont des événements deux à deux disjoints en posant pour tout , le deuxième axiome fournit .    Soit une suite d'éléments de deux à deux disjoints. On a alors pour tout  La série à termes réels positifs est donc convergente et sa somme est dans .        Soit une probabilité sur . Alors :    ;     pour tout ;    Si alors et pour tout ;     pour tout ;     pour toute suite d'éléments de .     si est une famille au plus dénombrable d'éléments deux à deux disjoints de .       Les propriétés 1, 2 et 3 sont des conséquences immédiates des axiomes de la définition de probabilité et de la remarque précédente.   Soit une suite d'éléments de et posons et pour tout . Les sont deux à deux disjoints et avec pour tout . On a donc .    Soit une famille au plus dénombrable d'éléments de deux à deux disjoints. Si est fini alors c'est une conséquance de la remarque précédente. Si est infini alors il existe une bijection entre et et il suffit de poser pour tout pour conclure grâce au théorème de permutation des termes pour les familles sommables.        (de continuité monotone)      Soit une suite croissante d'éléments de . Alors .    Soit une suite décroissante d'éléments de . Alors .          On pose et pour tout . Les événements sont deux à deux disjoints et . On a donc     On suppose que est décroissante. Alors est croissante et on peut ainsi écrire          Soit une suite quelconque d'éléments de . Alors            Pour le premier point on pose pour tout .La suite et croissante et . On applique alors la formule des probabilites continues.  Pour le second on pose . La suite est décroissante et on peut appliquer le théorème de continuité monotone sachant que .      On appelle système complet d'événements (SCE) de toute famille au plus dénombrables d'éléments qui forme une partition de .     (exemples courants de SCE)      Pour tout événement , est un SCE de .    Si est au plus dénombrable, alors est un SCE de .    SCE généré par une variable aléatoire discrète (important)  si est une application définie sur telle que soit au plus dénombrable et pour tout alors est un SCE de .        (Formule des probabilités totales)   Soit un SCE de . Alors pour tout , on a         Ce résultat reste valable si les événements sont deux à deux disjoints, sans former une partition de , à condition que     Cette formule est extrêmement utile. Elle stipule que si on sait calculer les probabilités des événements d'un SCE alors on peut calculer la probabilité de n'importe quel événement.       (exemples génériques d'utilisation de la formule des probabilités totales)     si on fixe un événement alors     Si sont des événements quelconques alors     Le théorème suivant donne une application importante de la formule des probabilités totales.        On suppose que est au plus dénombrable et on le munit de la tribu .   Soit une probabilité de . Pour tout , on a  est entièrement détérminée par les probabilités des singletons .    Soit une famille de nombres réels positifs de somme . Alors il existe une unique probabilité sur telle que         Si est au plus dénombrable alors pour toute famille sommable de nombre réels positifs de somme , on peut définir une probabilté sur en posant Cette remarque peut avoir des applications analytiques intéressantes même dans des cas où la probabilité ne correspond pas réellement à une expérience aléatoire.     On considère un événemnt de probabilité non nulle. L'application définie sur par est une probabilité de . La probabilité est aussi notée et on l'appelle probailité de sachant .    On a bien et pour toute suite d'éléments de deux à deux disjoints, on a     Justification de la définition  la probabilité de « sachant » est la probabilité de réalisation d'un résultat favorable à quand on ne retient que les résultats favorables à . C'est une approximation du rapport des fréquences de réalisation des événements et dans une série d'expériences. . D'où la définition         Si alors par convention, pour tout , . Ce choix s'explique par le fait que tout se passe comme si l'événement n'avait pas eu lieu.  Avec cette convention on peut toujours écrire     Sachant que est une probabilité on peut lui appliquer toutes propriétés vues précédemment. Par exemple        On parle de «probabilité de sachant », jamais de «l'événement» qui n'a pas de sens en théorie des probabilités.     Soit un SCE de . Alors      (Formules de Bayes)      Soient et deux événements de probabilités non nulles. Alors     Soit un SCE de et un événement de probabilité non nulle. Alors pour tout , on a         (générique d'utilisation de la formule de Bayes)  Une chaine de production industrielle contient machines identiques mais avec des taux de production de pièces défectueuses différents. Le taux pour la machine numéro est .  On prélève une pièce au hasard parmi un lot de pièces produite par la chaîne et on constate qu'elle est défectueuse. Quelle est la probabilité que cette pièce provienne de la machine numéro ?   Si on note l'événement «la pièce est défectueuse» et l'événement «la pièce provient de la machine numéro » alors on cherche . Celle-ci est donnée par la formule de Bayes : car et pour tout .      Indépendance des événements   Dans tout la suite, désignera un espace probabilisé.        Deux événements et de sont dits indépendants si .    Une famille d'événements de est dite mutuellement indépendante (MI) si pour toute partie finie de ,            Indépendance de deux événements   est indépendant de si la probabilité de réalisation de sachant est la même que celle de réalisation de : . Ce qui revient à     Indépendance mutuelle  Des évéments , sont mutuelement indépendants si et seulement si pour tout et pour toute partie finie ne contenant pas on a c'est à dire si et seulement si la réalisation de chaque événement est indépendante de la réalisation simultanée d'un ou plusieurs évenements lorsque .          Si ou alors tout événement est indépendant de .    deux événements incompatibles et ne peuvent être indépendants que si ou .    Si est une famille MI alors est MI pour toute partie de . En particulier les événements sont deux à deux indépendants.    Soit est une famille d'évéments MI. Si on lui ajoute des événements presques sûrs ou négligeable alors les événements de la nouvelle famille sont MI.    Dans un SCE les événements ne peuvent être deux à deux indépendants, et a fortiori MI, que s'il existe tel que .        Si et sont des événements indépendants alors et sont indépendants, et sont indépendants et et sont indépendants.      Soit une famille MI d'événements de .   Soit une partie de . On pose si et si . Alors la famille est MI (en particulier est MI).    Lemme des coalitions  Soit une famille de parties deux à deux disjointes de . On pose pour tout , . Alors la famille est MI.        (Formule des compléments)   Soient des événements de . Alors     On écrit et on raisonne par récurrnece en appliquant l'hypothèse de récurrence avec la probailité       Modélisation de phénomènes aléatoires  Pour modéliser une expérience aléatoire on se place dans un ensemble qui contient tous les résultats possibles de l'expérience et on choisi une tribu de dans laquelle on peut exprimer tous les «événements» qui nous intéressent. Il reste ensuite à définir une probabilité sur cette tribu qui rend compte de la fréquence de réalisation de ces événements.  On adopte alors le vocabulaire suivant :    est dit l'univers de l'expérience ;    pour une instance de l'expérience, un évenement se réalise si le résultat obtenu est dans ;    un événement est dit presque sûr si et négligeable si ;    deux événements et sont dits incompatibles si ;      (signification de certains événements courants)  Soit une suite quelconque d'événements.    est l'événement «au moins un des événements se réalise» ;     est l'événement «tous les événements se réalisent» ;     est l'événement «les événements se réalisent tous à partir d'un certain rang pour pour au moins un indice ». La probabilité de cet événement est      est l'événement «l'événement se réalise pour une infinité d'indices ». La probabilité de cet événement est       Deux approches sont en fait possibles pour modéliser une expérience aléatoire :   Définir un espace où représente exactement l'ensemble des résultats possibles de l'expérience.    La précédente méthode risque d'être inadéquate si certains événements qui nous intéresse sont inexprimables dans la tribu considérée. C'est pour cela qu'en général on préfère se placer dans un espace probabilisable où est beaucoup plus large et on modélise l'expérience non pas avec mais avec une application définie sur qu'on appellera «variable aléatoire». L'avantage est qu'on peut combiner entre les résultats de différentes expériences aléatoires.      Cas où l'univers est au plus dénombrable  Dans la pratique si l'ensemble qui contient les résultats de l'expérience est au plus plus dénombrable alors on le munit de la tribu de telle sorte que tout ensemble formé de résultats possibles de l'expérience soit un événement. Ce choix de tribu n'est pas adéquat lorsque l'ensemble des résultats est non dénombrable car cela pose des difficultés insurmontables pour définir une probabilité sur .    Lancer un dé  On lance un dé à 6 faces. On peut modéliser cette expérience par et . On peut définir une probabilité sur en posant pour tout .    Lancer deux dés  On lance deux dés à 6 faces. On peut modéliser cette expérience par et . On peut définir une probabilité sur en posant pour tout .  Si on s'intéresse à l'événement : «la somme des résultats est paire», on peut créer un espace spécifique sous la forme et y adjoindre la probabilité adéquate ou bien on peut rester dans l'univers et définir la variable aléatoire sur en posant pour tout . On peut alors exprimer l'événement par     Suite de lancers d'une pièce de monnaie  On lance indéfiniment une piece de monnaie. Si on ne s'intéresse qu'au numéro du premier lancer qui donne «face» alors peut modéliser cette expérience par et . On peut définir une probabilité sur en posant pour tout .  Mais dans ce cas les événements «obtenir trois face successivement au moins une fois» ou «obtenir face une infinité de fois» ne peuvent être exprimés dans .  On peut alors se placer dans l'espace beaucoup plus vaste . Le résultat de chaque séquence infinie de lancers est modélisé par une suite de zéros et de uns. C'est un ensemble non dénombrable et y définir une tribu sur laquelle on doit ensuite définir une probabilité est non aisé. L'approche peut être la suivante : on identifie une famille d'événements élémentaires avec lesquels on peut construire d'autre événements plus complexes et qui couvrent nos besoins et on n'aura qu'à se placer dans la tribu engendrée par ces événements élémentaires.  Par exemple, on peut considérer pour tout l'événement : «le lancer donne face», ou encore On peut alors exprimer   pour tout  en particulier est l'événement «ne jamais obtenir face»    l'événement «le premier face apparaît au lancer» par     l'événement «obtenir face une infinité de fois» par .    l'événement «obtenir trois faces successivement une infinité de fois» par         Activités    On lance indéfiniment une piece de monnaie non équilibrée. La probabilité d'obtenir face est et les lancers sont indépendants.    Quelle est la probabilité pour que le numéro du premier lancer qui donne face soit pair ? Dans quel cas cette probabilité est-elle égale à celle que le numéro du premier face soit impaire ?   On note cet événement et l'événement «le numéro du premier lancer qui donne face est ». Alors , réunion d'événements deux à deux disjoints. On a donc Par ailleur si et seulement si . Ce qui équivaut à ou encore à .  On constate qu'en général sans jamais toucher ces valeurs extrêmes lorsque varie dans . La probabilité que le premier face ait un numéro impaire est toujours plus grande que celle que ce numéro soit paire et on n'approche d'un équilibre des deux probabilités que si est presque nul, c'est à dire quand il est presque impossible d'obtenir face.  C'est un comportement contre-intuitif. L'intuition pousse plutôt vers sous pretexte qu'il y a «autant de nombres paires que de nombres impaires».    Quelle est la probabilité pour que les numéros de tous les lancers qui donnent face soient pairs ?   On note l'evénement «tous les lancers qui donnent face sont pairs». est un SCE donc selon la formule des probabilité totales Pusique ne se réalise pas si un événement se réalise alors pour tout et donc      Calcul de l'ndicatrice d'Euler   On fixe un entier et on note ses diviseurs premiers. On pose et pour tout diviseur de  On munit de la probabilité uniforme .   Calculer .   Montrer que les événements sont mutuellement indépendants.   Juste pour le test du formatage de la reponse    Retrouver la formule    Juste pour le test du formatage     Formule de Weierstrass   On fixe un réel . On note le nombre premier par ordre croissant et on définit la probabilité sur par On note pour tout , l'ensemble des multiple de .   Justifier que définit bien une probabilité sur .    Calculer pour tout     Montrer que les événements sont mutuellement indépendants.    En déduire que         "
},
{
  "id": "def-tribu",
  "level": "2",
  "url": "sec-generalites.html#def-tribu",
  "type": "Définition",
  "number": "1.1",
  "title": "",
  "body": "  On appelle tribu de tout ensemble de parties de tel que :   ;  si alors ;  si est une suite d'éléments de alors ;  Si est une tribu de alors le couple est dit un espace probabilisable. Tout élément de est dit un événement de l'espace .   "
},
{
  "id": "subsec-tribu-3",
  "level": "2",
  "url": "sec-generalites.html#subsec-tribu-3",
  "type": "Remarque",
  "number": "1.2",
  "title": "",
  "body": " Si est une tribu de alors    ;    si est une suite d'éléments de alors .     "
},
{
  "id": "subsec-tribu-4",
  "level": "2",
  "url": "sec-generalites.html#subsec-tribu-4",
  "type": "Exemple",
  "number": "1.3",
  "title": "",
  "body": "     est une tribu de . C'est la plus petite tribu de .     est une tribu de . C'est la plus grande tribu de .    Si est une partie de alors est une tribu de . C'est la plus petite tribu de contenant .     "
},
{
  "id": "subsec-tribu-5",
  "level": "2",
  "url": "sec-generalites.html#subsec-tribu-5",
  "type": "Proposition",
  "number": "1.4",
  "title": "",
  "body": "    Si est une famille de tribus de alors est une tribu de .    Soit un ensemble de parties de . L'intersubsection de toutes les tribus de contenant est une tribu de . Elle est appelée la tribu engendrée par . On la notera .     "
},
{
  "id": "def-tborel",
  "level": "2",
  "url": "sec-generalites.html#def-tborel",
  "type": "Définition",
  "number": "1.5",
  "title": "",
  "body": "  La tribu engendrée par l'ensemble des segments de est appelée la tribu de Borel de . On la note .   "
},
{
  "id": "subsec-tribu-7",
  "level": "2",
  "url": "sec-generalites.html#subsec-tribu-7",
  "type": "Remarque",
  "number": "1.6",
  "title": "",
  "body": "    Soient et deux ensembles de parties de . Si alors .    Tout intervalle de peut être écrit comme la réunion d'une suite de segments. La tribu de Borel de contient donc tous les intervalles de . Comme tout ouvert de est une union au plus dénombrable d'intervalles ouverts, la tribu de Borel de contient tous les ouverts de . Elle contient donc aussi tous les fermés de .    En général si est un espace vectoriel normé de dimension finie alors la tribu de Borel de , notée est par définition la tribu engendrée par les boules fermées de . Elle contient alors tous les ouverts et tous les fermés de et est de ce fait indépendante de la norme choisie sur .     "
},
{
  "id": "prop-sigmatrib",
  "level": "2",
  "url": "sec-generalites.html#prop-sigmatrib",
  "type": "Proposition",
  "number": "1.7",
  "title": "",
  "body": "  Soit un ensemble au plus dénombrable de parties de qui forment une partition de . Alors     Posons et montrons que est une tribu de .   Comme alors .    Si alors .    Soit est une suite d'éléments de et posons pour tout , alors .    est donc bien une tribu de . Elle contient et toute tribu qui contient tous les ensembles contient tous les éléments de . C'est donc la plus petite tribu de contenant . Soit .   "
},
{
  "id": "prop-tribdisc",
  "level": "2",
  "url": "sec-generalites.html#prop-tribdisc",
  "type": "Corollaire",
  "number": "1.8",
  "title": "",
  "body": "  Si l'ensemble est au plus dénombrable alors Autrement dit la seule tribu de qui contient tous les singletons de est .   "
},
{
  "id": "subsec-tribu-10",
  "level": "2",
  "url": "sec-generalites.html#subsec-tribu-10",
  "type": "Remarque",
  "number": "1.9",
  "title": "",
  "body": " Si est infini non dénombrable alors la tribu engendrée par les singletons de est définie par la condition En particulier toute tribu de qui contient tous les singletons de contient et donc contient toutes la parties dénombrables de .  C'est le cas par exemple de la tribu de Borel de tout espace vectoriel normé de dimension finie (les singletons sont des boules fermées).  "
},
{
  "id": "subsec-tribu-11",
  "level": "2",
  "url": "sec-generalites.html#subsec-tribu-11",
  "type": "Proposition",
  "number": "1.10",
  "title": "(tribu induite).",
  "body": " (tribu induite)   Soit une tribu de . Pour toute élément de , l'ensemble est une tribu de . On l'appelle la tribu induite par sur .   "
},
{
  "id": "subsec-probabilite-2",
  "level": "2",
  "url": "sec-generalites.html#subsec-probabilite-2",
  "type": "Notation",
  "number": "1.11",
  "title": "",
  "body": " Dans toute cette subsection, désignera un espace probabilisable.  "
},
{
  "id": "def-probabilite",
  "level": "2",
  "url": "sec-generalites.html#def-probabilite",
  "type": "Définition",
  "number": "1.12",
  "title": "",
  "body": "  On appelle probabilité de l'espace toute application telle que :    ;    si est une suite d'éléments de deux à deux disjoints alors .   Si est un probabilité de alors le triplet est dit un espace probabilisé.   "
},
{
  "id": "subsec-probabilite-4",
  "level": "2",
  "url": "sec-generalites.html#subsec-probabilite-4",
  "type": "Explication",
  "number": "1.1.2.1",
  "title": "",
  "body": " Expérimentalement, est une approximation de la fréquence de réalisation de l'événement quand on répète l'expérience un grand nombre de fois :  étant le nombre de fois où l'événement se réalise quand on répète l'expérience aléatoire fois, pour très grand.  "
},
{
  "id": "subsec-probabilite-5",
  "level": "2",
  "url": "sec-generalites.html#subsec-probabilite-5",
  "type": "Remarque",
  "number": "1.13",
  "title": "",
  "body": " Dans la définition précédente, on a utilisé la notation pour désigner la somme de la série que celle-ci soit convergente ou non avec la convention que la somme d'une série divergente à termes positifs est . Ce qui pose évidemment un problème de consistence puisque est sensé être dans l'intervalle .  En fait avec les deux axiomes de la définition, la famille est toujours sommable et sa somme est dans . Voilà comment le justifier :   En posant pour tout , le deuxième axiome aboutit à .    Si sont des événements deux à deux disjoints en posant pour tout , le deuxième axiome fournit .    Soit une suite d'éléments de deux à deux disjoints. On a alors pour tout  La série à termes réels positifs est donc convergente et sa somme est dans .     "
},
{
  "id": "prop-",
  "level": "2",
  "url": "sec-generalites.html#prop-",
  "type": "Proposition",
  "number": "1.14",
  "title": "",
  "body": "  Soit une probabilité sur . Alors :    ;     pour tout ;    Si alors et pour tout ;     pour tout ;     pour toute suite d'éléments de .     si est une famille au plus dénombrable d'éléments deux à deux disjoints de .       Les propriétés 1, 2 et 3 sont des conséquences immédiates des axiomes de la définition de probabilité et de la remarque précédente.   Soit une suite d'éléments de et posons et pour tout . Les sont deux à deux disjoints et avec pour tout . On a donc .    Soit une famille au plus dénombrable d'éléments de deux à deux disjoints. Si est fini alors c'est une conséquance de la remarque précédente. Si est infini alors il existe une bijection entre et et il suffit de poser pour tout pour conclure grâce au théorème de permutation des termes pour les familles sommables.      "
},
{
  "id": "thm-contmono",
  "level": "2",
  "url": "sec-generalites.html#thm-contmono",
  "type": "Théorème",
  "number": "1.15",
  "title": "(de continuité monotone).",
  "body": " (de continuité monotone)      Soit une suite croissante d'éléments de . Alors .    Soit une suite décroissante d'éléments de . Alors .          On pose et pour tout . Les événements sont deux à deux disjoints et . On a donc     On suppose que est décroissante. Alors est croissante et on peut ainsi écrire       "
},
{
  "id": "cor-contmono",
  "level": "2",
  "url": "sec-generalites.html#cor-contmono",
  "type": "Corollaire",
  "number": "1.16",
  "title": "",
  "body": "  Soit une suite quelconque d'éléments de . Alors            Pour le premier point on pose pour tout .La suite et croissante et . On applique alors la formule des probabilites continues.  Pour le second on pose . La suite est décroissante et on peut appliquer le théorème de continuité monotone sachant que .   "
},
{
  "id": "def-sce",
  "level": "2",
  "url": "sec-generalites.html#def-sce",
  "type": "Définition",
  "number": "1.17",
  "title": "",
  "body": "  On appelle système complet d'événements (SCE) de toute famille au plus dénombrables d'éléments qui forme une partition de .   "
},
{
  "id": "subsec-probabilite-10",
  "level": "2",
  "url": "sec-generalites.html#subsec-probabilite-10",
  "type": "Exemple",
  "number": "1.18",
  "title": "(exemples courants de SCE).",
  "body": " (exemples courants de SCE)      Pour tout événement , est un SCE de .    Si est au plus dénombrable, alors est un SCE de .    SCE généré par une variable aléatoire discrète (important)  si est une application définie sur telle que soit au plus dénombrable et pour tout alors est un SCE de .      "
},
{
  "id": "prop-probatotale",
  "level": "2",
  "url": "sec-generalites.html#prop-probatotale",
  "type": "Théorème",
  "number": "1.19",
  "title": "(Formule des probabilités totales).",
  "body": " (Formule des probabilités totales)   Soit un SCE de . Alors pour tout , on a    "
},
{
  "id": "subsec-probabilite-12",
  "level": "2",
  "url": "sec-generalites.html#subsec-probabilite-12",
  "type": "Remarque",
  "number": "1.20",
  "title": "",
  "body": "    Ce résultat reste valable si les événements sont deux à deux disjoints, sans former une partition de , à condition que     Cette formule est extrêmement utile. Elle stipule que si on sait calculer les probabilités des événements d'un SCE alors on peut calculer la probabilité de n'importe quel événement.     "
},
{
  "id": "subsec-probabilite-13",
  "level": "2",
  "url": "sec-generalites.html#subsec-probabilite-13",
  "type": "Exemple",
  "number": "1.21",
  "title": "(exemples génériques d’utilisation de la formule des probabilités totales).",
  "body": " (exemples génériques d'utilisation de la formule des probabilités totales)     si on fixe un événement alors     Si sont des événements quelconques alors     Le théorème suivant donne une application importante de la formule des probabilités totales.     "
},
{
  "id": "thm-probadisc",
  "level": "2",
  "url": "sec-generalites.html#thm-probadisc",
  "type": "Théorème",
  "number": "1.22",
  "title": "",
  "body": "  On suppose que est au plus dénombrable et on le munit de la tribu .   Soit une probabilité de . Pour tout , on a  est entièrement détérminée par les probabilités des singletons .    Soit une famille de nombres réels positifs de somme . Alors il existe une unique probabilité sur telle que       "
},
{
  "id": "subsec-probabilite-15",
  "level": "2",
  "url": "sec-generalites.html#subsec-probabilite-15",
  "type": "Remarque",
  "number": "1.23",
  "title": "",
  "body": " Si est au plus dénombrable alors pour toute famille sommable de nombre réels positifs de somme , on peut définir une probabilté sur en posant Cette remarque peut avoir des applications analytiques intéressantes même dans des cas où la probabilité ne correspond pas réellement à une expérience aléatoire.  "
},
{
  "id": "prop-probcond",
  "level": "2",
  "url": "sec-generalites.html#prop-probcond",
  "type": "Proposition",
  "number": "1.24",
  "title": "",
  "body": "  On considère un événemnt de probabilité non nulle. L'application définie sur par est une probabilité de . La probabilité est aussi notée et on l'appelle probailité de sachant .    On a bien et pour toute suite d'éléments de deux à deux disjoints, on a     Justification de la définition  la probabilité de « sachant » est la probabilité de réalisation d'un résultat favorable à quand on ne retient que les résultats favorables à . C'est une approximation du rapport des fréquences de réalisation des événements et dans une série d'expériences. . D'où la définition    "
},
{
  "id": "subsec-probabilite-17",
  "level": "2",
  "url": "sec-generalites.html#subsec-probabilite-17",
  "type": "Remarque",
  "number": "1.25",
  "title": "",
  "body": "    Si alors par convention, pour tout , . Ce choix s'explique par le fait que tout se passe comme si l'événement n'avait pas eu lieu.  Avec cette convention on peut toujours écrire     Sachant que est une probabilité on peut lui appliquer toutes propriétés vues précédemment. Par exemple      "
},
{
  "id": "subsec-probabilite-18",
  "level": "2",
  "url": "sec-generalites.html#subsec-probabilite-18",
  "type": "Mise en garde",
  "number": "1.26",
  "title": "",
  "body": " On parle de «probabilité de sachant », jamais de «l'événement» qui n'a pas de sens en théorie des probabilités.  "
},
{
  "id": "thm-probatotale2",
  "level": "2",
  "url": "sec-generalites.html#thm-probatotale2",
  "type": "Théorème",
  "number": "1.27",
  "title": "",
  "body": "  Soit un SCE de . Alors    "
},
{
  "id": "prop-bayes",
  "level": "2",
  "url": "sec-generalites.html#prop-bayes",
  "type": "Proposition",
  "number": "1.28",
  "title": "(Formules de Bayes).",
  "body": " (Formules de Bayes)      Soient et deux événements de probabilités non nulles. Alors     Soit un SCE de et un événement de probabilité non nulle. Alors pour tout , on a       "
},
{
  "id": "subsec-probabilite-21",
  "level": "2",
  "url": "sec-generalites.html#subsec-probabilite-21",
  "type": "Exemple",
  "number": "1.29",
  "title": "(générique d’utilisation de la formule de Bayes).",
  "body": " (générique d'utilisation de la formule de Bayes)  Une chaine de production industrielle contient machines identiques mais avec des taux de production de pièces défectueuses différents. Le taux pour la machine numéro est .  On prélève une pièce au hasard parmi un lot de pièces produite par la chaîne et on constate qu'elle est défectueuse. Quelle est la probabilité que cette pièce provienne de la machine numéro ?   Si on note l'événement «la pièce est défectueuse» et l'événement «la pièce provient de la machine numéro » alors on cherche . Celle-ci est donnée par la formule de Bayes : car et pour tout .   "
},
{
  "id": "subsec-independance-2",
  "level": "2",
  "url": "sec-generalites.html#subsec-independance-2",
  "type": "Notation",
  "number": "1.30",
  "title": "",
  "body": " Dans tout la suite, désignera un espace probabilisé.  "
},
{
  "id": "def-independance",
  "level": "2",
  "url": "sec-generalites.html#def-independance",
  "type": "Définition",
  "number": "1.31",
  "title": "",
  "body": "     Deux événements et de sont dits indépendants si .    Une famille d'événements de est dite mutuellement indépendante (MI) si pour toute partie finie de ,       "
},
{
  "id": "subsec-independance-4",
  "level": "2",
  "url": "sec-generalites.html#subsec-independance-4",
  "type": "Explication",
  "number": "1.1.3.1",
  "title": "",
  "body": "    Indépendance de deux événements   est indépendant de si la probabilité de réalisation de sachant est la même que celle de réalisation de : . Ce qui revient à     Indépendance mutuelle  Des évéments , sont mutuelement indépendants si et seulement si pour tout et pour toute partie finie ne contenant pas on a c'est à dire si et seulement si la réalisation de chaque événement est indépendante de la réalisation simultanée d'un ou plusieurs évenements lorsque .     "
},
{
  "id": "subsec-independance-5",
  "level": "2",
  "url": "sec-generalites.html#subsec-independance-5",
  "type": "Remarque",
  "number": "1.32",
  "title": "",
  "body": "    Si ou alors tout événement est indépendant de .    deux événements incompatibles et ne peuvent être indépendants que si ou .    Si est une famille MI alors est MI pour toute partie de . En particulier les événements sont deux à deux indépendants.    Soit est une famille d'évéments MI. Si on lui ajoute des événements presques sûrs ou négligeable alors les événements de la nouvelle famille sont MI.    Dans un SCE les événements ne peuvent être deux à deux indépendants, et a fortiori MI, que s'il existe tel que .     "
},
{
  "id": "subsec-independance-6",
  "level": "2",
  "url": "sec-generalites.html#subsec-independance-6",
  "type": "Proposition",
  "number": "1.33",
  "title": "",
  "body": "  Si et sont des événements indépendants alors et sont indépendants, et sont indépendants et et sont indépendants.   "
},
{
  "id": "thm-",
  "level": "2",
  "url": "sec-generalites.html#thm-",
  "type": "Théorème",
  "number": "1.34",
  "title": "",
  "body": "  Soit une famille MI d'événements de .   Soit une partie de . On pose si et si . Alors la famille est MI (en particulier est MI).    Lemme des coalitions  Soit une famille de parties deux à deux disjointes de . On pose pour tout , . Alors la famille est MI.      "
},
{
  "id": "prop-forcomlement",
  "level": "2",
  "url": "sec-generalites.html#prop-forcomlement",
  "type": "Proposition",
  "number": "1.35",
  "title": "(Formule des compléments).",
  "body": " (Formule des compléments)   Soient des événements de . Alors     On écrit et on raisonne par récurrnece en appliquant l'hypothèse de récurrence avec la probailité    "
},
{
  "id": "subsec-modelisation-4",
  "level": "2",
  "url": "sec-generalites.html#subsec-modelisation-4",
  "type": "Exemple",
  "number": "1.36",
  "title": "(signification de certains événements courants).",
  "body": " (signification de certains événements courants)  Soit une suite quelconque d'événements.    est l'événement «au moins un des événements se réalise» ;     est l'événement «tous les événements se réalisent» ;     est l'événement «les événements se réalisent tous à partir d'un certain rang pour pour au moins un indice ». La probabilité de cet événement est      est l'événement «l'événement se réalise pour une infinité d'indices ». La probabilité de cet événement est      "
},
{
  "id": "subsec-modelisation-6",
  "level": "2",
  "url": "sec-generalites.html#subsec-modelisation-6",
  "type": "Remarque",
  "number": "1.37",
  "title": "Cas où l’univers est au plus dénombrable.",
  "body": " Cas où l'univers est au plus dénombrable  Dans la pratique si l'ensemble qui contient les résultats de l'expérience est au plus plus dénombrable alors on le munit de la tribu de telle sorte que tout ensemble formé de résultats possibles de l'expérience soit un événement. Ce choix de tribu n'est pas adéquat lorsque l'ensemble des résultats est non dénombrable car cela pose des difficultés insurmontables pour définir une probabilité sur .  "
},
{
  "id": "subsec-modelisation-7",
  "level": "2",
  "url": "sec-generalites.html#subsec-modelisation-7",
  "type": "Exemple",
  "number": "1.38",
  "title": "Lancer un dé.",
  "body": " Lancer un dé  On lance un dé à 6 faces. On peut modéliser cette expérience par et . On peut définir une probabilité sur en posant pour tout .  "
},
{
  "id": "subsec-modelisation-8",
  "level": "2",
  "url": "sec-generalites.html#subsec-modelisation-8",
  "type": "Exemple",
  "number": "1.39",
  "title": "Lancer deux dés.",
  "body": " Lancer deux dés  On lance deux dés à 6 faces. On peut modéliser cette expérience par et . On peut définir une probabilité sur en posant pour tout .  Si on s'intéresse à l'événement : «la somme des résultats est paire», on peut créer un espace spécifique sous la forme et y adjoindre la probabilité adéquate ou bien on peut rester dans l'univers et définir la variable aléatoire sur en posant pour tout . On peut alors exprimer l'événement par   "
},
{
  "id": "subsec-modelisation-9",
  "level": "2",
  "url": "sec-generalites.html#subsec-modelisation-9",
  "type": "Exemple",
  "number": "1.40",
  "title": "Suite de lancers d’une pièce de monnaie.",
  "body": " Suite de lancers d'une pièce de monnaie  On lance indéfiniment une piece de monnaie. Si on ne s'intéresse qu'au numéro du premier lancer qui donne «face» alors peut modéliser cette expérience par et . On peut définir une probabilité sur en posant pour tout .  Mais dans ce cas les événements «obtenir trois face successivement au moins une fois» ou «obtenir face une infinité de fois» ne peuvent être exprimés dans .  On peut alors se placer dans l'espace beaucoup plus vaste . Le résultat de chaque séquence infinie de lancers est modélisé par une suite de zéros et de uns. C'est un ensemble non dénombrable et y définir une tribu sur laquelle on doit ensuite définir une probabilité est non aisé. L'approche peut être la suivante : on identifie une famille d'événements élémentaires avec lesquels on peut construire d'autre événements plus complexes et qui couvrent nos besoins et on n'aura qu'à se placer dans la tribu engendrée par ces événements élémentaires.  Par exemple, on peut considérer pour tout l'événement : «le lancer donne face», ou encore On peut alors exprimer   pour tout  en particulier est l'événement «ne jamais obtenir face»    l'événement «le premier face apparaît au lancer» par     l'événement «obtenir face une infinité de fois» par .    l'événement «obtenir trois faces successivement une infinité de fois» par      "
},
{
  "id": "exercises-approfondissement-2",
  "level": "2",
  "url": "sec-generalites.html#exercises-approfondissement-2",
  "type": "Activité",
  "number": "1.1",
  "title": "",
  "body": "  On lance indéfiniment une piece de monnaie non équilibrée. La probabilité d'obtenir face est et les lancers sont indépendants.    Quelle est la probabilité pour que le numéro du premier lancer qui donne face soit pair ? Dans quel cas cette probabilité est-elle égale à celle que le numéro du premier face soit impaire ?   On note cet événement et l'événement «le numéro du premier lancer qui donne face est ». Alors , réunion d'événements deux à deux disjoints. On a donc Par ailleur si et seulement si . Ce qui équivaut à ou encore à .  On constate qu'en général sans jamais toucher ces valeurs extrêmes lorsque varie dans . La probabilité que le premier face ait un numéro impaire est toujours plus grande que celle que ce numéro soit paire et on n'approche d'un équilibre des deux probabilités que si est presque nul, c'est à dire quand il est presque impossible d'obtenir face.  C'est un comportement contre-intuitif. L'intuition pousse plutôt vers sous pretexte qu'il y a «autant de nombres paires que de nombres impaires».    Quelle est la probabilité pour que les numéros de tous les lancers qui donnent face soient pairs ?   On note l'evénement «tous les lancers qui donnent face sont pairs». est un SCE donc selon la formule des probabilité totales Pusique ne se réalise pas si un événement se réalise alors pour tout et donc    "
},
{
  "id": "exercises-approfondissement-3",
  "level": "2",
  "url": "sec-generalites.html#exercises-approfondissement-3",
  "type": "Activité",
  "number": "1.2",
  "title": "Calcul de l’ndicatrice d’Euler.",
  "body": " Calcul de l'ndicatrice d'Euler   On fixe un entier et on note ses diviseurs premiers. On pose et pour tout diviseur de  On munit de la probabilité uniforme .   Calculer .   Montrer que les événements sont mutuellement indépendants.   Juste pour le test du formatage de la reponse    Retrouver la formule    Juste pour le test du formatage   "
},
{
  "id": "exercises-approfondissement-4",
  "level": "2",
  "url": "sec-generalites.html#exercises-approfondissement-4",
  "type": "Activité",
  "number": "1.3",
  "title": "Formule de Weierstrass.",
  "body": " Formule de Weierstrass   On fixe un réel . On note le nombre premier par ordre croissant et on définit la probabilité sur par On note pour tout , l'ensemble des multiple de .   Justifier que définit bien une probabilité sur .    Calculer pour tout     Montrer que les événements sont mutuellement indépendants.    En déduire que       "
},
{
  "id": "sec-varalea",
  "level": "1",
  "url": "sec-varalea.html",
  "type": "Section",
  "number": "1.2",
  "title": "Variables aléatoires discrètes",
  "body": " Variables aléatoires discrètes   Variables aléatoires  On se donne dans ce chapitre un espace probabilisé et un espace probabilisable     On appelle variable aléatoire de dans toute application telle que c'est à dire que l'image réciproque par de tout événement est un événement.  Soit dans la suite une variable aléatoire de dans .   est dite discrète si l'ensemble est au plus dénombrable et . Ce qui équivaut à   X est dite réelle si .     Dans la pratique une variable aléatoire est utilisée pour représenter le résultat d'une expérience aléatoire. Souvent l'univers et la tribu ne sont pas précisés. Les résultats et les événements de l'expérience sont dans et dans .  La question est comment choisir et de quelle tribu munir pour que le résultat de l'expérience soit une variable aléatoire ? Les remarques suivantes donnent des éléments de réponse.      Sauf précision du contraire, un univers au plus dénombrable sera systématiquement muni de la tribu .    Si est au plus dénombrable ( et muni de la tribu ) alors toute application définie sur est une variable aléatoire quelque soit la tribu considérée dans l'espace d'arrivée.    Soit une application quelconque définie de dans . L'ensemble est une tribu de et est une variable aléatoire de dans .  Si est au plus dénombrable et , on voit qu'une application quelconque de dans peut être considérée comme une variable aléatoire avec très peu de contraintes. Il suffit de se placer du côté de dans une tribu qui contient .  Si sont des applications définies sur telles que soit au plus dénombrable pour tout alors on peut poser :        de telle sorte que les applications soient toutes des variables aléatoires discrètes de dans .  Ses observations restent valides pour une famille dénombrable d'applications définies sur telle que soit au plus dénombrable pour tout . Notamment pour une suite de telles applications.  C'est ainsi qu'il est toujours possible de considérer un modèle dans lequel on peut combiner entre les résultats d'un nombre fini ou dénombrable d'expériences aléatoires si chacune a au plus un ensemble au plus dénombrable de résultats.         La composée de deux variables aléatoires et est une variable aléatoire. De plus si est discrète alors est discrète.    Si pour tout , est une variable aléatoire de dans un espace probabilisable alors l'application définie par est une variable aléatoire de dans . De plus si sont discrètes alors est discrète.    Soit maintenant une variable aléatoire discrète de dans . Alors pour toute application définie sur l'application est une VAD. On la note    On généralise de la façon suivante : si sont des VAD definies sur alors pour toute application définie sur on définit la variable aléatoire discrète par          étant donné des variables aléatoires discrètes de dans , on note  pour tout    pour tous    pour tout ,   pour tous        Une variable aléatoire discrète est dite presque partout constante s'il existe tel que . Elle est en particulier dite presque partout nulle si .      Vu la tolérance de l'image réciproque par une application envers les opérations sur les ensembles, les notations précédentes donnent                          d'utilisation de ces notations    Si et sont des VAD à valeurs dans alors pour tout , et puisque ces événements sont deux à deux disjoints alors     Si est une VAD à valeurs dans alors et particulier      . Par exemple, si alors        Soit une variables aléatoire discrète de dans .    est un système complet d'événements de ;    Pour tout ,    On appelle loi de la variable le couple . L'application est dite fonction des masses de la variable .   La loi d'une VADR est ainsi le couple formé de l'ensemble des valeurs qu'elle peut prendre et de la famille (au plus dénombrable) des probabilités pour que chacune de ces valeurs se réalise. La propriété 2 signifie que les probabilités des événements sont déterminées par la loi de .      Si et sont des VAD qui suivent la même loi alors on écrit .     Soit une variable aléatoire discrète de dans . L'application est une probabilité de .       Soient deux VAD et définies sur . La loi du couple est par définition la loi de la variable . Elle est assimilée au couple .  En outre les lois des variables et sont appelées les lois marginales du couple .     Avec on a on n'a donc pas nécessairement mais si alors   si alors et en particulier ;    si alors et donc .   C'est pour des raisons de simplification que la loi de couple est donc définie avec .     Soient deux VAD et définies sur .            Ce qui signifie que les lois marginales du couple sont données par sa loi de couple.      Indépendance des variables aléatoires discrètes    Une famille de VAD définies sur (pas nécessairement à valeurs dans le même espace) est dite mutuellement indépendante (MI) si      Si est une famille MI de VAD alors pour toute partie de la famille est MI.     Des variables aléatoires discrètes définies sur sont mutuellement indépendantes si et seulement si        Cette dernière proposition simplifie considérablement la définition de l'indépendance mutuelle d'un nombre fini de VAD.    Elle implique aussi qu'une famille infinie de VAD est MI si et seulement si toutes ses sous-familles finies sont MI.    Une suite de VAD est MI si et seulement pour tout les variables sont MI.       Soit une famille de VAD mutuellement indépendantes et toutes définies sur .  Soit pour tout , une partie de . Alors les événements sont mutuellement indépendants.      Soit une famille de VAD mutuellement indépendantes et toutes définies sur .    Si pour tout , est une application définie sur alors les variables sont mutuellement indépendantes.    Lemme des coalitions  Soit une famille de parties finies deux à deux disjointes de . Si pour tout , est une application définie sur alors les variables sont mutuellement indépendantes.         Si est une VAD presque partout constante de alors toute autre VAD définie sur est indépendante de .   car pour tout , on a soit soit . Donc l'événement est indépendant de tou autre événement de .     Soient une VAD et une fonction définie sur . À moins que ou ne soit presque partout constante, les variables et ne peuvent être indépendantes.   On suppose que et ne sont pas presque partout constantes. Il existe alors tel que . Comme alors . Ensuite puisque est non presque partout constante alors et il existe donc tel que et . Ainsi  et ne sont donc pas indépendantes.      Exemples d'utilisations du lemme des coalitions  Soient des VAD définies sur .   Si sont MI alors et sont MI.    Réciproquement si et sont MI alors tout ce qu'on peut dire c'est que est indépendante de pour tout .    Si la variable est elle même un vecteur de la forme et et sont indépndantes alors et sont indépendantes pour tous .      Ce sont des conséquences du lemme des coalitions en utilisant respectivement les applications :    ;     ;     et            Lois usuelles   désignera une VAD définie sur     Loi de Bernouilli  Soit un réel On dit que suit la loi de Bernouilli de paramètre et on écrit si est le résultat d'une expérience aléatoire qui ne possède que deux issues : succès ou échec. La probabilité du sucès étant .     Loi binomiale  Soit un réel et un entier . On dit que suit la loi de binomiale de paramètres et et on écrit si est le nombre de succès obtenus lorsque on répète fois de façon indépendante une expérience de Bernouilli de paramètre .  suit aussi la loi si elle represente le nombre de succès obtenu lorsque on effectue simultanénement et de façon indépendante test de Bernouilli de paramètre .  Si est le résultat du test de Bernouilli alors sachant que les variables sont mutuellement indépendantes et suivent toute la loi     Loi géometrique  Soit un réel On dit que suit la loi géométrique de paramètre et on écrit si est le numéro du premier test qui donne un succès lorsque on répète indéfiniment et de façon indépendante une expérience de Bernouilli de paramètre .  est aussi dite temps d'attente du premier succès.  Si est le résultat du test de Bernouilli alors Sachant que les variables sont mutuellement indépendantes et suivent toute la loi .    Loi de Poisson  Soit un réel . On dit que suit la loi de Poisson de paramètre et on écrit si  représente le nombre de clients servis pendant une unité de temps dans une file d'attente quand on sait que le nombre moyen de clients par unité de temps est . Pour cette raison la loi de Poisson est aussi appelé loi des files d'attente.      Activités   Loi hypergéometrique   Soient et avec . On prélève de façon équiprobable un échantillon de individus dans une population de individus. On effectue des tests de type Bernouilli sur les individus de l'échantillon sachant que la proportion d'individu positifs au test dans toute la population est . est le nombre d'individus qui s'avèrent positifs au test dans l'échantillon.    Quelle est la loi de ?    et    Le nombre de tests positifs dans l'échantiloon ne peut dépasser , ni le nombre total d'individus positifs dans toute la population. D'un autre côté si alors on est sûr d'avoir au moins tests positifs dans l'échantillon. Ainsi Ce qui suggère de prendre . Mais pour simplifier on prend plutôt quitte à considèrer que les résultats impossibles ont une probabilité nulle.  Ensuite, il y a façon de prélever équiprobablement individus dans une population de éléments. Parmi ces prélévements, ceux qui contiendront exactement individus positifs sont au nombre de car il s'agit de prélever indivdus parmi qui sont positifs au test et individus parmi qui ne le sont pas. Vu l'équiprobabilité des prélèvements on a donc On notera la loi de la variable . Elle est dite loi hypergéomètrique de paramètres et .    On note le résultat du test du individu. Quelle est la loi de ?       Prélever un échantillon de individus de façon équiprobable revient à prelever sans remise un à un et de façon équiporbable les individus. Notons la variable de Bernouilli qui vaut si le individu prélevé de la population est positif au test. Alors . La question précédente montre ainsi que pour tout  Soit maintenant . Grâce à la formule des probabilités totales, on peut écrire  est la probabilité que le individu prélevé soit positif sachant que individus ont été positifs pour les prélévements précédents. Dans ces condition, il reste individu dans la population dont sont positifs. Par équiprobabilité des prélévements on a donc Ainsi Il en ressort que malgré le changement de la répartition des cas positifs\/cas négatifs après chaque prélévement, la probabulité de prélever un cas positif est toujours .     Loi du temps d'attente du succès   Soient et . Quel est la loi du temps d'attente du succés lorsque on répète indéfiniment et de façon indépendante une exprérience de Bernouilli de paramètre      et      Comportement asymptotique d'une loi binomiale   On considère une suite de nombres réels de et on suppose que . Soit pour tout une variable aléatoire qui suit la loi . Déterminer pour tout entier fixé, la limite de et donner une interprétation du résultat obtenu.    Fixons et considérons un entier .  donc et donc . D'un autre côté, puisque est fixé alors Ainsi , ou encore où est une variable aléatoire qui suit la loi . On dit que la suite  converge en loi vers .  Ainsi, une variable aléatoire binomiale de paramètres se comporte lorsque est grand comme une loi de Poisson de paramètre .     Variables aléatoires discrètes sans mémoire   Dans cette activité, nous allons explorer la propriété d'absence de mémoire des variables aléatoires discrètes. Une variable aléatoire discrète à valeurs entières positives ( ) est dite sans mémoire si elle satisfait la propriété suivante pour tous entiers : Nous allons montrer que la distribution géométrique est la seule distribution discrète sans mémoire.    Question 1 : Une variable géométrique est sans mémoire  Soit une variable aléatoire suivant une distribution géométrique de paramètre . Montrer que est sans mémoire.   Pour montrer que est sans mémoire, calculons .     La fonction de survie de est :     Par définition de la probabilité conditionnelle, on a :     En utilisant la fonction de survie, cela devient :     Or, . On a donc bien :      Ainsi, une variable géométrique est sans mémoire.    Question 2 : Réciproque  Soit une variable aléatoire discrète à valeurs entières positives ( ) et sans mémoire. Montrer que suit nécessairement une distribution géométrique.   Pour montrer que suit une distribution géométrique, nous allons analyser sa fonction de survie .      Propriété d'absence de mémoire : La propriété d'absence de mémoire s'écrit : En utilisant la définition de la probabilité conditionnelle, cela devient : Notons . Alors, la propriété devient :      Forme de la fonction de survie : L'équation fonctionnelle implique que est de la forme : En effet, en posant et , on obtient : Par récurrence, on montre que .     Paramètre de la distribution géométrique : Posons , où est un paramètre tel que . Alors, la fonction de survie devient : La fonction de masse de est donnée par : Cela correspond exactement à la distribution géométrique de paramètre .     Ainsi, une variable aléatoire discrète sans mémoire suit nécessairement une distribution géométrique.     Une indépendance contre-intuitive    suit une loi de Poisson de paramètre . est le nombre de succès quand on répète de façon indépendante test de Bernouilli de paramètre .   Déterminer la loi de     Vérifier que et sont indépendantes.          peut potentiellement prendre toutes les valeurs dans . Il en est de même pour . Ensuite pour tout  Ainsi      est le nombre d'echecs pour tests. Il suffit donc de remplacer par dans le calcul de la loi de : . Ensuite si alors  et sont donc bien indépendantes contrairement à «l'intuition». ( et le nombre de succés et le nombre d'echecs pour tests.)       Marche aléatoire sur une droite   Un objet se déplace sur une droite graduée. À chaque instant, il ne peut qu'avancer d'un pas avec une probabilité ou reculer d'un pas avec une probabilité . Les déplacements sont tous indépendants.    Loi de  On note la position de l'objet sur la droite au pas, en supposant qu'il était sur la position d'indice de la droite à l'instant . Quelle est la loi de ?   On note la variable de Bernoulli qui vaut si l'objet avance d'un pas et s'il recule d'un pas au pas. Alors : où suit la loi binomiale .  On en déduit que est pair. Ainsi, est l'ensemble des entiers compris entre et qui ont la même parité que (ou, de manière équivalente, la même parité que ). Pour simplifier, on pose , sachant que les événements sont impossibles lorsque est impair.  Si , alors et donc :     Nombre de chemins et loi de  On représente chaque parcours de l'objet entre les instants et par la ligne brisée passant par les points tel que illustré dans la par la ligne tracée en continu. On note le nombre de ces lignes qui vont du point au point . Expliciter et exprimer la loi de en fonction de ces nombres.      Chaque chemin peut être représenté par un mot unique de longueur formé des motifs \/ (avancer) et \\ (reculer). Si désigne le nombre de motifs \/ et celui des motifs \\ , alors : On en déduit que , ce qui implique qu'un chemin entre et n'est possible que si est de même parité que . Dans ce cas, .  Le nombre de ces chemins est donc : On notera que :   puisque alors signifiant que le nombre de parcours entre et est le même que celui entre et , chaque chemin de à étant le symétrique par rapport à l'axe d'un chemin de à      signifiant que le nombre de parcours entre et est le même que celui entre et ou que chaque chemin de à revient à parcourir à l'envers un chemin de à .    pour tout , , et en particulier , confirmant qu'un parcours entre et s'obtient par décalage du temps d'un chemin de à .     La loi de peut alors s'exprimer comme :     Principe de réflexion  On suppose que et on note le nombre de parcours entre et qui passent au moins une fois par un point de la forme . Justifier que .   Pour chaque chemin allant de vers et touchant au moins une fois l'axe , il existe un unique chemin allant de vers qui est symétrique par rapport à l'axe entre les instants et , où est le premier instant où touche l'axe . Réciproquement, chaque chemin de vers doit toucher l'axe au moins une fois et est le symétrique d'un chemin de vers . Voir la pour une illustration des chemins et .  Cette correspondance établit une bijection entre l'ensemble des chemins et celui des chemins . Ainsi :     Théorème du scrutin  On suppose que et . Montrer que le nombre de parcours de vers qui ne reviennent jamais sur l'origine est et en déduire que lorsque alors    Un chemin partant de vers sans revenir sur l'axe est entièrement déterminé par sa portion allant de vers et qui ne touche jamais l'axe . Si est pair, en posant , leur nombre est donné par : Soit au final : Si on note , la probabilité pour qu'en partant du point on atteigne le point sans jamais revenir à l'origine alors Noter que cela implique que :  est la probabilité de ne pas revenir à l'origine entre les instants et .    Parcours sans retour vers l'origine  En déduire la probabilité pour qu'on retourne pour la première fois à l'origine à l'instant sachant qu'on était sur l'origine à l'instant .   Notons le nombre de ces chemins. Ce nombre est celui des chemins qui vont de à ou de à sans revenir sur l'axe . Par symétrie, le nombre de parcours dans la deuxième catégorie est le même que celui dans la première. Ainsi : En utilisant l'identité , on obtient : Par suite :     Loi du premier retour à l'origine  On suppose que et on note le numéro du premier pas pour lequel l'objet revient sur l'origine. Quelle est la loi de ?    est le temps d'attente du premier retour à l'origine. Il peut être infini si l'objet ne revient jamais à l'origine. Ainsi, .  Pour , l'événement est impossible.  Pour , donc selon la question précédente .  La probabilité que est donnée par : Cette probabilité est nulle si et seulement si . Elle vaut pratiquement si est voisin de ou de . Ce qui signife qu'on est presque sûr de revenir à l'origine si les pas sont équiprobables, est presque sûr de ne jamais y revenir si la probabilité d'avancer ou de reculer est presque nulle.  Voici dans le détail le calcul de :   Rappelons le DSE suivant :     Posons . On a avec égalité si et seulement si . D'où .         "
},
{
  "id": "def-varalea",
  "level": "2",
  "url": "sec-varalea.html#def-varalea",
  "type": "Définition",
  "number": "1.41",
  "title": "",
  "body": "  On appelle variable aléatoire de dans toute application telle que c'est à dire que l'image réciproque par de tout événement est un événement.  Soit dans la suite une variable aléatoire de dans .   est dite discrète si l'ensemble est au plus dénombrable et . Ce qui équivaut à   X est dite réelle si .   "
},
{
  "id": "subsec-varalea-4",
  "level": "2",
  "url": "sec-varalea.html#subsec-varalea-4",
  "type": "Explication",
  "number": "1.2.1.1",
  "title": "",
  "body": " Dans la pratique une variable aléatoire est utilisée pour représenter le résultat d'une expérience aléatoire. Souvent l'univers et la tribu ne sont pas précisés. Les résultats et les événements de l'expérience sont dans et dans .  La question est comment choisir et de quelle tribu munir pour que le résultat de l'expérience soit une variable aléatoire ? Les remarques suivantes donnent des éléments de réponse.  "
},
{
  "id": "subsec-varalea-5",
  "level": "2",
  "url": "sec-varalea.html#subsec-varalea-5",
  "type": "Remarque",
  "number": "1.42",
  "title": "",
  "body": "   Sauf précision du contraire, un univers au plus dénombrable sera systématiquement muni de la tribu .    Si est au plus dénombrable ( et muni de la tribu ) alors toute application définie sur est une variable aléatoire quelque soit la tribu considérée dans l'espace d'arrivée.    Soit une application quelconque définie de dans . L'ensemble est une tribu de et est une variable aléatoire de dans .  Si est au plus dénombrable et , on voit qu'une application quelconque de dans peut être considérée comme une variable aléatoire avec très peu de contraintes. Il suffit de se placer du côté de dans une tribu qui contient .  Si sont des applications définies sur telles que soit au plus dénombrable pour tout alors on peut poser :        de telle sorte que les applications soient toutes des variables aléatoires discrètes de dans .  Ses observations restent valides pour une famille dénombrable d'applications définies sur telle que soit au plus dénombrable pour tout . Notamment pour une suite de telles applications.  C'est ainsi qu'il est toujours possible de considérer un modèle dans lequel on peut combiner entre les résultats d'un nombre fini ou dénombrable d'expériences aléatoires si chacune a au plus un ensemble au plus dénombrable de résultats.    "
},
{
  "id": "prop-compvar",
  "level": "2",
  "url": "sec-varalea.html#prop-compvar",
  "type": "Proposition",
  "number": "1.43",
  "title": "",
  "body": "    La composée de deux variables aléatoires et est une variable aléatoire. De plus si est discrète alors est discrète.    Si pour tout , est une variable aléatoire de dans un espace probabilisable alors l'application définie par est une variable aléatoire de dans . De plus si sont discrètes alors est discrète.    Soit maintenant une variable aléatoire discrète de dans . Alors pour toute application définie sur l'application est une VAD. On la note    On généralise de la façon suivante : si sont des VAD definies sur alors pour toute application définie sur on définit la variable aléatoire discrète par      "
},
{
  "id": "subsec-varalea-7",
  "level": "2",
  "url": "sec-varalea.html#subsec-varalea-7",
  "type": "Définition",
  "number": "1.44",
  "title": "",
  "body": "   étant donné des variables aléatoires discrètes de dans , on note  pour tout    pour tous    pour tout ,   pour tous        Une variable aléatoire discrète est dite presque partout constante s'il existe tel que . Elle est en particulier dite presque partout nulle si .    "
},
{
  "id": "subsec-varalea-8",
  "level": "2",
  "url": "sec-varalea.html#subsec-varalea-8",
  "type": "Remarque",
  "number": "1.45",
  "title": "",
  "body": " Vu la tolérance de l'image réciproque par une application envers les opérations sur les ensembles, les notations précédentes donnent                        "
},
{
  "id": "subsec-varalea-9",
  "level": "2",
  "url": "sec-varalea.html#subsec-varalea-9",
  "type": "Exemple",
  "number": "1.46",
  "title": "d’utilisation de ces notations.",
  "body": " d'utilisation de ces notations    Si et sont des VAD à valeurs dans alors pour tout , et puisque ces événements sont deux à deux disjoints alors     Si est une VAD à valeurs dans alors et particulier      . Par exemple, si alors     "
},
{
  "id": "subsec-varalea-10",
  "level": "2",
  "url": "sec-varalea.html#subsec-varalea-10",
  "type": "Théorème",
  "number": "1.47",
  "title": "",
  "body": "  Soit une variables aléatoire discrète de dans .    est un système complet d'événements de ;    Pour tout ,    On appelle loi de la variable le couple . L'application est dite fonction des masses de la variable .   La loi d'une VADR est ainsi le couple formé de l'ensemble des valeurs qu'elle peut prendre et de la famille (au plus dénombrable) des probabilités pour que chacune de ces valeurs se réalise. La propriété 2 signifie que les probabilités des événements sont déterminées par la loi de .    "
},
{
  "id": "subsec-varalea-11",
  "level": "2",
  "url": "sec-varalea.html#subsec-varalea-11",
  "type": "Notation",
  "number": "1.48",
  "title": "",
  "body": " Si et sont des VAD qui suivent la même loi alors on écrit .  "
},
{
  "id": "cor-loiX",
  "level": "2",
  "url": "sec-varalea.html#cor-loiX",
  "type": "Corollaire",
  "number": "1.49",
  "title": "",
  "body": "  Soit une variable aléatoire discrète de dans . L'application est une probabilité de .    "
},
{
  "id": "def-loicouple",
  "level": "2",
  "url": "sec-varalea.html#def-loicouple",
  "type": "Définition",
  "number": "1.50",
  "title": "",
  "body": "  Soient deux VAD et définies sur . La loi du couple est par définition la loi de la variable . Elle est assimilée au couple .  En outre les lois des variables et sont appelées les lois marginales du couple .   "
},
{
  "id": "subsec-varalea-14",
  "level": "2",
  "url": "sec-varalea.html#subsec-varalea-14",
  "type": "Remarque",
  "number": "1.51",
  "title": "",
  "body": " Avec on a on n'a donc pas nécessairement mais si alors   si alors et en particulier ;    si alors et donc .   C'est pour des raisons de simplification que la loi de couple est donc définie avec .  "
},
{
  "id": "prop-loicouple",
  "level": "2",
  "url": "sec-varalea.html#prop-loicouple",
  "type": "Proposition",
  "number": "1.52",
  "title": "",
  "body": "  Soient deux VAD et définies sur .            Ce qui signifie que les lois marginales du couple sont données par sa loi de couple.   "
},
{
  "id": "def-varind",
  "level": "2",
  "url": "sec-varalea.html#def-varind",
  "type": "Définition",
  "number": "1.53",
  "title": "",
  "body": "  Une famille de VAD définies sur (pas nécessairement à valeurs dans le même espace) est dite mutuellement indépendante (MI) si    "
},
{
  "id": "subsec-indvar-3",
  "level": "2",
  "url": "sec-varalea.html#subsec-indvar-3",
  "type": "Remarque",
  "number": "1.54",
  "title": "",
  "body": " Si est une famille MI de VAD alors pour toute partie de la famille est MI.  "
},
{
  "id": "prop-varind",
  "level": "2",
  "url": "sec-varalea.html#prop-varind",
  "type": "Proposition",
  "number": "1.55",
  "title": "",
  "body": "  Des variables aléatoires discrètes définies sur sont mutuellement indépendantes si et seulement si    "
},
{
  "id": "subsec-indvar-5",
  "level": "2",
  "url": "sec-varalea.html#subsec-indvar-5",
  "type": "Remarque",
  "number": "1.56",
  "title": "",
  "body": "   Cette dernière proposition simplifie considérablement la définition de l'indépendance mutuelle d'un nombre fini de VAD.    Elle implique aussi qu'une famille infinie de VAD est MI si et seulement si toutes ses sous-familles finies sont MI.    Une suite de VAD est MI si et seulement pour tout les variables sont MI.    "
},
{
  "id": "prop-partind",
  "level": "2",
  "url": "sec-varalea.html#prop-partind",
  "type": "Proposition",
  "number": "1.57",
  "title": "",
  "body": "  Soit une famille de VAD mutuellement indépendantes et toutes définies sur .  Soit pour tout , une partie de . Alors les événements sont mutuellement indépendants.   "
},
{
  "id": "thm-coalition",
  "level": "2",
  "url": "sec-varalea.html#thm-coalition",
  "type": "Théorème",
  "number": "1.58",
  "title": "",
  "body": "  Soit une famille de VAD mutuellement indépendantes et toutes définies sur .    Si pour tout , est une application définie sur alors les variables sont mutuellement indépendantes.    Lemme des coalitions  Soit une famille de parties finies deux à deux disjointes de . Si pour tout , est une application définie sur alors les variables sont mutuellement indépendantes.     "
},
{
  "id": "subsec-indvar-8",
  "level": "2",
  "url": "sec-varalea.html#subsec-indvar-8",
  "type": "Remarque",
  "number": "1.59",
  "title": "",
  "body": "   Si est une VAD presque partout constante de alors toute autre VAD définie sur est indépendante de .   car pour tout , on a soit soit . Donc l'événement est indépendant de tou autre événement de .     Soient une VAD et une fonction définie sur . À moins que ou ne soit presque partout constante, les variables et ne peuvent être indépendantes.   On suppose que et ne sont pas presque partout constantes. Il existe alors tel que . Comme alors . Ensuite puisque est non presque partout constante alors et il existe donc tel que et . Ainsi  et ne sont donc pas indépendantes.      Exemples d'utilisations du lemme des coalitions  Soient des VAD définies sur .   Si sont MI alors et sont MI.    Réciproquement si et sont MI alors tout ce qu'on peut dire c'est que est indépendante de pour tout .    Si la variable est elle même un vecteur de la forme et et sont indépndantes alors et sont indépendantes pour tous .      Ce sont des conséquences du lemme des coalitions en utilisant respectivement les applications :    ;     ;     et         "
},
{
  "id": "subsec-loi-activite-2",
  "level": "2",
  "url": "sec-varalea.html#subsec-loi-activite-2",
  "type": "Activité",
  "number": "1.4",
  "title": "Loi hypergéometrique.",
  "body": " Loi hypergéometrique   Soient et avec . On prélève de façon équiprobable un échantillon de individus dans une population de individus. On effectue des tests de type Bernouilli sur les individus de l'échantillon sachant que la proportion d'individu positifs au test dans toute la population est . est le nombre d'individus qui s'avèrent positifs au test dans l'échantillon.    Quelle est la loi de ?    et    Le nombre de tests positifs dans l'échantiloon ne peut dépasser , ni le nombre total d'individus positifs dans toute la population. D'un autre côté si alors on est sûr d'avoir au moins tests positifs dans l'échantillon. Ainsi Ce qui suggère de prendre . Mais pour simplifier on prend plutôt quitte à considèrer que les résultats impossibles ont une probabilité nulle.  Ensuite, il y a façon de prélever équiprobablement individus dans une population de éléments. Parmi ces prélévements, ceux qui contiendront exactement individus positifs sont au nombre de car il s'agit de prélever indivdus parmi qui sont positifs au test et individus parmi qui ne le sont pas. Vu l'équiprobabilité des prélèvements on a donc On notera la loi de la variable . Elle est dite loi hypergéomètrique de paramètres et .    On note le résultat du test du individu. Quelle est la loi de ?       Prélever un échantillon de individus de façon équiprobable revient à prelever sans remise un à un et de façon équiporbable les individus. Notons la variable de Bernouilli qui vaut si le individu prélevé de la population est positif au test. Alors . La question précédente montre ainsi que pour tout  Soit maintenant . Grâce à la formule des probabilités totales, on peut écrire  est la probabilité que le individu prélevé soit positif sachant que individus ont été positifs pour les prélévements précédents. Dans ces condition, il reste individu dans la population dont sont positifs. Par équiprobabilité des prélévements on a donc Ainsi Il en ressort que malgré le changement de la répartition des cas positifs\/cas négatifs après chaque prélévement, la probabulité de prélever un cas positif est toujours .   "
},
{
  "id": "subsec-loi-activite-3",
  "level": "2",
  "url": "sec-varalea.html#subsec-loi-activite-3",
  "type": "Activité",
  "number": "1.5",
  "title": "Loi du temps d’attente du <span class=\"process-math\">\\(k^\\text{e}\\)<\/span> succès.",
  "body": " Loi du temps d'attente du succès   Soient et . Quel est la loi du temps d'attente du succés lorsque on répète indéfiniment et de façon indépendante une exprérience de Bernouilli de paramètre      et    "
},
{
  "id": "subsec-loi-activite-4",
  "level": "2",
  "url": "sec-varalea.html#subsec-loi-activite-4",
  "type": "Activité",
  "number": "1.6",
  "title": "Comportement asymptotique d’une loi binomiale.",
  "body": " Comportement asymptotique d'une loi binomiale   On considère une suite de nombres réels de et on suppose que . Soit pour tout une variable aléatoire qui suit la loi . Déterminer pour tout entier fixé, la limite de et donner une interprétation du résultat obtenu.    Fixons et considérons un entier .  donc et donc . D'un autre côté, puisque est fixé alors Ainsi , ou encore où est une variable aléatoire qui suit la loi . On dit que la suite  converge en loi vers .  Ainsi, une variable aléatoire binomiale de paramètres se comporte lorsque est grand comme une loi de Poisson de paramètre .   "
},
{
  "id": "subsec-loi-activite-5",
  "level": "2",
  "url": "sec-varalea.html#subsec-loi-activite-5",
  "type": "Activité",
  "number": "1.7",
  "title": "Variables aléatoires discrètes sans mémoire.",
  "body": " Variables aléatoires discrètes sans mémoire   Dans cette activité, nous allons explorer la propriété d'absence de mémoire des variables aléatoires discrètes. Une variable aléatoire discrète à valeurs entières positives ( ) est dite sans mémoire si elle satisfait la propriété suivante pour tous entiers : Nous allons montrer que la distribution géométrique est la seule distribution discrète sans mémoire.    Question 1 : Une variable géométrique est sans mémoire  Soit une variable aléatoire suivant une distribution géométrique de paramètre . Montrer que est sans mémoire.   Pour montrer que est sans mémoire, calculons .     La fonction de survie de est :     Par définition de la probabilité conditionnelle, on a :     En utilisant la fonction de survie, cela devient :     Or, . On a donc bien :      Ainsi, une variable géométrique est sans mémoire.    Question 2 : Réciproque  Soit une variable aléatoire discrète à valeurs entières positives ( ) et sans mémoire. Montrer que suit nécessairement une distribution géométrique.   Pour montrer que suit une distribution géométrique, nous allons analyser sa fonction de survie .      Propriété d'absence de mémoire : La propriété d'absence de mémoire s'écrit : En utilisant la définition de la probabilité conditionnelle, cela devient : Notons . Alors, la propriété devient :      Forme de la fonction de survie : L'équation fonctionnelle implique que est de la forme : En effet, en posant et , on obtient : Par récurrence, on montre que .     Paramètre de la distribution géométrique : Posons , où est un paramètre tel que . Alors, la fonction de survie devient : La fonction de masse de est donnée par : Cela correspond exactement à la distribution géométrique de paramètre .     Ainsi, une variable aléatoire discrète sans mémoire suit nécessairement une distribution géométrique.   "
},
{
  "id": "subsec-loi-activite-6",
  "level": "2",
  "url": "sec-varalea.html#subsec-loi-activite-6",
  "type": "Activité",
  "number": "1.8",
  "title": "Une indépendance contre-intuitive.",
  "body": " Une indépendance contre-intuitive    suit une loi de Poisson de paramètre . est le nombre de succès quand on répète de façon indépendante test de Bernouilli de paramètre .   Déterminer la loi de     Vérifier que et sont indépendantes.          peut potentiellement prendre toutes les valeurs dans . Il en est de même pour . Ensuite pour tout  Ainsi      est le nombre d'echecs pour tests. Il suffit donc de remplacer par dans le calcul de la loi de : . Ensuite si alors  et sont donc bien indépendantes contrairement à «l'intuition». ( et le nombre de succés et le nombre d'echecs pour tests.)     "
},
{
  "id": "marche-aleatoire-deepseek",
  "level": "2",
  "url": "sec-varalea.html#marche-aleatoire-deepseek",
  "type": "Activité",
  "number": "1.9",
  "title": "Marche aléatoire sur une droite.",
  "body": " Marche aléatoire sur une droite   Un objet se déplace sur une droite graduée. À chaque instant, il ne peut qu'avancer d'un pas avec une probabilité ou reculer d'un pas avec une probabilité . Les déplacements sont tous indépendants.    Loi de  On note la position de l'objet sur la droite au pas, en supposant qu'il était sur la position d'indice de la droite à l'instant . Quelle est la loi de ?   On note la variable de Bernoulli qui vaut si l'objet avance d'un pas et s'il recule d'un pas au pas. Alors : où suit la loi binomiale .  On en déduit que est pair. Ainsi, est l'ensemble des entiers compris entre et qui ont la même parité que (ou, de manière équivalente, la même parité que ). Pour simplifier, on pose , sachant que les événements sont impossibles lorsque est impair.  Si , alors et donc :     Nombre de chemins et loi de  On représente chaque parcours de l'objet entre les instants et par la ligne brisée passant par les points tel que illustré dans la par la ligne tracée en continu. On note le nombre de ces lignes qui vont du point au point . Expliciter et exprimer la loi de en fonction de ces nombres.      Chaque chemin peut être représenté par un mot unique de longueur formé des motifs \/ (avancer) et \\ (reculer). Si désigne le nombre de motifs \/ et celui des motifs \\ , alors : On en déduit que , ce qui implique qu'un chemin entre et n'est possible que si est de même parité que . Dans ce cas, .  Le nombre de ces chemins est donc : On notera que :   puisque alors signifiant que le nombre de parcours entre et est le même que celui entre et , chaque chemin de à étant le symétrique par rapport à l'axe d'un chemin de à      signifiant que le nombre de parcours entre et est le même que celui entre et ou que chaque chemin de à revient à parcourir à l'envers un chemin de à .    pour tout , , et en particulier , confirmant qu'un parcours entre et s'obtient par décalage du temps d'un chemin de à .     La loi de peut alors s'exprimer comme :     Principe de réflexion  On suppose que et on note le nombre de parcours entre et qui passent au moins une fois par un point de la forme . Justifier que .   Pour chaque chemin allant de vers et touchant au moins une fois l'axe , il existe un unique chemin allant de vers qui est symétrique par rapport à l'axe entre les instants et , où est le premier instant où touche l'axe . Réciproquement, chaque chemin de vers doit toucher l'axe au moins une fois et est le symétrique d'un chemin de vers . Voir la pour une illustration des chemins et .  Cette correspondance établit une bijection entre l'ensemble des chemins et celui des chemins . Ainsi :     Théorème du scrutin  On suppose que et . Montrer que le nombre de parcours de vers qui ne reviennent jamais sur l'origine est et en déduire que lorsque alors    Un chemin partant de vers sans revenir sur l'axe est entièrement déterminé par sa portion allant de vers et qui ne touche jamais l'axe . Si est pair, en posant , leur nombre est donné par : Soit au final : Si on note , la probabilité pour qu'en partant du point on atteigne le point sans jamais revenir à l'origine alors Noter que cela implique que :  est la probabilité de ne pas revenir à l'origine entre les instants et .    Parcours sans retour vers l'origine  En déduire la probabilité pour qu'on retourne pour la première fois à l'origine à l'instant sachant qu'on était sur l'origine à l'instant .   Notons le nombre de ces chemins. Ce nombre est celui des chemins qui vont de à ou de à sans revenir sur l'axe . Par symétrie, le nombre de parcours dans la deuxième catégorie est le même que celui dans la première. Ainsi : En utilisant l'identité , on obtient : Par suite :     Loi du premier retour à l'origine  On suppose que et on note le numéro du premier pas pour lequel l'objet revient sur l'origine. Quelle est la loi de ?    est le temps d'attente du premier retour à l'origine. Il peut être infini si l'objet ne revient jamais à l'origine. Ainsi, .  Pour , l'événement est impossible.  Pour , donc selon la question précédente .  La probabilité que est donnée par : Cette probabilité est nulle si et seulement si . Elle vaut pratiquement si est voisin de ou de . Ce qui signife qu'on est presque sûr de revenir à l'origine si les pas sont équiprobables, est presque sûr de ne jamais y revenir si la probabilité d'avancer ou de reculer est presque nulle.  Voici dans le détail le calcul de :   Rappelons le DSE suivant :     Posons . On a avec égalité si et seulement si . D'où .       "
},
{
  "id": "sec-espvaralea",
  "level": "1",
  "url": "sec-espvaralea.html",
  "type": "Section",
  "number": "1.3",
  "title": "Espérance et moment d’une variable aléatoire discrète",
  "body": " Espérance et moment d'une variable aléatoire discrète   On se donne une espace probabilisé .    Espérance d'une variable aléatoire discrète   Définition et propriétés    Soit une variable aléatoire discrète réelle définie sur .  On dit que est sommable, ou que admet une espérance, si la famille est sommable. On appelle alors espérance de le réel On notera l'ensemble des VADR sommables définies sur        Quand elle définie, est le barycentre de la famille de points pondérés . Pour cette raison on l'appelle aussi valeur moyenne de .    Dans le cas d'une VADR à valeurs positives ou nulles, si n'est pas sommable alors on pose par convention  est alors sommable si et seulement si .    En conséquence, pour une VADR quelconque     La définition a un inconvénient : la somme utilisée est indexée par un ensemble qui dépend de . Ce qui pose un problème lorsqu'on combine entre plusieurs variables aléatoire. Comme lorsque on s'intéresse à par exemple.  La formule de transfert énoncée ci-après résout ce problème.    La définition de dépend seulement de la loi de . Dans ce sens deux variables qui ont la même loi ont la même espérance. Nous parlerons souvent de l'espérance d'une loi de probabilité pour désigner l'espérance des variables qui suivent cette loi.    La définition se limite aux variables aléatoires discrète réelles , mais elle est tout à fait valable sans aucune modification pour les variables aléatoires discrètes à valeurs complexes . La notion de base utilisée étant celle de familles sommables et celle-ci a été étudiée dans le cadre des familles de nombres réels ou complexes.        On peut généraliser la notion d'espérance à des vecteurs aléatoires discrets en utilisant les «variables composantes» : si est un vecteur aléatoire discret à valeurs dans un -ev de dimension finie qui s'écrit sous la forme où est une base fixée de , alors, par définition, est sommable si et seulement si les variables sont sommables et dans ce cas Cela pose toutefois le problème de la dépendance de cette définition par rapport à la base utilisée. (Voir remarque )    Dans le cas d'une matrice aléatoire par exemple, est sommable si et seulement si est sommable pout et dans ce cas, par définition     Attention toutefois : les familles sommables de vecteurs ne sont pas au programme. Donc l'écriture déborde du cadre limité par celui-ci.       On suppose que est au plus dénombrable. Une VADR définie sur est sommable si et seulement si la famille est sommable et dans ce cas     La famille d'événemnts est une partition de et pour tout on a Donc selon le théorème de sommation par paquets et dans ce cas      Apparement ce dernier résultat résout le problème de l'ecriture de en fonction de l'ensemble (qui dépend de ). L'intérêt est toutefois relatif car dans la pratique on ne contrôle pas l'univers lui même et il n'est pas nécessairement au plus dénombrable.    (formule de transfert)   Soit une VAD définie sur (possiblement à valeurs vectorielles). Soit une application définie sur .  La variable est sommable si et seulement si la famille est sommable et dans ce cas     On pose et on imite la démonstration de la proposition précédente en observant cette fois que est une partition de . Selon le théorème de sommation par paquets, est sommable si et seulement si Or pour tout  Ce qui ramène l'équivalence à juste la deuxième condition, elle même équivalente à la sommabilité de la variable . D'où l'équivalence énoncée dans le théorème et la validité de la formule : par sommation par paquets.      Soient et deux VADR. Soit une application définie sur . La variable est sommable si et seulement si la famille est sommable est dans ce cas     Il suffit d'appliquer la formule de transfert au couple .       La formule de transfert permet donc de combiner les résultats de deux variables et en utilisant la loi conjointe du couple . Ce qui résout le problème de la dépendance de l'expression de de l'ensemble .  Par exemple la variable est sommable si et seulement si la famille est sommable et dans ce cas Noter qu'en considérant les application et , alors selon ce même résultat, les variables et sont respectivement sommable si et seulement si les familles et sont sommables et dans ce cas Expressions qui utilisent notablement le même ensemble des indices pour les deux sommes.       Toutes les variables aléatoires introduites dans la suite sont supposées définies sur l'espace .    Espérance d'une variable presque partout constante  Une VADR presque partout constante de valeur est sommable et .    Linéarité de l'espérance  Si et sont deux VADR sommables de alors pour tout , est sommable et Ce qui signifie que est un -ev et que est une forme linéaire de .    Positivité de l'espérance  Si est une VADR positive alors . De plus si et seulement si est presque partout nulle sur .    Croissance et domination  Soient et deux VADR.   Si et sont sommables et alors .    Si et est sommable alors est sommable et        Effet de l'indépendance  Si et sont deux VADR indépendantes sommables alors est sommable et .    Inégalité de Cauchy-Schwarz  Soient et deux VADR. Si et sont sommables alors est sommable et on a avec égalité si et seulement si est presque partout nulle ou s'il existe une constante telle que presque partout sur (ie )         toute VADR bornée est sommable. De plus     Si sont des VADR sommables alors et sont sommables.   La sommabilité de et découle de la linéarité de l'espérance et des relation          Soit un vecteur aléatoire sommable au sens de la remarque alors ne dépend pas de la base choisie dans .   Considérons une autre base de . Posons pour tout , alors pour tout  En appliquant la même recette au vecteur on aboutit à Maintenant, puisque les variables sont par défintion sommabales alors les variables sont sommables par linéarité et et ainsi . Expression qui prouve que ne dépend pas de la base utilisée.    Linéarité de l'espérance d'un vecteur aléatoire  Si et sont des vecteurs aléatoires sommables à valeurs dans un même espace vectoriel de dimension finie alors pour tout , le vecteur est sommable et   D'un autre coté si est un vecteur constant non nul de et est une VADR alors le vecteur est sommable si et seulement si est sommable et dans ce cas .   Formule de transfert linéaire  Soit un vecteur aléatoire à valeurs dans un espace vectoriel de dimension finie . Si est sommable alors pour toute application linéaire définie sur , la variable est sommable et    Si sont les composantes de dans une base de , alors . Les variables sont sommables donc est sommable et par linéarité de l'espérance Puisque par définition, , alors on a aussi         Exemples usuels   Espérances des lois usuelles    désignera une VADR.     Loi uniforme   Si alors où sont les résultats possibles de l'expérience.     Loi de Bernouilli   Si alors .     Loi binomiale   Si alors .     Loi géométrique   Si alors .     Loi de Poisson   Si alors .        Activités   Loi hypergéométrique   Si alors .    Rappelons que signifie Donc      Temps d'attente du succès   Si est le temps d'attente du succès quand on répète indéfiniment et de façon indépendante un test de Bernouilli de paramètre alors     On peut écrire avec et si . Les variables sont mutuellement indépendantes et suivent toute la loi , donc   Par calcul direct : on a déjà calculé la loi de  donc      Espérance d'une variable à valeurs dans   Une VADR à valeurs dans est sommable si et seulement si la suite est sommable et dans ce cas     La famille est à termes réels positifs, ce qui legitime le calcul suivant, y compris pour l'interversion des sommes :      Espérance du min   On considère deux VAD à valeurs dans , indépendantes et de même loi. Exprimer en fonction des probabilités . Appliquer au cas où et expliquer le résultat obtenu.    Selon l'activité précédente Si alors pour tout  et finalement  est le temps d'attente d'au moins un succés quand on exécute simultanement deux instances indépendantes d'un même test de Bernouilli de paramètre . Si on note respectivement et les événements succés pour le premier et le deuxième test, le paramètre de notre expérience de Bernouilli est Ce qui montre qu'en fait   Noter que si et sont indépendantes mais et alors un calcul similaire aboutit à      Une composition de lois    est une variable qui suit la loi . est une suite de variables de Bernouilli de même paramètre . On suppose que et toutes les variables sont mutuellement indépendantes. Déterminer la loi de la variable et calculer son espérance. Décrire une expérience aléatoire qu'on peut modéliser avec .     Donc et par suite .       Variance, covariance   Propriétés et définition    Une VADR est dite de carré sommable si est sommable.  On notera l'ensemble des VADR de carrés sommables définies sur .       est un -espace vectoriel et le produit de deux VADR de carrés sommables est une variable sommable.    Découle du fait que si alors et donc par domination. Ensuite pour tout  et donc, par domination, . Sachant que la variable nulle est dans , ceci prouve que est un sous-espace vectoriel de .        Soit . La variable est sommable et son espérance est appelée variance de . On la note      Soient . La variable est sommable et son espérance est appelée covariance des variables et . On la note .        est la moyenne «quadratique» de . Elle mésure la moyenne de l'écart que peut prendre avec sa moyenne .   mésure le degré de corélation entre et , c'est à dire à quels points les résultats obtenus par et par s'influencent les uns les autres. On notera par exemple que si et sont indépendantes (aucune corélation) alors et sont indépendantes et donc        Noter que si alors .           Soient     avec égalité si et seulement si est presque partout constante.              Si et sont indépendantes alors .          est une forme bilinéaire symétrique positive de . L'inégalité de Cauchy-Schwarz pour cette forme s'écrit : avec égalité si et seulement si est presque partout constante ou s'il existe des réels et tels que presque partout.      Soient des variables aleátoires discrètes de carrés sommables. Si sont deux à deux indépendantes alors en particulier       Soiente et des variables aléatoires de carrés sommables.   On appelle écart-type de le réel .    On suppose que et ne sont pas presque partout constantes. On appelle coefficient de corrélation de et le réel            est une semi-norme de . Pour tout , si et seulement si est presque partout constante.    Si on dit que les variables aléatoires et sont non corrélées . C'est le cas par exemple si elles sont indépendantes.  La non corrélation est une sorte «d'orthogonalité» pour la forme bilinéaire symétrique .    Si et ne sont pas presque partout constantes, selon l'inégalité de Cauchy-Schwarz, on a avec égalité si et seulement s'il existe des réels et tels que presque partout avec si et si . On dit que et sont linéairement corrélées (positivément ou négativement selon le signe de ).  Plus est voisin de plus les variables et sont «positivement» corrélées. Plus il est voisin de plus elles sont «négativement» corrélées.    Une VADR est dite centrée si . Elle est dite centrée réduite si elle est centrée et .  Pour toute VADR non partout constante, la VADR est centrée réduite.       Matrice des covariances d'un vecteur aléatoire  On considère des VADR . On appelle matrice des covariances du vecteur la matrice carrée de taille dont les coefficients sont . est la matrice de Gram de la famille pour la forme bilinéaire symétrique .  Pour tout , on a où (voir l'activité ). On en déduit par exemple que est presque partout constante si et seulement si .   est une matrice symétrique positive. Elle est en particulier orthogonalemnt diagonalisable et ses valeurs propres sont positives ou nulles. Une base orthonormale de vecteurs propres peut servir à construire une base de l'espace vectoriel engendré par formée de VADR deux à deux non corrélées . En outre les vecteurs dans cette base qui sont associés à la valeur propre nulle sont des VADR presque partout constantes. Ce qui permet de représenter tout élément de à une VADR presque partout constante près comme une combinaison linéaire de VADR non partout constantes et deux à deux non corrélées. Ces observations sont essentielles dans ce qu'on appelle Analyse en Composantes Principales (ACP). Voir pour cela :   la définition sur Wikipedia     un document plus technique est plus détaillé sur le web    D'autre propriétés de la matrices de covariances seront en outre explorées dans les activités et      Exemples usuels   Variances des lois usuelles.   On considère une VADR .     Loi uniforme  Si à valeurs dans alors .  En général si suit une loi uniforme à valeurs dans alors     Loi de Bernouilli  Si alors     Loi binomiale  Si alors     Loi géometrique  Si alors     Loi de Poisson  Si alors .       Activités   Matrice des covariances d'un vecteur aléatoire   Dans cette activité, nous étudions la matrice des covariances d'un vecteur aléatoire discret à valeurs dans . Nous allons explorer les propriétés de cette matrice et en donner une application.  On dit que admet un moment d'ordre si ses composantes en admettent. On suppose que admet un moment d'ordre et on pose par définition             est une matrice symétrique réelle d'ordre appelée matrice des covariances du vecteur .   Symétrie et positivité  Soit . Montrer que : et en déduire que est une matrice symétrique positive.   Par bilinéarité de la covariance on a le développement : Un résultat usuel d'un autre côte donne donc . La matrice qui est naturellement symétrique est donc positive puisque cette dernière égalité prouve que    Une expression de la matrice des covariances  Montrer que : En déduire que si alors et qu'en particulier    On observe que Donc : Si alors et donc .    Transformation linéaire d'un vecteur aléatoire  Soient une matrice et un vecteur colonne. On considère le vecteur aléatoire .  Montrer que admet des moments d'ordre 2.  Montrer que : dans cette relation on peut remplacer par un vecteur aléatoire à valeurs dans un -ev de dimension finie quelconque et par une application linéaire définie sur cet espace et à valeurs dans un autre espace , le vecteur éant pris dans . Elle s'écrit alors On admet cette dernière propriété.  Montrer que la matrice des covariances de est donnée par :        Comme admet des moments d'ordre 2, chaque composante admet une variance finie. Chaque composante du vecteur est une combinaison linéaire des , donc admet également des moments d'ordre 2.  Par linéarité de l'espérance, on a :   La matrice des covariances de est donnée par : Donc d'après la relation précédente sur l'espérance         Toute matrice symétrique positive est une matrice de covariances  Soit une matrice symétrique positive. Montrer qu'il existe un vecteur aléatoire tel que .   Comme est symétrique positive, il existe une matrice symétrique positive telle que : . Soit un vecteur aléatoire dont les composantes sont des variables aléatoires indépendantes de variance 1. On a et donc le vecteur a pour matrice des covariances :     Produit d'Hadamard et indépendance  Soient et deux vecteurs aléatoires de carrés sommables, centrés et indépendants. On définit le produit d'Hadamard de deux matrices de même tailles par Montrer que :    Comme et sont indépendants alors pour tout couple d'indices , et indépendant de et donc . En outre, est indépendant de par coalition. On a alors : Ce qui montre que .    Produit d'Hadamard de matrices symétriques positives  En déduire que le produit d'Hadamard de deux matrices symétriques positives est une matrice symétrique positive.   Soient et deux matrices symétriques positives. D'après la question précédente, il existe des vecteurs aléatoires et tels que et . Alors, , qui est une matrice des covariances, donc symétrique positive.     Espérance d'une forme quadratique   Soit un vecteur aléatoire de ayant un moment d'ordre . On note la matrice des covariances de et son espérance.  L'activité propose de montrer la formule dite formule des formes quadratiques et quelques exemples d'application ensuite.   Formule des formes quadratiques  Soit une matrice carrée constante. Démontrer la formule :    Soit un vecteur aléatoire de dimension , de moyenne et de matrice de covariance . Soit une matrice carrée de taille .  Nous voulons calculer . Pour cela, décomposons en sa moyenne et son écart par rapport à la moyenne . Ainsi, , où et .  En substituant dans la forme quadratique, nous obtenons :   Développons cette expression :   Prenons l'espérance des deux côtés. Comme , les termes linéaires en disparaissent :   Il reste à calculer . Notons que est un scalaire, donc égal à sa trace :   En utilisant la propriété de cyclicité de la trace ( ), nous avons :   En prenant l'espérance, nous obtenons :   Or, , donc :   En combinant ce résultat avec l'expression précédente, nous obtenons finalement :   Ce qui conclut la démonstration.    Modèle de portefeuille binaire  Objectif : Comprendre comment les formes quadratiques peuvent modéliser les interactions entre actifs dans un portefeuille binaire.  Vous gérez un portefeuille de 3 actifs binaires. Chaque actif peut être actif ( ) avec une probabilité ou inactif ( ) avec une probabilité . Les actifs peuvent être corrélés.   Données :     ,   ,   .  La corrélation entre et est , et est indépendant des deux autres.  La matrice de pondération .    Rôle de la matrice de pondération  La matrice représente les interactions entre les actifs du portefeuille. Chaque élément quantifie l'influence de l'actif sur l'actif . Par exemple, signifie que l'actif 2 influence l'actif 1 avec un poids de 0.5. Les éléments diagonaux représentent l'importance intrinsèque de chaque actif.    Tâches :    Calculez la matrice de covariance .  Calculez en utilisant la formule .  Interprétez le résultat en termes de risque du portefeuille.     Solution :     Matrice de covariance :     Calcul de :    ,   ,   .     Interprétation : Une espérance plus élevée indique un portefeuille plus risqué.     Réseau aléatoire avec interactions binaires  Objectif : Explorer comment les formes quadratiques peuvent modéliser les connexions dans un réseau aléatoire.  Vous étudiez un réseau de 4 nœuds, où chaque nœud est actif ( ) avec une probabilité ou inactif ( ) avec une probabilité . La matrice représente les connexions entre les nœuds.   Données :     ,   ,   ,   .   les variables sont supposés inépendantes.   La matrice de connexion .    Rôle de la matrice de connexion  La matrice représente les connexions entre les nœuds du réseau. Chaque élément vaut 1 si les nœuds et sont connectés, et 0 sinon. Par exemple, signifie que les nœuds 1 et 2 sont connectés. Les éléments diagonaux sont fixés à 0 pour indiquer qu'un nœud n'est pas connecté à lui-même.   Representation du réseaux étudié      Tâches :    Calculez en utilisant la formule .  Interprétez le résultat en termes de nombre attendu de paires de nœuds actifs connectés.     Solution :     Calcul de :   La matrice de covariance est diagonale car les variables sont indépendantes :    (car a des zéros sur la diagonale),   ,   .     Interprétation : En moyenne, 3.42 paires de nœuds actifs sont connectées dans le réseau.     Modèle de vote avec dépendances  Objectif : Analyser comment les formes quadratiques peuvent modéliser les influences entre électeurs dans un système de vote.  Vous étudiez un système de vote avec 3 électeurs. Chaque électeur vote pour un candidat ( ) avec une probabilité ou s'abstient ( ) avec une probabilité . Les votes peuvent être corrélés.   Données :     ,   ,   .  La corrélation entre et est , et est indépendant des deux autres.  La matrice de pondération .    Rôle de la matrice de pondération  La matrice représente les influences entre les électeurs. Chaque élément quantifie l'influence de l'électeur sur l'électeur . Par exemple, signifie que l'électeur 2 influence l'électeur 1 avec un poids de 0.5. Les éléments diagonaux représentent l'importance intrinsèque de chaque électeur.    Tâches :    Calculez la matrice de covariance .  Calculez en utilisant la formule .  Interprétez le résultat en termes d'influence des électeurs sur le résultat du vote.     Solution :     Matrice de covariance :     Calcul de :    ,   ,   .     Interprétation : L'espérance élevée reflète une forte influence des électeurs corrélés sur le résultat du vote.       "
},
{
  "id": "def-esperance",
  "level": "2",
  "url": "sec-espvaralea.html#def-esperance",
  "type": "Définition",
  "number": "1.61",
  "title": "",
  "body": "  Soit une variable aléatoire discrète réelle définie sur .  On dit que est sommable, ou que admet une espérance, si la famille est sommable. On appelle alors espérance de le réel On notera l'ensemble des VADR sommables définies sur    "
},
{
  "id": "subsubsec-defprop-3",
  "level": "2",
  "url": "sec-espvaralea.html#subsubsec-defprop-3",
  "type": "Remarque",
  "number": "1.62",
  "title": "",
  "body": "   Quand elle définie, est le barycentre de la famille de points pondérés . Pour cette raison on l'appelle aussi valeur moyenne de .    Dans le cas d'une VADR à valeurs positives ou nulles, si n'est pas sommable alors on pose par convention  est alors sommable si et seulement si .    En conséquence, pour une VADR quelconque     La définition a un inconvénient : la somme utilisée est indexée par un ensemble qui dépend de . Ce qui pose un problème lorsqu'on combine entre plusieurs variables aléatoire. Comme lorsque on s'intéresse à par exemple.  La formule de transfert énoncée ci-après résout ce problème.    La définition de dépend seulement de la loi de . Dans ce sens deux variables qui ont la même loi ont la même espérance. Nous parlerons souvent de l'espérance d'une loi de probabilité pour désigner l'espérance des variables qui suivent cette loi.    La définition se limite aux variables aléatoires discrète réelles , mais elle est tout à fait valable sans aucune modification pour les variables aléatoires discrètes à valeurs complexes . La notion de base utilisée étant celle de familles sommables et celle-ci a été étudiée dans le cadre des familles de nombres réels ou complexes.    "
},
{
  "id": "subsubsec-defprop-4",
  "level": "2",
  "url": "sec-espvaralea.html#subsubsec-defprop-4",
  "type": "Exploration",
  "number": "1.10",
  "title": "",
  "body": "   On peut généraliser la notion d'espérance à des vecteurs aléatoires discrets en utilisant les «variables composantes» : si est un vecteur aléatoire discret à valeurs dans un -ev de dimension finie qui s'écrit sous la forme où est une base fixée de , alors, par définition, est sommable si et seulement si les variables sont sommables et dans ce cas Cela pose toutefois le problème de la dépendance de cette définition par rapport à la base utilisée. (Voir remarque )    Dans le cas d'une matrice aléatoire par exemple, est sommable si et seulement si est sommable pout et dans ce cas, par définition     Attention toutefois : les familles sommables de vecteurs ne sont pas au programme. Donc l'écriture déborde du cadre limité par celui-ci.    "
},
{
  "id": "prop-casdenom",
  "level": "2",
  "url": "sec-espvaralea.html#prop-casdenom",
  "type": "Proposition",
  "number": "1.63",
  "title": "",
  "body": "  On suppose que est au plus dénombrable. Une VADR définie sur est sommable si et seulement si la famille est sommable et dans ce cas     La famille d'événemnts est une partition de et pour tout on a Donc selon le théorème de sommation par paquets et dans ce cas    "
},
{
  "id": "subsubsec-defprop-6",
  "level": "2",
  "url": "sec-espvaralea.html#subsubsec-defprop-6",
  "type": "Remarque",
  "number": "1.64",
  "title": "",
  "body": " Apparement ce dernier résultat résout le problème de l'ecriture de en fonction de l'ensemble (qui dépend de ). L'intérêt est toutefois relatif car dans la pratique on ne contrôle pas l'univers lui même et il n'est pas nécessairement au plus dénombrable.  "
},
{
  "id": "thm-transfert",
  "level": "2",
  "url": "sec-espvaralea.html#thm-transfert",
  "type": "Théorème",
  "number": "1.65",
  "title": "(formule de transfert).",
  "body": " (formule de transfert)   Soit une VAD définie sur (possiblement à valeurs vectorielles). Soit une application définie sur .  La variable est sommable si et seulement si la famille est sommable et dans ce cas     On pose et on imite la démonstration de la proposition précédente en observant cette fois que est une partition de . Selon le théorème de sommation par paquets, est sommable si et seulement si Or pour tout  Ce qui ramène l'équivalence à juste la deuxième condition, elle même équivalente à la sommabilité de la variable . D'où l'équivalence énoncée dans le théorème et la validité de la formule : par sommation par paquets.   "
},
{
  "id": "cor-transfert",
  "level": "2",
  "url": "sec-espvaralea.html#cor-transfert",
  "type": "Corollaire",
  "number": "1.66",
  "title": "",
  "body": "  Soient et deux VADR. Soit une application définie sur . La variable est sommable si et seulement si la famille est sommable est dans ce cas     Il suffit d'appliquer la formule de transfert au couple .   "
},
{
  "id": "subsubsec-defprop-9",
  "level": "2",
  "url": "sec-espvaralea.html#subsubsec-defprop-9",
  "type": "Remarque",
  "number": "1.67",
  "title": "",
  "body": "   La formule de transfert permet donc de combiner les résultats de deux variables et en utilisant la loi conjointe du couple . Ce qui résout le problème de la dépendance de l'expression de de l'ensemble .  Par exemple la variable est sommable si et seulement si la famille est sommable et dans ce cas Noter qu'en considérant les application et , alors selon ce même résultat, les variables et sont respectivement sommable si et seulement si les familles et sont sommables et dans ce cas Expressions qui utilisent notablement le même ensemble des indices pour les deux sommes.    "
},
{
  "id": "prop-proprietes",
  "level": "2",
  "url": "sec-espvaralea.html#prop-proprietes",
  "type": "Proposition",
  "number": "1.68",
  "title": "",
  "body": "  Toutes les variables aléatoires introduites dans la suite sont supposées définies sur l'espace .    Espérance d'une variable presque partout constante  Une VADR presque partout constante de valeur est sommable et .    Linéarité de l'espérance  Si et sont deux VADR sommables de alors pour tout , est sommable et Ce qui signifie que est un -ev et que est une forme linéaire de .    Positivité de l'espérance  Si est une VADR positive alors . De plus si et seulement si est presque partout nulle sur .    Croissance et domination  Soient et deux VADR.   Si et sont sommables et alors .    Si et est sommable alors est sommable et        Effet de l'indépendance  Si et sont deux VADR indépendantes sommables alors est sommable et .    Inégalité de Cauchy-Schwarz  Soient et deux VADR. Si et sont sommables alors est sommable et on a avec égalité si et seulement si est presque partout nulle ou s'il existe une constante telle que presque partout sur (ie )     "
},
{
  "id": "subsubsec-defprop-11",
  "level": "2",
  "url": "sec-espvaralea.html#subsubsec-defprop-11",
  "type": "Remarque",
  "number": "1.69",
  "title": "",
  "body": "   toute VADR bornée est sommable. De plus     Si sont des VADR sommables alors et sont sommables.   La sommabilité de et découle de la linéarité de l'espérance et des relation      "
},
{
  "id": "subsubsec-defprop-12",
  "level": "2",
  "url": "sec-espvaralea.html#subsubsec-defprop-12",
  "type": "Exploration",
  "number": "1.11",
  "title": "",
  "body": "   Soit un vecteur aléatoire sommable au sens de la remarque alors ne dépend pas de la base choisie dans .   Considérons une autre base de . Posons pour tout , alors pour tout  En appliquant la même recette au vecteur on aboutit à Maintenant, puisque les variables sont par défintion sommabales alors les variables sont sommables par linéarité et et ainsi . Expression qui prouve que ne dépend pas de la base utilisée.    Linéarité de l'espérance d'un vecteur aléatoire  Si et sont des vecteurs aléatoires sommables à valeurs dans un même espace vectoriel de dimension finie alors pour tout , le vecteur est sommable et   D'un autre coté si est un vecteur constant non nul de et est une VADR alors le vecteur est sommable si et seulement si est sommable et dans ce cas .   Formule de transfert linéaire  Soit un vecteur aléatoire à valeurs dans un espace vectoriel de dimension finie . Si est sommable alors pour toute application linéaire définie sur , la variable est sommable et    Si sont les composantes de dans une base de , alors . Les variables sont sommables donc est sommable et par linéarité de l'espérance Puisque par définition, , alors on a aussi      "
},
{
  "id": "subsubsec-exemple-esperance-2",
  "level": "2",
  "url": "sec-espvaralea.html#subsubsec-exemple-esperance-2",
  "type": "Liste",
  "number": "1.70",
  "title": "Espérances des lois usuelles",
  "body": " Espérances des lois usuelles    désignera une VADR.     Loi uniforme   Si alors où sont les résultats possibles de l'expérience.     Loi de Bernouilli   Si alors .     Loi binomiale   Si alors .     Loi géométrique   Si alors .     Loi de Poisson   Si alors .     "
},
{
  "id": "subsubsec-activites-2",
  "level": "2",
  "url": "sec-espvaralea.html#subsubsec-activites-2",
  "type": "Activité",
  "number": "1.12",
  "title": "Loi hypergéométrique.",
  "body": " Loi hypergéométrique   Si alors .    Rappelons que signifie Donc    "
},
{
  "id": "subsubsec-activites-3",
  "level": "2",
  "url": "sec-espvaralea.html#subsubsec-activites-3",
  "type": "Activité",
  "number": "1.13",
  "title": "Temps d’attente du <span class=\"process-math\">\\(k^\\text{e}\\)<\/span> succès.",
  "body": " Temps d'attente du succès   Si est le temps d'attente du succès quand on répète indéfiniment et de façon indépendante un test de Bernouilli de paramètre alors     On peut écrire avec et si . Les variables sont mutuellement indépendantes et suivent toute la loi , donc   Par calcul direct : on a déjà calculé la loi de  donc    "
},
{
  "id": "subsubsec-activites-4",
  "level": "2",
  "url": "sec-espvaralea.html#subsubsec-activites-4",
  "type": "Activité",
  "number": "1.14",
  "title": "Espérance d’une variable à valeurs dans <span class=\"process-math\">\\(\\N\\)<\/span>.",
  "body": " Espérance d'une variable à valeurs dans   Une VADR à valeurs dans est sommable si et seulement si la suite est sommable et dans ce cas     La famille est à termes réels positifs, ce qui legitime le calcul suivant, y compris pour l'interversion des sommes :    "
},
{
  "id": "subsubsec-activites-5",
  "level": "2",
  "url": "sec-espvaralea.html#subsubsec-activites-5",
  "type": "Activité",
  "number": "1.15",
  "title": "Espérance du min.",
  "body": " Espérance du min   On considère deux VAD à valeurs dans , indépendantes et de même loi. Exprimer en fonction des probabilités . Appliquer au cas où et expliquer le résultat obtenu.    Selon l'activité précédente Si alors pour tout  et finalement  est le temps d'attente d'au moins un succés quand on exécute simultanement deux instances indépendantes d'un même test de Bernouilli de paramètre . Si on note respectivement et les événements succés pour le premier et le deuxième test, le paramètre de notre expérience de Bernouilli est Ce qui montre qu'en fait   Noter que si et sont indépendantes mais et alors un calcul similaire aboutit à    "
},
{
  "id": "subsubsec-activites-6",
  "level": "2",
  "url": "sec-espvaralea.html#subsubsec-activites-6",
  "type": "Activité",
  "number": "1.16",
  "title": "Une composition de lois.",
  "body": " Une composition de lois    est une variable qui suit la loi . est une suite de variables de Bernouilli de même paramètre . On suppose que et toutes les variables sont mutuellement indépendantes. Déterminer la loi de la variable et calculer son espérance. Décrire une expérience aléatoire qu'on peut modéliser avec .     Donc et par suite .   "
},
{
  "id": "def-carre-sommable",
  "level": "2",
  "url": "sec-espvaralea.html#def-carre-sommable",
  "type": "Définition",
  "number": "1.71",
  "title": "",
  "body": "  Une VADR est dite de carré sommable si est sommable.  On notera l'ensemble des VADR de carrés sommables définies sur .   "
},
{
  "id": "prop-ltwo",
  "level": "2",
  "url": "sec-espvaralea.html#prop-ltwo",
  "type": "Proposition",
  "number": "1.72",
  "title": "",
  "body": "   est un -espace vectoriel et le produit de deux VADR de carrés sommables est une variable sommable.    Découle du fait que si alors et donc par domination. Ensuite pour tout  et donc, par domination, . Sachant que la variable nulle est dans , ceci prouve que est un sous-espace vectoriel de .   "
},
{
  "id": "def-varcovar",
  "level": "2",
  "url": "sec-espvaralea.html#def-varcovar",
  "type": "Définition",
  "number": "1.73",
  "title": "",
  "body": "    Soit . La variable est sommable et son espérance est appelée variance de . On la note      Soient . La variable est sommable et son espérance est appelée covariance des variables et . On la note .        est la moyenne «quadratique» de . Elle mésure la moyenne de l'écart que peut prendre avec sa moyenne .   mésure le degré de corélation entre et , c'est à dire à quels points les résultats obtenus par et par s'influencent les uns les autres. On notera par exemple que si et sont indépendantes (aucune corélation) alors et sont indépendantes et donc    "
},
{
  "id": "subsubsec-varcovar-5",
  "level": "2",
  "url": "sec-espvaralea.html#subsubsec-varcovar-5",
  "type": "Remarque",
  "number": "1.74",
  "title": "",
  "body": "   Noter que si alors .        "
},
{
  "id": "prop-var-identite",
  "level": "2",
  "url": "sec-espvaralea.html#prop-var-identite",
  "type": "Proposition",
  "number": "1.75",
  "title": "",
  "body": "  Soient     avec égalité si et seulement si est presque partout constante.              Si et sont indépendantes alors .      "
},
{
  "id": "thm-varcovar",
  "level": "2",
  "url": "sec-espvaralea.html#thm-varcovar",
  "type": "Théorème",
  "number": "1.76",
  "title": "",
  "body": "   est une forme bilinéaire symétrique positive de . L'inégalité de Cauchy-Schwarz pour cette forme s'écrit : avec égalité si et seulement si est presque partout constante ou s'il existe des réels et tels que presque partout.   "
},
{
  "id": "prop-varcovar",
  "level": "2",
  "url": "sec-espvaralea.html#prop-varcovar",
  "type": "Proposition",
  "number": "1.77",
  "title": "",
  "body": "  Soient des variables aleátoires discrètes de carrés sommables. Si sont deux à deux indépendantes alors en particulier    "
},
{
  "id": "def-ecarttype-covariance",
  "level": "2",
  "url": "sec-espvaralea.html#def-ecarttype-covariance",
  "type": "Définition",
  "number": "1.78",
  "title": "",
  "body": "  Soiente et des variables aléatoires de carrés sommables.   On appelle écart-type de le réel .    On suppose que et ne sont pas presque partout constantes. On appelle coefficient de corrélation de et le réel       "
},
{
  "id": "subsubsec-varcovar-10",
  "level": "2",
  "url": "sec-espvaralea.html#subsubsec-varcovar-10",
  "type": "Remarque",
  "number": "1.79",
  "title": "",
  "body": "    est une semi-norme de . Pour tout , si et seulement si est presque partout constante.    Si on dit que les variables aléatoires et sont non corrélées . C'est le cas par exemple si elles sont indépendantes.  La non corrélation est une sorte «d'orthogonalité» pour la forme bilinéaire symétrique .    Si et ne sont pas presque partout constantes, selon l'inégalité de Cauchy-Schwarz, on a avec égalité si et seulement s'il existe des réels et tels que presque partout avec si et si . On dit que et sont linéairement corrélées (positivément ou négativement selon le signe de ).  Plus est voisin de plus les variables et sont «positivement» corrélées. Plus il est voisin de plus elles sont «négativement» corrélées.    Une VADR est dite centrée si . Elle est dite centrée réduite si elle est centrée et .  Pour toute VADR non partout constante, la VADR est centrée réduite.      "
},
{
  "id": "subsubsec-varcovar-11",
  "level": "2",
  "url": "sec-espvaralea.html#subsubsec-varcovar-11",
  "type": "Exploration",
  "number": "1.17",
  "title": "Matrice des covariances d’un vecteur aléatoire.",
  "body": "Matrice des covariances d'un vecteur aléatoire  On considère des VADR . On appelle matrice des covariances du vecteur la matrice carrée de taille dont les coefficients sont . est la matrice de Gram de la famille pour la forme bilinéaire symétrique .  Pour tout , on a où (voir l'activité ). On en déduit par exemple que est presque partout constante si et seulement si .   est une matrice symétrique positive. Elle est en particulier orthogonalemnt diagonalisable et ses valeurs propres sont positives ou nulles. Une base orthonormale de vecteurs propres peut servir à construire une base de l'espace vectoriel engendré par formée de VADR deux à deux non corrélées . En outre les vecteurs dans cette base qui sont associés à la valeur propre nulle sont des VADR presque partout constantes. Ce qui permet de représenter tout élément de à une VADR presque partout constante près comme une combinaison linéaire de VADR non partout constantes et deux à deux non corrélées. Ces observations sont essentielles dans ce qu'on appelle Analyse en Composantes Principales (ACP). Voir pour cela :   la définition sur Wikipedia     un document plus technique est plus détaillé sur le web    D'autre propriétés de la matrices de covariances seront en outre explorées dans les activités et   "
},
{
  "id": "list-var",
  "level": "2",
  "url": "sec-espvaralea.html#list-var",
  "type": "Liste",
  "number": "1.80",
  "title": "Variances des lois usuelles.",
  "body": " Variances des lois usuelles.   On considère une VADR .     Loi uniforme  Si à valeurs dans alors .  En général si suit une loi uniforme à valeurs dans alors     Loi de Bernouilli  Si alors     Loi binomiale  Si alors     Loi géometrique  Si alors     Loi de Poisson  Si alors .    "
},
{
  "id": "matrice-covariance-vecteur-aleatoire",
  "level": "2",
  "url": "sec-espvaralea.html#matrice-covariance-vecteur-aleatoire",
  "type": "Activité",
  "number": "1.18",
  "title": "Matrice des covariances d’un vecteur aléatoire.",
  "body": " Matrice des covariances d'un vecteur aléatoire   Dans cette activité, nous étudions la matrice des covariances d'un vecteur aléatoire discret à valeurs dans . Nous allons explorer les propriétés de cette matrice et en donner une application.  On dit que admet un moment d'ordre si ses composantes en admettent. On suppose que admet un moment d'ordre et on pose par définition             est une matrice symétrique réelle d'ordre appelée matrice des covariances du vecteur .   Symétrie et positivité  Soit . Montrer que : et en déduire que est une matrice symétrique positive.   Par bilinéarité de la covariance on a le développement : Un résultat usuel d'un autre côte donne donc . La matrice qui est naturellement symétrique est donc positive puisque cette dernière égalité prouve que    Une expression de la matrice des covariances  Montrer que : En déduire que si alors et qu'en particulier    On observe que Donc : Si alors et donc .    Transformation linéaire d'un vecteur aléatoire  Soient une matrice et un vecteur colonne. On considère le vecteur aléatoire .  Montrer que admet des moments d'ordre 2.  Montrer que : dans cette relation on peut remplacer par un vecteur aléatoire à valeurs dans un -ev de dimension finie quelconque et par une application linéaire définie sur cet espace et à valeurs dans un autre espace , le vecteur éant pris dans . Elle s'écrit alors On admet cette dernière propriété.  Montrer que la matrice des covariances de est donnée par :        Comme admet des moments d'ordre 2, chaque composante admet une variance finie. Chaque composante du vecteur est une combinaison linéaire des , donc admet également des moments d'ordre 2.  Par linéarité de l'espérance, on a :   La matrice des covariances de est donnée par : Donc d'après la relation précédente sur l'espérance         Toute matrice symétrique positive est une matrice de covariances  Soit une matrice symétrique positive. Montrer qu'il existe un vecteur aléatoire tel que .   Comme est symétrique positive, il existe une matrice symétrique positive telle que : . Soit un vecteur aléatoire dont les composantes sont des variables aléatoires indépendantes de variance 1. On a et donc le vecteur a pour matrice des covariances :     Produit d'Hadamard et indépendance  Soient et deux vecteurs aléatoires de carrés sommables, centrés et indépendants. On définit le produit d'Hadamard de deux matrices de même tailles par Montrer que :    Comme et sont indépendants alors pour tout couple d'indices , et indépendant de et donc . En outre, est indépendant de par coalition. On a alors : Ce qui montre que .    Produit d'Hadamard de matrices symétriques positives  En déduire que le produit d'Hadamard de deux matrices symétriques positives est une matrice symétrique positive.   Soient et deux matrices symétriques positives. D'après la question précédente, il existe des vecteurs aléatoires et tels que et . Alors, , qui est une matrice des covariances, donc symétrique positive.   "
},
{
  "id": "esperance-forme-quadratique",
  "level": "2",
  "url": "sec-espvaralea.html#esperance-forme-quadratique",
  "type": "Activité",
  "number": "1.19",
  "title": "Espérance d’une forme quadratique.",
  "body": " Espérance d'une forme quadratique   Soit un vecteur aléatoire de ayant un moment d'ordre . On note la matrice des covariances de et son espérance.  L'activité propose de montrer la formule dite formule des formes quadratiques et quelques exemples d'application ensuite.   Formule des formes quadratiques  Soit une matrice carrée constante. Démontrer la formule :    Soit un vecteur aléatoire de dimension , de moyenne et de matrice de covariance . Soit une matrice carrée de taille .  Nous voulons calculer . Pour cela, décomposons en sa moyenne et son écart par rapport à la moyenne . Ainsi, , où et .  En substituant dans la forme quadratique, nous obtenons :   Développons cette expression :   Prenons l'espérance des deux côtés. Comme , les termes linéaires en disparaissent :   Il reste à calculer . Notons que est un scalaire, donc égal à sa trace :   En utilisant la propriété de cyclicité de la trace ( ), nous avons :   En prenant l'espérance, nous obtenons :   Or, , donc :   En combinant ce résultat avec l'expression précédente, nous obtenons finalement :   Ce qui conclut la démonstration.    Modèle de portefeuille binaire  Objectif : Comprendre comment les formes quadratiques peuvent modéliser les interactions entre actifs dans un portefeuille binaire.  Vous gérez un portefeuille de 3 actifs binaires. Chaque actif peut être actif ( ) avec une probabilité ou inactif ( ) avec une probabilité . Les actifs peuvent être corrélés.   Données :     ,   ,   .  La corrélation entre et est , et est indépendant des deux autres.  La matrice de pondération .    Rôle de la matrice de pondération  La matrice représente les interactions entre les actifs du portefeuille. Chaque élément quantifie l'influence de l'actif sur l'actif . Par exemple, signifie que l'actif 2 influence l'actif 1 avec un poids de 0.5. Les éléments diagonaux représentent l'importance intrinsèque de chaque actif.    Tâches :    Calculez la matrice de covariance .  Calculez en utilisant la formule .  Interprétez le résultat en termes de risque du portefeuille.     Solution :     Matrice de covariance :     Calcul de :    ,   ,   .     Interprétation : Une espérance plus élevée indique un portefeuille plus risqué.     Réseau aléatoire avec interactions binaires  Objectif : Explorer comment les formes quadratiques peuvent modéliser les connexions dans un réseau aléatoire.  Vous étudiez un réseau de 4 nœuds, où chaque nœud est actif ( ) avec une probabilité ou inactif ( ) avec une probabilité . La matrice représente les connexions entre les nœuds.   Données :     ,   ,   ,   .   les variables sont supposés inépendantes.   La matrice de connexion .    Rôle de la matrice de connexion  La matrice représente les connexions entre les nœuds du réseau. Chaque élément vaut 1 si les nœuds et sont connectés, et 0 sinon. Par exemple, signifie que les nœuds 1 et 2 sont connectés. Les éléments diagonaux sont fixés à 0 pour indiquer qu'un nœud n'est pas connecté à lui-même.   Representation du réseaux étudié      Tâches :    Calculez en utilisant la formule .  Interprétez le résultat en termes de nombre attendu de paires de nœuds actifs connectés.     Solution :     Calcul de :   La matrice de covariance est diagonale car les variables sont indépendantes :    (car a des zéros sur la diagonale),   ,   .     Interprétation : En moyenne, 3.42 paires de nœuds actifs sont connectées dans le réseau.     Modèle de vote avec dépendances  Objectif : Analyser comment les formes quadratiques peuvent modéliser les influences entre électeurs dans un système de vote.  Vous étudiez un système de vote avec 3 électeurs. Chaque électeur vote pour un candidat ( ) avec une probabilité ou s'abstient ( ) avec une probabilité . Les votes peuvent être corrélés.   Données :     ,   ,   .  La corrélation entre et est , et est indépendant des deux autres.  La matrice de pondération .    Rôle de la matrice de pondération  La matrice représente les influences entre les électeurs. Chaque élément quantifie l'influence de l'électeur sur l'électeur . Par exemple, signifie que l'électeur 2 influence l'électeur 1 avec un poids de 0.5. Les éléments diagonaux représentent l'importance intrinsèque de chaque électeur.    Tâches :    Calculez la matrice de covariance .  Calculez en utilisant la formule .  Interprétez le résultat en termes d'influence des électeurs sur le résultat du vote.     Solution :     Matrice de covariance :     Calcul de :    ,   ,   .     Interprétation : L'espérance élevée reflète une forte influence des électeurs corrélés sur le résultat du vote.    "
},
{
  "id": "sec-fctgen",
  "level": "1",
  "url": "sec-fctgen.html",
  "type": "Section",
  "number": "1.4",
  "title": "Fonctions génératrices",
  "body": " Fonctions génératrices   Définition et propriétés   Fonction génératrice  La fonction génératrice d'une variable aléatoire à valeurs dans est définie par On notera le rayon de convergence de la série entière     Soit une variable aléatoire à valeurs dans .    Puisque la série est convergente de somme alors et .    La loi de est entièrement déterminée par sa fonction génératrice , dans le sens où si et sont des VAD à valeurs dans alors Noter aussi que dans ce cas et ont les mêmes moments, en particulier la même espérance.    Si est fini alors est polynomiale de degré .    Si alors admet des moments à tout ordre et pour tout     Si alors est infiniment dérivable en et pour tout  La série est donc convergente ce qui signifie par théorème de transfert que la variable est sommable et que . Comme est une combinaison linéaire de variables de la forme alors est sommable et s'exprime en fonction des dérivées pour .        Soient et deux variables aléatoires à valeurs dans . Si et sont indépendantes alors .      Si sont des variables aléatoires mutuellement indépendantes à valeurs dans alors       Soit une variable aléatoire à valeurs dans .    est sommable si et seulement si est dérivable en et dans ce cas .     est de carré sommable si et seulement si est deux fois dérivable en et dans ce cas .         Fonctions génératrices des lois usuelles    Loi uniforme  Si à valeurs dans alors .   Loi de Bernouilli  Si alors    Loi binomiale  Si alors .   Loi géométrique  Si alors .   Loi de Poisson  Si alors .       Concept de fonction génératrice   Fonction génératrice d'une suite  Pour toute suite réelle ou complexe on appelle série génératrice de , la série entière . Si le rayon de convergence de celle-ci est non nul, on appelle sa somme fonction génératrice de la suite .  On appelle aussi, série génératrice exponentielle de , la série entière . Celle-ci a plus de chance d'avoir un rayon de convergence non nul que   Si on connaît la fonction génératrice d'une suite alors on peut retrouver la suite en calculant le développement de Taylor de . D'où l'utilité des fonctions génératrices : si une suite est définie par une relation de récurrence alors on traduit, dans certains cas, cette relation en une équation fonctionnelle ou différentielle de la fonction génératrice. Résoudre cette équation nous permet ensuite d'identifier l'expression explicite des termes de la suite.  La fonction génératrice d'une VAD à valeurs dans est ainsi la fonction génératrice de la suite , ie de la loi de .   Fonction génératrice des coefficients binomiaux  On sait que pour tout réels  La fonction est donc la fonction génératrice des coefficients binomiaux .  Comme application, on peut écrire pour tous , et en identifiant les coefficients des développements en séries de Taylor des deux membres de cette égalité on obtient C'est la formule de Vandermonde.  Dans le même ordre d'idée on sait que pour tout entier  donc en identifiant les développements des deux côtés dans l'égalité suivante on obtient pour tout      Somme de variables de Poisson MI  Soient des variables aléatoires MI suivant des lois de Poissons de paramètre respectifs . On note . On veut déterminer la loi de .  On a pour tout  On en déduit que suit la loi de poisson où .  Ce résultat s'interprète par le fait que le nombre de clients servi par unité de temps dans une file d'attente qui comporte guichets indépendants est une variable aléatoire suivant une loi de Poisson de paramètre .   Une formule d'inversion  Soit une VAD à valeurs dans . On suppose que . Alors est développable en série de taylor en , ie où désigne la variable aléatoire définie par Grâce à la convergence absolue de la série à droite dans l'égalité précédente pour voisin de , on peut appliquer la formule de Fubini pour transformer l'expression de  et par identification de ce développement avec celui par défaut de on obtient Théoriquement, ces formules permettent donc de calculer la loi de connaissant les moyennes de toutes les variables .Par exemple   Noter que si est fini alors la variable et nulle pour tout supérieur à et donc que qu'on peut lier aux relations obtenues par formule de transfert      Activités   Fonction génératrice de la suite   On considère une VAD à valeurs dans et on pose pour tout     Expression de  Justifier que est bien définie et montrer que    Expression de l'espérance de  En déduire que est sommable si et seulement si admet une limite finie en et que dans ce cas    Loi du  Soient et deux VAD indépendantes à valeurs dans et soit . Exprimer en fonction de et de . En déduire que pour tout  Simplifier cette expression dans le cas où et suivent la même loi.   Pour tout  on en déduit que      Fonction génératrice du premier retour à l'origine   Dans cette activité, nous étudions une marche aléatoire biaisée sur une droite. À chaque pas, l'objet avance d'un pas avec une probabilité ou recule d'un pas avec une probabilité . Sachant qu'à l'instant l'objet est à l'origine, on note le temps d'attente du premier retour à l'origine et la position de l'objet à l'instant .  L'objectif est de trouver une relation entre les fonctions génératrices et de calculer ensuite .    Définition des fonctions génératrices  Expliquer pourquoi et sont bien définies pour .   Les fonctions génératrices et sont les sommes de séries entières dont les coefficients sont des probabilités (donc compris entre 0 et 1). Par conséquents leurs rayons de convergences sont supérieurs ou égaux à .    Relation entre et  Montrer que les fonctions génératrices et sont liées par la relation : En déduire une expression de en fonction de .   On peut écrire pour tout : «Intuitivement» : car il s'agit de revenir à l'origine en pas une fois le retour à l'origine s'est produit pour la première fois à l'instant . Donc Plus rigoureusement, on peut écrire Maintenant si note le déplacement de l'objet à l'instant alors le couple est une fonction des variables et est une fonction des variables . Donc et sont indépendants par coalition. En outre suit la même loi que . Ainsi En multipliant par et en sommant sur , on obtient : En résolvant pour , on trouve :     Calcul de  Calculer la fonction génératrice en utilisant la loi de . On rappelle que suit une loi binomiale décalée : où suit une loi binomiale .   La probabilité que est donnée par : Comme suit une loi binomiale , on a : Ainsi, pour pair, , et pour impair, . La fonction génératrice est donc : On pose , de telle sorte qu'on puisse écrire et en utilisant le développement en série entière de      Expression de  En utilisant les résultats des questions précédentes, donner une expression explicite de la fonction génératrice .   D'après la question 2, on a : En utilisant l'expression de obtenue à la question 3, on trouve :     Calcul de la probabilité du retour vers l'origine  Calculer la probabilité du retour vers l'origine.   La probabilité du retour vers l'origine est .     Fonction caractéristique d'une variable aléatoire à valeurs dans   Dans cette activité, nous étudions la fonction caractéristique d'une variable aléatoire à valeurs dans . La fonction caractéristique est un outil puissant en probabilités, permettant de caractériser la loi d'une variable aléatoire et de simplifier certains calculs. Nous allons définir cette fonction, explorer ses propriétés, et l'utiliser pour calculer des moments et des probabilités.    Définition de la fonction caractéristique  Soit une variable aléatoire à valeurs dans . On définit sa fonction caractéristique par : où .    Montrer que est bien définie pour tout .  Montrer que est -périodique et continue sur .       La fonction caractéristique est bien définie pour tout , car et donc est sommable.  Les fonctions sont -périodiques, donc est également -périodique. En outre, on peut écrire Les sommes des deux séries dans cette expression sont continues par convergence normale sur . D'où la continuité de sur .      Exemples de fonctions caractéristiques  Calculer la fonction caractéristique pour les lois suivantes :  Si (loi binomiale), montrer que :   Si (loi géométrique), montrer que :   Si (loi de Poisson), montrer que :        Pour , la fonction caractéristique est :   Pour , la fonction caractéristique est :   Pour , la fonction caractéristique est :       Dérivation et moments    Montrer que si admet un moment d'ordre , alors est de classe et :   Montrer que si admet des moments à tout ordre et s'il existe des constantes telles que alors est développable en série entière sur et        Si admet un moment d'ordre , alors la série converge pour tout . Par le théorème de dérivation terme à terme, est de classe , et :   Si admet des moments à tout ordre et que la série génératrice converge, alors par l'inégalité de Taylor-Lagrange appliquée à , on a : En multipliant par et en sommant sur , on obtient : Ainsi, .       "
},
{
  "id": "def-fctgen",
  "level": "2",
  "url": "sec-fctgen.html#def-fctgen",
  "type": "Définition",
  "number": "1.82",
  "title": "Fonction génératrice.",
  "body": " Fonction génératrice  La fonction génératrice d'une variable aléatoire à valeurs dans est définie par On notera le rayon de convergence de la série entière   "
},
{
  "id": "subsec-defprop-3",
  "level": "2",
  "url": "sec-fctgen.html#subsec-defprop-3",
  "type": "Remarque",
  "number": "1.83",
  "title": "",
  "body": " Soit une variable aléatoire à valeurs dans .    Puisque la série est convergente de somme alors et .    La loi de est entièrement déterminée par sa fonction génératrice , dans le sens où si et sont des VAD à valeurs dans alors Noter aussi que dans ce cas et ont les mêmes moments, en particulier la même espérance.    Si est fini alors est polynomiale de degré .    Si alors admet des moments à tout ordre et pour tout     Si alors est infiniment dérivable en et pour tout  La série est donc convergente ce qui signifie par théorème de transfert que la variable est sommable et que . Comme est une combinaison linéaire de variables de la forme alors est sommable et s'exprime en fonction des dérivées pour .     "
},
{
  "id": "subsec-defprop-4",
  "level": "2",
  "url": "sec-fctgen.html#subsec-defprop-4",
  "type": "Proposition",
  "number": "1.84",
  "title": "",
  "body": "  Soient et deux variables aléatoires à valeurs dans . Si et sont indépendantes alors .   "
},
{
  "id": "subsec-defprop-5",
  "level": "2",
  "url": "sec-fctgen.html#subsec-defprop-5",
  "type": "Corollaire",
  "number": "1.85",
  "title": "",
  "body": "  Si sont des variables aléatoires mutuellement indépendantes à valeurs dans alors    "
},
{
  "id": "subsec-defprop-6",
  "level": "2",
  "url": "sec-fctgen.html#subsec-defprop-6",
  "type": "Théorème",
  "number": "1.86",
  "title": "",
  "body": "  Soit une variable aléatoire à valeurs dans .    est sommable si et seulement si est dérivable en et dans ce cas .     est de carré sommable si et seulement si est deux fois dérivable en et dans ce cas .      "
},
{
  "id": "subsec-generatrices-usuelles-2",
  "level": "2",
  "url": "sec-fctgen.html#subsec-generatrices-usuelles-2",
  "type": "Liste",
  "number": "1.87",
  "title": "",
  "body": "  Loi uniforme  Si à valeurs dans alors .   Loi de Bernouilli  Si alors    Loi binomiale  Si alors .   Loi géométrique  Si alors .   Loi de Poisson  Si alors .    "
},
{
  "id": "subsec-generatrice-2",
  "level": "2",
  "url": "sec-fctgen.html#subsec-generatrice-2",
  "type": "Exploration",
  "number": "1.20",
  "title": "Fonction génératrice d’une suite.",
  "body": " Fonction génératrice d'une suite  Pour toute suite réelle ou complexe on appelle série génératrice de , la série entière . Si le rayon de convergence de celle-ci est non nul, on appelle sa somme fonction génératrice de la suite .  On appelle aussi, série génératrice exponentielle de , la série entière . Celle-ci a plus de chance d'avoir un rayon de convergence non nul que   Si on connaît la fonction génératrice d'une suite alors on peut retrouver la suite en calculant le développement de Taylor de . D'où l'utilité des fonctions génératrices : si une suite est définie par une relation de récurrence alors on traduit, dans certains cas, cette relation en une équation fonctionnelle ou différentielle de la fonction génératrice. Résoudre cette équation nous permet ensuite d'identifier l'expression explicite des termes de la suite.  La fonction génératrice d'une VAD à valeurs dans est ainsi la fonction génératrice de la suite , ie de la loi de .  "
},
{
  "id": "subsec-generatrice-3",
  "level": "2",
  "url": "sec-fctgen.html#subsec-generatrice-3",
  "type": "Exemple",
  "number": "1.88",
  "title": "Fonction génératrice des coefficients binomiaux.",
  "body": "Fonction génératrice des coefficients binomiaux  On sait que pour tout réels  La fonction est donc la fonction génératrice des coefficients binomiaux .  Comme application, on peut écrire pour tous , et en identifiant les coefficients des développements en séries de Taylor des deux membres de cette égalité on obtient C'est la formule de Vandermonde.  Dans le même ordre d'idée on sait que pour tout entier  donc en identifiant les développements des deux côtés dans l'égalité suivante on obtient pour tout    "
},
{
  "id": "subsec-generatrice-4",
  "level": "2",
  "url": "sec-fctgen.html#subsec-generatrice-4",
  "type": "Exemple",
  "number": "1.89",
  "title": "Somme de variables de Poisson MI.",
  "body": " Somme de variables de Poisson MI  Soient des variables aléatoires MI suivant des lois de Poissons de paramètre respectifs . On note . On veut déterminer la loi de .  On a pour tout  On en déduit que suit la loi de poisson où .  Ce résultat s'interprète par le fait que le nombre de clients servi par unité de temps dans une file d'attente qui comporte guichets indépendants est une variable aléatoire suivant une loi de Poisson de paramètre .  "
},
{
  "id": "subsec-generatrice-5",
  "level": "2",
  "url": "sec-fctgen.html#subsec-generatrice-5",
  "type": "Exemple",
  "number": "1.90",
  "title": "Une formule d’inversion.",
  "body": "Une formule d'inversion  Soit une VAD à valeurs dans . On suppose que . Alors est développable en série de taylor en , ie où désigne la variable aléatoire définie par Grâce à la convergence absolue de la série à droite dans l'égalité précédente pour voisin de , on peut appliquer la formule de Fubini pour transformer l'expression de  et par identification de ce développement avec celui par défaut de on obtient Théoriquement, ces formules permettent donc de calculer la loi de connaissant les moyennes de toutes les variables .Par exemple   Noter que si est fini alors la variable et nulle pour tout supérieur à et donc que qu'on peut lier aux relations obtenues par formule de transfert   "
},
{
  "id": "fonction-generatrice-xsup",
  "level": "2",
  "url": "sec-fctgen.html#fonction-generatrice-xsup",
  "type": "Activité",
  "number": "1.21",
  "title": "Fonction génératrice de la suite <span class=\"process-math\">\\((\\Pr(X\\geq n))_n\\)<\/span>.",
  "body": " Fonction génératrice de la suite   On considère une VAD à valeurs dans et on pose pour tout     Expression de  Justifier que est bien définie et montrer que    Expression de l'espérance de  En déduire que est sommable si et seulement si admet une limite finie en et que dans ce cas    Loi du  Soient et deux VAD indépendantes à valeurs dans et soit . Exprimer en fonction de et de . En déduire que pour tout  Simplifier cette expression dans le cas où et suivent la même loi.   Pour tout  on en déduit que    "
},
{
  "id": "fonction-generatrice-premier-retour",
  "level": "2",
  "url": "sec-fctgen.html#fonction-generatrice-premier-retour",
  "type": "Activité",
  "number": "1.22",
  "title": "Fonction génératrice du premier retour à l’origine.",
  "body": " Fonction génératrice du premier retour à l'origine   Dans cette activité, nous étudions une marche aléatoire biaisée sur une droite. À chaque pas, l'objet avance d'un pas avec une probabilité ou recule d'un pas avec une probabilité . Sachant qu'à l'instant l'objet est à l'origine, on note le temps d'attente du premier retour à l'origine et la position de l'objet à l'instant .  L'objectif est de trouver une relation entre les fonctions génératrices et de calculer ensuite .    Définition des fonctions génératrices  Expliquer pourquoi et sont bien définies pour .   Les fonctions génératrices et sont les sommes de séries entières dont les coefficients sont des probabilités (donc compris entre 0 et 1). Par conséquents leurs rayons de convergences sont supérieurs ou égaux à .    Relation entre et  Montrer que les fonctions génératrices et sont liées par la relation : En déduire une expression de en fonction de .   On peut écrire pour tout : «Intuitivement» : car il s'agit de revenir à l'origine en pas une fois le retour à l'origine s'est produit pour la première fois à l'instant . Donc Plus rigoureusement, on peut écrire Maintenant si note le déplacement de l'objet à l'instant alors le couple est une fonction des variables et est une fonction des variables . Donc et sont indépendants par coalition. En outre suit la même loi que . Ainsi En multipliant par et en sommant sur , on obtient : En résolvant pour , on trouve :     Calcul de  Calculer la fonction génératrice en utilisant la loi de . On rappelle que suit une loi binomiale décalée : où suit une loi binomiale .   La probabilité que est donnée par : Comme suit une loi binomiale , on a : Ainsi, pour pair, , et pour impair, . La fonction génératrice est donc : On pose , de telle sorte qu'on puisse écrire et en utilisant le développement en série entière de      Expression de  En utilisant les résultats des questions précédentes, donner une expression explicite de la fonction génératrice .   D'après la question 2, on a : En utilisant l'expression de obtenue à la question 3, on trouve :     Calcul de la probabilité du retour vers l'origine  Calculer la probabilité du retour vers l'origine.   La probabilité du retour vers l'origine est .   "
},
{
  "id": "fonction-caracteristique-conversion",
  "level": "2",
  "url": "sec-fctgen.html#fonction-caracteristique-conversion",
  "type": "Activité",
  "number": "1.23",
  "title": "Fonction caractéristique d’une variable aléatoire à valeurs dans <span class=\"process-math\">\\(\\Z\\)<\/span>.",
  "body": " Fonction caractéristique d'une variable aléatoire à valeurs dans   Dans cette activité, nous étudions la fonction caractéristique d'une variable aléatoire à valeurs dans . La fonction caractéristique est un outil puissant en probabilités, permettant de caractériser la loi d'une variable aléatoire et de simplifier certains calculs. Nous allons définir cette fonction, explorer ses propriétés, et l'utiliser pour calculer des moments et des probabilités.    Définition de la fonction caractéristique  Soit une variable aléatoire à valeurs dans . On définit sa fonction caractéristique par : où .    Montrer que est bien définie pour tout .  Montrer que est -périodique et continue sur .       La fonction caractéristique est bien définie pour tout , car et donc est sommable.  Les fonctions sont -périodiques, donc est également -périodique. En outre, on peut écrire Les sommes des deux séries dans cette expression sont continues par convergence normale sur . D'où la continuité de sur .      Exemples de fonctions caractéristiques  Calculer la fonction caractéristique pour les lois suivantes :  Si (loi binomiale), montrer que :   Si (loi géométrique), montrer que :   Si (loi de Poisson), montrer que :        Pour , la fonction caractéristique est :   Pour , la fonction caractéristique est :   Pour , la fonction caractéristique est :       Dérivation et moments    Montrer que si admet un moment d'ordre , alors est de classe et :   Montrer que si admet des moments à tout ordre et s'il existe des constantes telles que alors est développable en série entière sur et        Si admet un moment d'ordre , alors la série converge pour tout . Par le théorème de dérivation terme à terme, est de classe , et :   Si admet des moments à tout ordre et que la série génératrice converge, alors par l'inégalité de Taylor-Lagrange appliquée à , on a : En multipliant par et en sommant sur , on obtient : Ainsi, .     "
},
{
  "id": "sec-expgraph",
  "level": "1",
  "url": "sec-expgraph.html",
  "type": "Section",
  "number": "2.1",
  "title": "Exploration graphique",
  "body": " Exploration graphique   Exploration de la loi binomiale   Dans cette activité, vous allez explorer comment les paramètres (nombre d'essais) et (probabilité de succès) influencent la forme de la distribution binomiale. Vous pourrez choisir différentes valeurs de et et observer l'histogramme correspondant.    Utilisez les curseurs ci-dessous pour choisir les valeurs de et , puis observez comment l'histogramme de la loi binomiale évolue.    En modifiant les valeurs de et , vous pouvez observer comment la forme de la distribution binomiale change :  Si , la distribution est symétrique.  Si , la distribution est décalée vers la gauche.  Si , la distribution est décalée vers la droite.  Plus est grand, plus la distribution ressemble à une courbe en cloche (approximation normale).      Expliquer théoriquement vos observations     Comportement asymptotique d'une loi binomiale   Visualiser l'approximation de la loi binomiale par la loi de Poisson lorsque est grand.  Ce graphique affiche en bleu l'histogramme de la loi binomiale et en rouge la courbe de la loi de Poisson . Il permet de visualiser comment la distribution binomiale se rapproche de la distribution de Poisson lorsque devient grand.    Lorsque est grand et est petit, la distribution binomiale devient similaire à la distribution de Poisson . Cette visualisation interactive permet d'observer cette convergence.    Expliquer théoriquement vos observations    "
},
{
  "id": "sec-expgraph-2",
  "level": "2",
  "url": "sec-expgraph.html#sec-expgraph-2",
  "type": "Activité",
  "number": "2.1",
  "title": "Exploration de la loi binomiale.",
  "body": " Exploration de la loi binomiale   Dans cette activité, vous allez explorer comment les paramètres (nombre d'essais) et (probabilité de succès) influencent la forme de la distribution binomiale. Vous pourrez choisir différentes valeurs de et et observer l'histogramme correspondant.    Utilisez les curseurs ci-dessous pour choisir les valeurs de et , puis observez comment l'histogramme de la loi binomiale évolue.    En modifiant les valeurs de et , vous pouvez observer comment la forme de la distribution binomiale change :  Si , la distribution est symétrique.  Si , la distribution est décalée vers la gauche.  Si , la distribution est décalée vers la droite.  Plus est grand, plus la distribution ressemble à une courbe en cloche (approximation normale).      Expliquer théoriquement vos observations   "
},
{
  "id": "sec-expgraph-3",
  "level": "2",
  "url": "sec-expgraph.html#sec-expgraph-3",
  "type": "Activité",
  "number": "2.2",
  "title": "Comportement asymptotique d’une loi binomiale.",
  "body": " Comportement asymptotique d'une loi binomiale   Visualiser l'approximation de la loi binomiale par la loi de Poisson lorsque est grand.  Ce graphique affiche en bleu l'histogramme de la loi binomiale et en rouge la courbe de la loi de Poisson . Il permet de visualiser comment la distribution binomiale se rapproche de la distribution de Poisson lorsque devient grand.    Lorsque est grand et est petit, la distribution binomiale devient similaire à la distribution de Poisson . Cette visualisation interactive permet d'observer cette convergence.    Expliquer théoriquement vos observations   "
},
{
  "id": "ch-exercices",
  "level": "1",
  "url": "ch-exercices.html",
  "type": "Exercices",
  "number": "3",
  "title": "Exercices",
  "body": " Exercices  Caractérisation de la loi géometrique décalée  On considère et deux variables aléatoires sur , à valeurs dans , indépendantes, de même loi. On pose et .  On suppose que pour tout dans , , où et .  Déterminer la loi conjointe de .  Déterminer les lois marginales de et . Vérifier que et sont indépendantes.      On a et .  Si , alors on a : et donc, par indépendance de et :     Si , alors on a : et donc, par indépendance de et :      Dans tous les cas, on trouve .     Pour , on a :   Pour , on a :    On vérifie que et sont indépendantes car :      On suppose que les variables et sont indépendantes et que pour tout . Montrer qu'il existe , tel que, pour tout ,    Comme précédemment, on a : Par indépendance de et d'une part, de et d'autre part, on en déduit : par hypothèse. On a en particulier, pour tout :  En divisant les égalités, on obtient : Ce rapport est indépendant de et strictement positif. On le note . La suite est géométrique de raison . Pour tout , on a . La série converge et a pour somme 1 donc et . En posant , on a le résultat voulu.   Une caractérisation de la loi de Poisson  On considère une variable aléatoire discrète sur l'espace probabilisé telle que et pour tout . Si la variable aléatoire prend la valeur , on procède à une succession de épreuves de Bernoulli indépendantes de paramètre . On note et les variables aléatoires représentant respectivement le nombre de succès et d'échecs dans ces épreuves.  Montrer que si suit une loi de Poisson de paramètre , les variables et suivent aussi des lois de Poisson dont on déterminera les paramètres. Montrer que les variables et sont indépendantes. Montrer réciproquement que si et sont indépendantes, alors suit une loi de Poisson. Pour cela, on montrera :   qu'il existe deux suites et telles que :     que les suites et sont géométriques.    Lancer de pièce jusqu'au premier pile  On lance une pièce de monnaie jusqu'à l'obtention du premier pile, la probabilité d'obtenir pile étant . Soit la variable aléatoire représentant le nombre de lancers nécessaires. Si , on relance ensuite fois la pièce et on appelle la variable aléatoire représentant le nombre de piles obtenu.  Déterminer la loi de , celle du couple , puis la loi de . Montrer que a même loi que le produit de deux variables indépendantes et telles que suive une loi de Bernoulli et une loi géométrique de même paramètre. En déduire l'espérance et la variance de .  Loi sur les nombres premiers  Soit l'ensemble des nombres premiers. Soit une variable aléatoire à valeurs dans dont la loi est définie par :   Justifier qu'on définit bien ainsi la loi d'une variable aléatoire. Pour tout , on considère : « divise ». Montrer que est une famille d'événements indépendants. En déduire une preuve de :  Montrer que la probabilité qu'aucun carré différent de 1 ne divise vaut .  Taux de panne  Soit une variable aléatoire discrète à valeurs dans vérifiant :  représente le moment où un mécanisme tombe en panne. C'est à dire le numéro de l'instance de son cycle de fonctionnement où il tombe en panne. En principe, sous l'effet de l'usure, plus la durée de son fonctionnement est grande plus la probabilité que le mécanisme tombe en panne augmente.  que On appelle taux de panne associé à la suite réelle définie par :  est la probabilité pour que le mécanisme tombe en panne à l'instant sachant qu'il a fonctionné jusqu'à cet instant.   Exprimer en fonction des .   Éviter de diviser par . Exprimer comme un produit de facteurs .       On a donc . Ce qui donne On en déduit que Ce qui donne par télescopage La relation signifie que donc finalement   Caractérisation du taux de panne     Montrer que pour tout et que la série de terme général diverge.    Réciproquement, soit une suite à valeur dans telle que la série de terme général diverge. Montrer qu'il existe une variable aléatoire dont le taux de panne est la suite .      On rappelle que pour une suite de réels positifs sommable et de somme , il existe une variable aléatoire telle que pour tout .     Soit et supposons que . Alors , ou encore . Ce qui implique que contredisant l'hypothèse faite dans l'énoncé. Alors .  Ensuite est le reste de la série convergente donc il converge vers . Ce qui implique que La série est nécessairement divergente car dans le cas contraire convergerait vers et on aurait donc ce qui impliquerait que la série est convergente.    Soit une série divergente à termes dans et posons pour tout  Avec ces relations on a On peut ensuite écrire Puisque la série de réels positif est divergente positive sa suite des sommes partielles tend vers et on a donc . Par suite . Puisque alors la série est convergente de somme .  Il existe donc une VADR tel que pour tout .     Montrer que la variable suit une loi géométrique si, et seulement si, son taux de panne est constant.   On suppose que suit une loi géométrique de paramètre . Alors pour tout on a . Donc Par suite . Donc le taux de panne est constant. Réciproquement, on suppose que le taux de panne est constant de valeur . Alors pour tout on a . Donc suit une loi géométrique de paramètre .  Noter que cela signifie que le taux de panne est constant si et seulement si les événements «le mécanisme tombe en panne à l'instant » sont mutuellement indépendants et ont tous la même probabilité. Il n'y a aucun effet d'usure.   Maximums et minimums provisoires  Soit . On désigne par l'ensemble des permutations de . On munit de la probabilité uniforme. Pour et , on dit que est un maximum provisoire (resp. minimum provisoire ) de si : On désigne par (resp. ) les variables aléatoires représentant le nombre de maximums (resp. minimums) provisoires des permutations de .   Montrer que les variables et ont même loi.   On observe qu'en , il y a toujours un maximum et un minimum provisoire, et donc que et sont à valeurs dans . L'application qui à la permutation associe la permutation est clairement bijective. Pour , est un maximum provisoire de si, et seulement si, est un minimum provisoire de . En effet : ce qui équivaut à : On en déduit que, pour tout , Comme est bijective, on a , et donc , car est muni de la probabilité uniforme.   Déterminer la loi de , son espérance et sa variance.     La permutation est dans si, et seulement si, . On en déduit .  On a . On en déduit .  Enfin, .  On obtient :    Déterminer la loi du couple et sa covariance.   Pour , on a si . En effet, sauf pour , ne peut pas être à la fois un maximum provisoire et un minimum provisoire. On obtient : On trouve :    Formule du crible  Soit des événements d'un espace probabilisé .  Montrer que . En déduire la formule du crible :  Soient et une suite de variables indépendantes d'un espace probabilisé suivant toutes la loi uniforme sur . On note la variable aléatoire égale au nombre de tirages nécessaires pour obtenir tous les numéros entre 1 et au moins une fois (et à si on n'obtient jamais les numéros). Pour et , on note l'événement : « au bout de tirages, le numéro n'est pas encore apparu ».   Calculer où sont des indices distincts compris entre 1 et .    En déduire que : Calculer . Interpréter.    Montrer que .    Montrer que . En déduire un équivalent de quand tend vers .    Variables aléatoires uniformes et Poisson  Soient un entier et une suite de variables aléatoires indépendantes et de même loi uniforme sur . Pour tout , on définit :   Quelle est la loi de pour et ? Soit et avec . Calculer la covariance des variables aléatoires et . Sont-elles indépendantes ? Soit et une variable aléatoire suivant une loi de Poisson de paramètre , indépendante des variables . On pose :    Déterminer, en fonction de et , la loi de pour tout .    Déterminer la loi conjointe de .    Centrale 2015  Soit un espace probabilisé et une suite d'événements. On suppose que , c'est-à-dire que la série converge.  On note la fonction indicatrice d'un ensemble . Soit (on convient que si la série diverge). Prouver que est une variable aléatoire discrète. Soit . Prouver que est un événement et que . Prouver que est d'espérance finie.  Marche aléatoire dans  Soit une suite de variables aléatoires, sur le même espace probabilisé , indépendantes et de même loi définie par : où . On pose et, pour tout , . La suite est appelée marche aléatoire dans .  Déterminer pour tout . On note la somme de la série entière . Montrer que :  Pour tout entier naturel non nul , on note l'événement « le mobile retourne pour la première fois à l'origine au bout de déplacements », c'est-à-dire : On pose pour tout et .   Montrer que, pour tout entier naturel non nul, on a :     En déduire que, pour tout entier naturel non nul , on a :     Loi faible des grands nombres dans  Soit une suite de variables aléatoires réelles discrètes, deux à deux indépendantes, de même loi, possédant une espérance finie . On pose, pour tout , .   Dans les deux premières questions, on suppose .  Soit .  Pour , on définit par : Montrer que la variable aléatoire est d'espérance finie et que l'on peut choisir tel que .  On pose . Montrer que :   On pose, pour tout , et . Justifier que les variables admettent un moment d'ordre 2. Montrer que . En déduire que .    Montrer que, pour tout , on a :          La fonction est bornée par , donc est d'espérance finie. De plus, on a : Comme , on peut choisir suffisamment grand pour que .  On a : Comme et , on peut choisir suffisamment grand pour que .  Les variables sont centrées et admettent un moment d'ordre 2 car est bornée et a une espérance finie. On a : Par l'inégalité de Markov, on a : Comme , on obtient :     Pour tout , on a :      On ne suppose plus . Montrer que l'on a :    On pose . Alors est la moyenne des variables , qui sont centrées. D'après la question précédente, on a : Par conséquent :    Modèle de Galton-Watson  On observe des virus qui se reproduisent tous selon la même loi avant de mourir : un virus donne naissance en une journée à virus, où est une variable aléatoire à valeurs dans . Pour tout , on note . On suppose et . On note la fonction génératrice de . On part au jour zéro de virus. Au premier jour, on a donc virus, où suit la loi de ; chacun de ces virus évolue alors indépendamment des autres virus et se reproduit selon la même loi avant de mourir : cela conduit à avoir virus au deuxième jour ; et le processus continue de la sorte. On note .  Calculer , . Montrer que la suite est convergente. Montrer que pour tout entier , on a . Que peut-on dire de la limite de ? Discuter selon la valeur de . Interpréter le résultat.  Somme aléatoire de variables aléatoires  Soit une suite de variables aléatoires réelles discrètes, toutes de même loi, et une variable aléatoire à valeurs dans . On suppose que et les variables pour forment une suite de variables aléatoires indépendantes. On pose :   Montrer que est une variable aléatoire. Déterminer la loi de lorsque les suivent la loi de Bernoulli de paramètre et la loi de Poisson de paramètre . Déterminer la loi de lorsque les suivent la loi géométrique de paramètre et la loi géométrique de paramètre . On suppose que les variables aléatoires sont à valeurs dans .   Montrer que sur .    Montrer que, si et sont d'espérance finie, alors est d'espérance finie et vérifie la première formule de Wald :     Montrer que, si et possèdent un moment d'ordre 2, alors possède aussi un moment d'ordre 2 et vérifie la seconde formule de Wald :     Succès consécutifs  On considère une suite d'épreuves de Bernoulli indépendantes. À chaque épreuve, la probabilité de succès est . On se donne un entier strictement positif. Pour , on note la probabilité qu'au cours des premières épreuves, on ait obtenu succès consécutifs (au moins une fois).  Calculer , , ..., . Montrer que, pour , on a . Montrer que la suite est convergente. Calculer sa limite. Déduire de la question 1 que l'on peut définir une variable aléatoire égale au temps d'attente de succès consécutifs. On définira comme l'événement « on a obtenu des succès aux épreuves de rang , , ..., sans jamais avoir obtenu succès consécutifs auparavant ». Montrer que :   Marche aléatoire dans : premier retour à l'origine  Soit une suite de variables aléatoires, sur le même espace probabilisé , indépendantes et de même loi définie par : où . On pose et, pour tout , . La suite est appelée marche aléatoire dans .  Déterminer pour tout . On note la somme de la série entière . Montrer que :  Pour tout entier naturel non nul , on note l'événement « le mobile retourne pour la première fois à l'origine au bout de déplacements », c'est-à-dire : On pose pour tout et .   Montrer que, pour tout entier naturel non nul, on a :     En déduire que, pour tout entier naturel non nul , on a :     Inégalité de Kolmogorov  Soit des variables aléatoires réelles discrètes de l'espace probabilisé , indépendantes, ayant un moment d'ordre 2, centrées, ainsi que . On pose, pour tout :   Montrer que, pour , les variables et sont indépendantes. En déduire que :  On pose . Montrer que . En déduire l'inégalité de Kolmogorov :   Inégalité de Le Cam  L'objet de l'exercice est d'étudier l'approximation de la loi binomiale par la loi de Poisson. Toutes les variables aléatoires considérées sont définies sur le même espace probabilisé et sont à valeurs dans .  Soit et deux telles variables aléatoires. Pour tout , on pose et . On définit la distance entre et par :    Montrer que pour toute partie de , on a :     Démontrer la formule :     En déduire :     Convergence presque sûre  Soit une suite de variables aléatoires réelles et une variable aléatoire réelle définies sur . On pose : On dit que la suite converge presque sûrement vers si .   Montrer que l'on a , où :    On a : En d'autres termes, est l'ensemble des pour lesquels la suite converge vers . On peut réécrire comme : Par continuité décroissante de la probabilité, on a :    On suppose que : Montrer que la suite converge presque sûrement vers .   Par hypothèse, pour tout , on a : Cela signifie que, pour tout , l'ensemble des pour lesquels pour une infinité de est de probabilité nulle. Par conséquent, pour presque tout , la suite converge vers , c'est-à-dire que .   Montrer que si la série de terme général converge pour tout , alors la suite converge presque sûrement vers .   Si la série de terme général converge pour tout , alors, d'après le lemme de Borel-Cantelli, on a : En effet, le lemme de Borel-Cantelli affirme que si , alors . Appliqué à , cela donne : Par conséquent, la suite converge presque sûrement vers .   Fonction génératrice des moments  Soit une variable aléatoire discrète, pas presque sûrement constante, sur l'espace probabilisé . On pose, pour , (la fonction est appelée fonction génératrice des moments de la variable aléatoire ). On suppose qu'il existe un intervalle contenant 0 tel que pour tout .   Soit deux réels tels que . On considère tel que . Soit . Montrer qu'il existe tel que : En déduire que est d'espérance finie pour tout .    Montrer que est de classe sur et vérifie : En déduire, pour tout , une expression du moment d'ordre de . On note l'espérance de .    Montrer que la fonction est strictement convexe.   La fonction est strictement convexe car sa dérivée seconde est strictement positive. En effet, on a : car par l'inégalité de Cauchy-Schwarz.   Montrer que les inégalités de Chernov suivantes sont vérifiées :  où .   Les inégalités de Chernov sont obtenues en utilisant la convexité de . Pour , on a : En prenant le supremum sur , on obtient : De même, pour , on a : En prenant le supremum sur , on obtient :    On considère une suite de variables aléatoires indépendantes suivant la même loi que . On pose, pour tout , .  Montrer que, pour tout , on a :    Montrer que, pour tout , on a :   En utilisant le résultat de l'exercice 16.25, montrer que la suite converge presque sûrement vers .       Pour , on a : où . De même, pour , on a :   Pour , on a : En appliquant les inégalités de Chernov, on obtient :   D'après l'exercice 16.25, si la série de terme général converge pour tout , alors la suite converge presque sûrement vers . En appliquant ce résultat à , on obtient que converge presque sûrement vers .     Théorème de Weierstrass  Soit une fonction continue de dans . Soit . On considère une suite de variables de Bernoulli de paramètre , indépendantes, sur le même espace probabilisé. Pour , on pose .  Montrer que :  Montrer que :   En déduire que la suite de fonctions polynomiales définie par converge uniformément vers sur .   File d'attente  Soit un entier supérieur ou égal à 2. On considère une file d'attente avec un guichet et clients qui attendent. Chaque minute, un guichet se libère. Le guichetier choisit alors le client qu'il appelle selon le processus aléatoire suivant :  avec probabilité 2, il appelle le client en première position dans la file,  sinon, il choisit de manière équiprobable parmi les autres clients.  Enfin, un nouveau client arrive dans la file et se place en dernière position (de telle sorte qu'il y a toujours exactement clients qui attendent). Pour tout , on note le temps d'attente d'un client qui se trouve en position dans la file.  Quelle est la loi de ? Donner son espérance, sa variance. Montrer que, pour tout , la variable est d'espérance finie. Écrire une relation entre et pour tout . En déduire une expression de en fonction de et . On pourra considérer la suite . Comparer les caractéristiques de cette file d'attente et d'une file d'attente « classique » (premier arrivé, premier servi).   Soit une suite de variables aléatoires réelles discrètes, toutes de même loi, et une variable aléatoire à valeurs dans . On suppose que et les variables , pour , forment une suite de variables aléatoires indépendantes. On pose :    Montrer que est une variable aléatoire.   On a . Les étant au plus dénombrables, il en est de même de leur union dénombrable, et a fortiori est au plus dénombrable. De plus : donc , union dénombrable d'événements, est un événement et est une variable aléatoire.   Déterminer la loi de , lorsque les suivent la loi de Bernoulli de paramètre et la loi de Poisson de paramètre .   On a et d'après la formule des probabilités totales, pour tout : On remarque que : la dernière égalité résultant de l'indépendance des variables par rapport à . Pour , est une somme de variables de Bernoulli, indépendantes, de même paramètre ; elle suit donc la loi binomiale de paramètre . On a donc : On remarque que cette formule reste vérifiée si , car alors prend la valeur 0, avec la probabilité 1. On en déduit : En simplifiant, on obtient : La variable aléatoire suit donc la loi de Poisson de paramètre .   Déterminer la loi de lorsque les suivent la loi géométrique de paramètre et la loi géométrique de paramètre .   On procède comme dans la question précédente. On a et, pour tout : Comme les variables sont à valeurs dans , il est clair que si . Supposons . On peut alors écrire : où est l'ensemble des -listes d'entiers strictement positifs tels que . Le cardinal de est égal au nombre de -listes d'entiers tels que , car à , on peut associer bijectivement : On a donc . D'autre part, pour , on a, par indépendance des variables aléatoires : On obtient ainsi . On en déduit, pour : En simplifiant, on obtient : La variable suit donc la loi géométrique de paramètre .    On considère une suite d'épreuves de Bernoulli indépendantes. À chaque épreuve, la probabilité de succès est . On se donne un entier strictement positif. Pour , on note la probabilité qu'au cours des premières épreuves, on ait obtenu succès consécutifs (au moins une fois).    Calculer , , ..., .  Montrer que, pour , on a .  Montrer que la suite est convergente. Calculer sa limite.      On a et .  Pour , on note l'événement « la -ième épreuve est un succès » et l'événement « au cours de premiers tirages, on a obtenus succès consécutifs ». On a clairement et donc . L'événement est réalisé si on obtient succès consécutifs pour la première fois entre le -ième et le -ième tirage, ce qui impose que la -ième épreuve soit un échec et qu'on n'ait pas avant obtenu succès consécutifs. On a donc : et par indépendance des épreuves :   La suite est croissante et majorée par 1 donc convergente. On note sa limite. Par passage à la limite dans la relation précédente, on obtient , et donc , puisque .      Déduire de la question 1 que l'on peut définir une variable aléatoire égale au temps d'attente de succès consécutifs. On définira comme l'événement « on a obtenu des succès aux épreuves de rang , , ..., sans jamais avoir obtenu succès consécutifs auparavant ».  Montrer en utilisant le résultat de l'exercice 18 de la page 911 que :      Comme la suite est croissante, on a : On obtient de manière presque sûre une suite de succès consécutifs au bout d'un nombre fini d'épreuves. Sur un ensemble de probabilité 1, on peut définir l'application . On a, par définition , donc est un événement et une variable aléatoire à valeurs dans .  Pour tout , on a et donc . D'après la question 1, on a pour tout : D'après l'exercice 18 de la page 911, on en déduit :     "
},
{
  "id": "ch-exercices-2",
  "level": "2",
  "url": "ch-exercices.html#ch-exercices-2",
  "type": "Exercice",
  "number": "3.1",
  "title": "Caractérisation de la loi géometrique décalée.",
  "body": "Caractérisation de la loi géometrique décalée  On considère et deux variables aléatoires sur , à valeurs dans , indépendantes, de même loi. On pose et .  On suppose que pour tout dans , , où et .  Déterminer la loi conjointe de .  Déterminer les lois marginales de et . Vérifier que et sont indépendantes.      On a et .  Si , alors on a : et donc, par indépendance de et :     Si , alors on a : et donc, par indépendance de et :      Dans tous les cas, on trouve .     Pour , on a :   Pour , on a :    On vérifie que et sont indépendantes car :      On suppose que les variables et sont indépendantes et que pour tout . Montrer qu'il existe , tel que, pour tout ,    Comme précédemment, on a : Par indépendance de et d'une part, de et d'autre part, on en déduit : par hypothèse. On a en particulier, pour tout :  En divisant les égalités, on obtient : Ce rapport est indépendant de et strictement positif. On le note . La suite est géométrique de raison . Pour tout , on a . La série converge et a pour somme 1 donc et . En posant , on a le résultat voulu.  "
},
{
  "id": "ch-exercices-3",
  "level": "2",
  "url": "ch-exercices.html#ch-exercices-3",
  "type": "Exercice",
  "number": "3.2",
  "title": "Une caractérisation de la loi de Poisson.",
  "body": "Une caractérisation de la loi de Poisson  On considère une variable aléatoire discrète sur l'espace probabilisé telle que et pour tout . Si la variable aléatoire prend la valeur , on procède à une succession de épreuves de Bernoulli indépendantes de paramètre . On note et les variables aléatoires représentant respectivement le nombre de succès et d'échecs dans ces épreuves.  Montrer que si suit une loi de Poisson de paramètre , les variables et suivent aussi des lois de Poisson dont on déterminera les paramètres. Montrer que les variables et sont indépendantes. Montrer réciproquement que si et sont indépendantes, alors suit une loi de Poisson. Pour cela, on montrera :   qu'il existe deux suites et telles que :     que les suites et sont géométriques.   "
},
{
  "id": "ch-exercices-4",
  "level": "2",
  "url": "ch-exercices.html#ch-exercices-4",
  "type": "Exercice",
  "number": "3.3",
  "title": "Lancer de pièce jusqu’au premier pile.",
  "body": "Lancer de pièce jusqu'au premier pile  On lance une pièce de monnaie jusqu'à l'obtention du premier pile, la probabilité d'obtenir pile étant . Soit la variable aléatoire représentant le nombre de lancers nécessaires. Si , on relance ensuite fois la pièce et on appelle la variable aléatoire représentant le nombre de piles obtenu.  Déterminer la loi de , celle du couple , puis la loi de . Montrer que a même loi que le produit de deux variables indépendantes et telles que suive une loi de Bernoulli et une loi géométrique de même paramètre. En déduire l'espérance et la variance de . "
},
{
  "id": "ch-exercices-5",
  "level": "2",
  "url": "ch-exercices.html#ch-exercices-5",
  "type": "Exercice",
  "number": "3.4",
  "title": "Loi sur les nombres premiers.",
  "body": "Loi sur les nombres premiers  Soit l'ensemble des nombres premiers. Soit une variable aléatoire à valeurs dans dont la loi est définie par :   Justifier qu'on définit bien ainsi la loi d'une variable aléatoire. Pour tout , on considère : « divise ». Montrer que est une famille d'événements indépendants. En déduire une preuve de :  Montrer que la probabilité qu'aucun carré différent de 1 ne divise vaut . "
},
{
  "id": "ch-exercices-6",
  "level": "2",
  "url": "ch-exercices.html#ch-exercices-6",
  "type": "Exercice",
  "number": "3.5",
  "title": "Taux de panne.",
  "body": "Taux de panne  Soit une variable aléatoire discrète à valeurs dans vérifiant :  représente le moment où un mécanisme tombe en panne. C'est à dire le numéro de l'instance de son cycle de fonctionnement où il tombe en panne. En principe, sous l'effet de l'usure, plus la durée de son fonctionnement est grande plus la probabilité que le mécanisme tombe en panne augmente.  que On appelle taux de panne associé à la suite réelle définie par :  est la probabilité pour que le mécanisme tombe en panne à l'instant sachant qu'il a fonctionné jusqu'à cet instant.   Exprimer en fonction des .   Éviter de diviser par . Exprimer comme un produit de facteurs .       On a donc . Ce qui donne On en déduit que Ce qui donne par télescopage La relation signifie que donc finalement   Caractérisation du taux de panne     Montrer que pour tout et que la série de terme général diverge.    Réciproquement, soit une suite à valeur dans telle que la série de terme général diverge. Montrer qu'il existe une variable aléatoire dont le taux de panne est la suite .      On rappelle que pour une suite de réels positifs sommable et de somme , il existe une variable aléatoire telle que pour tout .     Soit et supposons que . Alors , ou encore . Ce qui implique que contredisant l'hypothèse faite dans l'énoncé. Alors .  Ensuite est le reste de la série convergente donc il converge vers . Ce qui implique que La série est nécessairement divergente car dans le cas contraire convergerait vers et on aurait donc ce qui impliquerait que la série est convergente.    Soit une série divergente à termes dans et posons pour tout  Avec ces relations on a On peut ensuite écrire Puisque la série de réels positif est divergente positive sa suite des sommes partielles tend vers et on a donc . Par suite . Puisque alors la série est convergente de somme .  Il existe donc une VADR tel que pour tout .     Montrer que la variable suit une loi géométrique si, et seulement si, son taux de panne est constant.   On suppose que suit une loi géométrique de paramètre . Alors pour tout on a . Donc Par suite . Donc le taux de panne est constant. Réciproquement, on suppose que le taux de panne est constant de valeur . Alors pour tout on a . Donc suit une loi géométrique de paramètre .  Noter que cela signifie que le taux de panne est constant si et seulement si les événements «le mécanisme tombe en panne à l'instant » sont mutuellement indépendants et ont tous la même probabilité. Il n'y a aucun effet d'usure.  "
},
{
  "id": "ch-exercices-7",
  "level": "2",
  "url": "ch-exercices.html#ch-exercices-7",
  "type": "Exercice",
  "number": "3.6",
  "title": "Maximums et minimums provisoires.",
  "body": "Maximums et minimums provisoires  Soit . On désigne par l'ensemble des permutations de . On munit de la probabilité uniforme. Pour et , on dit que est un maximum provisoire (resp. minimum provisoire ) de si : On désigne par (resp. ) les variables aléatoires représentant le nombre de maximums (resp. minimums) provisoires des permutations de .   Montrer que les variables et ont même loi.   On observe qu'en , il y a toujours un maximum et un minimum provisoire, et donc que et sont à valeurs dans . L'application qui à la permutation associe la permutation est clairement bijective. Pour , est un maximum provisoire de si, et seulement si, est un minimum provisoire de . En effet : ce qui équivaut à : On en déduit que, pour tout , Comme est bijective, on a , et donc , car est muni de la probabilité uniforme.   Déterminer la loi de , son espérance et sa variance.     La permutation est dans si, et seulement si, . On en déduit .  On a . On en déduit .  Enfin, .  On obtient :    Déterminer la loi du couple et sa covariance.   Pour , on a si . En effet, sauf pour , ne peut pas être à la fois un maximum provisoire et un minimum provisoire. On obtient : On trouve :   "
},
{
  "id": "ch-exercices-8",
  "level": "2",
  "url": "ch-exercices.html#ch-exercices-8",
  "type": "Exercice",
  "number": "3.7",
  "title": "Formule du crible.",
  "body": "Formule du crible  Soit des événements d'un espace probabilisé .  Montrer que . En déduire la formule du crible :  Soient et une suite de variables indépendantes d'un espace probabilisé suivant toutes la loi uniforme sur . On note la variable aléatoire égale au nombre de tirages nécessaires pour obtenir tous les numéros entre 1 et au moins une fois (et à si on n'obtient jamais les numéros). Pour et , on note l'événement : « au bout de tirages, le numéro n'est pas encore apparu ».   Calculer où sont des indices distincts compris entre 1 et .    En déduire que : Calculer . Interpréter.    Montrer que .    Montrer que . En déduire un équivalent de quand tend vers .   "
},
{
  "id": "ch-exercices-9",
  "level": "2",
  "url": "ch-exercices.html#ch-exercices-9",
  "type": "Exercice",
  "number": "3.8",
  "title": "Variables aléatoires uniformes et Poisson.",
  "body": "Variables aléatoires uniformes et Poisson  Soient un entier et une suite de variables aléatoires indépendantes et de même loi uniforme sur . Pour tout , on définit :   Quelle est la loi de pour et ? Soit et avec . Calculer la covariance des variables aléatoires et . Sont-elles indépendantes ? Soit et une variable aléatoire suivant une loi de Poisson de paramètre , indépendante des variables . On pose :    Déterminer, en fonction de et , la loi de pour tout .    Déterminer la loi conjointe de .   "
},
{
  "id": "ch-exercices-10",
  "level": "2",
  "url": "ch-exercices.html#ch-exercices-10",
  "type": "Exercice",
  "number": "3.9",
  "title": "Centrale 2015.",
  "body": "Centrale 2015  Soit un espace probabilisé et une suite d'événements. On suppose que , c'est-à-dire que la série converge.  On note la fonction indicatrice d'un ensemble . Soit (on convient que si la série diverge). Prouver que est une variable aléatoire discrète. Soit . Prouver que est un événement et que . Prouver que est d'espérance finie. "
},
{
  "id": "ch-exercices-11",
  "level": "2",
  "url": "ch-exercices.html#ch-exercices-11",
  "type": "Exercice",
  "number": "3.10",
  "title": "Marche aléatoire dans <span class=\"process-math\">\\(\\mathbb{Z}\\)<\/span>.",
  "body": "Marche aléatoire dans  Soit une suite de variables aléatoires, sur le même espace probabilisé , indépendantes et de même loi définie par : où . On pose et, pour tout , . La suite est appelée marche aléatoire dans .  Déterminer pour tout . On note la somme de la série entière . Montrer que :  Pour tout entier naturel non nul , on note l'événement « le mobile retourne pour la première fois à l'origine au bout de déplacements », c'est-à-dire : On pose pour tout et .   Montrer que, pour tout entier naturel non nul, on a :     En déduire que, pour tout entier naturel non nul , on a :    "
},
{
  "id": "ch-exercices-12",
  "level": "2",
  "url": "ch-exercices.html#ch-exercices-12",
  "type": "Exercice",
  "number": "3.11",
  "title": "Loi faible des grands nombres dans <span class=\"process-math\">\\(L^1 \\)<\/span>.",
  "body": "Loi faible des grands nombres dans  Soit une suite de variables aléatoires réelles discrètes, deux à deux indépendantes, de même loi, possédant une espérance finie . On pose, pour tout , .   Dans les deux premières questions, on suppose .  Soit .  Pour , on définit par : Montrer que la variable aléatoire est d'espérance finie et que l'on peut choisir tel que .  On pose . Montrer que :   On pose, pour tout , et . Justifier que les variables admettent un moment d'ordre 2. Montrer que . En déduire que .    Montrer que, pour tout , on a :          La fonction est bornée par , donc est d'espérance finie. De plus, on a : Comme , on peut choisir suffisamment grand pour que .  On a : Comme et , on peut choisir suffisamment grand pour que .  Les variables sont centrées et admettent un moment d'ordre 2 car est bornée et a une espérance finie. On a : Par l'inégalité de Markov, on a : Comme , on obtient :     Pour tout , on a :      On ne suppose plus . Montrer que l'on a :    On pose . Alors est la moyenne des variables , qui sont centrées. D'après la question précédente, on a : Par conséquent :   "
},
{
  "id": "ch-exercices-13",
  "level": "2",
  "url": "ch-exercices.html#ch-exercices-13",
  "type": "Exercice",
  "number": "3.12",
  "title": "Modèle de Galton-Watson.",
  "body": "Modèle de Galton-Watson  On observe des virus qui se reproduisent tous selon la même loi avant de mourir : un virus donne naissance en une journée à virus, où est une variable aléatoire à valeurs dans . Pour tout , on note . On suppose et . On note la fonction génératrice de . On part au jour zéro de virus. Au premier jour, on a donc virus, où suit la loi de ; chacun de ces virus évolue alors indépendamment des autres virus et se reproduit selon la même loi avant de mourir : cela conduit à avoir virus au deuxième jour ; et le processus continue de la sorte. On note .  Calculer , . Montrer que la suite est convergente. Montrer que pour tout entier , on a . Que peut-on dire de la limite de ? Discuter selon la valeur de . Interpréter le résultat. "
},
{
  "id": "ch-exercices-14",
  "level": "2",
  "url": "ch-exercices.html#ch-exercices-14",
  "type": "Exercice",
  "number": "3.13",
  "title": "Somme aléatoire de variables aléatoires.",
  "body": "Somme aléatoire de variables aléatoires  Soit une suite de variables aléatoires réelles discrètes, toutes de même loi, et une variable aléatoire à valeurs dans . On suppose que et les variables pour forment une suite de variables aléatoires indépendantes. On pose :   Montrer que est une variable aléatoire. Déterminer la loi de lorsque les suivent la loi de Bernoulli de paramètre et la loi de Poisson de paramètre . Déterminer la loi de lorsque les suivent la loi géométrique de paramètre et la loi géométrique de paramètre . On suppose que les variables aléatoires sont à valeurs dans .   Montrer que sur .    Montrer que, si et sont d'espérance finie, alors est d'espérance finie et vérifie la première formule de Wald :     Montrer que, si et possèdent un moment d'ordre 2, alors possède aussi un moment d'ordre 2 et vérifie la seconde formule de Wald :    "
},
{
  "id": "ch-exercices-15",
  "level": "2",
  "url": "ch-exercices.html#ch-exercices-15",
  "type": "Exercice",
  "number": "3.14",
  "title": "Succès consécutifs.",
  "body": "Succès consécutifs  On considère une suite d'épreuves de Bernoulli indépendantes. À chaque épreuve, la probabilité de succès est . On se donne un entier strictement positif. Pour , on note la probabilité qu'au cours des premières épreuves, on ait obtenu succès consécutifs (au moins une fois).  Calculer , , ..., . Montrer que, pour , on a . Montrer que la suite est convergente. Calculer sa limite. Déduire de la question 1 que l'on peut définir une variable aléatoire égale au temps d'attente de succès consécutifs. On définira comme l'événement « on a obtenu des succès aux épreuves de rang , , ..., sans jamais avoir obtenu succès consécutifs auparavant ». Montrer que :  "
},
{
  "id": "ch-exercices-16",
  "level": "2",
  "url": "ch-exercices.html#ch-exercices-16",
  "type": "Exercice",
  "number": "3.15",
  "title": "Marche aléatoire dans <span class=\"process-math\">\\(\\mathbb{Z}\\)<\/span> : premier retour à l’origine.",
  "body": "Marche aléatoire dans : premier retour à l'origine  Soit une suite de variables aléatoires, sur le même espace probabilisé , indépendantes et de même loi définie par : où . On pose et, pour tout , . La suite est appelée marche aléatoire dans .  Déterminer pour tout . On note la somme de la série entière . Montrer que :  Pour tout entier naturel non nul , on note l'événement « le mobile retourne pour la première fois à l'origine au bout de déplacements », c'est-à-dire : On pose pour tout et .   Montrer que, pour tout entier naturel non nul, on a :     En déduire que, pour tout entier naturel non nul , on a :    "
},
{
  "id": "ch-exercices-17",
  "level": "2",
  "url": "ch-exercices.html#ch-exercices-17",
  "type": "Exercice",
  "number": "3.16",
  "title": "Inégalité de Kolmogorov.",
  "body": "Inégalité de Kolmogorov  Soit des variables aléatoires réelles discrètes de l'espace probabilisé , indépendantes, ayant un moment d'ordre 2, centrées, ainsi que . On pose, pour tout :   Montrer que, pour , les variables et sont indépendantes. En déduire que :  On pose . Montrer que . En déduire l'inégalité de Kolmogorov :  "
},
{
  "id": "ch-exercices-18",
  "level": "2",
  "url": "ch-exercices.html#ch-exercices-18",
  "type": "Exercice",
  "number": "3.17",
  "title": "Inégalité de Le Cam.",
  "body": "Inégalité de Le Cam  L'objet de l'exercice est d'étudier l'approximation de la loi binomiale par la loi de Poisson. Toutes les variables aléatoires considérées sont définies sur le même espace probabilisé et sont à valeurs dans .  Soit et deux telles variables aléatoires. Pour tout , on pose et . On définit la distance entre et par :    Montrer que pour toute partie de , on a :     Démontrer la formule :     En déduire :    "
},
{
  "id": "ch-exercices-19",
  "level": "2",
  "url": "ch-exercices.html#ch-exercices-19",
  "type": "Exercice",
  "number": "3.18",
  "title": "Convergence presque sûre.",
  "body": "Convergence presque sûre  Soit une suite de variables aléatoires réelles et une variable aléatoire réelle définies sur . On pose : On dit que la suite converge presque sûrement vers si .   Montrer que l'on a , où :    On a : En d'autres termes, est l'ensemble des pour lesquels la suite converge vers . On peut réécrire comme : Par continuité décroissante de la probabilité, on a :    On suppose que : Montrer que la suite converge presque sûrement vers .   Par hypothèse, pour tout , on a : Cela signifie que, pour tout , l'ensemble des pour lesquels pour une infinité de est de probabilité nulle. Par conséquent, pour presque tout , la suite converge vers , c'est-à-dire que .   Montrer que si la série de terme général converge pour tout , alors la suite converge presque sûrement vers .   Si la série de terme général converge pour tout , alors, d'après le lemme de Borel-Cantelli, on a : En effet, le lemme de Borel-Cantelli affirme que si , alors . Appliqué à , cela donne : Par conséquent, la suite converge presque sûrement vers .  "
},
{
  "id": "ch-exercices-20",
  "level": "2",
  "url": "ch-exercices.html#ch-exercices-20",
  "type": "Exercice",
  "number": "3.19",
  "title": "Fonction génératrice des moments.",
  "body": "Fonction génératrice des moments  Soit une variable aléatoire discrète, pas presque sûrement constante, sur l'espace probabilisé . On pose, pour , (la fonction est appelée fonction génératrice des moments de la variable aléatoire ). On suppose qu'il existe un intervalle contenant 0 tel que pour tout .   Soit deux réels tels que . On considère tel que . Soit . Montrer qu'il existe tel que : En déduire que est d'espérance finie pour tout .    Montrer que est de classe sur et vérifie : En déduire, pour tout , une expression du moment d'ordre de . On note l'espérance de .    Montrer que la fonction est strictement convexe.   La fonction est strictement convexe car sa dérivée seconde est strictement positive. En effet, on a : car par l'inégalité de Cauchy-Schwarz.   Montrer que les inégalités de Chernov suivantes sont vérifiées :  où .   Les inégalités de Chernov sont obtenues en utilisant la convexité de . Pour , on a : En prenant le supremum sur , on obtient : De même, pour , on a : En prenant le supremum sur , on obtient :    On considère une suite de variables aléatoires indépendantes suivant la même loi que . On pose, pour tout , .  Montrer que, pour tout , on a :    Montrer que, pour tout , on a :   En utilisant le résultat de l'exercice 16.25, montrer que la suite converge presque sûrement vers .       Pour , on a : où . De même, pour , on a :   Pour , on a : En appliquant les inégalités de Chernov, on obtient :   D'après l'exercice 16.25, si la série de terme général converge pour tout , alors la suite converge presque sûrement vers . En appliquant ce résultat à , on obtient que converge presque sûrement vers .    "
},
{
  "id": "ch-exercices-21",
  "level": "2",
  "url": "ch-exercices.html#ch-exercices-21",
  "type": "Exercice",
  "number": "3.20",
  "title": "Théorème de Weierstrass.",
  "body": "Théorème de Weierstrass  Soit une fonction continue de dans . Soit . On considère une suite de variables de Bernoulli de paramètre , indépendantes, sur le même espace probabilisé. Pour , on pose .  Montrer que :  Montrer que :   En déduire que la suite de fonctions polynomiales définie par converge uniformément vers sur .  "
},
{
  "id": "ch-exercices-22",
  "level": "2",
  "url": "ch-exercices.html#ch-exercices-22",
  "type": "Exercice",
  "number": "3.21",
  "title": "File d’attente.",
  "body": "File d'attente  Soit un entier supérieur ou égal à 2. On considère une file d'attente avec un guichet et clients qui attendent. Chaque minute, un guichet se libère. Le guichetier choisit alors le client qu'il appelle selon le processus aléatoire suivant :  avec probabilité 2, il appelle le client en première position dans la file,  sinon, il choisit de manière équiprobable parmi les autres clients.  Enfin, un nouveau client arrive dans la file et se place en dernière position (de telle sorte qu'il y a toujours exactement clients qui attendent). Pour tout , on note le temps d'attente d'un client qui se trouve en position dans la file.  Quelle est la loi de ? Donner son espérance, sa variance. Montrer que, pour tout , la variable est d'espérance finie. Écrire une relation entre et pour tout . En déduire une expression de en fonction de et . On pourra considérer la suite . Comparer les caractéristiques de cette file d'attente et d'une file d'attente « classique » (premier arrivé, premier servi). "
},
{
  "id": "ch-exercices-23",
  "level": "2",
  "url": "ch-exercices.html#ch-exercices-23",
  "type": "Exercice",
  "number": "3.22",
  "title": "",
  "body": " Soit une suite de variables aléatoires réelles discrètes, toutes de même loi, et une variable aléatoire à valeurs dans . On suppose que et les variables , pour , forment une suite de variables aléatoires indépendantes. On pose :    Montrer que est une variable aléatoire.   On a . Les étant au plus dénombrables, il en est de même de leur union dénombrable, et a fortiori est au plus dénombrable. De plus : donc , union dénombrable d'événements, est un événement et est une variable aléatoire.   Déterminer la loi de , lorsque les suivent la loi de Bernoulli de paramètre et la loi de Poisson de paramètre .   On a et d'après la formule des probabilités totales, pour tout : On remarque que : la dernière égalité résultant de l'indépendance des variables par rapport à . Pour , est une somme de variables de Bernoulli, indépendantes, de même paramètre ; elle suit donc la loi binomiale de paramètre . On a donc : On remarque que cette formule reste vérifiée si , car alors prend la valeur 0, avec la probabilité 1. On en déduit : En simplifiant, on obtient : La variable aléatoire suit donc la loi de Poisson de paramètre .   Déterminer la loi de lorsque les suivent la loi géométrique de paramètre et la loi géométrique de paramètre .   On procède comme dans la question précédente. On a et, pour tout : Comme les variables sont à valeurs dans , il est clair que si . Supposons . On peut alors écrire : où est l'ensemble des -listes d'entiers strictement positifs tels que . Le cardinal de est égal au nombre de -listes d'entiers tels que , car à , on peut associer bijectivement : On a donc . D'autre part, pour , on a, par indépendance des variables aléatoires : On obtient ainsi . On en déduit, pour : En simplifiant, on obtient : La variable suit donc la loi géométrique de paramètre .  "
},
{
  "id": "ch-exercices-24",
  "level": "2",
  "url": "ch-exercices.html#ch-exercices-24",
  "type": "Exercice",
  "number": "3.23",
  "title": "",
  "body": " On considère une suite d'épreuves de Bernoulli indépendantes. À chaque épreuve, la probabilité de succès est . On se donne un entier strictement positif. Pour , on note la probabilité qu'au cours des premières épreuves, on ait obtenu succès consécutifs (au moins une fois).    Calculer , , ..., .  Montrer que, pour , on a .  Montrer que la suite est convergente. Calculer sa limite.      On a et .  Pour , on note l'événement « la -ième épreuve est un succès » et l'événement « au cours de premiers tirages, on a obtenus succès consécutifs ». On a clairement et donc . L'événement est réalisé si on obtient succès consécutifs pour la première fois entre le -ième et le -ième tirage, ce qui impose que la -ième épreuve soit un échec et qu'on n'ait pas avant obtenu succès consécutifs. On a donc : et par indépendance des épreuves :   La suite est croissante et majorée par 1 donc convergente. On note sa limite. Par passage à la limite dans la relation précédente, on obtient , et donc , puisque .      Déduire de la question 1 que l'on peut définir une variable aléatoire égale au temps d'attente de succès consécutifs. On définira comme l'événement « on a obtenu des succès aux épreuves de rang , , ..., sans jamais avoir obtenu succès consécutifs auparavant ».  Montrer en utilisant le résultat de l'exercice 18 de la page 911 que :      Comme la suite est croissante, on a : On obtient de manière presque sûre une suite de succès consécutifs au bout d'un nombre fini d'épreuves. Sur un ensemble de probabilité 1, on peut définir l'application . On a, par définition , donc est un événement et une variable aléatoire à valeurs dans .  Pour tout , on a et donc . D'après la question 1, on a pour tout : D'après l'exercice 18 de la page 911, on en déduit :    "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
