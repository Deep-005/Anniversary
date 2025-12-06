# management/commands/import_messages.py
import os
import sys
from django.core.management.base import BaseCommand
from django.apps import apps

class Command(BaseCommand):
    help = 'Import guest messages from HTML content into the database'

    def handle(self, *args, **options):
        # Check if the GuestMessage model exists
        try:
            GuestMessage = apps.get_model('app', 'GuestMessage')
        except LookupError:
            self.stderr.write('Error: GuestMessage model not found. Please replace "app" with your actual app name.')
            return

        # Messages data from your HTML
        messages_data = [
            # Mom's message
            {
                'relation': 'mom',
                'sub_relation': 'bridal_side',
                'message': "My dearest children, watching your love story unfold has been the greatest joy of my life. From the first time you brought him home, I knew he was the one. The way you look at each other, support each other's dreams, and build a life filled with laughter - it's everything a mother prays for. Happy 5th anniversary! ❤️",
                'display_order': 1
            },
            
            # Dad's message
            {
                'relation': 'dad',
                'sub_relation': 'groom_side',
                'message': "Son, I've never seen you happier than when you're with her. The love and respect you show each other is remarkable. Remember to always communicate, keep dating each other, and never go to bed angry. Here's to many more years of happiness and growing old together!",
                'display_order': 2
            },
            
            # Mother-in-law's message
            {
                'relation': 'mother_in_law',
                'sub_relation': 'groom_side',
                'message': "Welcome to our family, dear! You've brought so much light and happiness not just to my son's life, but to our entire family. The way you care for each other, the traditions you're building together - it's beautiful to witness. May your love continue to grow stronger with each passing year.",
                'display_order': 3
            },
            
            # Father-in-law's message
            {
                'relation': 'father_in_law',
                'sub_relation': 'groom_side',
                'message': "To both of you - your marriage is built on a foundation of mutual respect and genuine love. The way you handle challenges together and celebrate each other's successes is inspiring. Keep nurturing that beautiful bond. We're so proud of the family you're building.",
                'display_order': 4
            },
            
            # Son's message
            {
                'relation': 'son',
                'sub_relation': 'both',
                'message': "I love when Mommy and Daddy dance in the kitchen! 🎵 Daddy makes Mommy laugh and Mommy gives the best hugs! I like when we have family movie night with popcorn! 🍿 You are the best mommy and daddy in the whole wide world! 🌍 I love you to the moon and back! 🌙✨",
                'display_order': 5
            },
            
            # Sarah & Mike's message (Friends)
            {
                'relation': 'friend',
                'sub_relation': 'both',
                'message': "We still remember your wedding day like it was yesterday! The way you looked at each other during your vows - pure magic. Five years later, that magic is still there, stronger than ever. Your love inspires everyone around you. Cheers to many more adventures together!",
                'display_order': 6
            },
            
            # Thompson Family message (Friends)
            {
                'relation': 'friend',
                'sub_relation': 'both',
                'message': "We've watched your love story from across the street - from newlyweds to proud parents. Your relationship is a beautiful example of partnership, patience, and pure joy. The laughter that comes from your home is contagious! Happy anniversary to an amazing couple!",
                'display_order': 7
            },
            
            # James's message (Friend)
            {
                'relation': 'friend',
                'sub_relation': 'groom_side',
                'message': "Brother, I knew she was the one when I saw how she made you a better version of yourself. Five years of marriage has only proven that right. You two complement each other perfectly. Here's to the love that only grows stronger! 🥂",
                'display_order': 8
            },
            
            # Family message
            {
                'relation': 'other',
                'sub_relation': 'both',
                'message': "Every day with you both is an adventure filled with love, laughter, and precious moments. The family you've built is your greatest legacy. Watching you parent together, love each other through challenges, and create a home filled with warmth - this is what true love looks like.",
                'display_order': 9
            }
        ]

        # Import messages
        imported_count = 0
        for message_data in messages_data:
            # Check if message already exists (based on content)
            existing_message = GuestMessage.objects.filter(
                message__icontains=message_data['message'][:50]  
            ).first()
            
            if not existing_message:
                GuestMessage.objects.create(**message_data)
                imported_count += 1
                self.stdout.write(
                    self.style.SUCCESS(f"✓ Imported message from {message_data['relation']}")
                )
            else:
                self.stdout.write(
                    self.style.WARNING(f"⏭️ Message from {message_data['relation']} already exists")
                )

        self.stdout.write(
            self.style.SUCCESS(f'\nSuccessfully imported {imported_count} new messages!')
        )