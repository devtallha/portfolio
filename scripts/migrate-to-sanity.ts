import { createClient } from '@sanity/client';
import { GENERAL_INFO, PROJECTS, MY_EXPERIENCE, MY_STACK } from '../lib/data.ts';

// CONFIGURATION - REPLACE WITH YOUR WRITE TOKEN
const SANITY_WRITE_TOKEN = 'skujJXIgbVdkHyUG03KR3EzPkJuE84RG2NHl9MYBXEjcBcJt0rgFRTupHgcP9KZFgK9NkME4rILmVxtehkKplps4ZMfqndoHV95St4KW2eJsfeJgjciIZvYH52HDeZFwZCsLpKh3rUdrFYSDKbERoukCyK0kBPQ1hkSYoubL6aXjNAUEPEnm';

const client = createClient({
  projectId: '0d96ykx5',
  dataset: 'production',
  apiVersion: '2025-05-09',
  token: SANITY_WRITE_TOKEN,
  useCdn: false,
});

async function migrate() {
  console.log('🚀 Starting migration to Sanity...');

  try {
    // 1. Migrate Site Settings
    console.log('📝 Migrating Site Settings...');
    await client.createOrReplace({
      _id: 'settings',
      _type: 'settings',
      fullName: GENERAL_INFO.fullName,
      professionalTitle: GENERAL_INFO.heading,
      email: GENERAL_INFO.email,
      phoneNumber: GENERAL_INFO.phoneNumber,
      location: GENERAL_INFO.location,
      upworkProfile: GENERAL_INFO.upworkProfile,
      linkedinUrl: GENERAL_INFO.linkedinUrl,
      githubUrl: GENERAL_INFO.githubUrl,
      // Calendly URL from our recent update
      calendlyUrl: 'https://calendly.com/devtallha',
    });

    // 2. Migrate Skills
    console.log('🛠️ Migrating Skills...');
    for (const category in MY_STACK) {
      for (const skill of MY_STACK[category]) {
        await client.create({
          _type: 'skill',
          name: skill.name,
          category: category,
          // Note: Icons will need to be uploaded manually in the Studio
        });
      }
    }

    // 3. Migrate Experiences
    console.log('💼 Migrating Experiences...');
    for (let i = 0; i < MY_EXPERIENCE.length; i++) {
      const exp = MY_EXPERIENCE[i];
      await client.create({
        _type: 'experience',
        title: exp.title,
        company: exp.company,
        duration: exp.duration,
        description: exp.description,
        order: i,
      });
    }

    // 4. Migrate Projects
    console.log('🚀 Migrating Projects...');
    for (const project of PROJECTS) {
      await client.create({
        _type: 'project',
        title: project.title,
        slug: { _type: 'slug', current: project.slug },
        year: project.year,
        techStack: project.techStack,
        liveUrl: project.liveUrl,
        // Description and Role are stored as strings for now
        // You can convert them to Portable Text in the Studio later
        description: [
          {
            _key: Math.random().toString(36).substring(7),
            _type: 'block',
            children: [{ _key: Math.random().toString(36).substring(7), _type: 'span', text: project.description.replace(/<[^>]*>?/gm, '') }],
            markDefs: [],
            style: 'normal',
          }
        ],
      });
    }

    console.log('✅ Migration completed successfully!');
  } catch (error) {
    console.error('❌ Migration failed:', error);
  }
}

migrate();
