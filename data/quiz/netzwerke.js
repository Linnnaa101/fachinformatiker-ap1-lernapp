// Netzwerke: 100 hochwertige Poolfragen für das Quiz.
window.AP1_QUIZ_NETZWERKE = [
  {
    id: "netzwerke-001",
    category: "netzwerke",
    topic: "osi-tcp-ip",
    difficulty: "leicht",
    question: "Wozu dient das OSI-Modell in der Netzwerktechnik?",
    correctAnswer: "Es beschreibt Netzwerkkommunikation in mehreren logischen Schichten.",
    wrongAnswers: ["Es ersetzt jede IP-Adresse durch einen Computernamen.", "Es beschreibt nicht die konkrete Adressierung einzelner Hosts.", "Es ist kein Verzeichnisdienst für Benutzer und Gruppen."],
    explanation: "Das Schichtenmodell ordnet diese Aufgabe einer konkreten Kommunikationsschicht zu."
  },
  {
    id: "netzwerke-002",
    category: "netzwerke",
    topic: "osi-tcp-ip",
    difficulty: "leicht",
    question: "Welche OSI-Schicht ist hauptsächlich für physische Signale, Kabel und Stecker zuständig?",
    correctAnswer: "Schicht 1: Bitübertragungsschicht",
    wrongAnswers: ["Schicht 3: Vermittlungsschicht", "Schicht 5: Sitzungsschicht", "Schicht 7: Anwendungsschicht"],
    explanation: "Das Schichtenmodell ordnet diese Aufgabe einer konkreten Kommunikationsschicht zu."
  },
  {
    id: "netzwerke-003",
    category: "netzwerke",
    topic: "osi-tcp-ip",
    difficulty: "leicht",
    question: "Welche OSI-Schicht arbeitet typischerweise mit MAC-Adressen?",
    correctAnswer: "Schicht 2: Sicherungsschicht",
    wrongAnswers: ["Schicht 1: Bitübertragungsschicht", "Schicht 4: Transportschicht", "Schicht 7: Anwendungsschicht"],
    explanation: "Das Schichtenmodell ordnet diese Aufgabe einer konkreten Kommunikationsschicht zu."
  },
  {
    id: "netzwerke-004",
    category: "netzwerke",
    topic: "osi-tcp-ip",
    difficulty: "leicht",
    question: "Welche OSI-Schicht ist für IP-Adressierung und Routing zuständig?",
    correctAnswer: "Schicht 3: Vermittlungsschicht",
    wrongAnswers: ["Schicht 2: Sicherungsschicht", "Schicht 6: Darstellungsschicht", "Schicht 7: Anwendungsschicht"],
    explanation: "Das Schichtenmodell ordnet diese Aufgabe einer konkreten Kommunikationsschicht zu."
  },
  {
    id: "netzwerke-005",
    category: "netzwerke",
    topic: "osi-tcp-ip",
    difficulty: "leicht",
    question: "Welche Aufgabe hat die Transportschicht im OSI-Modell?",
    correctAnswer: "Sie stellt Ende-zu-Ende-Kommunikation zwischen Anwendungen bereit.",
    wrongAnswers: ["Sie übernimmt nicht die Bitübertragung auf dem Medium.", "Sie ist nicht für Hardwareadressen auf Layer 2 zuständig.", "Sie verwaltet keine Namenszonen der Anwendungsschicht."],
    explanation: "Das Schichtenmodell ordnet diese Aufgabe einer konkreten Kommunikationsschicht zu."
  },
  {
    id: "netzwerke-006",
    category: "netzwerke",
    topic: "osi-tcp-ip",
    difficulty: "leicht",
    question: "Welches Protokoll arbeitet verbindungsorientiert und bestätigt Datenübertragung?",
    correctAnswer: "TCP",
    wrongAnswers: ["UDP", "ARP", "ICMP"],
    explanation: "Das Schichtenmodell ordnet diese Aufgabe einer konkreten Kommunikationsschicht zu."
  },
  {
    id: "netzwerke-007",
    category: "netzwerke",
    topic: "osi-tcp-ip",
    difficulty: "leicht",
    question: "Welches Protokoll arbeitet verbindungslos und hat weniger Verwaltungsaufwand als TCP?",
    correctAnswer: "UDP",
    wrongAnswers: ["TCP", "HTTPS", "SSH"],
    explanation: "Das Schichtenmodell ordnet diese Aufgabe einer konkreten Kommunikationsschicht zu."
  },
  {
    id: "netzwerke-008",
    category: "netzwerke",
    topic: "osi-tcp-ip",
    difficulty: "leicht",
    question: "Wofür wird eine IP-Adresse hauptsächlich verwendet?",
    correctAnswer: "Zur logischen Adressierung eines Geräts in einem IP-Netz.",
    wrongAnswers: ["Zur physischen Kennzeichnung einer Patchleitung im Schrank.", "Zur lokalen Adressierung eines Ethernet-Frames.", "Zur Auswahl eines TCP- oder UDP-Dienstes auf einem Host."],
    explanation: "Das Schichtenmodell ordnet diese Aufgabe einer konkreten Kommunikationsschicht zu."
  },
  {
    id: "netzwerke-009",
    category: "netzwerke",
    topic: "osi-tcp-ip",
    difficulty: "leicht",
    question: "Wofür wird eine MAC-Adresse hauptsächlich verwendet?",
    correctAnswer: "Zur lokalen Identifikation einer Netzwerkschnittstelle im Layer-2-Netz.",
    wrongAnswers: ["Zur Verschlüsselung von HTTPS-Verbindungen.", "Zur Namensauflösung im Internet.", "Zur Vergabe von DHCP-Leases."],
    explanation: "Das Schichtenmodell ordnet diese Aufgabe einer konkreten Kommunikationsschicht zu."
  },
  {
    id: "netzwerke-010",
    category: "netzwerke",
    topic: "osi-tcp-ip",
    difficulty: "leicht",
    question: "Was beschreibt Kapselung bei Netzwerkkommunikation?",
    correctAnswer: "Daten werden beim Senden schichtweise um Steuerinformationen ergänzt.",
    wrongAnswers: ["Daten werden vor dem Senden in kleinere IP-Netze aufgeteilt.", "Jede Schicht entfernt die Header der darunterliegenden Schicht schon beim Senden.", "Nur Nutzdaten werden ohne Protokoll-Header übertragen."],
    explanation: "Das Schichtenmodell ordnet diese Aufgabe einer konkreten Kommunikationsschicht zu."
  },
  {
    id: "netzwerke-011",
    category: "netzwerke",
    topic: "osi-tcp-ip",
    difficulty: "leicht",
    question: "Welcher Begriff passt zu einer Dateneinheit auf der IP-Schicht?",
    correctAnswer: "Paket",
    wrongAnswers: ["Frame", "Bit", "Segment"],
    explanation: "Das Schichtenmodell ordnet diese Aufgabe einer konkreten Kommunikationsschicht zu."
  },
  {
    id: "netzwerke-012",
    category: "netzwerke",
    topic: "osi-tcp-ip",
    difficulty: "leicht",
    question: "Welcher Begriff passt zu einer Dateneinheit auf der Sicherungsschicht?",
    correctAnswer: "Frame",
    wrongAnswers: ["Segment", "Paket", "Bit"],
    explanation: "Das Schichtenmodell ordnet diese Aufgabe einer konkreten Kommunikationsschicht zu."
  },
  {
    id: "netzwerke-013",
    category: "netzwerke",
    topic: "osi-tcp-ip",
    difficulty: "leicht",
    question: "Welche Protokolle gehören typischerweise zur Anwendungsschicht?",
    correctAnswer: "HTTP, DNS und SMTP",
    wrongAnswers: ["IP, ARP und ICMP", "Ethernet, WLAN und PPP", "TCP, UDP und IP"],
    explanation: "Das Schichtenmodell ordnet diese Aufgabe einer konkreten Kommunikationsschicht zu."
  },
  {
    id: "netzwerke-014",
    category: "netzwerke",
    topic: "osi-tcp-ip",
    difficulty: "leicht",
    question: "Worin unterscheiden sich TCP/IP-Modell und OSI-Modell hauptsächlich?",
    correctAnswer: "Das TCP/IP-Modell fasst einige OSI-Schichten zusammen.",
    wrongAnswers: ["Das TCP/IP-Modell enthält keine Netzwerkschicht.", "Das OSI-Modell hat weniger Schichten als das TCP/IP-Modell.", "Das TCP/IP-Modell beschreibt ausschließlich Hardwarestecker."],
    explanation: "Das Schichtenmodell ordnet diese Aufgabe einer konkreten Kommunikationsschicht zu."
  },
  {
    id: "netzwerke-015",
    category: "netzwerke",
    topic: "osi-tcp-ip",
    difficulty: "leicht",
    question: "Warum sind Schichtenmodelle bei der Fehlersuche hilfreich?",
    correctAnswer: "Fehler können systematisch einer Kommunikationsschicht zugeordnet werden.",
    wrongAnswers: ["Sie beheben automatisch fehlerhafte Gateway-Einstellungen.", "Sie messen die Signalstärke eines WLANs direkt.", "Sie vergeben selbstständig neue IP-Adressen an Clients."],
    explanation: "Das Schichtenmodell ordnet diese Aufgabe einer konkreten Kommunikationsschicht zu."
  },
  {
    id: "netzwerke-016",
    category: "netzwerke",
    topic: "ipv4-subnetting",
    difficulty: "leicht",
    question: "Wie viele Bit hat eine IPv4-Adresse?",
    correctAnswer: "32 Bit",
    wrongAnswers: ["16 Bit", "64 Bit", "128 Bit"],
    explanation: "Beim IPv4-Subnetting bestimmen Adresse und Maske den Netz- und Hostanteil."
  },
  {
    id: "netzwerke-017",
    category: "netzwerke",
    topic: "ipv4-subnetting",
    difficulty: "leicht",
    question: "Welche Schreibweise ist eine gültige IPv4-Adresse?",
    correctAnswer: "192.168.1.10",
    wrongAnswers: ["192.168.1.300", "192.168.1", "192.168.1.10.5"],
    explanation: "Beim IPv4-Subnetting bestimmen Adresse und Maske den Netz- und Hostanteil."
  },
  {
    id: "netzwerke-018",
    category: "netzwerke",
    topic: "ipv4-subnetting",
    difficulty: "leicht",
    question: "Wozu dient eine Subnetzmaske?",
    correctAnswer: "Sie trennt Netzanteil und Hostanteil einer IP-Adresse.",
    wrongAnswers: ["Sie legt fest, welcher Teil der Adresse das Standardgateway ist.", "Sie ordnet Ports den passenden Anwendungen zu.", "Sie kennzeichnet, welcher Host den DHCP-Dienst bereitstellt."],
    explanation: "Beim IPv4-Subnetting bestimmen Adresse und Maske den Netz- und Hostanteil."
  },
  {
    id: "netzwerke-019",
    category: "netzwerke",
    topic: "ipv4-subnetting",
    difficulty: "leicht",
    question: "Welche Subnetzmaske entspricht der CIDR-Schreibweise `/24`?",
    correctAnswer: "255.255.255.0",
    wrongAnswers: ["255.255.0.0", "255.255.255.128", "255.0.0.0"],
    explanation: "Beim IPv4-Subnetting bestimmen Adresse und Maske den Netz- und Hostanteil."
  },
  {
    id: "netzwerke-020",
    category: "netzwerke",
    topic: "ipv4-subnetting",
    difficulty: "leicht",
    question: "Welche Adresse liegt im privaten IPv4-Bereich?",
    correctAnswer: "192.168.1.20",
    wrongAnswers: ["8.8.8.8", "1.1.1.1", "203.0.113.5"],
    explanation: "Beim IPv4-Subnetting bestimmen Adresse und Maske den Netz- und Hostanteil."
  },
  {
    id: "netzwerke-021",
    category: "netzwerke",
    topic: "ipv4-subnetting",
    difficulty: "leicht",
    question: "Welcher private IPv4-Bereich beginnt mit 10?",
    correctAnswer: "10.0.0.0/8",
    wrongAnswers: ["10.0.0.0/32", "10.255.255.255/24", "10.10.10.10/16 als einziger Bereich"],
    explanation: "Beim IPv4-Subnetting bestimmen Adresse und Maske den Netz- und Hostanteil."
  },
  {
    id: "netzwerke-022",
    category: "netzwerke",
    topic: "ipv4-subnetting",
    difficulty: "leicht",
    question: "Wozu dient das Default Gateway in einem IP-Netz?",
    correctAnswer: "Es leitet Pakete in andere Netzwerke weiter.",
    wrongAnswers: ["Es leitet nur Pakete innerhalb desselben Layer-2-Segments weiter.", "Es übersetzt Hostnamen in IP-Adressen.", "Es teilt Clients per Lease IP-Konfigurationen zu."],
    explanation: "Beim IPv4-Subnetting bestimmen Adresse und Maske den Netz- und Hostanteil."
  },
  {
    id: "netzwerke-023",
    category: "netzwerke",
    topic: "ipv4-subnetting",
    difficulty: "leicht",
    question: "Welche Adresse bezeichnet in einem Subnetz typischerweise alle Hosts dieses Subnetzes?",
    correctAnswer: "Broadcast-Adresse",
    wrongAnswers: ["Gateway-Adresse", "Loopback-Adresse", "MAC-Adresse"],
    explanation: "Beim IPv4-Subnetting bestimmen Adresse und Maske den Netz- und Hostanteil."
  },
  {
    id: "netzwerke-024",
    category: "netzwerke",
    topic: "ipv4-subnetting",
    difficulty: "leicht",
    question: "Welche IPv4-Adresse wird häufig als lokale Loopback-Adresse verwendet?",
    correctAnswer: "127.0.0.1",
    wrongAnswers: ["192.168.0.1", "255.255.255.255", "0.0.0.0"],
    explanation: "Beim IPv4-Subnetting bestimmen Adresse und Maske den Netz- und Hostanteil."
  },
  {
    id: "netzwerke-025",
    category: "netzwerke",
    topic: "ipv4-subnetting",
    difficulty: "leicht",
    question: "Was bedeutet CIDR bei IPv4-Adressen?",
    correctAnswer: "Die Netzmaske wird mit einer Präfixlänge wie `/24` angegeben.",
    wrongAnswers: ["Die Hostanzahl wird als Portnummer hinter die Adresse geschrieben.", "Die Netzmaske wird als separate Dezimalzahl ohne Präfix angegeben.", "Der Gateway-Wert wird direkt in der IP-Adresse kodiert."],
    explanation: "Beim IPv4-Subnetting bestimmen Adresse und Maske den Netz- und Hostanteil."
  },
  {
    id: "netzwerke-026",
    category: "netzwerke",
    topic: "ipv4-subnetting",
    difficulty: "leicht",
    question: "Welche Subnetzmaske gehört zu `/25`?",
    correctAnswer: "255.255.255.128",
    wrongAnswers: ["255.255.255.0", "255.255.255.192", "255.255.0.0"],
    explanation: "Beim IPv4-Subnetting bestimmen Adresse und Maske den Netz- und Hostanteil."
  },
  {
    id: "netzwerke-027",
    category: "netzwerke",
    topic: "ipv4-subnetting",
    difficulty: "leicht",
    question: "Welche Subnetzmaske gehört zu `/26`?",
    correctAnswer: "255.255.255.192",
    wrongAnswers: ["255.255.255.128", "255.255.255.0", "255.255.0.0"],
    explanation: "Beim IPv4-Subnetting bestimmen Adresse und Maske den Netz- und Hostanteil."
  },
  {
    id: "netzwerke-028",
    category: "netzwerke",
    topic: "ipv4-subnetting",
    difficulty: "leicht",
    question: "Welche Angabe beschreibt ein Netzwerk mit 24 Bit Netzanteil?",
    correctAnswer: "192.168.1.0/24",
    wrongAnswers: ["192.168.1.0:24", "192.168.1.0#24", "192.168.1.0-24"],
    explanation: "Beim IPv4-Subnetting bestimmen Adresse und Maske den Netz- und Hostanteil."
  },
  {
    id: "netzwerke-029",
    category: "netzwerke",
    topic: "ipv4-subnetting",
    difficulty: "leicht",
    question: "Welche IP-Adresse gehört zum gleichen `/24`-Netz wie `192.168.10.5/24`?",
    correctAnswer: "192.168.10.200",
    wrongAnswers: ["192.168.11.5", "192.169.10.5", "10.168.10.5"],
    explanation: "Beim IPv4-Subnetting bestimmen Adresse und Maske den Netz- und Hostanteil."
  },
  {
    id: "netzwerke-030",
    category: "netzwerke",
    topic: "ipv4-subnetting",
    difficulty: "leicht",
    question: "Warum werden Subnetze eingesetzt?",
    correctAnswer: "Sie strukturieren Netzwerke und begrenzen Broadcast-Bereiche.",
    wrongAnswers: ["Sie trennen große Broadcast-Domains in kleinere Bereiche.", "Sie erhöhen die Anzahl der möglichen Hostadressen in einem einzelnen /24-Netz.", "Sie verbinden automatisch unterschiedliche VLANs ohne Routing."],
    explanation: "Beim IPv4-Subnetting bestimmen Adresse und Maske den Netz- und Hostanteil."
  },
  {
    id: "netzwerke-031",
    category: "netzwerke",
    topic: "ports-protokolle",
    difficulty: "leicht",
    question: "Welcher Port wird standardmäßig für HTTP verwendet?",
    correctAnswer: "80",
    wrongAnswers: ["443", "22", "25"],
    explanation: "Ports kennzeichnen den angesprochenen TCP- oder UDP-Dienst auf einem Host."
  },
  {
    id: "netzwerke-032",
    category: "netzwerke",
    topic: "ports-protokolle",
    difficulty: "leicht",
    question: "Welcher Port wird standardmäßig für HTTPS verwendet?",
    correctAnswer: "443",
    wrongAnswers: ["80", "53", "110"],
    explanation: "Ports kennzeichnen den angesprochenen TCP- oder UDP-Dienst auf einem Host."
  },
  {
    id: "netzwerke-033",
    category: "netzwerke",
    topic: "ports-protokolle",
    difficulty: "leicht",
    question: "Welcher Port wird häufig für SSH verwendet?",
    correctAnswer: "22",
    wrongAnswers: ["21", "25", "143"],
    explanation: "Ports kennzeichnen den angesprochenen TCP- oder UDP-Dienst auf einem Host."
  },
  {
    id: "netzwerke-034",
    category: "netzwerke",
    topic: "ports-protokolle",
    difficulty: "leicht",
    question: "Welcher Port wird standardmäßig für DNS-Abfragen verwendet?",
    correctAnswer: "53",
    wrongAnswers: ["67", "80", "443"],
    explanation: "Ports kennzeichnen den angesprochenen TCP- oder UDP-Dienst auf einem Host."
  },
  {
    id: "netzwerke-035",
    category: "netzwerke",
    topic: "ports-protokolle",
    difficulty: "leicht",
    question: "Welche Aufgabe haben Ports in TCP- oder UDP-Kommunikation?",
    correctAnswer: "Sie ordnen Netzwerkdaten einer Anwendung oder einem Dienst zu.",
    wrongAnswers: ["Sie identifizieren Prozesse zusätzlich zur IP-Adresse eines Hosts.", "Sie kennzeichnen Quell- und Zielanwendung in TCP/UDP-Headern.", "Sie wählen den nächsten Router für ein IP-Paket aus."],
    explanation: "Ports kennzeichnen den angesprochenen TCP- oder UDP-Dienst auf einem Host."
  },
  {
    id: "netzwerke-036",
    category: "netzwerke",
    topic: "ports-protokolle",
    difficulty: "mittel",
    question: "Welches Protokoll wird typischerweise für den Versand von E-Mails zwischen Mailservern genutzt?",
    correctAnswer: "SMTP",
    wrongAnswers: ["IMAP", "POP3", "DHCP"],
    explanation: "Standardports und Protokolle machen Dienste bei Konfiguration und Fehlersuche eindeutig."
  },
  {
    id: "netzwerke-037",
    category: "netzwerke",
    topic: "ports-protokolle",
    difficulty: "mittel",
    question: "Welches Protokoll wird typischerweise verwendet, um E-Mails auf dem Server zu verwalten und synchron zu halten?",
    correctAnswer: "IMAP",
    wrongAnswers: ["SMTP", "FTP", "NTP"],
    explanation: "Standardports und Protokolle machen Dienste bei Konfiguration und Fehlersuche eindeutig."
  },
  {
    id: "netzwerke-038",
    category: "netzwerke",
    topic: "ports-protokolle",
    difficulty: "mittel",
    question: "Welcher Port ist standardmäßig mit SMTP verbunden?",
    correctAnswer: "25",
    wrongAnswers: ["110", "143", "53"],
    explanation: "Standardports und Protokolle machen Dienste bei Konfiguration und Fehlersuche eindeutig."
  },
  {
    id: "netzwerke-039",
    category: "netzwerke",
    topic: "ports-protokolle",
    difficulty: "mittel",
    question: "Welcher Port ist standardmäßig mit IMAP verbunden?",
    correctAnswer: "143",
    wrongAnswers: ["110", "25", "123"],
    explanation: "Standardports und Protokolle machen Dienste bei Konfiguration und Fehlersuche eindeutig."
  },
  {
    id: "netzwerke-040",
    category: "netzwerke",
    topic: "ports-protokolle",
    difficulty: "mittel",
    question: "Welcher Port ist standardmäßig mit POP3 verbunden?",
    correctAnswer: "110",
    wrongAnswers: ["143", "25", "22"],
    explanation: "Standardports und Protokolle machen Dienste bei Konfiguration und Fehlersuche eindeutig."
  },
  {
    id: "netzwerke-041",
    category: "netzwerke",
    topic: "ports-protokolle",
    difficulty: "mittel",
    question: "Welche Ports gehören klassisch zu FTP?",
    correctAnswer: "20 und 21",
    wrongAnswers: ["22 und 23", "80 und 443", "67 und 68"],
    explanation: "Standardports und Protokolle machen Dienste bei Konfiguration und Fehlersuche eindeutig."
  },
  {
    id: "netzwerke-042",
    category: "netzwerke",
    topic: "ports-protokolle",
    difficulty: "mittel",
    question: "Welches Protokoll wird häufig zur Zeitsynchronisation in Netzwerken verwendet?",
    correctAnswer: "NTP",
    wrongAnswers: ["SMTP", "ARP", "POP3"],
    explanation: "Standardports und Protokolle machen Dienste bei Konfiguration und Fehlersuche eindeutig."
  },
  {
    id: "netzwerke-043",
    category: "netzwerke",
    topic: "ports-protokolle",
    difficulty: "mittel",
    question: "Welcher Port wird standardmäßig für NTP verwendet?",
    correctAnswer: "123",
    wrongAnswers: ["53", "143", "443"],
    explanation: "Standardports und Protokolle machen Dienste bei Konfiguration und Fehlersuche eindeutig."
  },
  {
    id: "netzwerke-044",
    category: "netzwerke",
    topic: "ports-protokolle",
    difficulty: "mittel",
    question: "Warum sollte Telnet für administrative Zugriffe vermieden werden?",
    correctAnswer: "Telnet überträgt Daten unverschlüsselt.",
    wrongAnswers: ["Telnet verwendet standardmäßig starke Ende-zu-Ende-Verschlüsselung.", "Telnet nutzt Zertifikate wie HTTPS für die Serverprüfung.", "Telnet trennt Verwaltungsverkehr automatisch in ein eigenes VLAN."],
    explanation: "Standardports und Protokolle machen Dienste bei Konfiguration und Fehlersuche eindeutig."
  },
  {
    id: "netzwerke-045",
    category: "netzwerke",
    topic: "ports-protokolle",
    difficulty: "mittel",
    question: "Warum ist die Kenntnis von Standardports bei der Fehlersuche hilfreich?",
    correctAnswer: "Dienste und Firewall-Regeln können gezielter geprüft werden.",
    wrongAnswers: ["Standardports ändern sich automatisch je nach Subnetzmaske.", "Standardports ersetzen die Prüfung von IP-Adresse und Gateway vollständig.", "Standardports garantieren, dass ein Dienst immer erreichbar ist."],
    explanation: "Standardports und Protokolle machen Dienste bei Konfiguration und Fehlersuche eindeutig."
  },
  {
    id: "netzwerke-046",
    category: "netzwerke",
    topic: "dns-dhcp",
    difficulty: "mittel",
    question: "Welche Aufgabe hat DNS?",
    correctAnswer: "DNS löst Namen wie `example.org` in IP-Adressen auf.",
    wrongAnswers: ["DNS verteilt IP-Leases und Standardgateways an Clients.", "DNS leitet Frames anhand von MAC-Adressen weiter.", "DNS verschlüsselt TCP-Verbindungen zwischen Browser und Webserver."],
    explanation: "DNS liefert Namensauflösung, DHCP verteilt IP-Konfigurationen an Clients."
  },
  {
    id: "netzwerke-047",
    category: "netzwerke",
    topic: "dns-dhcp",
    difficulty: "mittel",
    question: "Welcher DNS-Record ordnet einem Namen eine IPv4-Adresse zu?",
    correctAnswer: "A-Record",
    wrongAnswers: ["MX-Record", "TXT-Record", "CNAME-Record"],
    explanation: "DNS liefert Namensauflösung, DHCP verteilt IP-Konfigurationen an Clients."
  },
  {
    id: "netzwerke-048",
    category: "netzwerke",
    topic: "dns-dhcp",
    difficulty: "mittel",
    question: "Welcher DNS-Record ordnet einem Namen eine IPv6-Adresse zu?",
    correctAnswer: "AAAA-Record",
    wrongAnswers: ["A-Record", "MX-Record", "PTR-Record"],
    explanation: "DNS liefert Namensauflösung, DHCP verteilt IP-Konfigurationen an Clients."
  },
  {
    id: "netzwerke-049",
    category: "netzwerke",
    topic: "dns-dhcp",
    difficulty: "mittel",
    question: "Welcher DNS-Record ist für Mailserver einer Domain zuständig?",
    correctAnswer: "MX-Record",
    wrongAnswers: ["A-Record", "AAAA-Record", "SRV-Record"],
    explanation: "DNS liefert Namensauflösung, DHCP verteilt IP-Konfigurationen an Clients."
  },
  {
    id: "netzwerke-050",
    category: "netzwerke",
    topic: "dns-dhcp",
    difficulty: "mittel",
    question: "Welche Aufgabe hat DHCP?",
    correctAnswer: "DHCP vergibt Netzwerkkonfigurationen automatisch an Clients.",
    wrongAnswers: ["DHCP löst Domainnamen in öffentliche IP-Adressen auf.", "DHCP filtert eingehenden Verkehr anhand von Firewall-Regeln.", "DHCP transportiert mehrere VLANs über einen Trunk-Port."],
    explanation: "DNS liefert Namensauflösung, DHCP verteilt IP-Konfigurationen an Clients."
  },
  {
    id: "netzwerke-051",
    category: "netzwerke",
    topic: "dns-dhcp",
    difficulty: "mittel",
    question: "Welche Information kann ein Client typischerweise per DHCP erhalten?",
    correctAnswer: "IP-Adresse, Subnetzmaske, Gateway und DNS-Server",
    wrongAnswers: ["IP-Adresse und lokaler Druckertreiber", "IP-Adresse, Lease-Zeit und Default Gateway", "DNS-Server, Subnetzmaske und Mailbox-Passwort"],
    explanation: "DNS liefert Namensauflösung, DHCP verteilt IP-Konfigurationen an Clients."
  },
  {
    id: "netzwerke-052",
    category: "netzwerke",
    topic: "dns-dhcp",
    difficulty: "mittel",
    question: "Was beschreibt eine DHCP-Lease?",
    correctAnswer: "Die zeitlich begrenzte Zuweisung einer IP-Konfiguration.",
    wrongAnswers: ["Eine permanente Verschlüsselung des WLANs.", "Ein DNS-Eintrag für Mailserver.", "Ein Kabeltest zwischen zwei Switches."],
    explanation: "DNS liefert Namensauflösung, DHCP verteilt IP-Konfigurationen an Clients."
  },
  {
    id: "netzwerke-053",
    category: "netzwerke",
    topic: "dns-dhcp",
    difficulty: "mittel",
    question: "Was passiert häufig, wenn kein DHCP-Server erreichbar ist?",
    correctAnswer: "Der Client erhält keine passende automatische IP-Konfiguration.",
    wrongAnswers: ["Der Client nutzt möglicherweise eine APIPA-/Link-Local-Adresse.", "Der Client bekommt weiterhin Gateway und DNS per Lease.", "Der Client erhält automatisch die korrekte Adresse aus dem Zielnetz."],
    explanation: "DNS liefert Namensauflösung, DHCP verteilt IP-Konfigurationen an Clients."
  },
  {
    id: "netzwerke-054",
    category: "netzwerke",
    topic: "dns-dhcp",
    difficulty: "mittel",
    question: "Welches Tool wird häufig zur Prüfung von DNS-Auflösungen genutzt?",
    correctAnswer: "nslookup",
    wrongAnswers: ["ping", "ipconfig", "tracert"],
    explanation: "DNS liefert Namensauflösung, DHCP verteilt IP-Konfigurationen an Clients."
  },
  {
    id: "netzwerke-055",
    category: "netzwerke",
    topic: "dns-dhcp",
    difficulty: "mittel",
    question: "Warum können falsche DNS-Einstellungen dazu führen, dass Webseiten nicht über Namen erreichbar sind?",
    correctAnswer: "Der Client kann den Namen nicht korrekt in eine IP-Adresse auflösen.",
    wrongAnswers: ["Der Browser kann die Ziel-IP nicht aus dem Namen ermitteln.", "Das Standardgateway leitet dadurch keine lokalen Frames weiter.", "Der DNS-Client erhält dadurch automatisch ein neues Lease."],
    explanation: "DNS liefert Namensauflösung, DHCP verteilt IP-Konfigurationen an Clients."
  },
  {
    id: "netzwerke-056",
    category: "netzwerke",
    topic: "switch-router-vlan",
    difficulty: "mittel",
    question: "Welche Hauptaufgabe hat ein Switch in einem lokalen Netzwerk?",
    correctAnswer: "Er verbindet Geräte auf Layer 2 und leitet Frames anhand von MAC-Adressen weiter.",
    wrongAnswers: ["Er routet Pakete zwischen verschiedenen IP-Netzen.", "Er arbeitet primär mit TCP-Ports statt MAC-Adressen.", "Er übersetzt Domainnamen für angeschlossene Clients."],
    explanation: "Switches, Router und VLANs trennen Zuständigkeiten zwischen Layer 2 und Layer 3."
  },
  {
    id: "netzwerke-057",
    category: "netzwerke",
    topic: "switch-router-vlan",
    difficulty: "mittel",
    question: "Welche Hauptaufgabe hat ein Router?",
    correctAnswer: "Er verbindet verschiedene IP-Netzwerke und leitet Pakete weiter.",
    wrongAnswers: ["Er leitet Frames nur innerhalb einer Broadcast-Domain weiter.", "Er arbeitet ausschließlich mit MAC-Adressen auf Layer 2.", "Er stellt Namensauflösung für lokale Hosts bereit."],
    explanation: "Switches, Router und VLANs trennen Zuständigkeiten zwischen Layer 2 und Layer 3."
  },
  {
    id: "netzwerke-058",
    category: "netzwerke",
    topic: "switch-router-vlan",
    difficulty: "mittel",
    question: "Welche Information lernt ein Switch für seine Weiterleitungstabelle?",
    correctAnswer: "MAC-Adressen an bestimmten Ports",
    wrongAnswers: ["IP-Adressen an bestimmten Ports", "DNS-Zonen ohne Netzbezug", "VLAN-Namen im Browser"],
    explanation: "Switches, Router und VLANs trennen Zuständigkeiten zwischen Layer 2 und Layer 3."
  },
  {
    id: "netzwerke-059",
    category: "netzwerke",
    topic: "switch-router-vlan",
    difficulty: "mittel",
    question: "Was ist eine Broadcast-Domain?",
    correctAnswer: "Ein Netzbereich, in dem Broadcasts alle zugehörigen Geräte erreichen können.",
    wrongAnswers: ["Ein einzelnes Layer-2-Netz ohne Broadcast-Weiterleitung durch Router.", "Ein Bereich, in dem nur Unicast-Frames zugestellt werden.", "Ein Routingbereich, der Broadcasts grundsätzlich blockiert."],
    explanation: "Switches, Router und VLANs trennen Zuständigkeiten zwischen Layer 2 und Layer 3."
  },
  {
    id: "netzwerke-060",
    category: "netzwerke",
    topic: "switch-router-vlan",
    difficulty: "mittel",
    question: "Wozu dient ein VLAN?",
    correctAnswer: "Es trennt ein physisches Switch-Netz logisch in mehrere Netze.",
    wrongAnswers: ["Es vergibt automatisch IP-Adressen an Clients.", "Es verschlüsselt Funkverbindungen im WLAN.", "Es übersetzt Domainnamen in IP-Adressen."],
    explanation: "Switches, Router und VLANs trennen Zuständigkeiten zwischen Layer 2 und Layer 3."
  },
  {
    id: "netzwerke-061",
    category: "netzwerke",
    topic: "switch-router-vlan",
    difficulty: "mittel",
    question: "Was ist ein Access-Port bei VLANs?",
    correctAnswer: "Ein Port, der normalerweise einem einzelnen VLAN zugeordnet ist.",
    wrongAnswers: ["Ein Port, der immer alle VLANs gleichzeitig unmarkiert sendet.", "Ein Port ohne jede Netzwerkfunktion.", "Ein Port, der nur DNS-Anfragen erlaubt."],
    explanation: "Switches, Router und VLANs trennen Zuständigkeiten zwischen Layer 2 und Layer 3."
  },
  {
    id: "netzwerke-062",
    category: "netzwerke",
    topic: "switch-router-vlan",
    difficulty: "mittel",
    question: "Was ist ein Trunk-Port bei VLANs?",
    correctAnswer: "Ein Port, der mehrere VLANs zwischen Netzwerkgeräten transportieren kann.",
    wrongAnswers: ["Ein Port, der nur ein einzelnes VLAN ohne Tags transportieren darf.", "Ein Port, der Frames anhand von IP-Routen ins Internet sendet.", "Ein Port, der nur Verwaltungszugriffe auf den Switch erlaubt."],
    explanation: "Switches, Router und VLANs trennen Zuständigkeiten zwischen Layer 2 und Layer 3."
  },
  {
    id: "netzwerke-063",
    category: "netzwerke",
    topic: "switch-router-vlan",
    difficulty: "mittel",
    question: "Warum braucht Kommunikation zwischen zwei VLANs meist ein Layer-3-Gerät?",
    correctAnswer: "VLANs sind logisch getrennte Netze und benötigen Routing zwischen den Netzen.",
    wrongAnswers: ["VLANs teilen sich zwar Hardware, bilden aber getrennte Layer-2-Bereiche.", "VLANs werden automatisch durch DNS-Records verbunden.", "VLANs benötigen immer denselben IP-Adressbereich."],
    explanation: "Switches, Router und VLANs trennen Zuständigkeiten zwischen Layer 2 und Layer 3."
  },
  {
    id: "netzwerke-064",
    category: "netzwerke",
    topic: "switch-router-vlan",
    difficulty: "mittel",
    question: "Was passiert, wenn ein Gerät ein Ziel außerhalb seines eigenen IP-Netzes erreichen möchte?",
    correctAnswer: "Es sendet das Paket an sein Default Gateway.",
    wrongAnswers: ["Es sendet das Paket direkt per ARP an die Ziel-IP im Fremdnetz.", "Es nutzt Broadcasts, damit Router im Internet antworten.", "Es verwirft das Paket immer, sobald das Ziel in einem anderen Subnetz liegt."],
    explanation: "Switches, Router und VLANs trennen Zuständigkeiten zwischen Layer 2 und Layer 3."
  },
  {
    id: "netzwerke-065",
    category: "netzwerke",
    topic: "switch-router-vlan",
    difficulty: "mittel",
    question: "Warum kann VLAN-Segmentierung die Sicherheit verbessern?",
    correctAnswer: "Sie trennt Netzbereiche und kann unnötige Kommunikation begrenzen.",
    wrongAnswers: ["Sie trennt Netze, erlaubt aber ohne Regeln weiterhin Routing zwischen ihnen.", "Sie schützt nur vor Funkstörungen, nicht vor unberechtigtem Zugriff.", "Sie fasst alle Geräte in einer größeren Broadcast-Domain zusammen."],
    explanation: "Switches, Router und VLANs trennen Zuständigkeiten zwischen Layer 2 und Layer 3."
  },
  {
    id: "netzwerke-066",
    category: "netzwerke",
    topic: "switch-router-vlan",
    difficulty: "mittel",
    question: "Welche Geräte arbeiten typischerweise auf Layer 2?",
    correctAnswer: "Switches",
    wrongAnswers: ["Router", "DNS-Server", "Webbrowser"],
    explanation: "Switches, Router und VLANs trennen Zuständigkeiten zwischen Layer 2 und Layer 3."
  },
  {
    id: "netzwerke-067",
    category: "netzwerke",
    topic: "switch-router-vlan",
    difficulty: "mittel",
    question: "Welche Geräte arbeiten typischerweise auf Layer 3?",
    correctAnswer: "Router",
    wrongAnswers: ["Repeater ohne Routingfunktion", "Layer-3-Switches", "Access Points im Bridge-Modus"],
    explanation: "Switches, Router und VLANs trennen Zuständigkeiten zwischen Layer 2 und Layer 3."
  },
  {
    id: "netzwerke-068",
    category: "netzwerke",
    topic: "switch-router-vlan",
    difficulty: "mittel",
    question: "Warum sollte die VLAN-Zuordnung dokumentiert werden?",
    correctAnswer: "Damit Ports, Netze und Sicherheitszonen nachvollziehbar bleiben.",
    wrongAnswers: ["Damit Trunk- und Access-Ports korrekt den VLANs zugeordnet werden können.", "Damit Fehlersuche bei falschem VLAN oder fehlendem Trunk schneller möglich ist.", "Damit Sicherheitszonen und Broadcast-Domains nachvollziehbar bleiben."],
    explanation: "Switches, Router und VLANs trennen Zuständigkeiten zwischen Layer 2 und Layer 3."
  },
  {
    id: "netzwerke-069",
    category: "netzwerke",
    topic: "switch-router-vlan",
    difficulty: "mittel",
    question: "Was ist ein typischer Fehler bei VLAN-Konfigurationen?",
    correctAnswer: "Ein Endgerät hängt an einem Port mit falscher VLAN-Zuordnung.",
    wrongAnswers: ["Der Trunk zwischen Switches erlaubt das benötigte VLAN nicht.", "Ein Access-Port ist im falschen VLAN konfiguriert.", "Das Native VLAN ist auf beiden Trunk-Seiten unterschiedlich."],
    explanation: "Switches, Router und VLANs trennen Zuständigkeiten zwischen Layer 2 und Layer 3."
  },
  {
    id: "netzwerke-070",
    category: "netzwerke",
    topic: "switch-router-vlan",
    difficulty: "mittel",
    question: "Welche Aufgabe hat ARP in einem IPv4-LAN?",
    correctAnswer: "ARP ermittelt die MAC-Adresse zu einer bekannten IPv4-Adresse.",
    wrongAnswers: ["ARP vergibt DHCP-Leases.", "ARP ersetzt HTTPS-Zertifikate.", "ARP synchronisiert Systemzeiten."],
    explanation: "Switches, Router und VLANs trennen Zuständigkeiten zwischen Layer 2 und Layer 3."
  },
  {
    id: "netzwerke-071",
    category: "netzwerke",
    topic: "wlan",
    difficulty: "mittel",
    question: "Wofür steht SSID in einem WLAN?",
    correctAnswer: "Der Name eines WLAN-Netzwerks.",
    wrongAnswers: ["Die IP-Adresse des Routers.", "Der Port für HTTPS.", "Die Subnetzmaske des Clients."],
    explanation: "WLANs müssen mit passender Sicherheit, Frequenzwahl und Kanalplanung betrieben werden."
  },
  {
    id: "netzwerke-072",
    category: "netzwerke",
    topic: "wlan",
    difficulty: "mittel",
    question: "Welche WLAN-Verschlüsselung gilt im Vergleich zu WEP als deutlich sicherer?",
    correctAnswer: "WPA2 oder WPA3",
    wrongAnswers: ["WEP", "Telnet", "HTTP"],
    explanation: "WLANs müssen mit passender Sicherheit, Frequenzwahl und Kanalplanung betrieben werden."
  },
  {
    id: "netzwerke-073",
    category: "netzwerke",
    topic: "wlan",
    difficulty: "mittel",
    question: "Was ist ein Vorteil des 5-GHz-Bands gegenüber 2,4 GHz?",
    correctAnswer: "Es bietet oft mehr Kanäle und weniger Störungen.",
    wrongAnswers: ["Es hat grundsätzlich unbegrenzte Reichweite.", "Es funktioniert ohne Access Point.", "Es ersetzt jede WLAN-Verschlüsselung."],
    explanation: "WLANs müssen mit passender Sicherheit, Frequenzwahl und Kanalplanung betrieben werden."
  },
  {
    id: "netzwerke-074",
    category: "netzwerke",
    topic: "wlan",
    difficulty: "mittel",
    question: "Warum kann ein separates Gast-WLAN sinnvoll sein?",
    correctAnswer: "Gäste können vom internen Unternehmensnetz getrennt werden.",
    wrongAnswers: ["Gäste nutzen dasselbe VLAN wie interne Server.", "Das Gast-WLAN deaktiviert die Verschlüsselung im internen WLAN.", "Das Gast-WLAN ersetzt die Firewall-Regeln zwischen den Netzen."],
    explanation: "WLANs müssen mit passender Sicherheit, Frequenzwahl und Kanalplanung betrieben werden."
  },
  {
    id: "netzwerke-075",
    category: "netzwerke",
    topic: "wlan",
    difficulty: "mittel",
    question: "Warum können überlappende WLAN-Kanäle Probleme verursachen?",
    correctAnswer: "Sie können Störungen und geringere Übertragungsqualität verursachen.",
    wrongAnswers: ["Sie verbessern automatisch die Signalqualität aller Access Points.", "Sie erhöhen die Reichweite ohne zusätzliche Sendeleistung.", "Sie trennen Clients zuverlässig in verschiedene IP-Subnetze."],
    explanation: "WLANs müssen mit passender Sicherheit, Frequenzwahl und Kanalplanung betrieben werden."
  },
  {
    id: "netzwerke-076",
    category: "netzwerke",
    topic: "netzwerkdiagnose",
    difficulty: "mittel",
    question: "Wofür wird `ping` häufig eingesetzt?",
    correctAnswer: "Zum Prüfen, ob ein Ziel über das Netzwerk erreichbar ist.",
    wrongAnswers: ["Zum Anzeigen der lokalen Routingtabelle.", "Zum Ändern eines Benutzerpassworts.", "Zum Komprimieren von Bildern."],
    explanation: "Die Diagnose prüft zuerst Erreichbarkeit und Konfiguration, bevor Dienste betrachtet werden."
  },
  {
    id: "netzwerke-077",
    category: "netzwerke",
    topic: "netzwerkdiagnose",
    difficulty: "mittel",
    question: "Welches Tool zeigt unter Windows häufig die aktuelle IP-Konfiguration an?",
    correctAnswer: "ipconfig",
    wrongAnswers: ["dir", "copy", "notepad"],
    explanation: "Die Diagnose prüft zuerst Erreichbarkeit und Konfiguration, bevor Dienste betrachtet werden."
  },
  {
    id: "netzwerke-078",
    category: "netzwerke",
    topic: "netzwerkdiagnose",
    difficulty: "mittel",
    question: "Welches Tool verfolgt den Weg eines Pakets über mehrere Router?",
    correctAnswer: "tracert oder traceroute",
    wrongAnswers: ["ping", "ipconfig", "nslookup"],
    explanation: "Die Diagnose prüft zuerst Erreichbarkeit und Konfiguration, bevor Dienste betrachtet werden."
  },
  {
    id: "netzwerke-079",
    category: "netzwerke",
    topic: "netzwerkdiagnose",
    difficulty: "mittel",
    question: "Welche erste Prüfung ist bei fehlender Netzwerkverbindung sinnvoll?",
    correctAnswer: "Physische Verbindung, WLAN-Verbindung oder Link-Status prüfen.",
    wrongAnswers: ["Sofort den DNS-Server ändern, ohne den Link-Status zu prüfen.", "Zuerst Firewall-Regeln löschen, ohne die Verbindung zu testen.", "Nur den Browsercache leeren und die IP-Konfiguration ignorieren."],
    explanation: "Die Diagnose prüft zuerst Erreichbarkeit und Konfiguration, bevor Dienste betrachtet werden."
  },
  {
    id: "netzwerke-080",
    category: "netzwerke",
    topic: "netzwerkdiagnose",
    difficulty: "mittel",
    question: "Warum ist die Prüfung des Default Gateways bei Verbindungsproblemen wichtig?",
    correctAnswer: "Ohne korrektes Gateway sind Ziele außerhalb des eigenen Netzes oft nicht erreichbar.",
    wrongAnswers: ["Das Gateway ist nur für DNS-Namen im eigenen Subnetz zuständig.", "Ein falsches Gateway verhindert grundsätzlich jede lokale Kommunikation.", "Das Gateway wird nur für die Vergabe von MAC-Adressen benötigt."],
    explanation: "Die Diagnose prüft zuerst Erreichbarkeit und Konfiguration, bevor Dienste betrachtet werden."
  },
  {
    id: "netzwerke-081",
    category: "netzwerke",
    topic: "netzwerkdiagnose",
    difficulty: "schwer",
    question: "Was deutet darauf hin, dass DNS gestört ist, obwohl die IP-Verbindung funktioniert?",
    correctAnswer: "Eine Webseite ist per IP erreichbar, aber nicht über ihren Namen.",
    wrongAnswers: ["Der Host kann weder die eigene IP-Adresse noch 127.0.0.1 anpingen.", "Das Netzwerkkabel ist sichtbar nicht eingesteckt und es gibt keinen Link.", "Der Zielserver ist per Name erreichbar, aber nicht per IP-Adresse."],
    explanation: "Eine strukturierte Analyse grenzt Fehler von Verbindung bis Anwendung ein."
  },
  {
    id: "netzwerke-082",
    category: "netzwerke",
    topic: "netzwerkdiagnose",
    difficulty: "schwer",
    question: "Welche Diagnose passt, wenn ein Host seine eigene IP anpingen kann, aber nicht das Gateway?",
    correctAnswer: "Ein Problem im lokalen Netz, bei Gateway-Konfiguration oder Verbindung ist wahrscheinlich.",
    wrongAnswers: ["DNS ist sicher die Ursache, weil nur Namen nicht aufgelöst werden.", "Die Internetverbindung ist vollständig funktionsfähig, weil die eigene IP antwortet.", "Ein externer Webserver blockiert den Zugriff auf das lokale Gateway."],
    explanation: "Eine strukturierte Analyse grenzt Fehler von Verbindung bis Anwendung ein."
  },
  {
    id: "netzwerke-083",
    category: "netzwerke",
    topic: "netzwerkdiagnose",
    difficulty: "schwer",
    question: "Wofür ist `nslookup` bei der Fehleranalyse besonders hilfreich?",
    correctAnswer: "Zum Prüfen, welche IP-Adresse ein DNS-Name liefert.",
    wrongAnswers: ["Zum Ändern der Subnetzmaske direkt am Switch.", "Zum Messen der CPU-Temperatur.", "Zum Verschlüsseln von WLAN-Passwörtern."],
    explanation: "Eine strukturierte Analyse grenzt Fehler von Verbindung bis Anwendung ein."
  },
  {
    id: "netzwerke-084",
    category: "netzwerke",
    topic: "netzwerkdiagnose",
    difficulty: "schwer",
    question: "Was kann eine falsche Subnetzmaske verursachen?",
    correctAnswer: "Hosts beurteilen Ziele falsch als lokal oder remote.",
    wrongAnswers: ["Die MAC-Adresse der Netzwerkkarte wird dauerhaft geändert.", "Der DNS-Server erstellt automatisch neue A-Records.", "TCP-Ports werden dadurch in UDP-Ports umgewandelt."],
    explanation: "Eine strukturierte Analyse grenzt Fehler von Verbindung bis Anwendung ein."
  },
  {
    id: "netzwerke-085",
    category: "netzwerke",
    topic: "netzwerkdiagnose",
    difficulty: "schwer",
    question: "Warum ist ein systematisches Vorgehen bei Netzwerkfehlern wichtig?",
    correctAnswer: "Es verhindert planloses Ändern und grenzt Ursachen nachvollziehbar ein.",
    wrongAnswers: ["Es beginnt immer mit Änderungen an produktiven Firewall-Regeln.", "Es ignoriert Messergebnisse, damit die Fehlersuche schneller wirkt.", "Es überspringt die IP-Konfiguration und prüft ausschließlich Anwendungen."],
    explanation: "Eine strukturierte Analyse grenzt Fehler von Verbindung bis Anwendung ein."
  },
  {
    id: "netzwerke-086",
    category: "netzwerke",
    topic: "netzwerkdiagnose",
    difficulty: "schwer",
    question: "Welche Information liefert ein erfolgreicher Ping auf `127.0.0.1`?",
    correctAnswer: "Der lokale TCP/IP-Stack antwortet grundsätzlich.",
    wrongAnswers: ["Das Internet ist vollständig erreichbar.", "Der DNS-Server ist korrekt konfiguriert.", "Der Router hat keine Firewall-Regeln."],
    explanation: "Eine strukturierte Analyse grenzt Fehler von Verbindung bis Anwendung ein."
  },
  {
    id: "netzwerke-087",
    category: "netzwerke",
    topic: "netzwerkdiagnose",
    difficulty: "schwer",
    question: "Was kann ein fehlender Link am Switch-Port bedeuten?",
    correctAnswer: "Kabel, Netzwerkkarte oder Port können fehlerhaft oder deaktiviert sein.",
    wrongAnswers: ["Der DNS-Server liefert zwingend eine falsche IP-Adresse.", "Die Anwendung nutzt sicher den falschen TCP-Port.", "Das Default Gateway ist garantiert korrekt konfiguriert."],
    explanation: "Eine strukturierte Analyse grenzt Fehler von Verbindung bis Anwendung ein."
  },
  {
    id: "netzwerke-088",
    category: "netzwerke",
    topic: "netzwerkdiagnose",
    difficulty: "schwer",
    question: "Was zeigt eine sehr hohe Paketverlustrate bei Ping-Tests an?",
    correctAnswer: "Es kann ein Problem mit Verbindung, Auslastung oder Störungen vorliegen.",
    wrongAnswers: ["Die Verbindung arbeitet garantiert ohne Störungen.", "Der DNS-Name wurde erfolgreich in eine MAC-Adresse umgewandelt.", "Die Subnetzmaske ist dadurch automatisch korrekt berechnet."],
    explanation: "Eine strukturierte Analyse grenzt Fehler von Verbindung bis Anwendung ein."
  },
  {
    id: "netzwerke-089",
    category: "netzwerke",
    topic: "netzwerkdiagnose",
    difficulty: "schwer",
    question: "Warum sollte bei Erreichbarkeitsproblemen auch die Firewall geprüft werden?",
    correctAnswer: "Firewall-Regeln können erlaubte oder blockierte Verbindungen bestimmen.",
    wrongAnswers: ["Firewalls leiten grundsätzlich jeden Port ungeprüft weiter.", "Eine Firewall ist nur für die Vergabe von DHCP-Leases zuständig.", "Firewall-Regeln haben keinen Einfluss auf Erreichbarkeit von Diensten."],
    explanation: "Eine strukturierte Analyse grenzt Fehler von Verbindung bis Anwendung ein."
  },
  {
    id: "netzwerke-090",
    category: "netzwerke",
    topic: "netzwerkdiagnose",
    difficulty: "schwer",
    question: "Welche Reihenfolge ist bei einer strukturierten Netzwerkdiagnose sinnvoll?",
    correctAnswer: "Physische Verbindung, IP-Konfiguration, Gateway, DNS und Dienst prüfen.",
    wrongAnswers: ["Nur DNS prüfen, obwohl schon die physische Verbindung fehlt.", "Mit dem Dienst beginnen, ohne IP-Adresse und Gateway zu kontrollieren.", "Firewall-Regeln ändern, bevor Erreichbarkeit und DNS geprüft wurden."],
    explanation: "Eine strukturierte Analyse grenzt Fehler von Verbindung bis Anwendung ein."
  },
  {
    id: "netzwerke-091",
    category: "netzwerke",
    topic: "netzwerksicherheit",
    difficulty: "schwer",
    question: "Welche Aufgabe hat eine Firewall?",
    correctAnswer: "Sie filtert Netzwerkverkehr anhand definierter Regeln.",
    wrongAnswers: ["Sie vergibt automatisch IP-Adressen an Clients.", "Sie leitet Frames anhand einer MAC-Tabelle weiter.", "Sie löst DNS-Namen in IP-Adressen auf."],
    explanation: "Netzwerksicherheit begrenzt Angriffsflächen und macht Vorfälle nachvollziehbarer."
  },
  {
    id: "netzwerke-092",
    category: "netzwerke",
    topic: "netzwerksicherheit",
    difficulty: "schwer",
    question: "Wozu dient ein VPN?",
    correctAnswer: "Es stellt eine geschützte Verbindung über ein unsicheres Netz bereit.",
    wrongAnswers: ["Es löscht lokale Benutzerkonten.", "Es ersetzt jede IP-Adresse durch eine MAC-Adresse.", "Es schaltet alle Switches aus."],
    explanation: "Netzwerksicherheit begrenzt Angriffsflächen und macht Vorfälle nachvollziehbarer."
  },
  {
    id: "netzwerke-093",
    category: "netzwerke",
    topic: "netzwerksicherheit",
    difficulty: "schwer",
    question: "Warum sollten nur benötigte Ports erreichbar sein?",
    correctAnswer: "Jeder offene Dienst kann eine zusätzliche Angriffsfläche darstellen.",
    wrongAnswers: ["Offene Ports verringern grundsätzlich die Angriffsfläche.", "Jeder zusätzliche Dienst macht ein Netz automatisch sicherer.", "Portfreigaben ersetzen Authentifizierung und Patchmanagement vollständig."],
    explanation: "Netzwerksicherheit begrenzt Angriffsflächen und macht Vorfälle nachvollziehbarer."
  },
  {
    id: "netzwerke-094",
    category: "netzwerke",
    topic: "netzwerksicherheit",
    difficulty: "schwer",
    question: "Welche Maßnahme schützt ein WLAN besser als WEP?",
    correctAnswer: "WPA2 oder WPA3 mit starkem Passwort",
    wrongAnswers: ["Offenes WLAN ohne Passwort", "Telnet-Zugriff auf den Router", "Ein sichtbarer Standard-Netzwerkname ohne Schutz"],
    explanation: "Netzwerksicherheit begrenzt Angriffsflächen und macht Vorfälle nachvollziehbarer."
  },
  {
    id: "netzwerke-095",
    category: "netzwerke",
    topic: "netzwerksicherheit",
    difficulty: "schwer",
    question: "Was beschreibt Netzwerksegmentierung?",
    correctAnswer: "Netzbereiche werden logisch oder physisch voneinander getrennt.",
    wrongAnswers: ["Alle Geräte werden in ein einziges ungeschütztes Netz gelegt.", "Alle Passwörter werden in DNS gespeichert.", "Jede IP-Adresse wird öffentlich gemacht."],
    explanation: "Netzwerksicherheit begrenzt Angriffsflächen und macht Vorfälle nachvollziehbarer."
  },
  {
    id: "netzwerke-096",
    category: "netzwerke",
    topic: "netzwerksicherheit",
    difficulty: "schwer",
    question: "Warum ist das Prinzip der minimalen Rechte auch im Netzwerk wichtig?",
    correctAnswer: "Benutzer und Systeme erhalten nur die Zugriffe, die sie wirklich benötigen.",
    wrongAnswers: ["Alle Clients sollten grundsätzlich Zugriff auf alle Serverports haben.", "Administrationsrechte sollten an jede Rolle pauschal vergeben werden.", "Netzwerkrechte müssen nie an Aufgaben oder Dienste gebunden sein."],
    explanation: "Netzwerksicherheit begrenzt Angriffsflächen und macht Vorfälle nachvollziehbarer."
  },
  {
    id: "netzwerke-097",
    category: "netzwerke",
    topic: "netzwerksicherheit",
    difficulty: "schwer",
    question: "Was ist ein Man-in-the-Middle-Angriff?",
    correctAnswer: "Ein Angreifer schaltet sich zwischen Kommunikationspartner und kann Daten mitlesen oder verändern.",
    wrongAnswers: ["Ein Switch sortiert Frames alphabetisch.", "Ein DNS-Server vergibt DHCP-Leases.", "Ein Client startet nur sein Betriebssystem neu."],
    explanation: "Netzwerksicherheit begrenzt Angriffsflächen und macht Vorfälle nachvollziehbarer."
  },
  {
    id: "netzwerke-098",
    category: "netzwerke",
    topic: "netzwerksicherheit",
    difficulty: "schwer",
    question: "Warum sollte Netzwerkadministration über unsichere Protokolle vermieden werden?",
    correctAnswer: "Zugangsdaten oder Befehle können unverschlüsselt übertragen werden.",
    wrongAnswers: ["Unsichere Protokolle verschlüsseln Zugangsdaten grundsätzlich stärker als SSH.", "Klartextprotokolle verhindern Man-in-the-Middle-Angriffe automatisch.", "Telnet prüft Serveridentitäten immer mit gültigen Zertifikaten."],
    explanation: "Netzwerksicherheit begrenzt Angriffsflächen und macht Vorfälle nachvollziehbarer."
  },
  {
    id: "netzwerke-099",
    category: "netzwerke",
    topic: "netzwerksicherheit",
    difficulty: "schwer",
    question: "Wozu dient ein IDS oder IPS grundsätzlich?",
    correctAnswer: "Es erkennt oder blockiert verdächtige Aktivitäten im Netzwerk.",
    wrongAnswers: ["Es vergibt IP-Adressen per DHCP an neue Clients.", "Es ersetzt die Verschlüsselung von VPN-Verbindungen vollständig.", "Es speichert DNS-Zonen und beantwortet Namensanfragen."],
    explanation: "Netzwerksicherheit begrenzt Angriffsflächen und macht Vorfälle nachvollziehbarer."
  },
  {
    id: "netzwerke-100",
    category: "netzwerke",
    topic: "netzwerksicherheit",
    difficulty: "schwer",
    question: "Warum sind Protokollierung und Monitoring für Netzwerksicherheit wichtig?",
    correctAnswer: "Auffälligkeiten und Angriffe können schneller erkannt und nachvollzogen werden.",
    wrongAnswers: ["Monitoring verschlüsselt automatisch jeden Netzwerkdienst.", "Protokollierung ersetzt Firewall-Regeln und Patchmanagement vollständig.", "Logs vergeben dynamisch neue IP-Adressen an verdächtige Clients."],
    explanation: "Netzwerksicherheit begrenzt Angriffsflächen und macht Vorfälle nachvollziehbarer."
  }
];
