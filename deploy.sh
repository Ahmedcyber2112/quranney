#!/bin/bash
# نص سريع لنشر المشروع على Vercel

echo "🚀 بدء نشر مشروع QuranNey على Vercel..."

# فحص وجود Vercel CLI
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI غير مثبت"
    echo "📦 تثبيت Vercel CLI..."
    npm i -g vercel
fi

# فحص المشروع
echo "🔍 فحص المشروع..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ المشروع جاهز للنشر"
    
    echo "🌍 نشر المشروع..."
    vercel --prod
    
    echo "🎉 تم النشر بنجاح!"
    echo "📝 لا تنس إضافة متغيرات البيئة في لوحة تحكم Vercel"
else
    echo "❌ فشل في بناء المشروع"
    exit 1
fi