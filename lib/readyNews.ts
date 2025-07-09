export async function preparedNews() {
    return (
        [
            {
                title: 'Insect-Based Autonomy Planned for Space Rover',
                date: new Date('2024-10-31'),
                excerpt: 'Software set to be integrated into Airbus space rover to improve navigational ability',
                text: `The European Space Agency (ESA) plans to test Opteran Mind, an autonomy-software platform based on the insect brain, on Airbus space rovers in an effort to improve their ability to navigate hostile, off-world environments.

\nU.K.-based Opteran, which is named after Hymenoptera, an order of insects that includes bees and ants, has reverse-engineered natural insect-brain algorithms into a software “mind” that enables robots to move through challenging environments without the need for extensive data or training, making navigational decisions in milliseconds instead of minutes. 

\nRovers currently must compute a map of their surroundings using multiple cameras before each movement, a slow process that saps energy reserves. Successful integration of Opteran Mind would extend the rover’s exploratory capabilities, providing it with continuous navigation while driving farther and faster and using much less power to compute. 
\n“We are delighted to be working with ESA and Airbus to demonstrate how Opteran’s neuromorphic software addresses key blockers in space autonomy,” said Opteran CEO and co-founder David Rajan. “Our long-term vision is to provide natural autonomy with the Opteran Mind to every machine on Earth and beyond, and this project will show how we can enable high-speed, continuous safe driving, optimized for the rigors of planetary rover navigation.” 

\nOpteran plans to conduct the tests with Airbus at its Mars Yard in Stevenage in the U.K. The project is funded via a U.K. Space Agency program, which takes nascent technologies not ready to be sent into space and develops them for future missions. 

\nThe near-term focus of the tests will be depth estimation for obstacle detection, while the mid-term focus will be on infrastructure-free visual navigation. After the test results are presented to the space agency, the objective would be to secure grant funding for the next stage of development, which would look toward deployment and commercialization.

\n“Today, no such flight-ready systems exist, so there is a major opportunity for Opteran to step up and resolve a challenge facing all the major players in space robotics,” Rajan said.`,
                source: 'https://aibusiness.com/automation/insect-based-autonomy-planned-for-space-rover',
                author: 'John Yellig',
                image: 'https://eu-images.contentstack.com/v3/assets/blt6b0f74e5591baa03/blt299a5851c8ffd334/6723ad2f268e205ee69a85ad/Airbus_Mars_Rover.jpg?width=1280&auto=webp&quality=95&format=jpg&disable=upscale'
            },
            {
                title: 'Neural Network Model Restores Damaged Historical Artifacts From Photos',
                date: new Date('2024-11-04'),
                excerpt: '3D images reconstructed from old photographs allow for the exploration of damaged relief carvings through virtual reality',
                text: `Researchers have developed a novel neural network model that uses old photos to reconstruct damaged cultural heritage objects as restored 3D virtual reality (VR) images using old photos.
\nReliefs – wall-mounted sculptures that remain attached to a flat base  – are found at historical sites but are subject to damage and deterioration over time.

\nModern 3D scanning and photogrammetry methods can digitally preserve their current form, but cannot restore the original appearance of these carvings before damage. 

\nRestoration using traditional methods requires intensive, highly-skilled labor, It is also costly and can affect the integrity of the original object. 

\nA team from Japan and China has developed a neural network model that can reconstruct these reliefs as 3D digital images from old photographs that show them in an undamaged state. 

\nReliefs are ideal candidates for this process as they have a shallow depth and can be viewed from the front of sides, meaning 2D photographs capture most of the information required for 3D digital reconstruction algorithms.

\nThe research was led by Professor Satoshi Tanaka from the College of Information Science and Engineering at Ritsumeikan University, Japan and Jiao Pan, from the University of Science and Technology Beijing, China.

\n“Previously, we proposed a 3D reconstruction method for old reliefs based on monocular depth estimation from photos,” said Tanaka.

\n“Although we achieved 95% reconstruction accuracy, finer details such as human faces and decorations were still missing. This was due to the high compression of depth values in 2D relief images, making it difficult to extract depth variations along edges. Our new method tackles this by enhancing depth estimation, particularly along soft edges, using a novel edge-detection approach.” 

\nThe researchers used the model to reconstruct wall reliefs at Borobudur Temple, a UNESCO World Heritage Site in Indonesia. They are covered by stone walls due to reinforcement work carried out during the Dutch colonial period and cannot be viewed. 

\n“Our multi-task neural network successfully reconstructed these hidden sections of Borobudur’s ground-level reliefs from surviving old photographs,” said Tanaka. “ Through computer visualization and virtual reality, our research now allows virtual exploration of these unseen treasures.”

\nThe technology holds the potential for digitally preserving and sharing cultural objects, not only for archeologists but also for immersive virtual experiences through VR and metaverse technologies, preserving global heritage for future generations.`,
                source: 'https://aibusiness.com/ml/neural-network-model-restores-damaged-historical-artifacts-from-photos',
                author: 'Berenice Baker',
                image: 'https://eu-images.contentstack.com/v3/assets/blt6b0f74e5591baa03/blt20822b200cdb2b3e/67290480ee29207fbef51f56/Borobudur_Temple_GettyImages-631724733.jpg?width=1280&auto=webp&quality=95&format=jpg&disable=upscale',
            },
            {
                title: 'Where IT Consultancies Expect to Focus in 2025',
                date: new Date('2024-11-22'),
                excerpt: 'Next year is going to be another AI year, though the focus is shifting to scalability and risk management',
                text: `In the past few years, artificial intelligence has dominated New Years’ predictions. While the same can be said about 2025, scalability, responsibility, and safety will be stronger themes. 

\nFor example, global business and technology consulting firm West Monroe Partners sees data and data governance being major focus areas. 

\n“It’s no longer just about quick wins or isolated use cases. The focus is shifting towards building robust data platforms that can support long-term business goals as they move forward,” says Cory Chaplin, technology and experience practice leader at West Monroe. “A key part of this evolution is ensuring that organizations have the right data foundation in place which in turn allows them to harness the full potential of advanced uses like analytics and AI.” 

\nGenAI has caught the attention of boards and CEOs, but its success hinges on having clean, accessible data.  `,
                source: 'https://aibusiness.com/generative-ai/where-it-consultancies-expect-to-focus-in-2025',
                author: 'Lisa Morgan',
                image: 'https://eu-images.contentstack.com/v3/assets/blt6b0f74e5591baa03/blta36652dc6d92ec37/673fb1a115e6aa0c2d96afb0/GettyImages-1798129342.jpg?width=1280&auto=webp&quality=95&format=jpg&disable=upscale',
            },
            {
                title: 'Google Taps AI to Identify Quantum Errors',
                date: new Date('2024-11-28'),
                excerpt: 'Using a quantum simulator, researchers generated hundreds of millions of examples across a variety of settings',
                text: `Google’s DeepMind and Quantum AI teams have developed AlphaQubit, a neural network-based decoder that identifies quantum computing errors more accurately than previous methods.

\nQuantum computers could revolutionize fields such as drug discovery, material design and fundamental physics by solving problems currently intractable for classical computers. However, to scale to a practical size, they need to overcome their susceptibility to noise and errors.

\nIn research published in Nature, AlphaQubit made 6% fewer detection errors than tensor network methods, a slow but highly accurate decoder and 30% fewer errors than correlated matching, an accurate decoder that is fast enough to scale.

\nThe researchers used the Transformer deep-learning architecture to train a model using data from a set of 49 qubits in Google's Sycamore quantum processor.

\nUsing a quantum simulator, they generated hundreds of millions of examples across a variety of settings, error levels and simulations. They then finetuned AlphaQubit for a decoding task by giving it thousands of real-world error samples from a Google Sycamore quantum processor.

\nTo see whether AlphaQubit is scalable, the team trained on simulated quantum systems with up to 241 qubits. It consistently outperformed other decoders, indicating it could scale for larger, future quantum devices.

\nAlphaQubit is currently too slow for real-time correction in superconducting processors. However, it shows promise for scaling to larger quantum computers and represents an advance toward more reliable quantum computation.

\nThe Google DeepMind and Google Quantum AI team said in a blog post that as quantum computing grows toward the potentially millions of qubits needed for commercially relevant applications, they will need to find more data-efficient ways of training AI-based decoders.`,
                source: 'https://aibusiness.com/neural-networks/google-taps-ai-to-identify-quantum-errors',
                author: 'Berenice Baker',
                image: 'https://eu-images.contentstack.com/v3/assets/blt6b0f74e5591baa03/blt9b672e76987b01ad/67487ec04b62446faf919c22/Google_Sycamore_quantum_computer_resized.jpg?width=1280&auto=webp&quality=95&format=jpg&disable=upscale',
            },
            {
                title: 'Robotic Dog Uses AI to Climb Steps, Speed Down Mountains',
                date: new Date('2024-11-28'),
                excerpt: 'Deep Robotics has officially launched its new robot dog, the Lynx, an all-terrain robot that uses a combination of wheels and legs to navigate a variety of rough topographies.',
                text: `
\nThe wheeled-leg hybrid design combines the speed of wheels and the agility of legs, giving it the ability to travel to hard-to-reach wilderness areas on search-and-rescue missions, for example. It is powered by Deep Robotics’ proprietary motion-control algorithms, giving the robot multi-terrain adaptability. 
\nThe unique means of locomotion means it can roll across flatter surfaces on all four legs or go bipedal to climb steps almost nine inches high and slopes as steep as 45 degrees. Videos show it speeding down rough mountain roads and clambering rock walls.

\nThe Lynx is designed to be protected from external elements and has a three-hour battery life. The robot batteries can be quickly swapped out and it has a high-performance image/video transmission. It also runs on the Deep Robotics AI platform and can be customized for different use cases. 

\nPriced at $17,999 per unit, the Lynx joins other robots manufactured by the China-based company, none of which travel on wheels. 

\nThe other Deep Robotics units include the X series, a quadruped robot suitable for heavy industrial use, the Lite, which is suited for academics and research, and a bipedal, humanoid robot, the DR01.
\nThe robots have been deployed in a variety of industries, including power and utilities, rescue, tunnel inspection, metals and mining, construction and research.`, 
                source: 'https://aibusiness.com/robotics/robotic-dog-uses-ai-to-climb-steps-speed-down-mountains',
                author: 'John Yellig',
                image: 'https://eu-images.contentstack.com/v3/assets/blt6b0f74e5591baa03/blt0b643264b8628e18/674884d66ebe9dd83f4dcd87/Lynx_robot_dog_resized.jpg?width=1280&auto=webp&quality=95&format=jpg&disable=upscale',
            },
            {
                title: 'Most Read: Squirrel AI Agent Aims to Save Dwindling Species',
                date: new Date('2024-11-29'),
                excerpt: 'Also inside, generative AI material impact expected by CEOs: survey, digital twin of St. Peter’s Basilica brings interactive experience to homes and more',
                text: `Conservationists aiming to protect the U.K.’s dwindling red squirrel population have turned to a new AI tool to identify, track and treat squirrels.

\nThe red squirrel population has drastically declined since the introduction of gray squirrels in the 1870s, dropping from 3.5 million to a few hundred thousand. Meanwhile, the gray squirrel population has soared to an estimated 2.7 million.

\nGray squirrels outcompete their red rivals for resources and carry the squirrelpox virus, which is deadly to red squirrels.

\nRed squirrel conservation projects are trialing a new AI tool, Squirrel Agent AI, developed by Genysys Engine, to help recover endangered red squirrel populations and inform broader wildlife management strategies.`,
                source: 'https://aibusiness.com/computer-vision/most-read-squirrel-ai-agent-aims-to-save-dwindling-species-aws-launches-program-to-help-customers-get-started-in-quantum',
                author: 'Berenice Baker',
                image: 'https://eu-images.contentstack.com/v3/assets/blt6b0f74e5591baa03/bltc38e87a6a11bebf4/67460611120ebc71d19c0d60/Genysys_squirrel_whisker_ID.jpg?width=1280&auto=webp&quality=95&format=jpg&disable=upscale'
            },
            
        ]
    )
}