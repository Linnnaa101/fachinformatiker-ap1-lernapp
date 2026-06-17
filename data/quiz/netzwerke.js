// Netzwerke: 100 hochwertige Poolfragen für das Quiz.
window.AP1_QUIZ_NETZWERKE = [
  {
    id: "netzwerke-001",
    category: "netzwerke",
    topic: "osi-tcp-ip",
    difficulty: "leicht",
    question: "Wozu dient das OSI-Modell in der Netzwerktechnik?",
    correctAnswer: "Es beschreibt Netzwerkkommunikation in mehreren logischen Schichten.",
    wrongAnswers: ["Es legt verbindlich fest, welche IP-Adresse ein Client erhält.","Es beschreibt nur die Verschlüsselung von WLAN-Verbindungen.","Es ist ein konkretes Routingprotokoll für Router."],
    explanation: "Das OSI-Modell ist ein Referenzmodell zur Einordnung von Netzwerkfunktionen in Schichten."
  },
  {
    id: "netzwerke-002",
    category: "netzwerke",
    topic: "osi-tcp-ip",
    difficulty: "leicht",
    question: "Welche OSI-Schicht ist hauptsächlich für physische Signale, Kabel und Stecker zuständig?",
    correctAnswer: "Schicht 1: Bitübertragungsschicht",
    wrongAnswers: ["Schicht 2: Sicherungsschicht","Schicht 3: Vermittlungsschicht","Schicht 4: Transportschicht"],
    explanation: "Die Bitübertragungsschicht behandelt elektrische, optische oder Funk-Signale und Anschlüsse."
  },
  {
    id: "netzwerke-003",
    category: "netzwerke",
    topic: "osi-tcp-ip",
    difficulty: "leicht",
    question: "Welche OSI-Schicht arbeitet typischerweise mit MAC-Adressen?",
    correctAnswer: "Schicht 2: Sicherungsschicht",
    wrongAnswers: ["Schicht 1: Bitübertragungsschicht","Schicht 3: Vermittlungsschicht","Schicht 7: Anwendungsschicht"],
    explanation: "MAC-Adressen gehören zur lokalen Frame-Zustellung auf der Sicherungsschicht."
  },
  {
    id: "netzwerke-004",
    category: "netzwerke",
    topic: "osi-tcp-ip",
    difficulty: "leicht",
    question: "Welche OSI-Schicht ist für IP-Adressierung und Routing zuständig?",
    correctAnswer: "Schicht 3: Vermittlungsschicht",
    wrongAnswers: ["Schicht 1: Bitübertragungsschicht","Schicht 2: Sicherungsschicht","Schicht 4: Transportschicht"],
    explanation: "IP-Adressen und Routingentscheidungen werden der Vermittlungsschicht zugeordnet."
  },
  {
    id: "netzwerke-005",
    category: "netzwerke",
    topic: "osi-tcp-ip",
    difficulty: "leicht",
    question: "Welche Aufgabe hat die Transportschicht im OSI-Modell?",
    correctAnswer: "Sie stellt Ende-zu-Ende-Kommunikation zwischen Anwendungen bereit.",
    wrongAnswers: ["Sie wandelt Bits in elektrische Signale um.","Sie leitet Frames anhand von MAC-Adressen im LAN weiter.","Sie löst Domainnamen in IP-Adressen auf."],
    explanation: "TCP und UDP auf der Transportschicht verbinden Anwendungen über Ports."
  },
  {
    id: "netzwerke-006",
    category: "netzwerke",
    topic: "osi-tcp-ip",
    difficulty: "leicht",
    question: "Welches Protokoll arbeitet verbindungsorientiert und bestätigt Datenübertragung?",
    correctAnswer: "TCP",
    wrongAnswers: ["UDP","ICMP","ARP"],
    explanation: "TCP bestätigt Daten und stellt eine verbindungsorientierte Übertragung bereit."
  },
  {
    id: "netzwerke-007",
    category: "netzwerke",
    topic: "osi-tcp-ip",
    difficulty: "leicht",
    question: "Welches Protokoll arbeitet verbindungslos und hat weniger Verwaltungsaufwand als TCP?",
    correctAnswer: "UDP",
    wrongAnswers: ["TCP","HTTPS","SSH"],
    explanation: "UDP verzichtet auf Verbindungsaufbau und Bestätigungen und ist dadurch schlanker."
  },
  {
    id: "netzwerke-008",
    category: "netzwerke",
    topic: "osi-tcp-ip",
    difficulty: "leicht",
    question: "Wofür wird eine IP-Adresse hauptsächlich verwendet?",
    correctAnswer: "Zur logischen Adressierung eines Geräts in einem IP-Netz.",
    wrongAnswers: ["Zur lokalen Zustellung von Frames über Switch-Ports.","Zur Identifikation eines TCP- oder UDP-Dienstes.","Zur Namensauflösung von Domains in DNS."],
    explanation: "Eine IP-Adresse adressiert ein Gerät logisch in einem IP-Netz."
  },
  {
    id: "netzwerke-009",
    category: "netzwerke",
    topic: "osi-tcp-ip",
    difficulty: "leicht",
    question: "Wofür wird eine MAC-Adresse hauptsächlich verwendet?",
    correctAnswer: "Zur lokalen Identifikation einer Netzwerkschnittstelle im Layer-2-Netz.",
    wrongAnswers: ["Zur Adressierung über mehrere IP-Netze hinweg.","Zur Auswahl eines Anwendungsdienstes über Portnummern.","Zur zeitlich begrenzten Vergabe einer IP-Konfiguration."],
    explanation: "MAC-Adressen identifizieren Schnittstellen innerhalb eines lokalen Layer-2-Netzes."
  },
  {
    id: "netzwerke-010",
    category: "netzwerke",
    topic: "osi-tcp-ip",
    difficulty: "leicht",
    question: "Was beschreibt Kapselung bei Netzwerkkommunikation?",
    correctAnswer: "Daten werden beim Senden schichtweise um Steuerinformationen ergänzt.",
    wrongAnswers: ["Header werden beim Senden von jeder Schicht entfernt.","Daten werden ohne Protokollinformationen direkt als Stromsignal gespeichert.","Ein Router ersetzt dabei den gesamten Nutzdateninhalt."],
    explanation: "Bei der Kapselung ergänzt jede Schicht passende Header oder Trailer."
  },
  {
    id: "netzwerke-011",
    category: "netzwerke",
    topic: "osi-tcp-ip",
    difficulty: "leicht",
    question: "Welcher Begriff passt zu einer Dateneinheit auf der IP-Schicht?",
    correctAnswer: "Paket",
    wrongAnswers: ["Frame","Segment","Bit"],
    explanation: "Auf Layer 3 wird die IP-Dateneinheit üblicherweise als Paket bezeichnet."
  },
  {
    id: "netzwerke-012",
    category: "netzwerke",
    topic: "osi-tcp-ip",
    difficulty: "leicht",
    question: "Welcher Begriff passt zu einer Dateneinheit auf der Sicherungsschicht?",
    correctAnswer: "Frame",
    wrongAnswers: ["Paket","Segment","Datagramm auf UDP-Ebene"],
    explanation: "Die Sicherungsschicht überträgt Daten in Frames im lokalen Netz."
  },
  {
    id: "netzwerke-013",
    category: "netzwerke",
    topic: "osi-tcp-ip",
    difficulty: "leicht",
    question: "Welche Protokolle gehören typischerweise zur Anwendungsschicht?",
    correctAnswer: "HTTP, DNS und SMTP",
    wrongAnswers: ["IP, ICMP und ARP","Ethernet, WLAN und PPP","TCP, UDP und SCTP"],
    explanation: "HTTP, DNS und SMTP stellen Dienste direkt für Anwendungen bereit."
  },
  {
    id: "netzwerke-014",
    category: "netzwerke",
    topic: "osi-tcp-ip",
    difficulty: "leicht",
    question: "Worin unterscheiden sich TCP/IP-Modell und OSI-Modell hauptsächlich?",
    correctAnswer: "Das TCP/IP-Modell fasst einige OSI-Schichten zusammen.",
    wrongAnswers: ["Das TCP/IP-Modell hat exakt sieben Schichten.","Das OSI-Modell enthält nur konkrete Internetprotokolle.","Das TCP/IP-Modell ersetzt IP-Adressen durch MAC-Adressen."],
    explanation: "Das TCP/IP-Modell bündelt OSI-Funktionen in weniger, praxisorientierten Schichten."
  },
  {
    id: "netzwerke-015",
    category: "netzwerke",
    topic: "osi-tcp-ip",
    difficulty: "leicht",
    question: "Warum sind Schichtenmodelle bei der Fehlersuche hilfreich?",
    correctAnswer: "Fehler können systematisch einer Kommunikationsschicht zugeordnet werden.",
    wrongAnswers: ["Sie zeigen automatisch das defekte Kabel an.","Sie verhindern Konfigurationsfehler in Routern.","Sie ersetzen Messungen und Logauswertung vollständig."],
    explanation: "Mit Schichtenmodellen lässt sich ein Fehler vom Medium bis zur Anwendung eingrenzen."
  },
  {
    id: "netzwerke-016",
    category: "netzwerke",
    topic: "ipv4-subnetting",
    difficulty: "leicht",
    question: "Wie viele Bit hat eine IPv4-Adresse?",
    correctAnswer: "32 Bit",
    wrongAnswers: ["16 Bit","64 Bit","128 Bit"],
    explanation: "IPv4 verwendet 32 Bit, meist als vier Oktette dargestellt."
  },
  {
    id: "netzwerke-017",
    category: "netzwerke",
    topic: "ipv4-subnetting",
    difficulty: "leicht",
    question: "Welche Schreibweise ist eine gültige IPv4-Adresse?",
    correctAnswer: "192.168.1.10",
    wrongAnswers: ["192.168.1.300","192.168.1","192.168.1.10.5"],
    explanation: "Eine gültige IPv4-Adresse besteht aus vier Oktetten zwischen 0 und 255."
  },
  {
    id: "netzwerke-018",
    category: "netzwerke",
    topic: "ipv4-subnetting",
    difficulty: "leicht",
    question: "Wozu dient eine Subnetzmaske?",
    correctAnswer: "Sie trennt Netzanteil und Hostanteil einer IP-Adresse.",
    wrongAnswers: ["Sie gibt den TCP-Port eines Dienstes an.","Sie verschlüsselt Pakete zwischen zwei Hosts.","Sie ordnet einen Domainnamen einem Mailserver zu."],
    explanation: "Die Subnetzmaske legt fest, welche Bits zum Netzanteil gehören."
  },
  {
    id: "netzwerke-019",
    category: "netzwerke",
    topic: "ipv4-subnetting",
    difficulty: "leicht",
    question: "Welche Subnetzmaske entspricht der CIDR-Schreibweise `/24`?",
    correctAnswer: "255.255.255.0",
    wrongAnswers: ["255.255.0.0","255.255.255.128","255.0.0.0"],
    explanation: "/24 bedeutet 24 gesetzte Maskenbits, also 255.255.255.0."
  },
  {
    id: "netzwerke-020",
    category: "netzwerke",
    topic: "ipv4-subnetting",
    difficulty: "leicht",
    question: "Welche Adresse liegt im privaten IPv4-Bereich?",
    correctAnswer: "192.168.1.20",
    wrongAnswers: ["8.8.8.8","1.1.1.1","203.0.113.5"],
    explanation: "192.168.0.0/16 gehört zu den privaten IPv4-Adressbereichen."
  },
  {
    id: "netzwerke-021",
    category: "netzwerke",
    topic: "ipv4-subnetting",
    difficulty: "leicht",
    question: "Welcher private IPv4-Bereich beginnt mit 10?",
    correctAnswer: "10.0.0.0/8",
    wrongAnswers: ["10.0.0.0/32","10.0.0.0/24 als einziger Bereich","10.255.255.255/32"],
    explanation: "Der private 10er-Bereich umfasst das gesamte Netz 10.0.0.0/8."
  },
  {
    id: "netzwerke-022",
    category: "netzwerke",
    topic: "ipv4-subnetting",
    difficulty: "leicht",
    question: "Wozu dient das Default Gateway in einem IP-Netz?",
    correctAnswer: "Es leitet Pakete in andere Netzwerke weiter.",
    wrongAnswers: ["Es löst Hostnamen in IP-Adressen auf.","Es weist Switch-Ports einem VLAN zu.","Es speichert die MAC-Tabelle eines Switches."],
    explanation: "Das Default Gateway ist der nächste Router für Ziele außerhalb des lokalen Netzes."
  },
  {
    id: "netzwerke-023",
    category: "netzwerke",
    topic: "ipv4-subnetting",
    difficulty: "leicht",
    question: "Welche Adresse bezeichnet in einem Subnetz typischerweise alle Hosts dieses Subnetzes?",
    correctAnswer: "Broadcast-Adresse",
    wrongAnswers: ["Gateway-Adresse","Loopback-Adresse","Netzwerkadresse"],
    explanation: "Die Broadcast-Adresse erreicht alle Hosts im jeweiligen Subnetz."
  },
  {
    id: "netzwerke-024",
    category: "netzwerke",
    topic: "ipv4-subnetting",
    difficulty: "leicht",
    question: "Welche IPv4-Adresse wird häufig als lokale Loopback-Adresse verwendet?",
    correctAnswer: "127.0.0.1",
    wrongAnswers: ["192.168.0.1","255.255.255.255","0.0.0.0"],
    explanation: "127.0.0.1 ist die Standardadresse für Tests gegen den lokalen Host."
  },
  {
    id: "netzwerke-025",
    category: "netzwerke",
    topic: "ipv4-subnetting",
    difficulty: "leicht",
    question: "Was bedeutet CIDR bei IPv4-Adressen?",
    correctAnswer: "Die Netzmaske wird mit einer Präfixlänge wie `/24` angegeben.",
    wrongAnswers: ["Die Adresse enthält zusätzlich eine Portnummer mit Doppelpunkt.","Die MAC-Adresse wird in Dezimalblöcken angegeben.","DNS-Zonen werden nach Priorität sortiert."],
    explanation: "CIDR notiert die Länge des Netzwerkpräfixes mit einem Schrägstrich."
  },
  {
    id: "netzwerke-026",
    category: "netzwerke",
    topic: "ipv4-subnetting",
    difficulty: "leicht",
    question: "Welche Subnetzmaske gehört zu `/25`?",
    correctAnswer: "255.255.255.128",
    wrongAnswers: ["255.255.255.0","255.255.255.192","255.255.0.0"],
    explanation: "/25 setzt 25 Maskenbits und ergibt 255.255.255.128."
  },
  {
    id: "netzwerke-027",
    category: "netzwerke",
    topic: "ipv4-subnetting",
    difficulty: "leicht",
    question: "Welche Subnetzmaske gehört zu `/26`?",
    correctAnswer: "255.255.255.192",
    wrongAnswers: ["255.255.255.128","255.255.255.0","255.255.255.224"],
    explanation: "/26 setzt 26 Maskenbits und ergibt 255.255.255.192."
  },
  {
    id: "netzwerke-028",
    category: "netzwerke",
    topic: "ipv4-subnetting",
    difficulty: "leicht",
    question: "Welche Angabe beschreibt ein Netzwerk mit 24 Bit Netzanteil?",
    correctAnswer: "192.168.1.0/24",
    wrongAnswers: ["192.168.1.0:24","192.168.1.0#24","192.168.1.0-24"],
    explanation: "CIDR verwendet einen Schrägstrich vor der Präfixlänge."
  },
  {
    id: "netzwerke-029",
    category: "netzwerke",
    topic: "ipv4-subnetting",
    difficulty: "leicht",
    question: "Welche IP-Adresse gehört zum gleichen `/24`-Netz wie `192.168.10.5/24`?",
    correctAnswer: "192.168.10.200",
    wrongAnswers: ["192.168.11.5","192.169.10.5","10.168.10.5"],
    explanation: "Bei /24 müssen die ersten drei Oktette zum selben Netz gehören."
  },
  {
    id: "netzwerke-030",
    category: "netzwerke",
    topic: "ipv4-subnetting",
    difficulty: "leicht",
    question: "Warum werden Subnetze eingesetzt?",
    correctAnswer: "Sie strukturieren Netzwerke und begrenzen Broadcast-Bereiche.",
    wrongAnswers: ["Sie vergrößern eine einzelne Broadcast-Domain.","Sie machen Default Gateways grundsätzlich unnötig.","Sie wandeln private Adressen in MAC-Adressen um."],
    explanation: "Subnetze gliedern Adressbereiche und begrenzen Broadcast-Verkehr."
  },
  {
    id: "netzwerke-031",
    category: "netzwerke",
    topic: "ports-protokolle",
    difficulty: "leicht",
    question: "Welcher Port wird standardmäßig für HTTP verwendet?",
    correctAnswer: "80",
    wrongAnswers: ["443","22","25"],
    explanation: "HTTP nutzt ohne TLS standardmäßig TCP-Port 80."
  },
  {
    id: "netzwerke-032",
    category: "netzwerke",
    topic: "ports-protokolle",
    difficulty: "leicht",
    question: "Welcher Port wird standardmäßig für HTTPS verwendet?",
    correctAnswer: "443",
    wrongAnswers: ["80","22","53"],
    explanation: "HTTPS nutzt standardmäßig TCP-Port 443 für verschlüsselte Webverbindungen."
  },
  {
    id: "netzwerke-033",
    category: "netzwerke",
    topic: "ports-protokolle",
    difficulty: "leicht",
    question: "Welcher Port wird häufig für SSH verwendet?",
    correctAnswer: "22",
    wrongAnswers: ["21","23","3389"],
    explanation: "SSH verwendet typischerweise TCP-Port 22 für sichere Administration."
  },
  {
    id: "netzwerke-034",
    category: "netzwerke",
    topic: "ports-protokolle",
    difficulty: "leicht",
    question: "Welcher Port wird standardmäßig für DNS-Abfragen verwendet?",
    correctAnswer: "53",
    wrongAnswers: ["67","80","443"],
    explanation: "DNS-Abfragen laufen typischerweise über Port 53."
  },
  {
    id: "netzwerke-035",
    category: "netzwerke",
    topic: "ports-protokolle",
    difficulty: "leicht",
    question: "Welche Aufgabe haben Ports in TCP- oder UDP-Kommunikation?",
    correctAnswer: "Sie ordnen Netzwerkdaten einer Anwendung oder einem Dienst zu.",
    wrongAnswers: ["Sie kennzeichnen das Zielnetz einer IPv4-Adresse.","Sie ersetzen die MAC-Adresse im Ethernet-Frame.","Sie definieren die Funkfrequenz eines WLANs."],
    explanation: "Ports ermöglichen, mehrere Dienste auf derselben IP-Adresse zu unterscheiden."
  },
  {
    id: "netzwerke-036",
    category: "netzwerke",
    topic: "ports-protokolle",
    difficulty: "mittel",
    question: "Welches Protokoll wird typischerweise für den Versand von E-Mails zwischen Mailservern genutzt?",
    correctAnswer: "SMTP",
    wrongAnswers: ["IMAP","POP3","DHCP"],
    explanation: "SMTP ist das Standardprotokoll zum Senden und Weiterleiten von E-Mails."
  },
  {
    id: "netzwerke-037",
    category: "netzwerke",
    topic: "ports-protokolle",
    difficulty: "mittel",
    question: "Welches Protokoll wird typischerweise verwendet, um E-Mails auf dem Server zu verwalten und synchron zu halten?",
    correctAnswer: "IMAP",
    wrongAnswers: ["SMTP","POP3","FTP"],
    explanation: "IMAP belässt Mails auf dem Server und synchronisiert Clients."
  },
  {
    id: "netzwerke-038",
    category: "netzwerke",
    topic: "ports-protokolle",
    difficulty: "mittel",
    question: "Welcher Port ist standardmäßig mit SMTP verbunden?",
    correctAnswer: "25",
    wrongAnswers: ["110","143","53"],
    explanation: "SMTP für Server-zu-Server-Mailverkehr nutzt historisch TCP-Port 25."
  },
  {
    id: "netzwerke-039",
    category: "netzwerke",
    topic: "ports-protokolle",
    difficulty: "mittel",
    question: "Welcher Port ist standardmäßig mit IMAP verbunden?",
    correctAnswer: "143",
    wrongAnswers: ["110","25","123"],
    explanation: "IMAP nutzt ohne Verschlüsselungsvariante standardmäßig TCP-Port 143."
  },
  {
    id: "netzwerke-040",
    category: "netzwerke",
    topic: "ports-protokolle",
    difficulty: "mittel",
    question: "Welcher Port ist standardmäßig mit POP3 verbunden?",
    correctAnswer: "110",
    wrongAnswers: ["143","25","22"],
    explanation: "POP3 nutzt standardmäßig TCP-Port 110 zum Abrufen von E-Mails."
  },
  {
    id: "netzwerke-041",
    category: "netzwerke",
    topic: "ports-protokolle",
    difficulty: "mittel",
    question: "Welche Ports gehören klassisch zu FTP?",
    correctAnswer: "20 und 21",
    wrongAnswers: ["22 und 23","80 und 443","67 und 68"],
    explanation: "FTP verwendet klassisch Port 21 für Steuerung und Port 20 für Daten."
  },
  {
    id: "netzwerke-042",
    category: "netzwerke",
    topic: "ports-protokolle",
    difficulty: "mittel",
    question: "Welches Protokoll wird häufig zur Zeitsynchronisation in Netzwerken verwendet?",
    correctAnswer: "NTP",
    wrongAnswers: ["SMTP","ARP","POP3"],
    explanation: "NTP synchronisiert Systemuhren über das Netzwerk."
  },
  {
    id: "netzwerke-043",
    category: "netzwerke",
    topic: "ports-protokolle",
    difficulty: "mittel",
    question: "Welcher Port wird standardmäßig für NTP verwendet?",
    correctAnswer: "123",
    wrongAnswers: ["53","143","443"],
    explanation: "NTP nutzt standardmäßig UDP-Port 123."
  },
  {
    id: "netzwerke-044",
    category: "netzwerke",
    topic: "ports-protokolle",
    difficulty: "mittel",
    question: "Warum sollte Telnet für administrative Zugriffe vermieden werden?",
    correctAnswer: "Telnet überträgt Daten unverschlüsselt.",
    wrongAnswers: ["Telnet authentifiziert grundsätzlich nur mit Zertifikaten.","Telnet blockiert alle administrativen Befehle.","Telnet funktioniert ausschließlich innerhalb von VLAN-Trunks."],
    explanation: "Telnet sendet Inhalte im Klartext; SSH ist für Administration sicherer."
  },
  {
    id: "netzwerke-045",
    category: "netzwerke",
    topic: "ports-protokolle",
    difficulty: "mittel",
    question: "Warum ist die Kenntnis von Standardports bei der Fehlersuche hilfreich?",
    correctAnswer: "Dienste und Firewall-Regeln können gezielter geprüft werden.",
    wrongAnswers: ["Sie zeigen direkt die physische Kabellänge an.","Sie ersetzen die Prüfung laufender Dienste.","Sie berechnen automatisch die passende VLAN-ID."],
    explanation: "Bekannte Ports erleichtern die Prüfung, ob Dienst und Firewall zusammenpassen."
  },
  {
    id: "netzwerke-046",
    category: "netzwerke",
    topic: "dns-dhcp",
    difficulty: "mittel",
    question: "Welche Aufgabe hat DNS?",
    correctAnswer: "DNS löst Namen wie `example.org` in IP-Adressen auf.",
    wrongAnswers: ["DNS weist Clients automatisch IP-Leases zu.","DNS markiert VLAN-Tags in Ethernet-Frames.","DNS synchronisiert Systemuhren per UDP 123."],
    explanation: "DNS übersetzt lesbare Namen in IP-Adressen."
  },
  {
    id: "netzwerke-047",
    category: "netzwerke",
    topic: "dns-dhcp",
    difficulty: "mittel",
    question: "Welcher DNS-Record ordnet einem Namen eine IPv4-Adresse zu?",
    correctAnswer: "A-Record",
    wrongAnswers: ["MX-Record","TXT-Record","CNAME-Record"],
    explanation: "Ein A-Record verweist einen Namen auf eine IPv4-Adresse."
  },
  {
    id: "netzwerke-048",
    category: "netzwerke",
    topic: "dns-dhcp",
    difficulty: "mittel",
    question: "Welcher DNS-Record ordnet einem Namen eine IPv6-Adresse zu?",
    correctAnswer: "AAAA-Record",
    wrongAnswers: ["A-Record","MX-Record","PTR-Record"],
    explanation: "Ein AAAA-Record verweist einen Namen auf eine IPv6-Adresse."
  },
  {
    id: "netzwerke-049",
    category: "netzwerke",
    topic: "dns-dhcp",
    difficulty: "mittel",
    question: "Welcher DNS-Record ist für Mailserver einer Domain zuständig?",
    correctAnswer: "MX-Record",
    wrongAnswers: ["A-Record","AAAA-Record","CNAME-Record"],
    explanation: "MX-Records nennen die zuständigen Mailserver einer Domain."
  },
  {
    id: "netzwerke-050",
    category: "netzwerke",
    topic: "dns-dhcp",
    difficulty: "mittel",
    question: "Welche Aufgabe hat DHCP?",
    correctAnswer: "DHCP vergibt Netzwerkkonfigurationen automatisch an Clients.",
    wrongAnswers: ["DHCP löst Hostnamen in IP-Adressen auf.","DHCP filtert Pakete anhand von Firewall-Regeln.","DHCP transportiert mehrere VLANs über einen Trunk."],
    explanation: "DHCP verteilt IP-Konfigurationen wie Adresse, Maske, Gateway und DNS-Server."
  },
  {
    id: "netzwerke-051",
    category: "netzwerke",
    topic: "dns-dhcp",
    difficulty: "mittel",
    question: "Welche Information kann ein Client typischerweise per DHCP erhalten?",
    correctAnswer: "IP-Adresse, Subnetzmaske, Gateway und DNS-Server",
    wrongAnswers: ["MAC-Tabelle, VLAN-Trunk und SSID","HTTP-Statuscode, Zertifikat und Cookie","CPU-Takt, RAM-Größe und BIOS-Version"],
    explanation: "DHCP kann die wichtigsten IP-Parameter automatisch an Clients liefern."
  },
  {
    id: "netzwerke-052",
    category: "netzwerke",
    topic: "dns-dhcp",
    difficulty: "mittel",
    question: "Was beschreibt eine DHCP-Lease?",
    correctAnswer: "Die zeitlich begrenzte Zuweisung einer IP-Konfiguration.",
    wrongAnswers: ["Eine DNS-Priorität für Mailserver.","Eine VLAN-ID auf einem Access-Port.","Ein dauerhaftes ARP-Tabellenfragment."],
    explanation: "Eine DHCP-Lease ist die befristete Nutzung einer zugewiesenen IP-Konfiguration."
  },
  {
    id: "netzwerke-053",
    category: "netzwerke",
    topic: "dns-dhcp",
    difficulty: "mittel",
    question: "Was passiert häufig, wenn kein DHCP-Server erreichbar ist?",
    correctAnswer: "Der Client erhält keine passende automatische IP-Konfiguration.",
    wrongAnswers: ["Der Client erhält automatisch eine öffentliche IPv6-Adresse über DNS.","Der Switch wechselt selbstständig in ein anderes VLAN.","Der Browser nutzt dadurch immer HTTPS statt HTTP."],
    explanation: "Ohne erreichbaren DHCP-Server fehlt oft eine gültige automatische IP-Konfiguration."
  },
  {
    id: "netzwerke-054",
    category: "netzwerke",
    topic: "dns-dhcp",
    difficulty: "mittel",
    question: "Welches Tool wird häufig zur Prüfung von DNS-Auflösungen genutzt?",
    correctAnswer: "nslookup",
    wrongAnswers: ["ping","tracert","ipconfig /release"],
    explanation: "nslookup fragt DNS-Server ab und zeigt Namensauflösungen."
  },
  {
    id: "netzwerke-055",
    category: "netzwerke",
    topic: "dns-dhcp",
    difficulty: "mittel",
    question: "Warum können falsche DNS-Einstellungen dazu führen, dass Webseiten nicht über Namen erreichbar sind?",
    correctAnswer: "Der Client kann den Namen nicht korrekt in eine IP-Adresse auflösen.",
    wrongAnswers: ["Der Client kann den Webserver physisch nicht mit Strom versorgen.","Der TCP-Port 443 wird dadurch automatisch geschlossen.","Die MAC-Adresse des Servers wird im DNS falsch gelernt."],
    explanation: "Falsches DNS verhindert die Übersetzung des Namens zur passenden IP-Adresse."
  },
  {
    id: "netzwerke-056",
    category: "netzwerke",
    topic: "switch-router-vlan",
    difficulty: "mittel",
    question: "Welche Hauptaufgabe hat ein Switch in einem lokalen Netzwerk?",
    correctAnswer: "Er verbindet Geräte auf Layer 2 und leitet Frames anhand von MAC-Adressen weiter.",
    wrongAnswers: ["Er verbindet verschiedene IP-Netze anhand von Routingtabellen.","Er vergibt DNS-Namen für öffentliche Domains.","Er stellt VPN-Tunnel über das Internet her."],
    explanation: "Ein Switch leitet Layer-2-Frames anhand gelernter MAC-Adressen weiter."
  },
  {
    id: "netzwerke-057",
    category: "netzwerke",
    topic: "switch-router-vlan",
    difficulty: "mittel",
    question: "Welche Hauptaufgabe hat ein Router?",
    correctAnswer: "Er verbindet verschiedene IP-Netzwerke und leitet Pakete weiter.",
    wrongAnswers: ["Er leitet Frames nur anhand von MAC-Adressen im selben LAN weiter.","Er wandelt DNS-Namen in IPv4-Adressen um.","Er synchronisiert die Uhrzeit aller Clients."],
    explanation: "Ein Router trifft Layer-3-Entscheidungen zwischen unterschiedlichen IP-Netzen."
  },
  {
    id: "netzwerke-058",
    category: "netzwerke",
    topic: "switch-router-vlan",
    difficulty: "mittel",
    question: "Welche Information lernt ein Switch für seine Weiterleitungstabelle?",
    correctAnswer: "MAC-Adressen an bestimmten Ports",
    wrongAnswers: ["IP-Routen zu entfernten Netzen","DNS-Records einer Zone","DHCP-Lease-Zeiten pro Client"],
    explanation: "Switches lernen, welche MAC-Adresse über welchen Port erreichbar ist."
  },
  {
    id: "netzwerke-059",
    category: "netzwerke",
    topic: "switch-router-vlan",
    difficulty: "mittel",
    question: "Was ist eine Broadcast-Domain?",
    correctAnswer: "Ein Netzbereich, in dem Broadcasts alle zugehörigen Geräte erreichen können.",
    wrongAnswers: ["Ein Bereich mit identischem DNS-Suffix.","Eine Gruppe von Ports mit gleicher Kabellänge.","Ein verschlüsselter Tunnel zwischen zwei Standorten."],
    explanation: "In einer Broadcast-Domain erreichen Broadcast-Frames alle zugehörigen Geräte."
  },
  {
    id: "netzwerke-060",
    category: "netzwerke",
    topic: "switch-router-vlan",
    difficulty: "mittel",
    question: "Wozu dient ein VLAN?",
    correctAnswer: "Es trennt ein physisches Switch-Netz logisch in mehrere Netze.",
    wrongAnswers: ["Es vergibt automatisch IP-Adressen an Clients.","Es verschlüsselt WLAN-Verbindungen.","Es übersetzt Domainnamen in IP-Adressen."],
    explanation: "Ein VLAN segmentiert ein Switch-Netz logisch in getrennte Layer-2-Bereiche."
  },
  {
    id: "netzwerke-061",
    category: "netzwerke",
    topic: "switch-router-vlan",
    difficulty: "mittel",
    question: "Was ist ein Access-Port bei VLANs?",
    correctAnswer: "Ein Port, der normalerweise einem einzelnen VLAN zugeordnet ist.",
    wrongAnswers: ["Ein Port, der mehrere VLANs getaggt transportiert.","Ein Port, der ausschließlich Router-zu-Router-Routen austauscht.","Ein Port, der nur DNS-Abfragen weiterleitet."],
    explanation: "Access-Ports sind typischerweise untagged Ports für Endgeräte in einem VLAN."
  },
  {
    id: "netzwerke-062",
    category: "netzwerke",
    topic: "switch-router-vlan",
    difficulty: "mittel",
    question: "Was ist ein Trunk-Port bei VLANs?",
    correctAnswer: "Ein Port, der mehrere VLANs zwischen Netzwerkgeräten transportieren kann.",
    wrongAnswers: ["Ein Port für genau ein ungetaggtes Endgeräte-VLAN.","Ein deaktivierter Port ohne Layer-2-Funktion.","Ein Port, der DHCP-Leases speichert."],
    explanation: "Trunk-Ports transportieren mehrere VLANs, meist mit VLAN-Tags."
  },
  {
    id: "netzwerke-063",
    category: "netzwerke",
    topic: "switch-router-vlan",
    difficulty: "mittel",
    question: "Warum braucht Kommunikation zwischen zwei VLANs meist ein Layer-3-Gerät?",
    correctAnswer: "VLANs sind logisch getrennte Netze und benötigen Routing zwischen den Netzen.",
    wrongAnswers: ["Weil VLANs immer dieselbe IP-Adresse verwenden.","Weil Switches auf Access-Ports keine Frames senden können.","Weil ARP grundsätzlich nur über Router funktioniert."],
    explanation: "Zwischen getrennten VLAN-Netzen ist Routing auf Layer 3 erforderlich."
  },
  {
    id: "netzwerke-064",
    category: "netzwerke",
    topic: "switch-router-vlan",
    difficulty: "mittel",
    question: "Was passiert, wenn ein Gerät ein Ziel außerhalb seines eigenen IP-Netzes erreichen möchte?",
    correctAnswer: "Es sendet das Paket an sein Default Gateway.",
    wrongAnswers: ["Es sendet das Paket direkt an die Broadcast-Adresse des Zielnetzes.","Es fragt DNS nach der MAC-Adresse des Zielhosts.","Es verwirft das Paket immer ohne Fehlermeldung."],
    explanation: "Für fremde IP-Netze wird das Default Gateway als nächster Hop verwendet."
  },
  {
    id: "netzwerke-065",
    category: "netzwerke",
    topic: "switch-router-vlan",
    difficulty: "mittel",
    question: "Warum kann VLAN-Segmentierung die Sicherheit verbessern?",
    correctAnswer: "Sie trennt Netzbereiche und kann unnötige Kommunikation begrenzen.",
    wrongAnswers: ["Sie erlaubt jedem Client Zugriff auf alle Broadcast-Domains.","Sie entfernt die Notwendigkeit von Zugriffsregeln vollständig.","Sie macht unverschlüsselte Protokolle automatisch sicher."],
    explanation: "VLAN-Segmentierung begrenzt Sichtbarkeit und Kommunikationswege zwischen Netzbereichen."
  },
  {
    id: "netzwerke-066",
    category: "netzwerke",
    topic: "switch-router-vlan",
    difficulty: "mittel",
    question: "Welche Geräte arbeiten typischerweise auf Layer 2?",
    correctAnswer: "Switches",
    wrongAnswers: ["Router","DNS-Server","Firewall im reinen Layer-3-Betrieb"],
    explanation: "Switches arbeiten klassisch auf Layer 2 mit Ethernet-Frames."
  },
  {
    id: "netzwerke-067",
    category: "netzwerke",
    topic: "switch-router-vlan",
    difficulty: "mittel",
    question: "Welche Geräte arbeiten typischerweise auf Layer 3?",
    correctAnswer: "Router",
    wrongAnswers: ["Repeater","Hub","Layer-2-Switch ohne Routing"],
    explanation: "Router arbeiten auf Layer 3 und leiten IP-Pakete zwischen Netzen."
  },
  {
    id: "netzwerke-068",
    category: "netzwerke",
    topic: "switch-router-vlan",
    difficulty: "mittel",
    question: "Warum sollte die VLAN-Zuordnung dokumentiert werden?",
    correctAnswer: "Damit Ports, Netze und Sicherheitszonen nachvollziehbar bleiben.",
    wrongAnswers: ["Damit Clients ihre Passwörter im VLAN speichern können.","Damit DNS-Records automatisch aus Switch-Ports entstehen.","Damit Trunk-Ports keine Tags mehr benötigen."],
    explanation: "Dokumentierte VLANs erleichtern Betrieb, Fehlersuche und Sicherheitszuordnung."
  },
  {
    id: "netzwerke-069",
    category: "netzwerke",
    topic: "switch-router-vlan",
    difficulty: "mittel",
    question: "Was ist ein typischer Fehler bei VLAN-Konfigurationen?",
    correctAnswer: "Ein Endgerät hängt an einem Port mit falscher VLAN-Zuordnung.",
    wrongAnswers: ["Ein DHCP-Server liefert eine zu lange Lease-Zeit.","Ein DNS-Record zeigt auf eine IPv6-Adresse.","Ein Router nutzt eine statische Standardroute."],
    explanation: "Eine falsche Port-VLAN-Zuordnung kann Endgeräte ins falsche Netz bringen."
  },
  {
    id: "netzwerke-070",
    category: "netzwerke",
    topic: "switch-router-vlan",
    difficulty: "mittel",
    question: "Welche Aufgabe hat ARP in einem IPv4-LAN?",
    correctAnswer: "ARP ermittelt die MAC-Adresse zu einer bekannten IPv4-Adresse.",
    wrongAnswers: ["ARP löst DNS-Namen in IPv6-Adressen auf.","ARP verteilt automatisch Default Gateways.","ARP verschlüsselt Ethernet-Frames im LAN."],
    explanation: "ARP ermittelt im IPv4-LAN die Ziel-MAC-Adresse zur bekannten IP-Adresse."
  },
  {
    id: "netzwerke-071",
    category: "netzwerke",
    topic: "wlan",
    difficulty: "mittel",
    question: "Wofür steht SSID in einem WLAN?",
    correctAnswer: "Der Name eines WLAN-Netzwerks.",
    wrongAnswers: ["Die MAC-Adresse des Access Points.","Die IP-Adresse des WLAN-Clients.","Der Verschlüsselungsalgorithmus eines VPNs."],
    explanation: "Die SSID bezeichnet den Namen, unter dem ein WLAN identifiziert wird."
  },
  {
    id: "netzwerke-072",
    category: "netzwerke",
    topic: "wlan",
    difficulty: "mittel",
    question: "Welche WLAN-Verschlüsselung gilt im Vergleich zu WEP als deutlich sicherer?",
    correctAnswer: "WPA2 oder WPA3",
    wrongAnswers: ["WEP","Offenes WLAN ohne Authentifizierung","MAC-Filter ohne Verschlüsselung"],
    explanation: "WPA2 und WPA3 bieten deutlich stärkere WLAN-Sicherheit als WEP."
  },
  {
    id: "netzwerke-073",
    category: "netzwerke",
    topic: "wlan",
    difficulty: "mittel",
    question: "Was ist ein Vorteil des 5-GHz-Bands gegenüber 2,4 GHz?",
    correctAnswer: "Es bietet oft mehr Kanäle und weniger Störungen.",
    wrongAnswers: ["Es hat grundsätzlich eine größere Reichweite durch Wände.","Es benötigt keine Kanalplanung mehr.","Es deaktiviert automatisch Störungen durch Nachbar-WLANs."],
    explanation: "5 GHz bietet oft mehr nicht überlappende Kanäle, hat aber meist geringere Reichweite."
  },
  {
    id: "netzwerke-074",
    category: "netzwerke",
    topic: "wlan",
    difficulty: "mittel",
    question: "Warum kann ein separates Gast-WLAN sinnvoll sein?",
    correctAnswer: "Gäste können vom internen Unternehmensnetz getrennt werden.",
    wrongAnswers: ["Gäste erhalten direkten Zugriff auf Server-VLANs.","Das interne WLAN-Passwort muss öffentlich geteilt werden.","Alle Firewall-Regeln werden für Gäste deaktiviert."],
    explanation: "Ein Gast-WLAN trennt fremde Geräte vom internen Netz."
  },
  {
    id: "netzwerke-075",
    category: "netzwerke",
    topic: "wlan",
    difficulty: "mittel",
    question: "Warum können überlappende WLAN-Kanäle Probleme verursachen?",
    correctAnswer: "Sie können Störungen und geringere Übertragungsqualität verursachen.",
    wrongAnswers: ["Sie erhöhen automatisch die Verschlüsselungsstärke.","Sie vergeben Clients doppelte IP-Adressen.","Sie ersetzen die Roaming-Funktion eines Access Points."],
    explanation: "Überlappende Kanäle können Funkstörungen und geringeren Durchsatz verursachen."
  },
  {
    id: "netzwerke-076",
    category: "netzwerke",
    topic: "netzwerkdiagnose",
    difficulty: "mittel",
    question: "Wofür wird `ping` häufig eingesetzt?",
    correctAnswer: "Zum Prüfen, ob ein Ziel über das Netzwerk erreichbar ist.",
    wrongAnswers: ["Zum Anzeigen der lokalen Routingtabelle.","Zum Abfragen eines DNS-Records mit festem Server.","Zum Mitschneiden von Ethernet-Frames."],
    explanation: "ping prüft per ICMP, ob ein Ziel antwortet und wie lange die Antwort dauert."
  },
  {
    id: "netzwerke-077",
    category: "netzwerke",
    topic: "netzwerkdiagnose",
    difficulty: "mittel",
    question: "Welches Tool zeigt unter Windows häufig die aktuelle IP-Konfiguration an?",
    correctAnswer: "ipconfig",
    wrongAnswers: ["tracert","nslookup","netstat"],
    explanation: "ipconfig zeigt unter Windows die aktuelle IP-Konfiguration an."
  },
  {
    id: "netzwerke-078",
    category: "netzwerke",
    topic: "netzwerkdiagnose",
    difficulty: "mittel",
    question: "Welches Tool verfolgt den Weg eines Pakets über mehrere Router?",
    correctAnswer: "tracert oder traceroute",
    wrongAnswers: ["ping","nslookup","ipconfig"],
    explanation: "tracert beziehungsweise traceroute zeigt die Router-Hops bis zum Ziel."
  },
  {
    id: "netzwerke-079",
    category: "netzwerke",
    topic: "netzwerkdiagnose",
    difficulty: "mittel",
    question: "Welche erste Prüfung ist bei fehlender Netzwerkverbindung sinnvoll?",
    correctAnswer: "Physische Verbindung, WLAN-Verbindung oder Link-Status prüfen.",
    wrongAnswers: ["DNS-Cache des Browsers leeren, bevor der Link geprüft wird.","Zuerst die öffentliche IP-Adresse des Providers ändern.","Sofort alle Firewall-Regeln deaktivieren."],
    explanation: "Die Fehlersuche beginnt sinnvoll bei Link, Kabel, WLAN und Layer 1."
  },
  {
    id: "netzwerke-080",
    category: "netzwerke",
    topic: "netzwerkdiagnose",
    difficulty: "mittel",
    question: "Warum ist die Prüfung des Default Gateways bei Verbindungsproblemen wichtig?",
    correctAnswer: "Ohne korrektes Gateway sind Ziele außerhalb des eigenen Netzes oft nicht erreichbar.",
    wrongAnswers: ["Das Gateway bestimmt die Bildschirmauflösung im Netzwerk.","Das Gateway ersetzt die DNS-Namensauflösung.","Das Gateway vergibt automatisch alle VLAN-IDs."],
    explanation: "Das Default Gateway ist notwendig, wenn Ziele außerhalb des lokalen Netzes erreicht werden sollen."
  },
  {
    id: "netzwerke-081",
    category: "netzwerke",
    topic: "netzwerkdiagnose",
    difficulty: "schwer",
    question: "Was deutet darauf hin, dass DNS gestört ist, obwohl die IP-Verbindung funktioniert?",
    correctAnswer: "Eine Webseite ist per IP erreichbar, aber nicht über ihren Namen.",
    wrongAnswers: ["Der Link zum Switch ist immer unterbrochen.","Die Subnetzmaske ist garantiert korrekt.","Der Zielserver hat zwingend keinen Webdienst gestartet."],
    explanation: "Wenn IP direkt funktioniert, aber der Name nicht, liegt der Verdacht auf DNS."
  },
  {
    id: "netzwerke-082",
    category: "netzwerke",
    topic: "netzwerkdiagnose",
    difficulty: "schwer",
    question: "Welche Diagnose passt, wenn ein Host seine eigene IP anpingen kann, aber nicht das Gateway?",
    correctAnswer: "Ein Problem im lokalen Netz, bei Gateway-Konfiguration oder Verbindung ist wahrscheinlich.",
    wrongAnswers: ["Der externe Webserver ist sicher ausgefallen.","Die DNS-Zone der Ziel-Domain ist falsch delegiert.","Der Mailclient nutzt das falsche SMTP-Passwort."],
    explanation: "Ist das Gateway nicht erreichbar, liegt der Fehler oft im lokalen Netz oder in dessen Konfiguration."
  },
  {
    id: "netzwerke-083",
    category: "netzwerke",
    topic: "netzwerkdiagnose",
    difficulty: "schwer",
    question: "Wofür ist `nslookup` bei der Fehleranalyse besonders hilfreich?",
    correctAnswer: "Zum Prüfen, welche IP-Adresse ein DNS-Name liefert.",
    wrongAnswers: ["Zum Prüfen der Signalstärke eines WLAN-Kanals.","Zum Anzeigen der MAC-Tabelle eines Switches.","Zum Ermitteln offener TCP-Ports auf einem Server."],
    explanation: "nslookup zeigt, welche DNS-Antwort ein Name liefert."
  },
  {
    id: "netzwerke-084",
    category: "netzwerke",
    topic: "netzwerkdiagnose",
    difficulty: "schwer",
    question: "Was kann eine falsche Subnetzmaske verursachen?",
    correctAnswer: "Hosts beurteilen Ziele falsch als lokal oder remote.",
    wrongAnswers: ["Alle Pakete werden automatisch größer als die MTU.","Der DNS-Server löscht dadurch seinen Cache.","Der Switch lernt keine MAC-Adressen mehr."],
    explanation: "Eine falsche Maske verändert die Entscheidung, ob ein Ziel lokal oder über Gateway erreichbar ist."
  },
  {
    id: "netzwerke-085",
    category: "netzwerke",
    topic: "netzwerkdiagnose",
    difficulty: "schwer",
    question: "Warum ist ein systematisches Vorgehen bei Netzwerkfehlern wichtig?",
    correctAnswer: "Es verhindert planloses Ändern und grenzt Ursachen nachvollziehbar ein.",
    wrongAnswers: ["Es macht Logdateien und Messwerte überflüssig.","Es garantiert, dass die Ursache immer auf Layer 1 liegt.","Es verhindert, dass Firewalls Verbindungen blockieren."],
    explanation: "Systematische Diagnose reduziert Zufallsänderungen und grenzt Ursachen nachvollziehbar ein."
  },
  {
    id: "netzwerke-086",
    category: "netzwerke",
    topic: "netzwerkdiagnose",
    difficulty: "schwer",
    question: "Welche Information liefert ein erfolgreicher Ping auf `127.0.0.1`?",
    correctAnswer: "Der lokale TCP/IP-Stack antwortet grundsätzlich.",
    wrongAnswers: ["Der DNS-Server ist erreichbar.","Das Default Gateway leitet korrekt ins Internet.","Der physische Link zum Switch ist fehlerfrei."],
    explanation: "Ein Ping auf 127.0.0.1 prüft vor allem den lokalen TCP/IP-Stack."
  },
  {
    id: "netzwerke-087",
    category: "netzwerke",
    topic: "netzwerkdiagnose",
    difficulty: "schwer",
    question: "Was kann ein fehlender Link am Switch-Port bedeuten?",
    correctAnswer: "Kabel, Netzwerkkarte oder Port können fehlerhaft oder deaktiviert sein.",
    wrongAnswers: ["Der DNS-Server antwortet mit einem falschen A-Record.","Der Webserver nutzt den falschen HTTP-Port.","Die DHCP-Lease ist zu kurz konfiguriert."],
    explanation: "Fehlt der Link, ist zuerst ein physisches oder Port-Problem wahrscheinlich."
  },
  {
    id: "netzwerke-088",
    category: "netzwerke",
    topic: "netzwerkdiagnose",
    difficulty: "schwer",
    question: "Was zeigt eine sehr hohe Paketverlustrate bei Ping-Tests an?",
    correctAnswer: "Es kann ein Problem mit Verbindung, Auslastung oder Störungen vorliegen.",
    wrongAnswers: ["Die DNS-Zone enthält keinen MX-Record.","Der Client hat immer eine falsche Zeitzone.","Der Browser unterstützt kein HTTPS."],
    explanation: "Hoher Paketverlust deutet auf Störungen, Überlastung oder instabile Verbindungen hin."
  },
  {
    id: "netzwerke-089",
    category: "netzwerke",
    topic: "netzwerkdiagnose",
    difficulty: "schwer",
    question: "Warum sollte bei Erreichbarkeitsproblemen auch die Firewall geprüft werden?",
    correctAnswer: "Firewall-Regeln können erlaubte oder blockierte Verbindungen bestimmen.",
    wrongAnswers: ["Firewalls vergeben IP-Adressen an Clients.","Firewalls ersetzen Routingtabellen im Client.","Firewalls lösen Domainnamen rekursiv auf."],
    explanation: "Firewall-Regeln können technisch mögliche Verbindungen erlauben oder blockieren."
  },
  {
    id: "netzwerke-090",
    category: "netzwerke",
    topic: "netzwerkdiagnose",
    difficulty: "schwer",
    question: "Welche Reihenfolge ist bei einer strukturierten Netzwerkdiagnose sinnvoll?",
    correctAnswer: "Physische Verbindung, IP-Konfiguration, Gateway, DNS und Dienst prüfen.",
    wrongAnswers: ["DNS, Anwendung, Gateway, Kabel und IP-Konfiguration prüfen.","Zuerst alle Dienste neu installieren und dann den Link prüfen.","Nur den Browser testen, weil Netzwerkfehler immer dort entstehen."],
    explanation: "Die Reihenfolge arbeitet von grundlegender Verbindung bis zum konkreten Dienst."
  },
  {
    id: "netzwerke-091",
    category: "netzwerke",
    topic: "netzwerksicherheit",
    difficulty: "schwer",
    question: "Welche Aufgabe hat eine Firewall?",
    correctAnswer: "Sie filtert Netzwerkverkehr anhand definierter Regeln.",
    wrongAnswers: ["Sie verteilt IP-Konfigurationen wie ein DHCP-Server.","Sie löst Hostnamen wie ein DNS-Server auf.","Sie transportiert VLAN-Tags zwischen Switches."],
    explanation: "Eine Firewall erlaubt oder blockiert Verkehr anhand festgelegter Regeln."
  },
  {
    id: "netzwerke-092",
    category: "netzwerke",
    topic: "netzwerksicherheit",
    difficulty: "schwer",
    question: "Wozu dient ein VPN?",
    correctAnswer: "Es stellt eine geschützte Verbindung über ein unsicheres Netz bereit.",
    wrongAnswers: ["Es vergibt automatisch IP-Adressen im LAN.","Es löst DNS-Namen in IP-Adressen auf.","Es sortiert Netzwerkpakete nach Portnummern."],
    explanation: "Ein VPN schützt Kommunikation, indem es einen gesicherten Tunnel bereitstellt."
  },
  {
    id: "netzwerke-093",
    category: "netzwerke",
    topic: "netzwerksicherheit",
    difficulty: "schwer",
    question: "Warum sollten nur benötigte Ports erreichbar sein?",
    correctAnswer: "Jeder offene Dienst kann eine zusätzliche Angriffsfläche darstellen.",
    wrongAnswers: ["Offene Dienste reduzieren grundsätzlich den Administrationsaufwand.","Jeder offene Port verschlüsselt den Datenverkehr automatisch.","Offene Ports verhindern Man-in-the-Middle-Angriffe."],
    explanation: "Weniger erreichbare Dienste bedeuten weniger mögliche Angriffspunkte."
  },
  {
    id: "netzwerke-094",
    category: "netzwerke",
    topic: "netzwerksicherheit",
    difficulty: "schwer",
    question: "Welche Maßnahme schützt ein WLAN besser als WEP?",
    correctAnswer: "WPA2 oder WPA3 mit starkem Passwort",
    wrongAnswers: ["Offenes WLAN ohne Passwort","WEP mit kurzem Schlüssel","MAC-Filter als alleinige Schutzmaßnahme"],
    explanation: "WPA2 oder WPA3 mit starkem Schlüssel schützt deutlich besser als WEP."
  },
  {
    id: "netzwerke-095",
    category: "netzwerke",
    topic: "netzwerksicherheit",
    difficulty: "schwer",
    question: "Was beschreibt Netzwerksegmentierung?",
    correctAnswer: "Netzbereiche werden logisch oder physisch voneinander getrennt.",
    wrongAnswers: ["Alle Clients werden bewusst in dieselbe Broadcast-Domain gelegt.","DNS-Einträge werden nach Sicherheitsstufe sortiert.","Ports werden auf einem Server alphabetisch nummeriert."],
    explanation: "Segmentierung trennt Netzbereiche und kann Zugriffe gezielt begrenzen."
  },
  {
    id: "netzwerke-096",
    category: "netzwerke",
    topic: "netzwerksicherheit",
    difficulty: "schwer",
    question: "Warum ist das Prinzip der minimalen Rechte auch im Netzwerk wichtig?",
    correctAnswer: "Benutzer und Systeme erhalten nur die Zugriffe, die sie wirklich benötigen.",
    wrongAnswers: ["Alle Benutzer erhalten dauerhaft Administratorrechte.","Jeder Client darf alle VLANs direkt erreichen.","Firewall-Regeln werden pauschal auf Allow gesetzt."],
    explanation: "Least Privilege begrenzt Zugriffe auf das tatsächlich Notwendige."
  },
  {
    id: "netzwerke-097",
    category: "netzwerke",
    topic: "netzwerksicherheit",
    difficulty: "schwer",
    question: "Was ist ein Man-in-the-Middle-Angriff?",
    correctAnswer: "Ein Angreifer schaltet sich zwischen Kommunikationspartner und kann Daten mitlesen oder verändern.",
    wrongAnswers: ["Ein Angreifer sendet nur ICMP-Echos an den eigenen Rechner.","Ein Switch speichert Frames dauerhaft in seiner MAC-Tabelle.","Ein DHCP-Server verlängert eine Lease automatisch."],
    explanation: "Bei einem Man-in-the-Middle sitzt der Angreifer zwischen den Kommunikationspartnern."
  },
  {
    id: "netzwerke-098",
    category: "netzwerke",
    topic: "netzwerksicherheit",
    difficulty: "schwer",
    question: "Warum sollte Netzwerkadministration über unsichere Protokolle vermieden werden?",
    correctAnswer: "Zugangsdaten oder Befehle können unverschlüsselt übertragen werden.",
    wrongAnswers: ["Unsichere Protokolle erzwingen starke Ende-zu-Ende-Verschlüsselung.","Unsichere Protokolle verhindern grundsätzlich Brute-Force-Angriffe.","Unsichere Protokolle prüfen immer Serverzertifikate."],
    explanation: "Unverschlüsselte Administration kann Zugangsdaten und Befehle offenlegen."
  },
  {
    id: "netzwerke-099",
    category: "netzwerke",
    topic: "netzwerksicherheit",
    difficulty: "schwer",
    question: "Wozu dient ein IDS oder IPS grundsätzlich?",
    correctAnswer: "Es erkennt oder blockiert verdächtige Aktivitäten im Netzwerk.",
    wrongAnswers: ["Es vergibt IP-Adressen per DHCP.","Es synchronisiert Clients per NTP.","Es übersetzt Domainnamen rekursiv."],
    explanation: "IDS erkennt verdächtigen Verkehr, IPS kann ihn zusätzlich blockieren."
  },
  {
    id: "netzwerke-100",
    category: "netzwerke",
    topic: "netzwerksicherheit",
    difficulty: "schwer",
    question: "Warum sind Protokollierung und Monitoring für Netzwerksicherheit wichtig?",
    correctAnswer: "Auffälligkeiten und Angriffe können schneller erkannt und nachvollzogen werden.",
    wrongAnswers: ["Monitoring ersetzt alle Sicherheitsupdates.","Logs schließen offene Ports automatisch.","Protokollierung verhindert jede Fehlkonfiguration."],
    explanation: "Logs und Monitoring helfen, Angriffe und Auffälligkeiten früh zu erkennen."
  }
];
