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
	],
}
