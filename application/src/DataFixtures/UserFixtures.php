<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use App\Entity\User;

class UserFixtures extends Fixture
{
    private $passwordEncoder;

    public function __construct(UserPasswordEncoderInterface $passwordEncoder)
    {
        $this->passwordEncoder = $passwordEncoder;
    }
    
    public function load(ObjectManager $manager)
    {
        // $product = new Product();
        // $manager->persist($product);
        $user = new User();
        $user->setLogin('dalis');
        $user->setEmail('salvadore@dali.com');
        $user->setFirstName('Salvadore');
        $user->setLastName('Dali');
        $user->setPassword($this->passwordEncoder->encodePassword(
            $user,
            'dalis'
        ));
        $user->setRoles(['ROLE_USER']);

        $manager->persist($user);

        $admin = new User();
        $admin->setLogin('superm');
        $admin->setEmail('super@man.com');
        $admin->setFirstName('Super');
        $admin->setLastName('Man');
        $admin->setPassword($this->passwordEncoder->encodePassword(
            $user,
            'superm'
        ));
        $admin->setRoles(['ROLE_ADMIN']);

        $manager->persist($admin);

        $manager->flush();
    }
}
