-- Custom SQL migration file, put your code below! --
INSERT INTO users (name, username) VALUES 
('Camila Owens', 'cowens'), 
('David Reynolds', 'dreynolds'), 
('Anne Garcia', 'agarcia'),
('Valerie Carter', 'vcarter'),  
('Andrew Stewart', 'astewart');

INSERT INTO blogs (title, author, url, likes, user_id)
VALUES
  ('Mastering TypeScript: From Beginner to Advanced', 'Sarah Jenkins', 'https://devinsights.com', 342, 1),
  ('10 CSS Tricks Every Front-End Developer Should Know', 'Alex Rivera', 'https://webcraft.io', 512, 1),
  ('Building Scalable Microservices with Go', 'Kenji Takahashi', 'https://techpulse.blog', 189, 2),
  ('A Complete Guide to Next.js App Router', 'Emily Watson', 'https://nextgenweb.dev', 423, 1),
  ('Understanding Database Indexing for Better Performance', 'Michael Chang', 'https://dbqueries.com', 275, 2),
  ('How to Secure Your REST APIs', 'Jessica Taylor', 'https://cyberguard.blog', 198, 2),
  ('Introduction to Docker and Containerization', 'David Miller', 'https://cloudbasics.net', 311, 2),
  ('Clean Code Practices in Python', 'Sophia Martinez', 'https://pythontips.dev', 645, 1);
