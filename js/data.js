// ============================================================
//  DATA.JS — ПОЛНАЯ СТАТЬЯ (Часть 1: Abstract, 1. Introduction)
// ============================================================

const ARTICLE_DATA = {
	sections: [
		// ============================================================
		//  ABSTRACT (страница 1)
		// ============================================================
		{
			type: 'heading',
			level: 2,
			text: 'Abstract',
		},
		{
			type: 'paragraph',
			sentences: [
				{
					en: 'Current industry must improve the day-to-day control and industrial communications of its processes in order to bring itself closer to the Industry 4.0 paradigm.',
					ru: 'Современная промышленность должна совершенствовать повседневное управление и промышленные коммуникации своих процессов, чтобы приблизиться к парадигме «Индустрия 4.0».',
				},
				{
					en: 'To attain these improvements, which aim towards obtaining agile and intelligent manufacturing systems, the IEC-61499 standard is considered to be the main option by many researchers.',
					ru: 'Для достижения этих улучшений, направленных на создание гибких и интеллектуальных производственных систем, стандарт МЭК 61499 (IEC-61499) рассматривается многими исследователями в качестве основного варианта.',
				},
				{
					en: 'Despite its benefits, its biggest drawback is the lack of software tools required for an effective design process for distributed control systems.',
					ru: 'Несмотря на его преимущества, самым большим недостатком стандарта является нехватка программных инструментов, необходимых для эффективного проектирования распределенных систем управления.',
				},
				{
					en: 'The following work details the implementation of the IEC-61499 standard in low-cost devices using 4DIAC-FORTE for distributed control of a FESTO MPS 200 educational system, by using Unified Modeling Language (UML) diagrams as a software tool for modeling the function blocks (FBs) of the IEC-61499 standard.',
					ru: 'В данной работе подробно описывается реализация стандарта МЭК 61499 на недорогих устройствах с использованием среды исполнения 4DIAC-FORTE для распределенного управления учебной системой FESTO MPS 200 с применением диаграмм унифицированного языка моделирования (UML) в качестве программного инструмента моделирования функциональных блоков (ФБ) стандарта МЭК 61499.',
				},
				{
					en: 'This work demonstrates a simple and easy way to create distributed systems.',
					ru: 'Эта работа демонстрирует простой и доступный способ создания распределенных систем.',
				},
				{
					en: 'Keywords: IEC-61499; UML; cyber-physical production systems (CPPS); Industry 4.0.',
					ru: 'Ключевые слова: МЭК 61499 (IEC-61499); UML; киберфизические производственные системы (КФПС); Индустрия 4.0.',
				},
			],
		},

		// ============================================================
		//  1. INTRODUCTION (страницы 1-2)
		// ============================================================
		{
			type: 'heading',
			level: 2,
			text: '1. Introduction',
		},
		{
			type: 'paragraph',
			sentences: [
				{
					en: 'Currently, at the industrial level, automatic control of systems or processes is carried out using programmable logic controllers (PLCs) that fulfill a specific assigned function [1].',
					ru: 'В настоящее время на промышленном уровне автоматическое управление системами или процессами осуществляется с помощью программируемых логических контроллеров (ПЛК), выполняющих определенную назначенную функцию [1].',
				},
				{
					en: 'In addition, control of the plant is centralized within the executed algorithms.',
					ru: 'Кроме того, управление технологической установкой централизовано в рамках исполняемых алгоритмов.',
				},
				{
					en: 'The constant growth of technology and the need to reduce cost with the aim of maximizing production have forced industries to look for systems that allow a boost in capacity and smaller-sized devices with greater flexibility and robustness.',
					ru: 'Постоянное развитие технологий и необходимость снижения затрат с целью максимизации производства вынуждают промышленные предприятия искать системы, обеспечивающие повышение производительности, а также устройства меньшего размера, обладающие большей гибкостью и надежностью.',
				},
				{
					en: 'This is why low-cost embedded operating systems were developed and are generally freely available.',
					ru: 'Именно поэтому были разработаны недорогие встроенные операционные системы, которые, как правило, находятся в свободном доступе.',
				},
			],
		},
		{
			type: 'paragraph',
			sentences: [
				{
					en: 'Low-cost devices that have an internal embedded operating system have several advantages over known programmable controllers [2,3].',
					ru: 'Недорогие устройства со встроенной операционной системой имеют ряд преимуществ по сравнению с известными программируемыми контроллерами [2,3].',
				},
				{
					en: 'Embedded systems have advantages in terms of size, cost, performance, and level of management.',
					ru: 'Встроенные системы обладают преимуществами с точки зрения размера, стоимости, производительности и уровня управления.',
				},
			],
		},
		{
			type: 'paragraph',
			sentences: [
				{
					en: 'They are able to provide a greater ease of programming to the user, they require remarkably less space to operate, they contain sufficient assurances to work even in harsh environments, they do not require a fully specialized labor force, and the cost of implementation is much lower than the implementation of control through a PLC [4].',
					ru: 'Они способны обеспечить пользователю большую простоту программирования, требуют значительно меньше места для работы, обладают достаточным уровнем надежности для работы даже в суровых условиях, не требуют привлечения узкоспециализированной рабочей силы, а стоимость их внедрения намного ниже, чем реализация управления на базе ПЛК [4].',
				},
			],
		},
		{
			type: 'paragraph',
			sentences: [
				{
					en: 'Among the initiatives that compose Industry 4.0, one of the most projected technologies is the integration of cyber-physical production systems (CPPSs) [5].',
					ru: 'Среди инициатив, составляющих концепцию «Индустрия 4.0», одной из наиболее перспективных технологий является интеграция киберфизических производственных систем (КФПС) [5].',
				},
				{
					en: 'CPPSs are comprised of control devices with extensive computing and communication capabilities, both local and remote.',
					ru: 'КФПС состоят из управляющих устройств с широкими вычислительными и коммуникационными возможностями, как локальными, так и удаленными.',
				},
				{
					en: 'One of the standards that allows for the design of CPPSs is IEC-61499, which is based on models, the function block (FB) being one of its fundamental models.',
					ru: 'Одним из стандартов, позволяющих проектировать КФПС, является МЭК 61499, который основан на моделях, причем функциональный блок (ФБ) выступает в качестве одной из его фундаментальных моделей.',
				},
				{
					en: 'This model encapsulates all the algorithms and data, which compensates for the absence of global variables since when using FBs, variables can be relocated and adapted to the new conditions that the process may require.',
					ru: 'Эта модель инкапсулирует все алгоритмы и данные, что компенсирует отсутствие глобальных переменных, поскольку при использовании ФБ переменные могут быть перемещены и адаптированы к новым условиям, которые могут потребоваться для процесса.',
				},
				{
					en: 'Interoperability, reconfigurability, and portability are the basic characteristics for development of the IEC-61499 standard.',
					ru: 'Интероперабельность, реконфигурируемость и переносимость являются базовыми характеристиками для разработки систем на основе стандарта МЭК 61499.',
				},
			],
		},
		{
			type: 'paragraph',
			sentences: [
				{
					en: 'In the domain of automation using IEC-61499, models are organized hierarchically and hence FBs must be connected in this way.',
					ru: 'В области автоматизации с использованием МЭК 61499 модели организуются иерархически, и, следовательно, функциональные блоки должны быть подключены таким же образом.',
				},
				{
					en: 'To achieve this goal, software tools widely used in the design of computer systems, such as Unified Modeling Language (UML), should be employed [6].',
					ru: 'Для достижения этой цели следует использовать программные инструменты, широко применяемые при проектировании компьютерных систем, такие как унифицированный язык моделирования (UML) [6].',
				},
				{
					en: 'This language is used to produce an architecture of generic models for the control of industrial processes, which will guide the connection and design of a distributed control system based on FBs.',
					ru: 'Этот язык используется для создания архитектуры типовых моделей управления промышленными процессами, которая будет определять связи и проектирование распределенной системы управления на основе ФБ.',
				},
			],
		},
		{
			type: 'paragraph',
			sentences: [
				{
					en: 'This paper proposes a combination of UML and the IEC-61499 standard.',
					ru: 'В данной работе предлагается сочетание UML и стандарта МЭК 61499.',
				},
				{
					en: 'According to Panjaitan and Frey [7], UML proposes a development process and provides design models which, when following IEC-61499, allow for the complete implementation of a distributed CPPS automation control system exactly suited to the process it was designed for.',
					ru: 'Согласно Панджаитану и Фрею [7], UML предлагает процесс разработки и предоставляет модели проектирования, которые при следовании МЭК 61499 позволяют полностью реализовать распределенную систему автоматического управления КФПС, точно соответствующую процессу, для которого она была разработана.',
				},
				{
					en: 'Additionally, implementation is done in a simple way and with less engineering hours spent.',
					ru: 'Кроме того, реализация осуществляется простым способом и с меньшими затратами инженерных часов.',
				},
			],
		},
		{
			type: 'paragraph',
			sentences: [
				{
					en: 'The layout of this paper is as follows, Section 2 shows some related work that was used as a starting point for this research.',
					ru: 'Структура данной работы выглядит следующим образом: в разделе 2 представлены некоторые родственные работы, которые послужили отправной точкой для этого исследования.',
				},
				{
					en: 'Section 3 reviews the state-of-the-art work related to the main aim of the research.',
					ru: 'В разделе 3 рассматривается современное состояние исследований, связанных с основной целью работы.',
				},
				{
					en: 'Section 4 illustrates a case study and a proposed solution, which details the hardware and software elements used in this work to achieve an implementation of the IEC-61499 standard in a low-cost control system, using flexible model architecture development with the help of UML.',
					ru: 'В разделе 4 иллюстрируется практический пример и предлагаемое решение, где подробно описываются аппаратные и программные элементы, использованные в данной работе для реализации стандарта МЭК 61499 в недорогой системе управления с использованием разработки гибкой архитектуры моделей с помощью UML.',
				},
				{
					en: 'Finally, conclusions and ongoing work are described in Section 5.',
					ru: 'Наконец, выводы и текущие направления работы описаны в разделе 5.',
				},
			],
		},

		// ============================================================
		//  2. RELATED WORK (страницы 2-3)
		// ============================================================
		{
			type: 'heading',
			level: 2,
			text: '2. Related Work',
		},
		{
			type: 'paragraph',
			sentences: [
				{
					en: 'This section analyzes the research and work directly related to the areas in which IEC-61499 has been used.',
					ru: 'В данном разделе анализируются исследования и работы, непосредственно связанные с областями применения стандарта МЭК 61499.',
				},
				{
					en: 'It also describes the approach and scope of the research proposed in this work, the development of a methodology based on IEC-61499, and a CPPS architecture for the planning of distributed processes.',
					ru: 'Также описываются подход и сфера применения исследования, предлагаемого в данной работе, разработка методологии на основе МЭК 61499 и архитектура КФПС для планирования распределенных процессов.',
				},
			],
		},
		{
			type: 'paragraph',
			sentences: [
				{
					en: 'In Reference [8], the way in which the IEC-61499 standard is based on interoperability and its flexibility for service-oriented architectures are discussed via case study.',
					ru: 'В источнике [8] на примере практического сценария рассматривается то, как стандарт МЭК 61499 опирается на интероперабельность, а также его гибкость для сервис-ориентированных архитектур.',
				},
				{
					en: 'Discussion topics comparing IEC-61499 and IEC-61131-3 are presented.',
					ru: 'Представлены темы обсуждения, сравнивающие стандарты МЭК 61499 и МЭК 61131-3.',
				},
				{
					en: 'While IEC-61131-3 standardizes the programming languages and is proprietary, the IEC-61499 standard satisfies the current need to make compatible control devices independent of the commercial house they belong to.',
					ru: 'В то время как МЭК 61131-3 стандартизирует языки программирования и является проприетарным, стандарт МЭК 61499 удовлетворяет современную потребность в обеспечении совместимости управляющих устройств независимо от их фирмы-производителя.',
				},
			],
		},
		{
			type: 'paragraph',
			sentences: [
				{
					en: 'Considering the point of view of Reference [2], in which IEC-61499 is analyzed, this paper presents semantics with all the drawbacks that may occur when making use of the standard.',
					ru: 'Рассматривая точку зрения источника [2], в котором анализируется МЭК 61499, данная статья представляет семантику со всеми недостатками, которые могут возникнуть при использовании стандарта.',
				},
				{
					en: 'Firstly, for the standard under discussion, the function blocks (FBs) that are used to encapsulate the information allow direct improvement of the purpose of its predecessor IEC-61131-3, as explained in [9].',
					ru: 'Во-первых, в рамках обсуждаемого стандарта функциональные блоки (ФБ), используемые для инкапсуляции информации, позволяют напрямую улучшить назначение его предшественника МЭК 61131-3, как поясняется в [9].',
				},
				{
					en: 'In addition, in this article a comparison is made between the low-cost devices with embedded systems and programmable controllers, which verifies the utility and power of the IEC-61499 standard.',
					ru: 'Кроме того, в данной статье проводится сравнение между недорогими устройствами со встроенными системами и программируемыми контроллерами, что подтверждает полезность и эффективность стандарта МЭК 61499.',
				},
			],
		},
		{
			type: 'paragraph',
			sentences: [
				{
					en: 'Some research has recently been published on the design, use, and implementation of function blocks using the IEC 61499 standard for different control applications [10].',
					ru: 'Недавно было опубликовано несколько исследований, посвященных проектированию, использованию и реализации функциональных блоков по стандарту МЭК 61499 для различных задач управления [10].',
				},
				{
					en: 'Most of these investigations have been limited to performing basic control with the supervision of programmable automata (PLCs) in an industrial process [11].',
					ru: 'Большинство этих исследований ограничивались выполнением базового управления под контролем программируемых автоматов (ПЛК) в промышленном процессе [11].',
				},
				{
					en: 'However, these devices have the disadvantage that, by design, they are not able to handle uncertainty problems or the design and planning process at the factory level in an industrial production process.',
					ru: 'Однако эти устройства имеют тот недостаток, что по своей конструкции они не способны справляться с проблемами неопределенности или обеспечивать процесс проектирования и планирования на уровне цеха в промышленном производстве.',
				},
				{
					en: 'According to the literature consulted, systems designed under IEC 61499 have limited use for adaptive processes and for the control of basic systems [12].',
					ru: 'Согласно изученной литературе, системы, спроектированные на основе МЭК 61499, имеют ограниченное применение для адаптивных процессов и для управления базовыми системами [12].',
				},
				{
					en: 'For this reason, the aim of this work is to design and implement a control system under IEC 61499 in a real continuous process.',
					ru: 'По этой причине целью данной работы является проектирование и внедрение системы управления на основе МЭК 61499 в реальном непрерывном процессе.',
				},
			],
		},
		{
			type: 'paragraph',
			sentences: [
				{
					en: 'In [6,13], UML is used to design the models and architecture of an automation system.',
					ru: 'В работах [6,13] UML используется для проектирования моделей и архитектуры системы автоматизации.',
				},
				{
					en: 'This approach has a disadvantage because new control and automation engineers do not know how to perform automation applications using this type of language.',
					ru: 'Этот подход имеет недостаток, поскольку новые инженеры по управлению и автоматизации не знают, как разрабатывать приложения автоматизации с использованием языка такого типа.',
				},
				{
					en: 'Engineers now understand and use concepts and languages defined by IEC 61131.',
					ru: 'Инженеры в настоящее время понимают и используют концепции и языки, определенные стандартом МЭК 61131.',
				},
				{
					en: 'In previous research undertaken by Thramboulidis and Tranoris in [14], a UML use case driven approach was used.',
					ru: 'В предыдущих исследованиях, проведенных Трамбулидисом и Транорисом в [14], использовался подход на основе прецедентов использования (use cases) UML.',
				},
				{
					en: 'The proposed approach integrates UML with the FB construct (already well-accepted by control engineers) to cover the analysis and design phases of the development process.',
					ru: 'Предложенный подход интегрирует UML с конструкцией ФБ (уже хорошо принятой инженерами по управлению) для охвата этапов анализа и проектирования в процессе разработки.',
				},
				{
					en: 'However, none of the above researchers has proposed a way of implementing the FB-based design specifications of control applications.',
					ru: 'Однако никто из вышеупомянутых исследователей не предложил способа практической реализации спецификаций проектирования управляющих приложений на основе ФБ.',
				},
			],
		},
		{
			type: 'paragraph',
			sentences: [
				{
					en: 'Different works involving FB networks under IEC 61499 cover aspects such as the design of distributed autonomous systems with intelligent control components [9], the maintenance of distributed control systems and web-based engineering [15], the automated verification of industrial control systems [1], support systems engineering [16], and the modeling of reconfigurable concurrent systems [17].',
					ru: 'Различные работы, связанные с сетями ФБ по стандарту МЭК 61499, охватывают такие аспекты, как проектирование распределенных автономных систем с компонентами интеллектуального управления [9], обслуживание распределенных систем управления и веб-инженерия [15], автоматизированная верификация промышленных систем управления [1], системная инженерия поддержки [16] и моделирование реконфигурируемых параллельных систем [17].',
				},
			],
		},
		{
			type: 'paragraph',
			sentences: [
				{
					en: 'The following work uses the starting point marked in Reference [18] to extend the scalability of the standard to more low-cost devices by using class diagrams and UML execution to design the system of distributed control.',
					ru: 'В данной работе за отправную точку берутся результаты исследования [18] для расширения масштабируемости стандарта на большее число недорогих устройств путем использования диаграмм классов и выполнения UML для проектирования системы распределенного управления.',
				},
				{
					en: 'This methodology verifies that all the results achieved by the aforementioned research groups are implementable in different types of low-cost devices, thus continuing with the line of study initiated.',
					ru: 'Данная методология подтверждает, что все результаты, полученные вышеупомянутыми исследовательскими группами, могут быть реализованы на различных типах недорогих устройств, тем самым продолжая начатое направление исследований.',
				},
			],
		},

		// ============================================================
		//  3. STATE OF THE ART (страницы 3-4)
		// ============================================================
		{
			type: 'heading',
			level: 2,
			text: '3. State of the Art',
		},
		{
			type: 'heading',
			level: 3,
			text: '3.1. IEC-61499',
		},
		{
			type: 'paragraph',
			sentences: [
				{
					en: 'IEC-61499 is a new architecture designed to replace the IEC-61131-3 standard.',
					ru: 'МЭК 61499 — это новая архитектура, предназначенная для замены стандарта МЭК 61131-3.',
				},
				{
					en: 'Its main focus is the design of control applications in distributed form.',
					ru: 'Ее основное внимание уделено проектированию приложений управления в распределенной форме.',
				},
				{
					en: 'The new standard proposes operation based on FBs characterized by their inputs, outputs, and functions performing internally.',
					ru: 'Новый стандарт предлагает работу на основе ФБ, характеризующихся своими входами, выходами и внутренне выполняемыми функциями.',
				},
				{
					en: 'Each FB encapsulates the control algorithms in functions based on incoming input events, setting the difference with its predecessor IEC-61131-3, which works based on the periodic verification of subroutines [19].',
					ru: 'Каждый ФБ инкапсулирует управляющие алгоритмы в функции на основе поступающих входных событий, что отличает его от предшественника МЭК 61131-3, работающего на основе периодической проверки подпрограмм [19].',
				},
			],
		},
		{
			type: 'paragraph',
			sentences: [
				{
					en: 'The IEC-61499 standard aims to provide three important aspects [20], as follows.',
					ru: 'Стандарт МЭК 61499 направлен на обеспечение трех важных аспектов [20], а именно:',
				},
			],
		},
		{
			type: 'list',
			items: [
				{
					en: 'Portability: Software components and configurations of distributed applications can be interpreted and supported by different development environments.',
					ru: 'Переносимость (Portability): Программные компоненты и конфигурации распределенных приложений могут интерпретироваться и поддерживаться различными средами разработки.',
				},
				{
					en: 'Configurability: The configuration of any device along with its control software can be executed by development tools from several IEC 61499 software suppliers.',
					ru: 'Конфигурируемость (Configurability): Конфигурация любого устройства вместе с его управляющим ПО может выполняться инструментами разработки от различных поставщиков ПО для МЭК 61499.',
				},
				{
					en: 'Interoperability: The control applications under IEC 61499 can be executed by several hardware platforms with embedded operating systems to work together and reach the aim of distributed application.',
					ru: 'Интероперабельность (Interoperability): Приложения управления по стандарту МЭК 61499 могут выполняться на нескольких аппаратных платформах со встроенными операционными системами для совместной работы и достижения целей распределенного приложения.',
				},
			],
		},
		{
			type: 'paragraph',
			sentences: [
				{
					en: 'IEC 61499 improves a distributed system architecture by defining a generic and hierarchical structure for distributed control applications.',
					ru: 'МЭК 61499 совершенствует распределенную системную архитектуру путем определения универсальной и иерархической структуры для распределенных приложений управления.',
				},
				{
					en: 'The models presented in the standard are generic, independent from the domain, and extensible in order to make it suitable for several distributed applications.',
					ru: 'Модели, представленные в стандарте, являются типовыми, независимыми от предметной области и расширяемыми, что делает его пригодным для различных распределенных приложений.',
				},
				{
					en: 'The models are: (i) Function Block Model (FB), (ii) Resources Model, (iii) Device Model, (iv) System Model, (v) Application Model, (vi) Distribution Model, and (vii) Management Model. See Figure 1.',
					ru: 'К ним относятся следующие модели: (i) модель функционального блока (ФБ), (ii) модель ресурсов, (iii) модель устройств, (iv) модель системы, (v) модель приложения, (vi) модель распределения и (vii) модель управления (см. рисунок 1).',
				},
			],
		},
		{
			type: 'paragraph',
			sentences: [
				{
					en: 'The FB model is the primary and elementary model of the standard.',
					ru: 'Модель ФБ является первичной и базовой моделью стандарта.',
				},
				{
					en: 'FBs are functional units which encapsulate algorithms working with a group of input/output events and input/output data.',
					ru: 'ФБ представляют собой функциональные единицы, которые инкапсулируют алгоритмы, работающие с группой входных/выходных событий и входных/выходных данных.',
				},
				{
					en: 'FB-based architecture for control devices enables a modular design approach and makes the development process easier and more efficient.',
					ru: 'Архитектура управляющих устройств на основе ФБ обеспечивает модульный подход к проектированию и делает процесс разработки более простым и эффективным.',
				},
				{
					en: 'However, since IEC 61499 is a conceptual reference model for general purposes, it is necessary to establish model-derived class FBs for a particular application based on an object-oriented view.',
					ru: 'Однако, поскольку МЭК 61499 является концептуальной эталонной моделью общего назначения, для конкретного приложения необходимо определить производные от модели классы ФБ на основе объектно-ориентированного подхода.',
				},
			],
		},
		{
			type: 'paragraph',
			sentences: [
				{
					en: 'Several systems can be designed using the FB model in IEC 61499 architecture.',
					ru: 'Несколько систем могут быть спроектированы с использованием модели ФБ в архитектуре МЭК 61499.',
				},
				{
					en: 'The user can create application models using an FB network.',
					ru: 'Пользователь может создавать модели приложений, используя сеть ФБ.',
				},
				{
					en: 'The nodes of this network are Compound FBs (CFBs) or Service Interface FBs (SIFBs).',
					ru: 'Узлами этой сети являются составные функциональные блоки (СФБ) или интерфейсные блоки служб (ИБС/SIFBs).',
				},
				{
					en: 'The joining of one or more “local applications” with communication interfaces creates a resource model.',
					ru: 'Объединение одного или нескольких «локальных приложений» с интерфейсами связи создает модель ресурсов.',
				},
				{
					en: 'A device model contains one or more interfaces (communication interface or process interface) and one or more resources.',
					ru: 'Модель устройства содержит один или несколько интерфейсов (интерфейс связи или интерфейс процесса) и один или несколько ресурсов.',
				},
			],
		},
		{
			type: 'paragraph',
			sentences: [
				{
					en: 'The IEC-61499 standard makes it possible to model control applications by encapsulating the information in the FBs, and visualize the interconnections between the components involved.',
					ru: 'Стандарт МЭК 61499 позволяет моделировать приложения управления путем инкапсуляции информации в ФБ и визуализировать взаимосвязи между задействованными компонентами.',
				},
				{
					en: 'It is important to mention that there are certain dependencies within the standard, such as SIFBs that depend directly on the platform where they are executed.',
					ru: 'Важно отметить наличие определенных зависимостей внутри стандарта, таких как ИБС (SIFBs), которые напрямую зависят от платформы исполнения.',
				},
				{
					en: 'These dependencies can be disadvantages in the norm because a model is not supposed to depend on any execution platform.',
					ru: 'Эти зависимости могут быть недостатками стандарта, поскольку модель не должна зависеть от какой-либо платформы исполнения.',
				},
			],
		},
		{
			type: 'heading',
			level: 3,
			text: '3.2. UML for Modelling Control Systems',
		},
		{
			type: 'paragraph',
			sentences: [
				{
					en: 'UML is considered to be an appropriate language for modeling automation systems, and at the same time as an extension of the IEC 61499 standard specifications through UML.',
					ru: 'UML рассматривается как подходящий язык для моделирования систем автоматизации и в то же время как расширение спецификаций стандарта МЭК 61499 средствами UML.',
				},
				{
					en: 'UML allows the explicit definition of the system hierarchy as a class diagram, making it possible to represent in UML any distributed structure architecture in function blocks.',
					ru: 'UML позволяет явно определить иерархию системы в виде диаграммы классов, что делает возможным представление в UML любой архитектуры распределенной структуры в виде функциональных блоков.',
				},
				{
					en: 'Sequence and cooperation diagrams can be used to specify the desired behavior, which are not available in IEC-61499 [21].',
					ru: 'Диаграммы последовательности и кооперации могут быть использованы для спецификации желаемого поведения, которые отсутствуют в МЭК 61499 [21].',
				},
				{
					en: 'In addition, it is possible to use UML as a query language of specifications (for model validation and testing) and as a structural and functional constraint language (for the synthesis of correct models).',
					ru: 'Кроме того, можно использовать UML в качестве языка запросов к спецификациям (для валидации и тестирования моделей) и в качестве языка структурных и функциональных ограничений (для синтеза корректных моделей).',
				},
			],
		},
		{
			type: 'paragraph',
			sentences: [
				{
					en: 'Application rules for diagrams and specific semantics limit its use within other application domains.',
					ru: 'Правила применения диаграмм и специфическая семантика ограничивают его использование рамками других прикладных областей.',
				},
				{
					en: 'The approach introduced in this paper is based on the following assumptions: (i) FBs and other structures of IEC 61499 are used to describe an “executable specification” of a control system.',
					ru: 'Подход, представленный в данной работе, основан на следующих предположениях: (i) ФБ и другие структуры МЭК 61499 используются для описания «исполняемой спецификации» системы управления.',
				},
				{
					en: '(ii) The UML is used as a language that supports the engineering process: modeling, design, and maintenance of the automation system.',
					ru: '(ii) UML используется как язык поддержки инженерного процесса: моделирования, проектирования и обслуживания системы автоматизации.',
				},
				{
					en: 'Additionally, both UML and IEC-61499 use the typing/instantiation concept not only for the data but also for the code capsules.',
					ru: 'Кроме того, как UML, так и МЭК 61499 используют концепцию типизации/экземпляризации не только для данных, но и для капсул кода.',
				},
				{
					en: 'It is implicitly assumed that the UML class concept corresponds to the function block concept of IEC 61499 and vice versa.',
					ru: 'Неявно предполагается, что концепция класса UML соответствует концепции функционального блока МЭК 61499, и наоборот.',
				},
			],
		},
		{
			type: 'paragraph',
			sentences: [
				{
					en: 'The UML used for modelling IEC 61499 control systems involves the following types of diagrams: class diagrams, sequence diagrams, cooperation diagrams, and state charts.',
					ru: 'UML, используемый для моделирования систем управления на основе МЭК 61499, включает следующие типы диаграмм: диаграммы классов, диаграммы последовательности, диаграммы кооперации и диаграммы состояний.',
				},
				{
					en: 'Class diagrams are used to represent the structure which includes: (i) the full hierarchy of functional system components (defined by the aggregation and inheritance of relations); (ii) types of function blocks, sub-applications, adapter interfaces, resources, and devices; (iii) system, device, and resource configurations; (iv) FB interfaces including event and data inputs and outputs and the corresponding qualifiers; (v) connections between FBs typical for instances of given types; (vi) constant data representing input parameters of function blocks, sub-applications, resources, and devices.',
					ru: 'Диаграммы классов используются для представления структуры, которая включает: (i) полную иерархию функциональных компонентов системы (определяемую агрегацией и наследованием отношений); (ii) типы функциональных блоков, подприложений, адаптерных интерфейсов, ресурсов и устройств; (iii) конфигурации систем, устройств и ресурсов; (iv) интерфейсы ФБ, включая входы и выходы событий и данных и соответствующие квалификаторы; (v) типичные для экземпляров данных типов соединения между ФБ; (vi) константные данные, представляющие входные параметры функциональных блоков, подприложений, ресурсов и устройств.',
				},
				{
					en: 'Sequence and cooperation diagrams are used to support the definitions of the application dynamics and their transformation into the connections between FBs, parameters corresponding to FBs, and resources or devices deployment at distributed systems.',
					ru: 'Диаграммы последовательности и кооперации используются для поддержки определений динамики приложения и их преобразования в связи между ФБ, параметры, соответствующие ФБ, а также развертывание ресурсов или устройств в распределенных системах.',
				},
			],
		},
		{
			type: 'paragraph',
			sentences: [
				{
					en: 'UMLs are used to generate sequence diagrams for describing the behavior of SIFBs and are applied in correspondence with the paradigm of IEC-61499 FBs under ISO TR 8509 [22].',
					ru: 'Диаграммы UML используются для генерации диаграмм последовательности для описания поведения ИБС (SIFBs) и применяются в соответствии с парадигмой ФБ МЭК 61499 согласно ISO TR 8509 [22].',
				},
				{
					en: 'Using the cooperation diagrams (extended with text constructions in the connections), it is possible to define point-to-point connections between function blocks.',
					ru: 'Используя диаграммы кооперации (дополненные текстовыми конструкциями в связях), можно определять соединения типа «точка-точка» между функциональными блоками.',
				},
				{
					en: 'UML state diagrams are used to specify the exact behavior of the components, which are determined by the execution control charts (ECCs) of the basic FBs.',
					ru: 'Диаграммы состояний UML используются для спецификации точного поведения компонентов, которое определяется картами контроля выполнения (ECCs) базовых ФБ.',
				},
				{
					en: 'According to the ECC structure, UML state tables become quite simple: they do not include compound and historical states, nor do they include complex transitions.',
					ru: 'Благодаря структуре ECC, таблицы состояний UML становятся довольно простыми: они не содержат сложных и исторических состояний, а также сложных переходов.',
				},
			],
		},
	],
}
