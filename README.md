# 100nock
# 100nock

# 課題00

PS C:\100nock> git --version

git version 2.51.0.windows.2

# 課題01

PS C:\100nock> echo "# 100nock" >> README.md 

PS C:\100nock> git init 

Reinitialized existing Git repository in C:/100nock/.git/

PS C:\100nock> git add README.md 

PS C:\100nock> git commit -m "最初のコミット" 

[main cf5b851] 最初のコミット


# 課題02

PS C:\100nock> ssh -T git@github.com
git@github.com: Permission denied (publickey).
上手くいっていないです。

# 課題03

PS C:\100nock> git remote -v
origin  https://github.com/miyu1027/100nock.git (fetch)
origin  https://github.com/miyu1027/100nock.git (push)

# 課題04

PS C:\100nock> git log

commit 689d164a5c20f2a9c27339aa6e6936d59aa0d1e2 (HEAD -> main, origin/main, origin/HEAD)
Author: miyu1027 <miyu151027@gmail.com>
Date:   Tue Oct 28 02:22:30 2025 +0900

    README.md

commit d2db609f0dcf8fe548b187fbbe95e4b8fbbccdcf
Author: miyu1027 <miyu151027@gmail.com>
Date:   Mon Oct 27 18:40:57 2025 +0900

    README.md

commit a7ff47d35fbe6eeeebc910c60cb0ead499111dab
Author: miyu1027 <miyu151027@gmail.com>
Date:   Mon Oct 27 18:22:33 2025 +0900

    README.md

commit cdfe70ad889a7b7553b24524f21c3b34db43b328
Author: miyu1027 <miyu151027@gmail.com>
Date:   Mon Oct 27 18:11:53 2025 +0900

    README.md

commit cf5b8519a258daa65a17cc47a5146960ac1f8805
Author: miyu1027 <miyu151027@gmail.com>
Date:   Thu Oct 23 14:52:24 2025 +0900

    最初のコミット

commit 5bbbb63e848b90f0bc9a86622c77f741016291c1
Author: miyu1027 <miyu151027@gmail.com>
Date:   Tue Oct 14 16:16:06 2025 +0900

    最初のコミット
(END)

# 課題05
.gitignoreファイル内容（参照：chatgpt）
#Python関連
__pycache__/
*.pyc

#VS Code設定
.vscode/

#OSの不要ファイル
.DS_Store
Thumbs.db

#環境変数ファイル
.env

#ビルド結果
build/
dist/



# 課題06
PS C:\100nock\100nock> git branch
* main
PS C:\100nock\100nock> git branch develop main        
PS C:\100nock\100nock> git checkout -b develop           
fatal: a branch named 'develop' already exists
developからコミット！

# 課題07
<img width="1919" height="935" alt="image" src="https://github.com/user-attachments/assets/7820f261-5332-4d3e-9d4d-3477f2b592eb" />




