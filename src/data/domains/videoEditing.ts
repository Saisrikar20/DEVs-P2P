import type { DomainConfig } from '../../types';

export const videoEditingDomain: DomainConfig = {
  id: 'video-editing',
  slug: 'video-editing',
  name: 'Video Editing & Post-Production',
  shortName: 'Video Editing',
  badge: 'Creative Track',
  iconName: 'Film',
  heroHeadline: 'Crafting rhythm, emotional tension, and cinematic visual storytelling',
  heroTagline: 'montage & pacing · narrative continuity, sound design, DaVinci Resolve color, and motion VFX',
  heroCtaText: 'Explore Video Editing Roadmap',
  roadmapData: [
    {
      id: 've-phase-1',
      phaseNumber: 1,
      title: 'NLE Mastery, Footage Ingest & The Assembly Cut',
      tagline: 'DaVinci Resolve / Premiere Pro, Proxy Workflows, 3-Point Editing & Keyboard Efficiency',
      duration: '3 - 4 Weeks',
      difficulty: 'Beginner',
      color: '#ffffff',
      badgeColor: 'bg-zinc-800 text-zinc-200',
      iconName: 'Film',
      overview:
        'Master the professional non-linear editing (NLE) environment: organize production assets, establish proxy pipelines for 4K/6K raw footage, execute razor-sharp 3-point edits, and leverage J & L cuts for fluid scene transitions.',
      topics: [
        {
          id: 've-p1-t1',
          name: 'Footage Ingest, Bins & Proxy Generation',
          summary: 'Directory structures, metadata tagging, timecodes, and generating ProRes/DNxHR proxies for smooth playback.',
          keySkills: ['Proxy Workflows', 'Timecode Sync', 'Folder Hierarchy', 'Scratch Disks & Cache'],
          recommendedResources: [
            { title: 'Blackmagic DaVinci Resolve Official Training Guide', url: 'https://www.blackmagicdesign.com/products/davinciresolve/training', type: 'Book' },
          ],
        },
        {
          id: 've-p1-t2',
          name: 'The Cut: 3-Point Editing, J & L Cuts & Pacing',
          summary: 'In/Out points, source patching, audio split edits (J/L cuts), ripple edits, and rolling edits without mouse dependency.',
          keySkills: ['3-Point Editing', 'J & L Cuts', 'Ripple / Roll Trimming', 'Keyboard-Driven Editing'],
          recommendedResources: [
            { title: 'In the Blink of an Eye by Walter Murch', url: 'https://en.wikipedia.org/wiki/In_the_Blink_of_an_Eye_(book)', type: 'Book' },
          ],
        },
      ],
      milestoneProject: {
        title: 'B-Roll Sequence & Multi-Angle Interview Assembly',
        description: 'Sync dual-system audio with multi-camera footage, assemble a 90-second interview cut with seamless J/L cut B-roll cutaways.',
        deliverables: [
          'Dual-system audio synchronization with zero drift',
          'A-roll dialogue edit trimmed of filler words and awkward pauses',
          'Fluid B-roll coverage with intentional J and L audio bridges',
        ],
      },
    },
    {
      id: 've-phase-2',
      phaseNumber: 2,
      title: 'Narrative Pacing, Rhythm & Montage Theory',
      tagline: 'The Kuleshov Effect, Match Cuts, Tension Arc, and Dialogue Cutting',
      duration: '4 Weeks',
      difficulty: 'Intermediate',
      color: '#ffffff',
      badgeColor: 'bg-zinc-800 text-zinc-200',
      iconName: 'Scissors',
      overview:
        'Transform raw clips into emotional cinema: apply the 6 rules of editing by Walter Murch, build tension through cutting tempo, utilize match cuts and graphic matches, and master the rhythm of human speech.',
      topics: [
        {
          id: 've-p2-t1',
          name: 'Montage Theory & Psychological Cutting',
          summary: 'Soviet montage, the Kuleshov effect, smash cuts, jump cuts with intention, and associative cutting.',
          keySkills: ['Montage Theory', 'Kuleshov Effect', 'Match Cuts', 'Subtext & Eye Trace'],
          recommendedResources: [
            { title: 'The Technique of Film and Video Editing by Ken Dancyger', url: 'https://www.routledge.com', type: 'Book' },
          ],
        },
        {
          id: 've-p2-t2',
          name: 'Dialogue Scene Mechanics & Dramatic Beats',
          summary: 'Reaction shots, shot-reverse-shot rules, holding the pause, and directing viewer focus through eye lines.',
          keySkills: ['180-Degree Rule', 'Reaction Timing', 'Cutting on Action', 'Dramatic Tension'],
          recommendedResources: [
            { title: 'StudioBinder: The Art of the Cut', url: 'https://www.studiobinder.com/blog/category/video-editing/', type: 'Documentation' },
          ],
        },
      ],
      milestoneProject: {
        title: 'High-Tension Dramatic Scene Edit',
        description: 'Edit a dramatic two-person dialogue scene from raw production dailies, shaping character dominance and emotional arc through reaction timing.',
        deliverables: [
          'Full rough-to-fine cut following the emotional rhythm of the scene',
          'Strict adherence to eye-trace continuity and the 180-degree rule',
          'Alternative high-pace vs slow-burn cut comparison export',
        ],
      },
    },
    {
      id: 've-phase-3',
      phaseNumber: 3,
      title: 'Sound Design, Foley & Audio Mixing (Fairlight / Audition)',
      tagline: 'Dialogue Restoration, Foley Layers, Ambience, EQ, Compression & LUFS Mastering',
      duration: '4 Weeks',
      difficulty: 'Intermediate',
      color: '#ffffff',
      badgeColor: 'bg-zinc-800 text-zinc-200',
      iconName: 'Volume2',
      overview:
        'Sound is 50% of the visual experience: clean noisy dialogue with spectral repair, construct immersive multi-track environmental soundscapes, build punch with whooshes and risers, and normalize to broadcast loudness standards.',
      topics: [
        {
          id: 've-p3-t1',
          name: 'Dialogue Cleaning & Spectral Repair',
          summary: 'De-noise, de-reverb, de-esser, parametric EQ carving, and dynamic compression.',
          keySkills: ['Parametric EQ', 'Compression & Gating', 'iZotope RX Spectral Repair', 'Dialogue Leveling'],
          recommendedResources: [
            { title: 'Sound Design for Film and Television by Tomlinson Holman', url: 'https://www.routledge.com', type: 'Book' },
          ],
        },
        {
          id: 've-p3-t2',
          name: 'Layered Sound Design & Loudness Standards',
          summary: 'Ambience beds, foley textures, low-end rumbles, transition risers, and mastering to -14 LUFS (YouTube) / -24 LUFS (Broadcast).',
          keySkills: ['Foley Layering', 'Transition SFX', 'LUFS Metering', 'Audio Bus Routing'],
          recommendedResources: [
            { title: 'AES Loudness Guidelines for Internet Audio', url: 'https://www.aes.org', type: 'Paper' },
          ],
        },
      ],
      milestoneProject: {
        title: 'Complete Audio Redesign for an Action / Sci-Fi Scene',
        description: 'Strip all original audio from an iconic scene and rebuild the entire soundscape from zero using foley, custom whooshes, synth risers, and EQ mixing.',
        deliverables: [
          '16+ track audio timeline with separate stems (DX, FX, Foley, MX)',
          'Master track limited to -14 LUFS integrated with true peak under -1.0 dBFS',
          'A/B comparison video demonstrating unmixed vs fully designed soundscape',
        ],
      },
    },
    {
      id: 've-phase-4',
      phaseNumber: 4,
      title: 'Color Correction & Color Grading in DaVinci Resolve',
      tagline: 'Color Science, Scopes, ACES / YRGB Color Management, Primary & Secondary Grading, Film Looks',
      duration: '5 Weeks',
      difficulty: 'Advanced',
      color: '#ffffff',
      badgeColor: 'bg-zinc-800 text-zinc-200',
      iconName: 'Palette',
      overview:
        'Step into the color suite: understand color science, interpret Waveform, Parade, and Vectorscope displays, normalize Log footage (S-Log3, C-Log, Blackmagic RAW), match different cameras, and craft filmic looks with Kodak 2383 emulations.',
      topics: [
        {
          id: 've-p4-t1',
          name: 'Color Management, Scopes & Primary Correction',
          summary: 'DaVinci YRGB Color Managed, reading Waveform and Vectorscope, setting neutral exposure, contrast, and white balance.',
          keySkills: ['Waveform / Parade', 'Vectorscope', 'Log Normalization', 'Shot-to-Shot Matching'],
          recommendedResources: [
            { title: 'Color Correction Handbook by Alexis Van Hurkman', url: 'https://www.peachpit.com/store/color-correction-handbook-9780321929662', type: 'Book' },
          ],
        },
        {
          id: 've-p4-t2',
          name: 'Secondary Grading, Qualifiers & Film Print Emulation',
          summary: 'HSL qualifiers, Power Windows, tracking masks, skin-tone isolation, subtractive color saturation, and film grain.',
          keySkills: ['Power Windows', 'Skin Tone Line', 'Subtractive Saturation', 'Film Halation & Grain'],
          recommendedResources: [
            { title: 'Cullen Kelly: Professional Color Science on YouTube', url: 'https://www.youtube.com/@CullenKelly', type: 'Video' },
          ],
        },
      ],
      milestoneProject: {
        title: 'Commercial Color Grading & Multi-Camera Shot Matching Reel',
        description: 'Take 10 un-graded Log clips filmed across Sony, Canon, and Blackmagic cameras, normalize them to unified color space, match skin tones, and build a moody cinematic grade.',
        deliverables: [
          'Node tree layout with clean separation of Primaries, Matching, and Creative Look',
          'Consistent skin-tone vectorscope placement across all matched shots',
          'Side-by-side wipe video showcasing flat Log vs finished cinematic master',
        ],
      },
    },
    {
      id: 've-phase-5',
      phaseNumber: 5,
      title: 'Motion VFX, Kinetic Typography & Final Delivery',
      tagline: 'After Effects / Fusion, Planar Tracking, Speed Ramping, Dynamic Captions & Master Codecs',
      duration: '4 Weeks',
      difficulty: 'Advanced',
      color: '#ffffff',
      badgeColor: 'bg-zinc-800 text-zinc-200',
      iconName: 'Sparkles',
      overview:
        'Deliver modern high-impact edits: speed ramps with optical flow interpolation, planar tracking and object removal in Mocha, animated kinetic subtitles, and exporting master ProRes and optimized YouTube/Reels bitrates.',
      topics: [
        {
          id: 've-p5-t1',
          name: 'Planar Tracking, Rotoscoping & Speed Ramping',
          summary: 'Mocha tracking, Fusion/After Effects delta keying, speed curves, and optical flow frame blending.',
          keySkills: ['Planar Tracking', 'Speed Ramping', 'Optical Flow', 'Clean Plates & Object Removal'],
          recommendedResources: [
            { title: 'Boris FX Mocha Tracking Guides', url: 'https://borisfx.com/products/mocha-pro/', type: 'Documentation' },
          ],
        },
        {
          id: 've-p5-t2',
          name: 'Kinetic Typography & Master Render Codecs',
          summary: 'Text animator engines, modern reel captions, ProRes 422 HQ vs H.265 VBR 2-pass bitrates, and aspect ratio adaptation (16:9 vs 9:16).',
          keySkills: ['Kinetic Typography', 'Aspect Ratio Re-framing', 'ProRes / DNxHR Mastering', 'H.264/H.265 Bitrates'],
          recommendedResources: [
            { title: 'YouTube Recommended Upload Encoding Settings', url: 'https://support.google.com/youtube/answer/1722171', type: 'Documentation' },
          ],
        },
      ],
      milestoneProject: {
        title: 'High-Impact 60-Second Commercial Trailer & Short-Form Cut',
        description: 'Edit, grade, sound-design, and animate a 60-second master trailer (16:9) along with a re-framed 9:16 vertical version featuring kinetic typography and speed ramps.',
        deliverables: [
          'Master 16:9 cinematic cut with custom speed ramps and planar text tracks',
          'Vertical 9:16 social cut with animated kinetic subtitles',
          'Archival ProRes master and compressed delivery files optimized for web streaming',
        ],
      },
    },
  ],
  hostsData: [
    {
      id: 've-host-1',
      name: 'Kevin Infant',
      role: 'Video Editor & Storytelling Specialist',
      headline: 'I turn raw footage into stories — obsessed with rhythm, pacing & feel',
      topicOrFocus: 'Narrative Pacing, Short/Long-Form Cuts, Sound Design & Visual Rhythm',
      bio: "I'm Kevin Infant — a video editor obsessed with rhythm, pacing and the feeling a cut leaves behind. I work with creators and brands to turn raw footage into content people actually finish watching.",
      avatarUrl: '/kevin-infant.jpg',
      initials: 'KI',
      socials: {
        portfolio: 'https://video-editing-portfolio-henna.vercel.app/',
        instagram: 'https://instagram.com/kevin_infant_12',
        email: 'kevininfant12@gmail.com',
      },
    },
    {
      id: 've-host-2',
      name: 'VS Thamizhselvan',
      role: 'Video Editor & Visual Creator',
      headline: 'Frame. Cut. Signature.',
      topicOrFocus: 'Cinematography, Creative Direction & Visual Effects',
      bio: 'Computer Science student & visual creator specializing in Cinematography, Video Editing & VFX. Blending storytelling, creative direction & visual effects into cinematic experiences. Creating every frame with a signature style of my own.',
      avatarUrl: '/avatar-media.jpg',
      initials: 'VT',
      socials: {
        linkedin: 'https://www.linkedin.com/in/vs-thamizh',
        instagram: 'https://www.instagram.com/v.s.thamizh',
      },
    },
    {
      id: 've-host-3',
      name: 'Arunpranesh ES',
      role: 'Video Editor & Visual Storyteller',
      headline: 'In the flow',
      topicOrFocus: 'Visual Storytelling, Narrative Rhythm & Creative Direction',
      bio: 'CSE Student, Video Editor & Visual Storyteller. Creating. Learning. Growing. Dedicated to rhythm, narrative flow, and cinematic visual editing.',
      avatarUrl: '/arun-pranesh.jpg',
      initials: 'AE',
      socials: {
        linkedin: 'https://www.linkedin.com/in/arunpranesh-es-550397322',
        instagram: 'https://www.instagram.com/__.arun.7',
      },
    },
  ],
  resourcesData: [
    {
      id: 've-res-1',
      title: 'In the Blink of an Eye: A Perspective on Film Editing',
      description: 'The legendary book by Oscar-winning editor Walter Murch (Apocalypse Now, The Godfather) on the emotional psychology of cutting.',
      url: 'https://en.wikipedia.org/wiki/In_the_Blink_of_an_Eye_(book)',
      type: 'Book',
      level: 'Beginner',
      cost: 'Paid',
      authorOrProvider: 'Walter Murch',
      tags: ['Editing', 'Pacing', 'Film Theory'],
      featured: true,
    },
    {
      id: 've-res-2',
      title: 'DaVinci Resolve Official Training & Certification',
      description: 'Free comprehensive video courses and textbook lessons created directly by Blackmagic Design.',
      url: 'https://www.blackmagicdesign.com/products/davinciresolve/training',
      type: 'Course',
      level: 'Beginner',
      cost: 'Free',
      authorOrProvider: 'Blackmagic Design',
      tags: ['DaVinci Resolve', 'Color Grading', 'Fairlight'],
      featured: true,
    },
    {
      id: 've-res-3',
      title: 'Color Correction Handbook by Alexis Van Hurkman',
      description: 'The industry reference manual for professional digital color correction, color theory, and scopes analysis.',
      url: 'https://www.peachpit.com/store/color-correction-handbook-9780321929662',
      type: 'Book',
      level: 'Advanced',
      cost: 'Paid',
      authorOrProvider: 'Alexis Van Hurkman',
      tags: ['Color Science', 'Scopes', 'Grading'],
    },
  ],
  projectsData: [
    {
      id: 've-proj-intro',
      title: 'First Cinematic Montage: 15-Second Cut-to-the-Beat Reel',
      phase: 'Phase 1: Foundations & Timeline Setup',
      difficulty: 'Beginner',
      description:
        'The quickest way to feel the magic of video editing: download 5–6 free HD stock clips (Pexels/Pixabay), drop in an upbeat music track, place markers on the audio drum beats, cut each clip precisely to the rhythm, and export a crisp 15-second teaser in under an hour.',
      techStack: ['DaVinci Resolve / Premiere Pro / CapCut', 'Beat Matching', 'Timeline Markers', 'Blade Tool'],
      learningOutcomes: [
        'Navigating the media pool and setting up a vertical 1080x1920 or 16:9 timeline',
        'Reading audio waveforms and snapping cut points to rhythmic drum and snare beats',
        'Using the razor blade tool and ripple delete to eliminate dead frames instantly',
        'Exporting a crisp H.264 MP4 render ready for mobile sharing',
      ],
    },
    {
      id: 've-proj-0',
      title: 'Short-Form Kinetic Narrative Reel (30–60s) — Cut, Pacing & Audio Sync',
      phase: 'Phase 1 - 2: Foundations & Narrative Pacing',
      difficulty: 'Beginner',
      description:
        'Import talking-head footage and B-roll, organize project bins, cut out filler pauses, assemble a rough cut using J-cuts and L-cuts, sync background music with audio ducking, and export a vertical 9:16 / horizontal 16:9 reel with clean animated captions.',
      techStack: ['DaVinci Resolve (Free) / Premiere Pro', 'J/L Cuts', 'Audio Ducking', 'Subtitles / Captions'],
      learningOutcomes: [
        'Organize media folders and bins with strict file naming conventions',
        'Master three-point editing, ripple trims, and seamless J-cut and L-cut transitions',
        'Balance vocal clarity over background music using basic volume automation and ducking',
        'Export master MP4/H.264 files optimized for Instagram Reels, YouTube Shorts, and TikTok',
      ],
    },
    {
      id: 've-proj-1',
      title: 'Action Scene Multi-Layer Sound Redesign',
      phase: 'Phase 3: Sound Design, Foley & Audio Mixing',
      difficulty: 'Intermediate',
      description:
        'Strip the audio from a Hollywood trailer and rebuild the entire sound mix from scratch with foley footsteps, whoosh impacts, dialogue cleanup, and -14 LUFS mastering.',
      techStack: ['DaVinci Resolve Fairlight', 'iZotope RX', 'Foley Stems', 'Limiter'],
      learningOutcomes: [
        'Organize 20+ audio tracks into Dialogue, Foley, Effects, and Music sub-busses',
        'Clean clipped dialogue using spectral de-noise and dynamic EQ',
        'Master the timeline to exact YouTube broadcast loudness standards',
      ],
    },
    {
      id: 've-proj-2',
      title: 'Multi-Camera Commercial Color Match & Film Emulation',
      phase: 'Phase 4: Color Correction & Color Grading',
      difficulty: 'Advanced',
      description:
        'Normalize raw Log footage shot on Sony, Canon, and RED cameras into DaVinci Wide Gamut, match exposure and white balance across camera bodies, and apply custom Kodak 2383 print curve.',
      techStack: ['DaVinci Resolve Studio', 'Scopes', 'Color Management', 'LUTs'],
      learningOutcomes: [
        'Set up automated ACES / DaVinci YRGB Color Managed timelines',
        'Match complex skin tones using vectorscope angle markers and secondary qualifiers',
        'Apply subtractive color density and optical halation for organic cinematic feel',
      ],
    },
  ],
  prerequisites: {
    overview:
      'Foundational media storage hygiene and visual literacy required before mastering non-linear editing, narrative pacing, and color science.',
    items: [
      {
        title: 'Computer Hardware & Storage Hygiene',
        description:
          'A reliable workstation (CPU/GPU acceleration, minimum 16GB RAM), an external SSD, and organized project directory folder structures.',
        level: 'Essential',
        skills: ['File Directory Hygiene', 'SSD Read/Write', 'GPU Acceleration', 'Video Formats (.mp4/.mov)'],
      },
      {
        title: 'Core Video & Audio Principles',
        description:
          'Understanding frame rates (24fps vs 30fps vs 60fps), resolutions (1080p, 4K), aspect ratios (16:9, 9:16), and audio decibel levels (dBFS).',
        level: 'Essential',
        skills: ['Frame Rates (FPS)', 'Aspect Ratios', 'Resolution Standards', 'Audio Levels (dB)'],
      },
      {
        title: 'NLE Software Installed',
        description:
          'DaVinci Resolve (free edition), Premiere Pro, or Final Cut installed and tested on your machine with basic keyboard navigation.',
        level: 'Recommended',
        skills: ['DaVinci Resolve / NLE', 'Timeline Navigation', 'Keyboard Shortcuts', 'Audio Sync Basics'],
      },
    ],
  },
};
